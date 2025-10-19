import { Link } from "react-router-dom"

export interface IMobileNavProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isMenuOpen: boolean) => void
}

export function MobileNav({ isMenuOpen, setIsMenuOpen }: IMobileNavProps) {
  return (
    <>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/mens"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Men's Ministry
            </Link>
            <Link
              to="/womens"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Women's Ministry
            </Link>
            <Link
              to="/youth"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Youth Ministry
            </Link>
            <Link
              to="/events"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
