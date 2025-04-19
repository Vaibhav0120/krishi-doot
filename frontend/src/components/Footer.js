import { Link } from "react-router-dom"
import { FaLeaf, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-green-50 text-gray-700">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <FaLeaf className="text-green-500 text-2xl mr-2" />
              <span className="text-xl font-bold">KrishiDoot</span>
            </div>
            <p className="text-sm">
              Empowering farmers with smart solutions for better crop management and sustainable agriculture.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-green-500 hover:text-green-600">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-green-500 hover:text-green-600">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-green-500 hover:text-green-600">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-green-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/predict" className="hover:text-green-500">
                  Predict
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-green-500">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-500">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaMapMarkerAlt className="h-5 w-5 mr-2 text-green-500" />
                <span>123 Farming Street, Agriville</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="h-5 w-5 mr-2 text-green-500" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-5 w-5 mr-2 text-green-500" />
                <span>info@krishidoot.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4 text-sm">Subscribe to our newsletter for the latest updates and farming tips.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-300 text-center">
          <p>&copy; {new Date().getFullYear()} KrishiDoot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
