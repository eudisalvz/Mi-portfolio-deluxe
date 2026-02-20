"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function PortfolioPage() {
  const pathname = usePathname()
  return (
    <div className="min-h-screen text-white font-mono" style={{ backgroundColor: "#0a0a0a" }}>
      {/* Mobile Layout - Hidden on desktop */}
      <div className="md:hidden p-8">
        <div className="max-w-[400px]">
          {/* Profile Section */}
          <div className="mb-12">
            <div className="w-9 h-9 mb-6 rounded-lg overflow-hidden bg-white">
              <Image src="/pfp.png" alt="Eudis Alvarez" width={36} height={36} className="w-full h-full object-cover" />
            </div>

            <h1 className="text-xs font-normal mb-2 tracking-wide">EUDIS ALVAREZ</h1>
            <p className="text-[#9e9e9e] text-xs mb-6">UI/UX DESIGNER</p>

            <div className="flex gap-4 mb-6">
              <a
                href="https://extended-branding-038566.framer.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9e9e9e] text-xs underline hover:text-white transition-colors"
              >
                GALLERY
              </a>
              <span className="text-[#9e9e9e] text-xs">—</span>
              <Link href="/projects" className="text-[#9e9e9e] text-xs underline hover:text-white transition-colors">
                PROJECTS
              </Link>
            </div>
          </div>

          {/* About Section */}
          <section className="mb-12">
            <h2 className="text-xs font-normal mb-4 tracking-wide">ABOUT</h2>
            <p className="text-[#9e9e9e] text-xs leading-relaxed">
              I'M A WEB AND MOBILE APPS DESIGNER. I CARE ABOUT MAKING DIGITAL EXPERIENCES EASY, USEFUL, AND NICE TO LOOK
              AT.
            </p>
          </section>

          {/* Interests Section */}
          <section className="mb-12">
            <h2 className="text-xs font-normal mb-4 tracking-wide">INTERESTS</h2>
            <p className="text-[#9e9e9e] text-xs">GYM, PHOTOGRAPHY, TECH AND GAMING.</p>
          </section>

          {/* Crafting Section */}
          <section className="mb-12">
            <h2 className="text-xs font-normal mb-4 tracking-wide">CRAFTING</h2>
            <div className="space-y-4">
              <a
                href="https://www.cardverse.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-[#9e9e9e] hover:text-white transition-colors group"
              >
                <span className="text-xs">CARDVERSE</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="https://www.alamoalgorithmics.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-[#9e9e9e] hover:text-white transition-colors group"
              >
                <span className="text-xs">ALAMO ALGORITHMICS</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
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
        <div className="w-2/5 flex items-center justify-center p-12 px-12">
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
        <div className="w-3/5 px-12 flex flex-col justify-between overflow-hidden py-12">
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

          {/* Content Sections */}
          <div className="flex-1 overflow-hidden flex text-left flex-col items-stretch justify-end my-0 gap-[30px]">
            {/* About Section */}
            <section className="flex-shrink-0">
              <h2 className="text-xs font-normal mb-2 tracking-wide">ABOUT</h2>
              <p className="text-[#9e9e9e] text-xs leading-tight max-w-lg">
                I'M A WEB AND MOBILE APPS DESIGNER. I CARE ABOUT MAKING DIGITAL EXPERIENCES EASY, USEFUL, AND NICE TO LOOK AT.
              </p>
            </section>

            {/* Interests Section */}
            <section className="flex-shrink-0">
              <h2 className="text-xs font-normal mb-2 tracking-wide">INTERESTS</h2>
              <p className="text-[#9e9e9e] text-xs">GYM, PHOTOGRAPHY, TECH AND GAMING.</p>
            </section>

            {/* Crafting Section */}
            <section className="flex-shrink-0">
              <h2 className="text-xs font-normal mb-2 tracking-wide">CRAFTING</h2>
              <div className="space-y-2">
                <a
                  href="https://www.cardverse.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[#9e9e9e] hover:text-white transition-colors group max-w-lg"
                >
                  <span className="text-xs">CARDVERSE</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="https://www.alamoalgorithmics.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[#9e9e9e] hover:text-white transition-colors group max-w-lg"
                >
                  <span className="text-xs">ALAMO ALGORITHMICS</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
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
  )
}
