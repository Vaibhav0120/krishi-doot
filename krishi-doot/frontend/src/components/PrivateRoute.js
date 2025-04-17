"use client"

import { Navigate } from "react-router-dom"
import { useAuth } from "../context/auth-context"

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth()

  if (!currentUser) {
    return <Navigate to="/login" />
  }

  return children
}
