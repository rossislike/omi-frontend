import { Menu, X } from "lucide-react"

export interface IMobileMenuButtonProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isMenuOpen: boolean) => void
}

export function MobileMenuButton({
  isMenuOpen,
  setIsMenuOpen,
}: IMobileMenuButtonProps) {
  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-gray-700 hover:text-blue-600"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>
  )
}
