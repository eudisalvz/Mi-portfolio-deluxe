"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const projects = [
  { name: "CARDVERSE", year: "2025" },
  { name: "ALAMO ALGORITHMICS", year: "2025" },
  { name: "DEPENDS ON THE WEATHER", year: "2025" },
  { name: "MASTER PERFUMES", year: "2025" },
  { name: "DECISION POINT WEATHER", year: "2025" },
  { name: "TORQ APP", year: "2024" },
  { name: "MIGHTY SHIELD INSURANCE", year: "2024" },
]

export default function ProjectsPage() {
  const pathname = usePathname()

  return (
    <div className="min-h-screen text-white font-mono" style={{ backgroundColor: "#0a0a0a" }}>
      {/* Mobile Layout - Hidden on desktop */}
      <div className="md:hidden p-8">
        <div className="max-w-[400px]">
          {/* Back Button */}
          <Link href="/" className="inline-flex mb-12 text-[#9e9e9e] hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>

          {/* Projects Section */}
          <section className="mb-12">
            <h1 className="text-xs font-normal mb-4 tracking-wide">PROJECTS</h1>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.name} className="flex items-center justify-between">
                  <span className="text-[#9e9e9e] text-xs">{project.name}</span>
                  <div className="flex-1 mx-3 border-b border-dashed border-[#9e9e9e]"></div>
                  <span className="text-[#9e9e9e] text-xs">{project.year}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Connect Section */}
          <section>
            <h2 className="text-xs font-normal mb-4 tracking-wide">CONNECT</h2>
            <a
              href="mailto:eudis.vah@gmail.com"
              className="text-[#9e9e9e] text-xs underline hover:text-white transition-colors mb-6 block"
            >
              EUDIS.VAH@GMAIL.COM
            </a>

            <div className="flex gap-4">
              <a
                href="https://x.com/eudisalvz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[26px] h-[26px] rounded-lg border border-[#9e9e9e] flex items-center justify-center hover:border-white transition-colors"
                aria-label="X (Twitter)"
              >
                <Image src="/icons/x.svg" alt="X" width={16} height={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/eudis/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[26px] h-[26px] rounded-lg border border-[#9e9e9e] flex items-center justify-center hover:border-white transition-colors"
                aria-label="LinkedIn"
              >
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={16} height={16} />
              </a>
              <a
                href="https://t.me/eudisalvz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[26px] h-[26px] rounded-lg border border-[#9e9e9e] flex items-center justify-center hover:border-white transition-colors"
                aria-label="Telegram"
              >
                <Image src="/icons/telegram.svg" alt="Telegram" width={16} height={16} />
              </a>
              <a
                href="https://wa.me/message/52SBST7NINAPI1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[26px] h-[26px] rounded-lg border border-[#9e9e9e] flex items-center justify-center hover:border-white transition-colors"
                aria-label="WhatsApp"
              >
                <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={16} height={16} />
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Desktop Layout - Hidden on mobile */}
      <div className="hidden md:flex h-screen overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-2/5 flex items-center justify-center p-12">
          <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-400">
            <Image 
              src="/pfp.png" 
              alt="Eudis Alvarez" 
              width={600} 
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-3/5 px-12 flex flex-col justify-end overflow-hidden py-12">
          {/* Header Navigation */}
          <div className="flex items-center justify-between flex-shrink-0">
            <h1 className="text-xs font-normal tracking-wide">EUDIS ALVAREZ</h1>
            <nav className="flex gap-8">
              <Link href="/" className={`text-xs tracking-wide transition-colors ${pathname === "/" ? "text-white" : "text-[#9e9e9e] hover:text-white"}`}>
                HOME
              </Link>
              <a 
                href="https://extended-branding-038566.framer.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`text-xs tracking-wide transition-colors ${pathname === "/gallery" ? "text-white" : "text-[#9e9e9e] hover:text-white"}`}
              >
                GALLERY
              </a>
              <Link href="/projects" className={`text-xs tracking-wide transition-colors ${pathname === "/projects" ? "text-white" : "text-[#9e9e9e] hover:text-white"}`}>
                PROJECTS
              </Link>
            </nav>
          </div>

          {/* Content Sections - Grouped at bottom */}
          <div className="flex-1 flex flex-col justify-end">
            <div className="text-left flex-shrink-0">
              {/* Projects Section */}
              <section className="mb-8">
                <h2 className="text-xs font-normal mb-2 tracking-wide">PROJECTS</h2>
                <div className="space-y-2">
                  {projects.map((project) => (
                    <div key={project.name} className="flex items-center justify-between max-w-lg">
                      <span className="text-[#9e9e9e] text-xs">{project.name}</span>
                      <div className="flex-1 mx-3 border-b border-dashed border-[#9e9e9e]"></div>
                      <span className="text-[#9e9e9e] text-xs whitespace-nowrap">{project.year}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Connect Section */}
              <section className="flex-shrink-0">
              <h2 className="text-xs font-normal mb-2 tracking-wide">CONNECT</h2>
              <a
                href="mailto:eudis.vah@gmail.com"
                className="text-[#9e9e9e] text-xs underline hover:text-white transition-colors mb-3 block"
              >
                EUDIS.VAH@GMAIL.COM
              </a>

              <div className="flex gap-3">
                <a
                  href="https://x.com/eudisalvz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[26px] h-[26px] rounded-lg border border-[#9e9e9e] flex items-center justify-center hover:border-white transition-colors"
                  aria-label="X (Twitter)"
                >
                  <Image src="/icons/x.svg" alt="X" width={16} height={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/eudis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[26px] h-[26px] rounded-lg border border-[#9e9e9e] flex items-center justify-center hover:border-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Image src="/icons/linkedin.svg" alt="LinkedIn" width={16} height={16} />
                </a>
                <a
                  href="https://t.me/eudisalvz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[26px] h-[26px] rounded-lg border border-[#9e9e9e] flex items-center justify-center hover:border-white transition-colors"
                  aria-label="Telegram"
                >
                  <Image src="/icons/telegram.svg" alt="Telegram" width={16} height={16} />
                </a>
                <a
                  href="https://wa.me/message/52SBST7NINAPI1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[26px] h-[26px] rounded-lg border border-[#9e9e9e] flex items-center justify-center hover:border-white transition-colors"
                  aria-label="WhatsApp"
                >
                  <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={16} height={16} />
                </a>
              </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
