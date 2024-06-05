import React from "react"
import Header from './components/Header'
import '../src/App.css'
import Footer from './components/Footer'
import { Outlet, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import User from "./components/User"
import Error from "./components/Error"
import Github, { githubInfoLoader } from "./components/Github"

const App = () => {
  return (
    <>
      <Header />
      {/* <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='user/:userId' element={<User />} />
        <Route
        loader={githubInfoLoader}
          path='github'
          element={<Github />}
        />
        <Route path='*' element={<Error />} />
      </Routes> */}
      <Outlet />
      <Footer />
    </>
  )
}

export default App
