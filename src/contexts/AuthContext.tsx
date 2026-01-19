import { createContext, useContext, useEffect, useState } from 'react'

// Mock types for development
interface User {
  id: string
  email?: string
}

interface Session {
  user: User
}

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(false) // Set to false for demo

  const signInWithGoogle = async () => {
    console.log('Mock Google sign in')
    // Mock successful login
    const mockUser = { id: '1', email: 'user@example.com' }
    setUser(mockUser)
    setSession({ user: mockUser })
  }

  const signOut = async () => {
    console.log('Mock sign out')
    setUser(null)
    setSession(null)
  }

  const value = {
    user,
    session,
    loading,
    signInWithGoogle,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}