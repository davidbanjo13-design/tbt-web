import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import ContactInfo from '@/components/ContactInfo'
import { CONTACT_INFO } from '@/config/contact'
import './globals.css'

const jost = Jost({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'WithTaliyahMarrett | Professional Hair Styling',
  description: 'Premium hair styling services specializing in sleek styles, voluminous curls, and beautifully layered cuts with 6+ years of experience.',
  keywords: 'hair salon, hair styling, professional hairdresser, hair cuts, curls, layered cuts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jost.variable} scroll-smooth`}>
      <body className="min-h-screen bg-secondary text-primary font-jost">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-primary text-secondary py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl mb-4">WithTaliyahMarrett</h3>
                <p className="text-sm opacity-80">
                  Premium hair styling services with over 6 years of experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl mb-4">Contact</h3>
                <p className="text-sm opacity-80">
                  Email: <ContactInfo type="email" showLabel={false} /><br />
                  Phone: <ContactInfo type="phone" showLabel={false} />
                </p>
              </div>
              <div>
                <h3 className="text-xl mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {/* Instagram Icon */}
                  <a 
                    href={CONTACT_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                    aria-label="Follow WithTaliyahMarrett on Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>

                  {/* TikTok Icon */}
                  <a 
                    href={CONTACT_INFO.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                    aria-label="Follow WithTaliyahMarrett on TikTok"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 00-1-.08A6.34 6.34 0 003 15.66a6.34 6.34 0 0010.86 4.44l.13-.19v-8.88a8.16 8.16 0 005.69 2.32l.01-3.91a4.83 4.83 0 01-3.77-2.75z"/>
                    </svg>
                  </a>

                  {/* Snapchat Icon */}
                  <a 
                    href={CONTACT_INFO.snapchat}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity flex items-center"
                    aria-label="Follow WithTaliyahMarrett on Snapchat"
                  >
                    <div className="relative w-8 h-8 -mt-1">
                      <Image
                        src="/images/snapchat.png"
                        alt="Snapchat"
                        fill
                        sizes="(max-width: 768px) 32px, 32px"
                        className="object-contain mix-blend-screen invert"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-secondary/20 text-center">
              <p className="text-sm opacity-60">Website built by DBinnovates</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 