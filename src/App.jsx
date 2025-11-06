import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  const [darkMode,setDarkMode]=useState(false)
  useEffect(()=>{
    const saved = localStorage.getItem('darkMode')==='true'
    setDarkMode(saved)
  },[])
  useEffect(()=>{
    localStorage.setItem('darkMode', darkMode)
    if(darkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  },[darkMode])

  return(
    <div className={darkMode?'dark':''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main id="main" className="max-w-5xl mx-auto pt-24">
          <Hero />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
