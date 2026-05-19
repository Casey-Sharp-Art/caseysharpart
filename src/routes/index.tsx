import { createFileRoute, Link } from '@tanstack/react-router'
import { allArtworks } from 'content-collections'

export const Route = createFileRoute('/')({
  component: PortfolioHome,
})

// Gradient backgrounds used as placeholders when no image is provided
const collectionGradients: Record<string, string> = {
  'Oil Paintings': 'from-amber-100 to-orange-200',
  'Watercolors': 'from-sky-100 to-blue-200',
  'Digital Art': 'from-violet-100 to-purple-200',
  'Photography': 'from-stone-200 to-zinc-300',
}

const collectionTextColors: Record<string, string> = {
  'Oil Paintings': 'text-amber-900',
  'Watercolors': 'text-sky-900',
  'Digital Art': 'text-violet-900',
  'Photography': 'text-stone-700',
}

function ArtworkCard({ piece }: { piece: (typeof allArtworks)[number] }) {
  const gradient = collectionGradients[piece.collection] ?? 'from-stone-100 to-stone-200'
  const textColor = collectionTextColors[piece.collection] ?? 'text-stone-700'

  return (
    <article className="group cursor-default">
      <div className={`relative aspect-[4/3] rounded-lg overflow-hidden mb-3 bg-gradient-to-br ${gradient}`}>
        {piece.image ? (
          <img
            src={piece.image}
            alt={piece.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-end p-4">
            <span className={`text-xs font-medium uppercase tracking-widest ${textColor} opacity-60`}>
              {piece.medium ?? piece.collection}
            </span>
          </div>
        )}
      </div>
      <h3 className="font-medium text-stone-900 leading-snug">{piece.title}</h3>
      <p className="text-sm text-stone-500 mt-0.5">
        {piece.year}{piece.dimensions ? ` · ${piece.dimensions}` : ''}
      </p>
    </article>
  )
}

function CollectionSection({ name, pieces }: { name: string; pieces: typeof allArtworks }) {
  const featured = pieces.filter((p) => p.featured)
  const rest = pieces.filter((p) => !p.featured)
  const displayed = [...featured, ...rest].slice(0, 4)

  return (
    <section className="mb-20">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="text-2xl font-semibold text-stone-900">{name}</h2>
        <Link
          to="/collections/$collection"
          params={{ collection: encodeURIComponent(name) }}
          className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
        >
          View all ({pieces.length}) →
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {displayed.map((piece) => (
          <ArtworkCard key={piece._meta.path} piece={piece} />
        ))}
      </div>
    </section>
  )
}

function PortfolioHome() {
  const collections = allArtworks.reduce<Record<string, typeof allArtworks>>(
    (acc, piece) => {
      if (!acc[piece.collection]) acc[piece.collection] = []
      acc[piece.collection].push(piece)
      return acc
    },
    {},
  )

  const collectionNames = Object.keys(collections)

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="mb-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-stone-900 leading-none mb-6">
          Casey Sharp
        </h1>
        <p className="text-xl text-stone-500 max-w-xl leading-relaxed">
          Casey Sharp is a visual artist working in painting and mixed media. Living with neurodivergence and disability, they approach image-making as a way of exploring memory, perception, and emotional change. Their work often takes on a surreal, atmospheric quality, using drips, layering, and soft distortion to reflect internal experience and the shifting way meaning is formed and lost.
        </p>
      </div>

      {/* Collections */}
      {collectionNames.map((name) => (
        <CollectionSection key={name} name={name} pieces={collections[name]} />
      ))}
    </div>
  )
}
