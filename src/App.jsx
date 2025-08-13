import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Header />
      <main className="relative overflow-hidden">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  )
}