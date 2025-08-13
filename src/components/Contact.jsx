import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Heart, Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const recaptchaRef = useRef(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          token,
          recipientEmail: ''
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      recaptchaRef.current.reset()
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: 'Central de Agendamentos',
      detail: 'Atendimento de Segunda a Sexta',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'Contato Geral',
      detail: 'Resposta em até 24 horas',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: MapPin,
      title: 'Localização',
      info: 'Centro Médico Cardiovascular',
      detail: 'Fácil acesso e estacionamento',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Clock,
      title: 'Emergência',
      info: 'Atendimento 24 horas',
      detail: 'Pronto-socorro especializado',
      gradient: 'from-red-500 to-pink-600'
    }
  ]

  const emergencyInfo = [
    'Dor no peito intensa',
    'Falta de ar súbita',
    'Perda de consciência',
    'Palpitações irregulares',
    'Tontura ou desmaio',
    'Sudorese excessiva'
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-20 -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-red-100 to-pink-100 rounded-full opacity-20 translate-x-36 translate-y-36"></div>

      <div className="container-center relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-900">Entre em</span>
            <br />
            <span className="gradient-text">Contato Conosco</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Estamos aqui para cuidar do seu coração. Entre em contato para agendar uma consulta 
            ou esclarecer qualquer dúvida sobre nossos serviços.
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {contactInfo.map((contact, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg card-hover group text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <contact.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.title}</h3>
              <p className="text-gray-700 font-medium mb-1">{contact.info}</p>
              <p className="text-sm text-gray-500">{contact.detail}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Agende sua Consulta</h3>
                <p className="text-blue-600 font-medium">Cuidado especializado para você</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Descreva como podemos ajudá-lo..."
                ></textarea>
              </div>

              <div className="mt-4 flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  size="invisible"
                  sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                />
              </div>

              {submitStatus && (
                <motion.div
                  className={`p-4 rounded-xl flex items-center space-x-3 ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <AlertCircle className="h-5 w-5" />
                  )}
                  <span className="font-medium">
                    {submitStatus === 'success' 
                      ? 'Mensagem enviada com sucesso! Entraremos em contato em breve.' 
                      : 'Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.'}
                  </span>
                </motion.div>
              )}
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Enviar Mensagem</span>
                  </div>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Emergency Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-8 text-white">
              <div className="flex items-center mb-6">
                <Clock className="h-12 w-12 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold">Emergência Cardíaca</h3>
                  <p className="text-red-100">Atendimento 24 horas</p>
                </div>
              </div>
              
              <p className="text-lg text-red-100 mb-6">
                Em caso de emergência cardíaca, procure atendimento imediato ou entre em contato 
                com nosso pronto-socorro especializado.
              </p>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-6">
                <h4 className="font-bold text-lg mb-4">Sinais de Alerta:</h4>
                <div className="grid grid-cols-1 gap-3">
                  {emergencyInfo.map((symptom, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <motion.button
                className="w-full bg-white text-red-600 px-6 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="h-5 w-5 mr-2 inline" />
                Ligar para Emergência
              </motion.button>
            </div>

            {/* Location & Schedule */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Localização</h3>
                  <p className="text-gray-600">Centro Médico Cardiovascular</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Horários de Atendimento:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Segunda a Sexta:</span>
                      <span>8:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado:</span>
                      <span>8:00 - 12:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Emergência:</span>
                      <span className="text-red-600 font-medium">24 horas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}