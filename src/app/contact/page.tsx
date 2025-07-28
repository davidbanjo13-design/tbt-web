'use client'

import { useState, FormEvent } from 'react'
import ContactInfo from '@/components/ContactInfo'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const form = e.currentTarget
      const response = await fetch('https://formspree.io/f/mldlnlpa', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSubmitStatus('success')
        form.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-primary text-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light mb-8 text-center">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-light mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <ContactInfo type="email" />
                <ContactInfo type="phone" />
                <div className="mt-8">
                  <p className="text-sm opacity-80">
                    For booking inquiries, please use the booking link in the navigation menu.
                    For all other inquiries, please fill out the form and we'll get back to you
                    as soon as possible.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="_gotcha" className="hidden" />
                
                <div>
                  <label htmlFor="name" className="block mb-2 font-light">
                    Full Name <span className="text-secondary opacity-60">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-secondary bg-transparent text-secondary rounded focus:outline-none focus:border-secondary disabled:opacity-50"
                    required
                    disabled={isSubmitting}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-light">
                    Email Address <span className="text-secondary opacity-60">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-secondary bg-transparent text-secondary rounded focus:outline-none focus:border-secondary disabled:opacity-50"
                    required
                    disabled={isSubmitting}
                    placeholder="Enter your email address"
                  />
                  <p className="mt-1 text-xs opacity-60">
                    We'll never share your email with anyone else.
                  </p>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-light">
                    Message <span className="text-secondary opacity-60">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-secondary bg-transparent text-secondary rounded focus:outline-none focus:border-secondary disabled:opacity-50"
                    required
                    disabled={isSubmitting}
                    placeholder="Enter your message here..."
                  ></textarea>
                  <p className="mt-1 text-xs opacity-60">
                    Please provide as much detail as possible about your inquiry.
                  </p>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary text-primary px-6 py-3 rounded hover:bg-opacity-90 transition-colors font-light disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <p className="mt-4 text-sm text-green-400 text-center">
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  )}
                  
                  {submitStatus === 'error' && (
                    <p className="mt-4 text-sm text-red-400 text-center">
                      There was an error sending your message. Please try again.
                    </p>
                  )}

                  <p className="mt-4 text-xs text-center opacity-60">
                    * Required fields
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 