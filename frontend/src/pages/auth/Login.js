"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/auth-context"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { login, loginWithGoogle } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(email, password)
      navigate("/dashboard")
    } catch (error) {
      setError("Failed to log in. Please check your credentials.")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  async function handleGoogleSignIn() {
    try {
      setError("")
      setLoading(true)
      await loginWithGoogle()
      navigate("/dashboard")
    } catch (error) {
      setError("Failed to sign in with Google.")
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
              <h1 className="text-2xl font-bold mb-6 text-center">Login to KrishiDoot</h1>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
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

                <div className="mb-6">
                  <label htmlFor="password" className="block mb-2 font-medium">
                    <FaLock className="inline mr-2 text-green-500" />
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn w-full mb-4" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </button>

                <div className="text-center mb-4">
                  <span className="text-gray-500">OR</span>
                </div>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition duration-300"
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                >
                  <FaGoogle className="text-red-500" />
                  Sign in with Google
                </button>
              </form>

              <div className="mt-4 text-center">
                <p>
                  Don't have an account?{" "}
                  <Link to="/auth/register" className="text-green-500 hover:underline">
                    Register here
                  </Link>
                </p>
                <p className="mt-2">
                  <Link to="/auth/forgot-password" className="text-green-500 hover:underline">
                    Forgot Password?
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

export default Login
