import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Address</p>
            <p>Address 2</p>
            <p>Phone:</p>
            <p>Email:</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Times</h3>
            <p>Sunday Service: 8:00 AM to 10:30 AM</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/youth" className="hover:text-blue-400">
                  Youth Ministry
                </Link>
              </li>
              <li>
                <Link to="/womens" className="hover:text-blue-400">
                  Women's Ministry
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-blue-400">
                  Events
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-8">
          <p>
            &copy; 2025 Overcomer Ministries International Center. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
