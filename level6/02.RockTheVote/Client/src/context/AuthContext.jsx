import { createContext, useContext, useState } from "react"
import { authApi } from "../api/api"

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem("rtv_user")
        return stored ? JSON.parse(stored) : null
    })
    const [token, setToken] = useState(() => localStorage.getItem("rtv_token"))

    function persist(newToken, newUser) {
        localStorage.setItem("rtv_token", newToken)
        localStorage.setItem("rtv_user", JSON.stringify(newUser))
        setToken(newToken)
        setUser(newUser)
    }

    async function signup(username, password) {
        const data = await authApi.signup(username, password)
        persist(data.token, data.user)
    }

    async function login(username, password) {
        const data = await authApi.login(username, password)
        persist(data.token, data.user)
    }

    function logout() {
        localStorage.removeItem("rtv_token")
        localStorage.removeItem("rtv_user")
        setToken(null)
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, token, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}
