import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/newfile2.jpg"
            alt="Professional hair styling"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-secondary">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Bringing Your Hair Vision to Life
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              With over 6 years of experience in creating stunning, personalized hairstyles
            </p>
            <Link
              href="https://app.acuityscheduling.com/schedule.php?owner=17109275"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary text-primary px-8 py-3 text-lg hover:bg-secondary/90 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/about.mee.jpg"
                alt="WithTaliyahMarrett - Professional Hair Stylist"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-6 text-secondary">
              <h2 className="text-3xl font-light">MEET YOUR STYLIST – TALIYAH</h2>
              <div className="w-20 h-0.5 bg-secondary"></div>
              <p className="text-lg leading-relaxed">
                Hey, I'm Taliyah the hands (and heart) behind WithTaliyahMarrett. With over 6 years of experience in the hair industry, I've built my craft around making people look and feel their absolute best. From sleek, polished styles to voluminous curls and beautifully layered cuts, I specialise in looks that are tailored to you.
              </p>
              <p className="text-lg leading-relaxed">
                But my passion doesn't stop at styling I'm also dedicated to teaching. Through The Marrett Academy, I offer hands-on training courses for aspiring stylists who want to elevate their skills and turn their passion into a thriving business. I've had the pleasure of teaching so many amazing students, and seeing them flourish after completing the course is one of the most rewarding parts of what I do. The testimonials speak for themselves!
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're here for a transformation, a touch-up, or to kick-start your own hair journey, I'm so glad you're here. Let's create something beautiful together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-light text-center mb-12">SHOP BEST SELLERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Product */}
          <div className="relative group">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/new.file.jpg"
                alt="Straight and sleek hairstyle"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                quality={100}
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0"></div>
            </div>
            <Link
              href="https://app.acuityscheduling.com/schedule.php?owner=17109275"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-secondary text-primary px-6 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Book Now
            </Link>
          </div>
          {/* Second Product */}
          <div className="relative group">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/curls.JPG"
                alt="Voluminous curls"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                quality={100}
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0"></div>
            </div>
            <Link
              href="https://app.acuityscheduling.com/schedule.php?owner=17109275"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-secondary text-primary px-6 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Book Now
            </Link>
          </div>
          {/* Third Product */}
          <div className="relative group">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/waves.JPG"
                alt="Natural waves"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                quality={100}
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0"></div>
            </div>
            <Link
              href="https://app.acuityscheduling.com/schedule.php?owner=17109275"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-secondary text-primary px-6 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Split Section */}
      <section className="bg-primary text-secondary py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="flex justify-center px-4">
              <div className="relative w-full aspect-square max-w-2xl">
                <Image
                  src="/images/newfile3.jpg"
                  alt="WithTaliyahMarrett"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                  quality={100}
                />
              </div>
            </div>

            {/* Call to Action Side */}
            <div className="text-center md:text-left space-y-6 px-4">
              <h2 className="text-4xl md:text-5xl font-light">FOLLOW US ON #IG</h2>
              <p className="text-lg opacity-90">
                SHARE YOUR PHOTOS AND TAG @TOUCHEDBYTILLS ON YOUR INSTA POST FOR A CHANCE TO BE FEATURED!
              </p>
              <div className="mt-8">
                <Link
                  href="https://app.acuityscheduling.com/schedule.php?owner=17109275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-secondary text-primary px-8 py-3 text-lg hover:bg-secondary/90 transition-colors transform hover:scale-105 duration-300"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Text Banner */}
      <section className="bg-primary text-secondary py-12 overflow-hidden">
        <div className="flex whitespace-nowrap animate-scrolling-text">
          <div className="flex items-center space-x-4 mx-4">
            <span className="text-3xl font-light">WITH TALIYAH MARRETT</span>
            <span className="text-3xl">★</span>
            <span className="text-3xl font-light">WITH TALIYAH MARRETT</span>
            <span className="text-3xl">★</span>
            <span className="text-3xl font-light">WITH TALIYAH MARRETT</span>
          </div>
          <div className="flex items-center space-x-4 mx-4">
            <span className="text-3xl font-light">WITH TALIYAH MARRETT</span>
            <span className="text-3xl">★</span>
            <span className="text-3xl font-light">WITH TALIYAH MARRETT</span>
            <span className="text-3xl">★</span>
            <span className="text-3xl font-light">WITH TALIYAH MARRETT</span>
          </div>
        </div>
      </section>
    </div>
  )
} 