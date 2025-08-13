import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Phone, Mail, MapPin, Shield, Award, Clock, ExternalLink } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre Nós', id: 'about' },
    { name: 'Especialidades', id: 'services' },
    { name: 'Contato', id: 'contact' }
  ]

  const services = [
    'Cirurgia de Revascularização',
    'Cirurgia Valvar',
    'Cirurgia de Arritmia',
    'Cirurgia de Aorta',
    'Cirurgia Congênita',
    'Transplante Cardíaco'
  ]

  const certifications = [
    { icon: Shield, text: 'Certificação Internacional' },
    { icon: Award, text: 'Prêmio Excelência Médica' },
    { icon: Clock, text: 'Atendimento 24h' }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-full translate-x-36 translate-y-36"></div>

      <div className="container-center relative z-10">
        {/* Main Footer Content */}
        <div className="section-padding">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                  <Heart className="h-8 w-8 text-white heart-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">
                    Vascular<span className="text-blue-400">Op</span>
                  </span>
                  <span className="text-sm font-medium text-blue-300">
                    Operações do Coração
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Há mais de 25 anos salvando vidas com precisão e cuidado. 
                Especialistas em cirurgia cardíaca com tecnologia de ponta e atendimento humanizado.
              </p>

              {/* Certifications */}
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 text-sm text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <cert.icon className="h-4 w-4 text-blue-400 flex-shrink-0" />
                    <span>{cert.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-white">Links Rápidos</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-white">Especialidades</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    className="text-gray-300 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-white">Contato</h3>
              <div className="space-y-4">
                <motion.div
                  className="flex items-start space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">Central de Agendamentos</p>
                    <p className="text-white font-medium">Seg-Sex: 8h às 18h</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">E-mail</p>
                    <p className="text-white font-medium">Resposta em 24h</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">Localização</p>
                    <p className="text-white font-medium">Centro Médico</p>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-red-600/20 border border-red-500/30 rounded-xl p-4 mt-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="h-5 w-5 text-red-400" />
                    <span className="text-red-300 font-bold">EMERGÊNCIA</span>
                  </div>
                  <p className="text-red-100 text-sm">
                    Atendimento cardiovascular 24 horas por dia
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © 2024 Vascular Op. Todos os direitos reservados.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Registro CRM: 123456 | CNES: 7891011
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Criado com</span>
              <motion.a
                href="https://papum.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="h-4 w-4" />
                <span>Papum</span>
                <ExternalLink className="h-3 w-3" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}