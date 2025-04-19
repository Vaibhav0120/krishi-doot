"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/auth-context"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { FaUser, FaEnvelope, FaCamera } from "react-icons/fa"

const Profile = () => {
  const { currentUser, logout } = useAuth()
  const [error, setError] = useState("")
  const navigate = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate("/auth/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="card">
              <h1 className="text-2xl font-bold mb-6 text-center">Your Profile</h1>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>
              )}

              <div className="flex flex-col items-center mb-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-green-500 text-3xl font-bold mb-2 overflow-hidden">
                    {currentUser.photoURL ? (
                      <img
                        src={currentUser.photoURL || "/placeholder.svg"}
                        alt={currentUser.displayName || "User"}
                        className="w-full h-full object-cover"
                      />
                    ) : currentUser.displayName ? (
                      currentUser.displayName.charAt(0).toUpperCase()
                    ) : (
                      <FaUser />
                    )}
                  </div>
                  <button className="absolute bottom-0 right-0 bg-green-500 text-white p-1 rounded-full">
                    <FaCamera size={14} />
                  </button>
                </div>
                <h2 className="text-xl font-semibold mt-2">{currentUser.displayName || "User"}</h2>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-gray-50 rounded-md">
                  <div className="text-sm text-gray-500 mb-1 flex items-center">
                    <FaEnvelope className="mr-2 text-green-500" />
                    Email
                  </div>
                  <div>{currentUser.email}</div>
                </div>

                <div className="p-3 bg-gray-50 rounded-md">
                  <div className="text-sm text-gray-500 mb-1 flex items-center">
                    <FaUser className="mr-2 text-green-500" />
                    Account Status
                  </div>
                  <div className="flex items-center">
                    <span
                      className={`inline-block w-2 h-2 rounded-full mr-2 ${currentUser.emailVerified ? "bg-green-500" : "bg-yellow-500"}`}
                    ></span>
                    {currentUser.emailVerified ? "Verified" : "Not Verified"}
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button className="btn w-full" onClick={() => navigate("/dashboard")}>
                  Go to Dashboard
                </button>

                <button
                  className="w-full py-2 px-4 border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition duration-300"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Profile
