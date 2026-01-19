// Mock Supabase client for development
export const supabase = {
  auth: {
    getSession: () => Promise.resolve({ data: { session: null } }),
    onAuthStateChange: (callback: any) => {
      // Mock subscription
      return {
        data: {
          subscription: {
            unsubscribe: () => {}
          }
        }
      }
    },
    signInWithOAuth: ({ provider }: { provider: string }) => {
      console.log(`Mock sign in with ${provider}`)
      return Promise.resolve({ error: null })
    },
    signInWithPassword: ({ email, password }: { email: string, password: string }) => {
      console.log(`Mock sign in with email: ${email}`)
      return Promise.resolve({ error: null })
    },
    signUp: ({ email, password }: { email: string, password: string }) => {
      console.log(`Mock sign up with email: ${email}`)
      return Promise.resolve({ error: null })
    },
    signOut: () => {
      console.log('Mock sign out')
      return Promise.resolve({ error: null })
    }
  }
}