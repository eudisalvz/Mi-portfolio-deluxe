import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen text-white font-mono p-8 md:p-12 lg:p-16" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="max-w-[400px]">
        {/* Profile Section */}
        <div className="mb-12">
          <div className="w-9 h-9 mb-6 rounded-lg overflow-hidden bg-white">
            <Image src="/pfp.png" alt="Eudis Alvarez" width={36} height={36} className="w-full h-full object-cover" />
          </div>

          <h1 className="text-xs font-normal mb-2 tracking-wide">EUDIS ALVAREZ</h1>
          <p className="text-[#9e9e9e] text-xs mb-6">VENEZUELA</p>

          {/* Social Icons */}
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
          <p className="text-[#9e9e9e] text-xs">GYM, TECH, AND GAMING.</p>
        </section>

        {/* Crafting Section */}
        <section className="mb-12">
          <h2 className="text-xs font-normal mb-6 tracking-wide">CRAFTING</h2>
          <div className="space-y-4">
            <a
              href="#"
              className="flex items-center justify-between text-[#9e9e9e] hover:text-white transition-colors group"
            >
              <span className="text-xs">CARDVERSE</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#"
              className="flex items-center justify-between text-[#9e9e9e] hover:text-white transition-colors group"
            >
              <span className="text-xs">ALAMO ALGORITHMICS</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#"
              className="flex items-center justify-between text-[#9e9e9e] hover:text-white transition-colors group"
            >
              <span className="text-xs">DEPENDS ON THE WEATHER</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#"
              className="flex items-center justify-between text-[#9e9e9e] hover:text-white transition-colors group"
            >
              <span className="text-xs">DECISION POINT WEATHER</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </section>

        {/* Connect Section */}
        <section>
          <h2 className="text-xs font-normal mb-4 tracking-wide">CONNECT</h2>
          <a
            href="mailto:eudis.vah@gmail.com"
            className="text-[#9e9e9e] text-xs underline hover:text-white transition-colors"
          >
            EUDIS.VAH@GMAIL.COM
          </a>
        </section>
      </div>
    </div>
  )
}
