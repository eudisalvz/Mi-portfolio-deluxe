import { X, Linkedin, Send, MessageCircle, ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-mono p-8 md:p-12 lg:p-16">
      <div className="max-w-2xl">
        {/* Profile Section */}
        <div className="mb-12">
          <div className="w-16 h-16 mb-6 rounded-lg overflow-hidden bg-white">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eudis_alvarez_pb-NDp7rOptytQzzSS4MOBResT0w1G0Ki.png"
              alt="Eudis Alvarez"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-xs font-normal mb-2 tracking-wide">EUDIS ALVAREZ</h1>
          <p className="text-[#9e9e9e] text-xs mb-6">VENEZUELA</p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-[26px] h-[26px] rounded-lg border border-[#9e9e9e] flex items-center justify-center hover:border-white transition-colors"
              aria-label="X (Twitter)"
            >
              <X className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-[26px] h-[26px] rounded-lg border border-[#9e9e9e] flex items-center justify-center hover:border-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-[26px] h-[26px] rounded-lg border border-[#9e9e9e] flex items-center justify-center hover:border-white transition-colors"
              aria-label="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-[26px] h-[26px] rounded-lg border border-[#9e9e9e] flex items-center justify-center hover:border-white transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
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
