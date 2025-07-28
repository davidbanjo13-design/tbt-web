'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/60 backdrop-blur-sm">
      <nav className="container mx-auto px-8 py-0.5">
        <div className="flex items-center justify-between min-h-[40px]">
          <a href="/" className="relative w-20 h-8 -my-3 -ml-4 block transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/new.logo.png"
              alt="WithTaliyahMarrett Logo"
              fill
              sizes="(max-width: 768px) 80px, 80px"
              className="object-contain"
              priority
              quality={100}
            />
          </a>
          <button 
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="relative group">
              <span className="text-primary hover:opacity-70 transition-opacity">Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/classes" className="relative group">
              <span className="text-primary hover:opacity-70 transition-opacity">1-1 Classes</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="https://app.acuityscheduling.com/schedule.php?owner=17109275"
              target="_blank"
              rel="noopener noreferrer" 
              className="relative group"
            >
              <span className="text-primary hover:opacity-70 transition-opacity">Booking</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/contact" className="relative group">
              <span className="text-primary hover:opacity-70 transition-opacity">Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden fixed inset-x-0 top-[40px] bg-secondary/95 backdrop-blur-sm transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          <div className="container mx-auto px-8 py-6 flex flex-col space-y-4">
            <a href="/" className="text-primary hover:opacity-70 transition-opacity py-2">
              Home
            </a>
            <a href="/classes" className="text-primary hover:opacity-70 transition-opacity py-2">
              1-1 Classes
            </a>
            <a 
              href="https://app.acuityscheduling.com/schedule.php?owner=17109275"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-primary hover:opacity-70 transition-opacity py-2"
            >
              Booking
            </a>
            <a href="/contact" className="text-primary hover:opacity-70 transition-opacity py-2">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
} 