import Image from 'next/image'
import Link from 'next/link'
import course1 from '../../../public/images/course.1.jpg'
import course2 from '../../../public/images/course.2.jpg'
import course3 from '../../../public/images/course.3.jpg'
import heroImage from '../../../public/images/mastercraft.jpg'

export default function Classes() {
  return (
    <div className="animate-fade-in">
      {/* Hero Split Section */}
      <section className="relative min-h-[80vh] grid md:grid-cols-2">
        {/* Image Side */}
        <div className="relative h-[50vh] md:h-full">
          <Image
            src={heroImage}
            alt="Hair styling expertise"
            width={1200}
            height={1200}
            className="object-cover w-full h-full"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Text Side */}
        <div className="flex items-center justify-center bg-primary text-secondary p-8 md:p-16">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
              MASTER YOUR CRAFT
            </h1>
            <div className="w-20 h-0.5 bg-secondary mb-8"></div>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Dedication unlocks unparalleled expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-20 container mx-auto px-4">
        {/* SEW-IN COURSE */}
        <div className="mb-32 group border-4 border-dotted border-primary/30 p-12 hover:border-primary/50 transition-colors duration-500 bg-primary text-secondary">
          <div className="grid md:grid-cols-4 gap-8 items-start">
            {/* Column 1: Image */}
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={course1}
                alt="Sew-in Course"
                width={600}
                height={800}
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                quality={85}
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0"></div>
            </div>

            {/* Column 2: Introduction */}
            <div>
              <h2 className="text-4xl font-light mb-6 transform transition-transform duration-500 group-hover:-translate-y-1">SEW IN HAIR COURSE</h2>
              <div className="w-20 h-0.5 bg-secondary mb-8 transform transition-all duration-500 group-hover:w-32"></div>
              <p className="text-base mb-4 leading-relaxed">
                Are you ready to master the art of weave sew-ins and become a highly skilled hairstylist? Look no further than our transformational Beginner Weave Sew-In Course.
              </p>
              <p className="text-base mb-4 leading-relaxed">
                This 2 day training program is designed to equip you with the skills and knowledge to excel in creating flawless sew-ins and boosting your hairstyling career.
              </p>
              <div className="bg-secondary text-primary p-4 mt-4">
                <h3 className="text-lg mb-2">Course Schedule</h3>
                <p className="mb-1">Day 1: 10:00 - 18:00</p>
                <p className="mb-2">Day 2: 11:00 - 16:00</p>
                <p className="text-xs opacity-80">All purchases are final and non-refundable.</p>
              </div>
            </div>

            {/* Column 3: What You'll Learn */}
            <div className="transform transition-transform duration-500 hover:-translate-y-1">
              <h3 className="text-2xl font-light mb-4">What You'll Learn:</h3>
              <ul className="list-none space-y-2">
                {[
                  '1 Sew-in style: classic middle part or side part',
                  '1 Finishing styles',
                  'Extreme heavy layers',
                  'Subtle layers',
                  'Voluminous curls',
                  'Secrets to extending your install for 1+ month',
                  'Flat foundation braid method',
                  'Styling baby hairs',
                  'Invisible stitch technique',
                  'Blending leave-out hair',
                  'Sew-in upkeep and care tips'
                ].map((item, index) => (
                  <li key={index} className="flex items-center group/item text-sm">
                    <span className="mr-2 transition-transform duration-300 group-hover/item:translate-x-1">•</span>
                    <span className="opacity-90 group-hover/item:opacity-100 transition-opacity">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: What's Included */}
            <div>
              <div className="transform transition-transform duration-500 hover:-translate-y-1">
                <h3 className="text-2xl font-light mb-4">What's Included:</h3>
                <ul className="list-none space-y-2 mb-8">
                  {[
                    'Expert Instruction',
                    'Hands-on Practice',
                    'Day 1: Training on mannequin',
                    'Flexible Learning',
                    'Real-World Application',
                    'Pro Handbook',
                    '3 Double Drawn Hair Extensions',
                    'Refreshments',
                    'Goodie Bag',
                    'Hair Tools & Media Lists',
                    'Industry Insights'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group/item text-sm">
                      <span className="mr-2 mt-1 transition-transform duration-300 group-hover/item:translate-x-1">•</span>
                      <span className="opacity-90 group-hover/item:opacity-100 transition-opacity">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://stan.store/TheMarrettAcademy/p/master-the-art-of-sew-ins-on-this-2-day-course-er67avx8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-secondary text-primary px-8 py-3 text-center hover:bg-secondary/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CORNROW COURSE */}
        <div className="mb-32 group border-4 border-dotted border-primary/30 p-12 hover:border-primary/50 transition-colors duration-500 bg-primary text-secondary">
          <div className="grid md:grid-cols-4 gap-8 items-start">
            {/* Column 1: Image */}
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={course3}
                alt="Cornrow Course"
                width={600}
                height={800}
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                quality={85}
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0"></div>
            </div>

            {/* Column 2: Introduction */}
            <div>
              <h2 className="text-4xl font-light mb-6 transform transition-transform duration-500 group-hover:-translate-y-1">CORNROW HAIR COURSE</h2>
              <div className="w-20 h-0.5 bg-secondary mb-8 transform transition-all duration-500 group-hover:w-32"></div>
              <p className="text-base mb-4 leading-relaxed">
                Are you ready to master the fundamentals of cornrowing and braiding to kick-start your hairstyling journey? Join our one-day intensive course designed specifically for beginners.
              </p>
              <p className="text-base mb-4 leading-relaxed">
                Build a strong foundation in braiding techniques with hands-on practice and expert guidance.
              </p>
              <div className="bg-secondary text-primary p-4 mt-4">
                <h3 className="text-lg mb-2">Course Schedule</h3>
                <p className="mb-2">11:00 - 17:00</p>
                <p className="text-xs opacity-80">All purchases are final and non-refundable.</p>
              </div>
            </div>

            {/* Column 3: What You'll Learn */}
            <div className="transform transition-transform duration-500 hover:-translate-y-1">
              <h3 className="text-2xl font-light mb-4">What You'll Learn:</h3>
              <ul className="list-none space-y-2">
                {[
                  'Proper hand placement and grip',
                  'Creating neat, consistent cornrows',
                  'Braid patterns for various styles',
                  'Scalp prep and sectioning',
                  'Tips for client comfort',
                  'Troubleshooting challenges'
                ].map((item, index) => (
                  <li key={index} className="flex items-center group/item text-sm">
                    <span className="mr-2 transition-transform duration-300 group-hover/item:translate-x-1">•</span>
                    <span className="opacity-90 group-hover/item:opacity-100 transition-opacity">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: What's Included */}
            <div>
              <div className="transform transition-transform duration-500 hover:-translate-y-1">
                <h3 className="text-2xl font-light mb-4">What's Included:</h3>
                <ul className="list-none space-y-2 mb-8">
                  {[
                    'Expert Instruction',
                    'Hands-On Practice',
                    'Training mannequin',
                    'Pro Starter Kit',
                    'Refreshments',
                    'Optional Zoom follow-up',
                    'Certificate of Completion'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group/item text-sm">
                      <span className="mr-2 mt-1 transition-transform duration-300 group-hover/item:translate-x-1">•</span>
                      <span className="opacity-90 group-hover/item:opacity-100 transition-opacity">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://stan.store/TheMarrettAcademy/p/join-me-at-the-webinar-xnhupg6v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-secondary text-primary px-8 py-3 text-center hover:bg-secondary/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* REFRESHER COURSE */}
        <div className="group border-4 border-dotted border-primary/30 p-12 hover:border-primary/50 transition-colors duration-500 bg-primary text-secondary">
          <div className="grid md:grid-cols-4 gap-8 items-start">
            {/* Column 1: Image */}
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={course2}
                alt="Refresher Course"
                width={600}
                height={800}
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                quality={85}
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0"></div>
            </div>

            {/* Column 2: Introduction */}
            <div>
              <h2 className="text-4xl font-light mb-6 transform transition-transform duration-500 group-hover:-translate-y-1">REFRESHER HAIR COURSE</h2>
              <div className="w-20 h-0.5 bg-secondary mb-8 transform transition-all duration-500 group-hover:w-32"></div>
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="block uppercase mb-1 opacity-60">Location</span>
                  <span className="text-lg">NW10 Area</span>
                </div>
                <div>
                  <span className="block uppercase mb-1 opacity-60">Course Fee</span>
                  <span className="text-lg">£300</span>
                </div>
              </div>
              <p className="text-base mb-4 leading-relaxed">
                Are you a seasoned stylist looking to master one specific technique? This 1-Day Skill-Focused Refresher Course is designed exclusively for professionals.
              </p>
              <div className="bg-secondary text-primary p-4 mt-4">
                <h3 className="text-lg mb-2">Course Schedule</h3>
                <p className="mb-2">11:00 - 17:00</p>
                <p className="text-xs opacity-80">All purchases are final and non-refundable.</p>
              </div>
            </div>

            {/* Column 3: What You'll Learn */}
            <div className="transform transition-transform duration-500 hover:-translate-y-1">
              <h3 className="text-2xl font-light mb-4">Focus Areas:</h3>
              <ul className="list-none space-y-2">
                {[
                  'Perfecting leave-out techniques',
                  'Achieving a flatter finish',
                  'Advanced braid patterns',
                  'Difficult client hair types',
                  'Closure/frontal placement',
                  'Managing bulk or tension'
                ].map((item, index) => (
                  <li key={index} className="flex items-center group/item text-sm">
                    <span className="mr-2 transition-transform duration-300 group-hover/item:translate-x-1">•</span>
                    <span className="opacity-90 group-hover/item:opacity-100 transition-opacity">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: What's Included */}
            <div>
              <div className="transform transition-transform duration-500 hover:-translate-y-1">
                <h3 className="text-2xl font-light mb-4">What You'll Get:</h3>
                <ul className="list-none space-y-2 mb-8">
                  {[
                    'Targeted Coaching',
                    'Hands-On Practice',
                    'Troubleshooting Support',
                    'Pro Handbook',
                    'Optional Zoom follow-up',
                    'Certificate of Completion'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group/item text-sm">
                      <span className="mr-2 mt-1 transition-transform duration-300 group-hover/item:translate-x-1">•</span>
                      <span className="opacity-90 group-hover/item:opacity-100 transition-opacity">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://stan.store/TheMarrettAcademy/p/refresh-your-skills-of-sew-ins-on-this-course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-secondary text-primary px-8 py-3 text-center hover:bg-secondary/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 