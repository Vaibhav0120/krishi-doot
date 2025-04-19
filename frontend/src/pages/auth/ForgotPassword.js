"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../../firebase/config"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { FaEnvelope } from "react-icons/fa"

const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await sendPasswordResetEmail(auth, email)
      setMessage("Check your email for password reset instructions")
    } catch (error) {
      setError("Failed to reset password. " + error.message)
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="card">
              <h1 className="text-2xl font-bold mb-6 text-center">Reset Password</h1>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>
              )}

              {message && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 font-medium">
                    <FaEnvelope className="inline mr-2 text-green-500" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn w-full mb-4" disabled={loading}>
                  {loading ? "Sending..." : "Reset Password"}
                </button>
              </form>

              <div className="mt-4 text-center">
                <p>
                  <Link to="/auth/login" className="text-green-500 hover:underline">
                    Back to Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ForgotPassword
