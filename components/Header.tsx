// components/Header.tsx
'use client'

import { Home, Info, Users, Calculator } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: Home
  },
  {
    name: "Guides",
    href: "/guides",
    icon: Users
  },
  {
    name: "Save Data",
    href: "/calculator",
    icon: Calculator
  }
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-2xl">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 md:py-5">
        <div className="flex items-center justify-between gap-2">
          {/* Logo - Hidden on mobile */}
          <Link
            href="/"
            className="hidden sm:flex items-center gap-2 sm:gap-3 md:gap-4 transition-all duration-300 hover:opacity-90 active:opacity-80 flex-shrink-0"
            aria-label="Go to Home"
          >
            <div className="relative flex items-center justify-center py-1 sm:py-2">
              <h1 className="relative z-10 text-xl md:text-2xl lg:text-3xl font-black tracking-wider sm:tracking-widest text-white">
                CZN HELPER
              </h1>
            </div>
          </Link>

          {/* Navigation - Icons only on mobile, text appears on larger screens */}
          <nav className="flex items-center gap-6 sm:gap-3 md:gap-4 lg:gap-6 text-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1.5 sm:gap-2 transition-all duration-300 px-2 sm:px-2.5 py-1.5 rounded-lg",
                    isActive
                      ? "text-cyan-400 font-bold drop-shadow-md bg-cyan-400/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  )}
                  aria-label={item.name}
                >
                  <item.icon className="w-6 h-6 sm:w-4.5 sm:h-4.5 flex-shrink-0" />
                  <span className="hidden sm:inline text-xs sm:text-sm whitespace-nowrap">
                    {item.name}
                  </span>
                </Link>
              )
            })}

            {/* Disabled button */}
            <button
              disabled
              className="flex items-center gap-1.5 sm:gap-2 text-gray-600 cursor-not-allowed opacity-50 px-2 sm:px-2.5 py-1.5 rounded-lg"
              aria-label="Damage Calculator (Coming Soon)"
            >
              <Calculator className="w-6 h-6 sm:w-4.5 sm:h-4.5 flex-shrink-0" />
              <span className="hidden sm:inline text-xs sm:text-sm whitespace-nowrap">
                Damage Calculator
              </span>
            </button>

            {/* About link */}
            <Link
              href="/about"
              className={cn(
                "flex items-center gap-1.5 sm:gap-2 transition-all duration-300 px-2 sm:px-2.5 py-1.5 rounded-lg",
                pathname === "/about"
                  ? "text-cyan-400 font-bold drop-shadow-md bg-cyan-400/10"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
              aria-label="About"
            >
              <Info className="w-6 h-6 sm:w-4.5 sm:h-4.5 flex-shrink-0" />
              <span className="hidden sm:inline text-xs sm:text-sm whitespace-nowrap">
                About
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}