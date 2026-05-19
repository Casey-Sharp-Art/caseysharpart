import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Instagram, Twitter, ExternalLink, Send, CheckCircle } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-stone-900 mb-2">Message Sent</h2>
          <p className="text-stone-500 mb-6">
            Thanks for reaching out. I'll get back to you soon.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-700 transition-colors text-sm"
          >
            Send another message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Get in Touch</h1>
      <p className="text-xl text-stone-500 mb-16 max-w-lg leading-relaxed">
        For commissions, print inquiries, collaborations, or just to say hello.
      </p>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Contact form */}
        <div>
          <h2 className="text-lg font-semibold text-stone-900 mb-6">Send a message</h2>
         <div className="space-y-4">
  <h2 className="text-lg font-semibold text-stone-900 mb-6">
    Send a message
  </h2>

  <p className="text-stone-500">
    For commissions, collaborations, or inquiries, email me directly.
  </p>

  <a
    href="mailto:you@yourdomain.com"
    className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-lg hover:bg-stone-700 transition-colors text-sm font-medium"
  >
    <Send size={15} />
    Email Me
  </a>
</div>
        </div>

        {/* Social links */}
        <div>
          <h2 className="text-lg font-semibold text-stone-900 mb-6">Find me online</h2>
          <div className="space-y-4">
            <SocialLink
              href="https://www.instagram.com/"
              icon={<Instagram size={20} />}
              label="Instagram"
              handle="@yourhandle"
              description="Process shots, new work, and stories"
            />
            <SocialLink
              href="https://x.com/"
              icon={<Twitter size={20} />}
              label="X / Twitter"
              handle="@yourhandle"
              description="Thoughts on art, technique, and the creative life"
            />
            <SocialLink
              href="https://cara.app/"
              icon={<ExternalLink size={20} />}
              label="Cara"
              handle="@yourhandle"
              description="AI-free portfolio and social for artists"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function SocialLink({
  href,
  icon,
  label,
  handle,
  description,
}: {
  href: string
  icon: React.ReactNode
  label: string
  handle: string
  description: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-4 p-4 rounded-xl border border-stone-200 hover:border-stone-400 hover:bg-white transition-all group"
    >
      <div className="text-stone-500 group-hover:text-stone-900 transition-colors mt-0.5">
        {icon}
      </div>
      <div>
        <div className="flex items-baseline gap-2">
          <span className="font-medium text-stone-900">{label}</span>
          <span className="text-sm text-stone-400">{handle}</span>
        </div>
        <p className="text-sm text-stone-500 mt-0.5">{description}</p>
      </div>
    </a>
  )
}
