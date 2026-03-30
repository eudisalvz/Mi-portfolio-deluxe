"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const myProjects = [
  { name: "Cardverse", type: "App", year: "Q2 2026" },
  { name: "Alamo Algorithmics", type: "Dev-Des Agency", year: "2024" },
]

const clientProjects = [
  { name: "Depends On The Weather", type: "App", year: "2025" },
  { name: "Master Perfumes", type: "Ecommerce", year: "2025" },
  { name: "Decision Point Weather", type: "SaaS", year: "2025" },
  { name: "Torq app", type: "App", year: "2024" },
  { name: "Mighty shield insurance", type: "Web page", year: "2024" },
]

export default function ProjectsPage() {
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

            <h1 className="mb-1 text-base font-medium">Eudis Alvarez</h1>
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

          {/* My projects Section */}
          <section className="mb-12">
            <h2 className="text-sm mb-4 font-normal">My projects</h2>
            <div className="space-y-4">
              {myProjects.map((project) => (
                <div key={project.name} className="flex items-center justify-between gap-3 group">
                  <span className="text-sm text-muted-foreground">{project.name}</span>
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-[#9e9e9e] text-sm border rounded-[5px] py-0 px-1.5 border-0 bg-primary-foreground">{project.type}</span>
                    <span className="text-[#9e9e9e] text-sm border rounded-[5px] py-0 px-1.5 border-0 bg-primary-foreground">{project.year}</span>
                  </div>
                  <svg className="w-4 h-4 text-[#9e9e9e] group-hover:text-white transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>
          </section>

          {/* Projects for clients Section */}
          <section className="mb-12">
            <h2 className="text-sm mb-4 font-normal">Projects for clients</h2>
            <div className="space-y-4">
              {clientProjects.map((project) => (
                <div key={project.name} className="flex items-center justify-between gap-3 group">
                  <span className="text-sm text-muted-foreground">{project.name}</span>
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-[#9e9e9e] text-sm border rounded-[5px] py-0 px-1.5 border-0 bg-primary-foreground">{project.type}</span>
                    <span className="text-[#9e9e9e] text-sm rounded-[5px] py-0 px-1.5 border-0 bg-primary-foreground">{project.year}</span>
                  </div>
                  <svg className="w-4 h-4 text-[#9e9e9e] group-hover:text-white transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>
          </section>

          {/* Connect Section */}
          <section>
            <h2 className="text-sm mb-3 font-normal">Connect</h2>
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
      <div className="hidden md:flex h-screen overflow-hidden font-sans">
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
          <div className="flex items-center justify-between flex-shrink-0 mb-12">
            <div>
              <h1 className="font-semibold text-base">Eudis Alvarez</h1>
              <p className="text-[#9e9e9e] text-sm mt-1">UI / UX Designer · Lawyer</p>
            </div>
            <nav className="flex gap-8">
              <Link href="/" className={`text-sm transition-colors ${pathname === "/" ? "text-white" : "text-[#9e9e9e] hover:text-white"}`}>
                Home
              </Link>
              <Link href="/gallery" className={`text-sm transition-colors ${pathname === "/gallery" ? "text-white" : "text-[#9e9e9e] hover:text-white"}`}>
                Portfolio
              </Link>
              <Link href="/projects" className={`text-sm transition-colors ${pathname === "/projects" ? "text-white" : "text-[#9e9e9e] hover:text-white"}`}>
                Projects
              </Link>
            </nav>
          </div>

          {/* Content Sections - Grouped at bottom */}
          <div className="flex-1 flex flex-col justify-end">
            <div className="text-left flex-shrink-0">
              {/* Projects Section */}
              <section className="mb-8">
                <h2 className="text-sm font-semibold mb-3">My projects</h2>
                <div className="space-y-3">
                  {myProjects.map((project) => (
                    <div key={project.name} className="flex items-center justify-between max-w-lg gap-3 group">
                      <span className="text-white text-sm">{project.name}</span>
                      <div className="flex items-center gap-3 flex-1">
                        <span className="text-[#9e9e9e] text-sm border rounded-[5px] border-0 bg-primary-foreground px-1.5 py-0">{project.type}</span>
                        <span className="text-[#9e9e9e] text-sm border rounded-[5px] border-0 bg-primary-foreground px-1.5 py-0">{project.year}</span>
                      </div>
                      <svg className="w-4 h-4 text-[#9e9e9e] group-hover:text-white transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  ))}
                </div>
              </section>

              {/* Projects for clients Section */}
              <section className="mb-8">
                <h2 className="text-sm font-semibold mb-3">Projects for clients</h2>
                <div className="space-y-3">
                  {clientProjects.map((project) => (
                    <div key={project.name} className="flex items-center justify-between max-w-lg gap-3 group">
                      <span className="text-white text-sm">{project.name}</span>
                      <div className="flex items-center gap-3 flex-1">
                        <span className="text-[#9e9e9e] text-sm border rounded-[5px] border-0 bg-primary-foreground px-1.5 py-0">{project.type}</span>
                        <span className="text-[#9e9e9e] text-sm border rounded-[5px] border-0 bg-primary-foreground px-1.5 py-0">{project.year}</span>
                      </div>
                      <svg className="w-4 h-4 text-[#9e9e9e] group-hover:text-white transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  ))}
                </div>
              </section>

              {/* Connect Section */}
              <section className="flex-shrink-0">
                <h2 className="text-sm font-semibold mb-2">Connect</h2>
                <a
                  href="mailto:eudis.vah@gmail.com"
                  className="text-[#9e9e9e] text-sm underline hover:text-white transition-colors mb-3 block"
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
        </div>
      </div>
    </div>
  )
}
