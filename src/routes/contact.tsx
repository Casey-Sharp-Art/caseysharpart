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
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget
              const formData = new FormData(form)
              fetch('/contact.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(
                  formData as unknown as Record<string, string>,
                ).toString(),
              }).then(() => setSubmitted(true))
            }}
            className="space-y-5"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1.5">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-400 focus:border-stone-400 outline-none transition-colors bg-white text-stone-900 placeholder:text-stone-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-400 focus:border-stone-400 outline-none transition-colors bg-white text-stone-900 placeholder:text-stone-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-400 focus:border-stone-400 outline-none transition-colors resize-none bg-white text-stone-900 placeholder:text-stone-400"
                placeholder="Tell me about your project or inquiry…"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-lg hover:bg-stone-700 transition-colors text-sm font-medium"
            >
              <Send size={15} />
              Send Message
            </button>
          </form>
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
