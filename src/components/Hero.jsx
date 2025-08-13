import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Award, ChevronDown, Stethoscope, Users, Clock } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const stats = [
    { icon: Heart, number: '10000+', label: 'Cirurgias Realizadas' },
    { icon: Users, number: '25+', label: 'Anos de Experiência' },
    { icon: Award, number: '98%', label: 'Taxa de Sucesso' },
    { icon: Clock, number: '24h', label: 'Atendimento Emergencial' }
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-20 floating animation-delay-200"></div>
      <div className="absolute top-40 right-16 w-16 h-16 bg-red-100 rounded-full opacity-20 floating animation-delay-400"></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-green-100 rounded-full opacity-20 floating animation-delay-600"></div>

      <div className="container-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-gray-900">Salvando</span>
                <br />
                <span className="gradient-text">Vidas</span>
                <br />
                <span className="text-gray-900">com</span>
                <br />
                <span className="text-red-600">Precisão</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl lg:text-2xl text-gray-600 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Especialistas em operações cardíacas complexas. Seu coração, nossa prioridade. 
                Transformando vidas com inovação no cuidado cardíaco.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="h-5 w-5 mr-2" />
                Agendar Consulta
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('about')}
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Shield className="h-5 w-5 mr-2" />
                Conheça Nossa Equipe
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-wrap gap-6 justify-center lg:justify-start items-center pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="font-medium">Certificação Internacional</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Award className="h-5 w-5 text-yellow-500" />
                <span className="font-medium">Prêmio Excelência Médica</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Stethoscope className="h-5 w-5 text-blue-500" />
                <span className="font-medium">Equipamentos de Última Geração</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative bg-gradient-to-br from-red-500 to-red-700 rounded-3xl p-8 shadow-2xl">
              {/* Medical Icon Display */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Heart className="h-12 w-12 text-white mx-auto mb-4 heart-pulse" />
                  <h3 className="text-white font-bold text-lg">Cirurgia Cardíaca</h3>
                  <p className="text-blue-100 text-sm">Procedimentos Complexos</p>
                </motion.div>
                
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Shield className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-white font-bold text-lg">Segurança</h3>
                  <p className="text-blue-100 text-sm">Protocolos Rigorosos</p>
                </motion.div>
              </div>

              {/* Stats Section */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-white font-bold text-xl mb-4 text-center">Nossa Excelência em Números</h4>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <stat.icon className="h-6 w-6 text-white mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-xs text-blue-100">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div 
              className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-20"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-20"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors"
            whileHover={{ y: -5 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-medium mb-2">Descubra mais</span>
            <ChevronDown className="h-6 w-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}