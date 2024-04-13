import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import SignUp from "./Pages/SignUp"
import SignIn from "./Pages/SignIn"
import Dashboard from "./Pages/Dashboard"
import { ThemeContext } from "./Context/ThemeContext/ThemeContext"
import { useEffect, useState } from "react"
import New from "./Pages/New"
import Repository from "./Pages/Repository"
import Profile from "./Pages/Profile"

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element=
            {
              <div className={`${theme} ${theme === "dark" ? "bg-[#010409]" : ""} transition-colors ease-in-out duration-300 h-screen`}>
                <Dashboard />
              </div >
            }
          />
          <Route path="/new" element=
            {
              <div className={`${theme} ${theme === "dark" ? "bg-[#010409]" : ""} transition-colors ease-in-out duration-300 h-screen`}>
                <New />
              </div >
            }
          />
          <Route path="/:repository" element=
            {
              <div className={`${theme} ${theme === "dark" ? "bg-[#010409]" : ""} transition-colors ease-in-out duration-300 h-screen`}>
                <Repository />
              </div >
            }
          />
          <Route path="/profile/:user" element=
            {
              <div className={`${theme} ${theme === "dark" ? "bg-[#010409]" : ""} transition-colors ease-in-out duration-300 h-screen`}>
                <Profile />
              </div >
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default App
