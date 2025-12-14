import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import useGetPicture from "../hooks/useGetPicture"

function Home() {
  const { data: mainPicture } = useGetPicture("main-church.png")

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${mainPicture})`,
        }}
      >
        <div className="absolute inset-0  bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">
                Welcome to Grace Community
              </h1>
              <p className="text-xl mb-8">
                Join us in worship and fellowship as we grow together in faith
              </p>
              <Link
                to="/events"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Join Us This Sunday
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to Our Church Family
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are a vibrant community of believers dedicated to sharing God's
              love and making a positive impact in our community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="rounded-lg overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&q=80"
                  alt="Youth Ministry"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Youth Ministry</h3>
              <p className="text-gray-600 mb-4">
                Empowering young people to grow in faith and leadership.
              </p>
              <Link to="/youth" className="text-blue-600 hover:text-blue-700">
                Learn More →
              </Link>
            </div>

            <div className="text-center p-6">
              <div className="rounded-lg overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80"
                  alt="Women's Ministry"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Women's Ministry</h3>
              <p className="text-gray-600 mb-4">
                Supporting and encouraging women in their spiritual journey.
              </p>
              <Link to="/womens" className="text-blue-600 hover:text-blue-700">
                Learn More →
              </Link>
            </div>

            <div className="text-center p-6">
              <div className="rounded-lg overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80"
                  alt="Events"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
              <p className="text-gray-600 mb-4">
                Join us for worship, fellowship, and community events.
              </p>
              <Link to="/events" className="text-blue-600 hover:text-blue-700">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
