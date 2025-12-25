// components/Header.tsx
'use client'

import { House, Info, Users, Calculator } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { 
    name: "Home", 
    href: "/",
    icon: House 
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
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 md:gap-4 transition-all duration-300 hover:opacity-90 active:opacity-80"
            aria-label="Go to Home"
          >
            <div className="relative">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg shadow-purple-500/20 overflow-hidden">
                <img
                  src="/images/unnamed.gif"
                  alt="CZN Logo"
                  className="w-28 h-28 object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-cyan-400/30 to-purple-400/30 -z-10" />
            </div>
            <h1 className="hidden sm:block text-2xl md:text-3xl font-black text-white tracking-wider drop-shadow-lg">
              CZN Helper
            </h1>
          </Link>

          <nav className="flex items-center gap-4 md:gap-6 lg:gap-8 text-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 transition-all duration-300",
                    isActive
                      ? "text-cyan-400 font-bold drop-shadow-md"
                      : "text-gray-400 hover:text-white hover:translate-y-[-2px]"
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">{item.name}</span>
                </Link>
              )
            })}

            <button
              disabled
              className="flex items-center gap-2 text-gray-600 cursor-not-allowed opacity-60"
            >
              <Calculator className="w-4 h-4" />
              <span className="hidden md:inline">Damage Calculator</span>
              <span className="md:hidden">Damage Calc</span>
            </button>

            <Link
              href="/about"
              className={cn(
                "flex items-center gap-2 transition-all duration-300",
                pathname === "/about"
                  ? "text-cyan-400 font-bold drop-shadow-md"
                  : "text-gray-400 hover:text-white hover:translate-y-[-2px]"
              )}
            >
              <Info className="w-4 h-4" />
              <span className="hidden md:inline">About</span>
              <span className="md:hidden">About</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}