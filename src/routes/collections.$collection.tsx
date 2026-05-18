import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { allArtworks } from 'content-collections'

export const Route = createFileRoute('/collections/$collection')({
  component: CollectionPage,
})

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
    <article className="group">
      <div className={`relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-gradient-to-br ${gradient}`}>
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
      <h3 className="font-semibold text-stone-900">{piece.title}</h3>
      {piece.medium && <p className="text-sm text-stone-500 mt-0.5">{piece.medium}</p>}
      <p className="text-sm text-stone-400 mt-0.5">
        {piece.year}{piece.dimensions ? ` · ${piece.dimensions}` : ''}
      </p>
      <p className="text-sm text-stone-600 mt-2 leading-relaxed">{piece.description}</p>
    </article>
  )
}

function CollectionPage() {
  const { collection } = Route.useParams()
  const collectionName = decodeURIComponent(collection)
  const pieces = allArtworks.filter((p) => p.collection === collectionName)

  if (pieces.length === 0) {
    throw notFound()
  }

  const featured = pieces.filter((p) => p.featured)
  const rest = pieces.filter((p) => !p.featured)
  const sorted = [...featured, ...rest]

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-stone-400 hover:text-stone-700 transition-colors mb-10">
        ← All collections
      </Link>

      <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-3">{collectionName}</h1>
      <p className="text-stone-500 mb-14">{pieces.length} work{pieces.length !== 1 ? 's' : ''}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {sorted.map((piece) => (
          <ArtworkCard key={piece._meta.path} piece={piece} />
        ))}
      </div>
    </div>
  )
}
