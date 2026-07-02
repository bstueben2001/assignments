import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import LoginForm from "./Components/LoginForm"
import SignupForm from "./Components/SignupForm"
import IssueDetail from "./Components/IssueDetail"
import Profile from "./Components/Profile"
import PrivateRoute from "./Components/PrivateRoute"

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/issues/:id" element={<IssueDetail />} />
                <Route
                    path="/profile"
                    element={(
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    )}
                />
            </Routes>
        </>
    )
}

export default App
