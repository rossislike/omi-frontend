import { Link } from "react-router-dom"

export function DesktopNav() {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <Link
        to="/"
        className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
      >
        Home
      </Link>
      <Link
        to="/mens"
        className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
      >
        Men's Ministry
      </Link>
      <Link
        to="/womens"
        className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
      >
        Women's Ministry
      </Link>
      <Link
        to="/youth"
        className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
      >
        Youth Ministry
      </Link>
      <Link
        to="/events"
        className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
      >
        Events
      </Link>
    </div>
  )
}
