"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Gallery items with actual images
const galleryItems = [
  { id: 1, title: "Depends on the Weather", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img1-4pwEPrP4Fye3XAxyoxJjVv24JVZByJ.png" },
  { id: 2, title: "TORQ App", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img2-XEXAcOwgoOU011eaAEhUNR7KVINZJW.png" },
  { id: 3, title: "Decision Point Weather", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img3.png-f94UCChvljDsn7wqU4U8eKszMeCv7S.jpeg" },
  { id: 4, title: "Decision Point Dashboard", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img4-beoRRr79sD8otTcEp00M7si3FbTURg.png" },
  { id: 5, title: "Weather Maps", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img5.png-9w5YiZYePYDry7G3vY18kd0ZYNjEtx.jpeg" },
  { id: 6, title: "TORQ Maps", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img6-ISyaTSyVyWfXdJbf3hGJV5uFJi37OR.png" },
  { id: 7, title: "Weather Expertise", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img7.png-BXX0y82zqCjZbQlldJmUqoY7lfnopZ.jpeg" },
  { id: 8, title: "Hospitality & Travel", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img8.png-PiENcA6omvHvpni4vCikmiRVy0cn0R.jpeg" },
  { id: 9, title: "Member Profile", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img9-AlljzVC40fWh2ch2dTM8HOdAiOt5kC.png" },
]

export default function GalleryPage() {
  const pathname = usePathname()

  return (
    <div className="min-h-screen text-white font-sans" style={{ backgroundColor: "#0a0a0a" }}>
      {/* Mobile Layout - Hidden on desktop */}
      <div className="md:hidden p-8">
        <div className="max-w-[400px]">
          {/* Open for work badge */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-white">Open for work</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/bar-chart.svg" alt="Views" width={16} height={16} />
              <span className="text-sm text-[#9e9e9e]">1.2k</span>
            </div>
          </div>

          {/* Profile Section */}
          <div className="mb-12">
            <div className="w-10 h-10 mb-6 rounded-lg overflow-hidden bg-white">
              <Image src="/pfp.png" alt="Eudis Alvarez" width={40} height={40} className="w-full h-full object-cover" />
            </div>

            <h1 className="mb-1 font-medium text-base">Eudis Alvarez</h1>
            <p className="text-[#9e9e9e] text-sm mb-8">UI / UX Designer · Lawyer</p>

            <div className="flex gap-4 mb-8">
              <Link href="/" className={`text-sm underline transition-colors ${pathname === "/" ? "text-white" : "text-[#9e9e9e] hover:text-white"}`}>
                Home
              </Link>
              <Link href="/gallery" className={`text-sm underline transition-colors ${pathname === "/gallery" ? "text-white" : "text-[#9e9e9e] hover:text-white"}`}>
                Portfolio
              </Link>
              <Link href="/projects" className={`text-sm underline transition-colors ${pathname === "/projects" ? "text-white" : "text-[#9e9e9e] hover:text-white"}`}>
                Projects
              </Link>
            </div>
          </div>

          {/* Gallery Grid - 1 column on mobile */}
          <div className="grid grid-cols-1 gap-6 mb-12">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="h-80 rounded-lg overflow-hidden bg-[#1a1a1a] border border-[#333333] hover:border-white transition-colors flex items-center justify-center p-4"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Connect Section */}
          <section>
            <h2 className="text-sm font-semibold mb-3">Connect</h2>
            <a
              href="mailto:eudis.vah@gmail.com"
              className="text-[#9e9e9e] text-sm underline hover:text-white transition-colors mb-6 block"
            >
              eudis.vah@gmail.com
            </a>

            <div className="flex gap-4 items-center">
              <a
                href="https://x.com/eudisalvz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#9e9e9e] hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <Image src="/icons/x.svg" alt="X" width={16} height={16} />
                <span className="text-sm">124</span>
              </a>
              <a
                href="https://www.tiktok.com/@eudisalvz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#9e9e9e] hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <Image src="/icons/tiktok.svg" alt="TikTok" width={16} height={16} />
                <span className="text-sm">1015</span>
              </a>
              <a
                href="https://www.linkedin.com/in/eudis/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#9e9e9e] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={16} height={16} />
                <span className="text-sm">19</span>
              </a>
              <a
                href="https://www.instagram.com/eudisalvz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#9e9e9e] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Image src="/icons/instagram.svg" alt="Instagram" width={16} height={16} />
                <span className="text-sm">828</span>
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Desktop Layout - Hidden on mobile */}
      <div className="hidden md:flex h-screen overflow-hidden">
        {/* Left Side - Image */}
        

        {/* Right Side - Gallery Grid */}
        <div className="px-12 flex overflow-hidden flex-col w-full py-12">
          {/* Header Navigation */}
          <div className="flex items-center justify-between flex-shrink-0 mb-8">
            <h1 className="text-xs font-normal tracking-wide">EUDIS ALVAREZ</h1>
            <nav className="flex gap-8">
              <Link href="/" className={`text-xs tracking-wide transition-colors ${pathname === "/" ? "text-white" : "text-[#9e9e9e] hover:text-white"}`}>
                HOME
              </Link>
              <Link href="/gallery" className={`text-xs tracking-wide transition-colors ${pathname === "/gallery" ? "text-white" : "text-[#9e9e9e] hover:text-white"}`}>
                GALLERY
              </Link>
              <Link href="/projects" className={`text-xs tracking-wide transition-colors ${pathname === "/projects" ? "text-white" : "text-[#9e9e9e] hover:text-white"}`}>
                PROJECTS
              </Link>
            </nav>
          </div>

          {/* Gallery Grid - 3 columns on desktop */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-3 gap-8">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="h-80 rounded-lg overflow-hidden bg-[#1a1a1a] border border-[#333333] hover:border-white transition-colors cursor-pointer flex items-center justify-center p-4 bg-background border-primary-foreground"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={500}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
