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
    <div className="min-h-screen text-white font-mono" style={{ backgroundColor: "#0a0a0a" }}>
      {/* Mobile Layout - Hidden on desktop */}
      <div className="md:hidden p-8">
        <div className="max-w-[400px]">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-xs font-normal mb-2 tracking-wide">EUDIS ALVAREZ</h1>
            <p className="text-[#9e9e9e] text-xs mb-6">UI/UX DESIGNER</p>

            <div className="flex gap-4 mb-6">
              <Link href="/gallery" className="text-[#9e9e9e] text-xs underline hover:text-white transition-colors">
                GALLERY
              </Link>
              <span className="text-[#9e9e9e] text-xs">—</span>
              <Link href="/projects" className="text-[#9e9e9e] text-xs underline hover:text-white transition-colors">
                PROJECTS
              </Link>
            </div>
          </div>

          {/* Gallery Grid - 1 column on mobile */}
          <div className="grid grid-cols-1 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="aspect-square rounded-lg overflow-hidden bg-[#1a1a1a] border border-[#333333]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
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
            <div className="grid grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="aspect-square rounded-lg overflow-hidden bg-[#1a1a1a] border border-[#333333] hover:border-white transition-colors cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
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
