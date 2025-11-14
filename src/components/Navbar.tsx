import * as React from "react"
import { ChurchHome } from "./HomeChurch"
import { DesktopNav } from "./DesktopNav"
import { MobileMenuButton } from "./MobileMenuButton"
import { MobileNav } from "./MobileNav"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <ChurchHome />
          <DesktopNav />
          <MobileMenuButton
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </div>
      <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </nav>
  )
}
