import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Zap, Users, Clock, Award, Activity, Stethoscope, CheckCircle2 } from 'lucide-react'

export default function Services() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const mainServices = [
    {
      icon: Heart,
      title: 'Cirurgia de Revascularização',
      description: 'Procedimentos de ponte de safena e mamária para restaurar o fluxo sanguíneo adequado ao coração.',
      features: ['Técnica minimamente invasiva', 'Recuperação mais rápida', 'Alta taxa de sucesso'],
      gradient: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Activity,
      title: 'Cirurgia Valvar',
      description: 'Reparação e substituição de válvulas cardíacas danificadas com técnicas avançadas e materiais de última geração.',
      features: ['Válvulas biológicas e mecânicas', 'Técnica percutânea', 'Monitoramento contínuo'],
      gradient: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Zap,
      title: 'Cirurgia de Arritmia',
      description: 'Tratamento cirúrgico para correção de ritmos cardíacos irregulares e implante de dispositivos.',
      features: ['Ablação por radiofrequência', 'Implante de marca-passo', 'Desfibriladores automáticos'],
      gradient: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Shield,
      title: 'Cirurgia de Aorta',
      description: 'Procedimentos complexos para correção de aneurismas e dissecções da aorta com técnicas híbridas.',
      features: ['Endopróteses vasculares', 'Cirurgia híbrida', 'Recuperação monitorada'],
      gradient: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Stethoscope,
      title: 'Cirurgia Congênita',
      description: 'Correção de malformações cardíacas congênitas em pacientes pediátricos e adultos.',
      features: ['Técnicas pediátricas especializadas', 'Equipe multidisciplinar', 'Cuidado integral'],
      gradient: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Users,
      title: 'Transplante Cardíaco',
      description: 'Programa completo de transplante cardíaco com equipe especializada e protocolo rigoroso.',
      features: ['Avaliação pré-transplante', 'Acompanhamento pós-operatório', 'Suporte psicológico'],
      gradient: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Consulta Inicial',
      description: 'Avaliação completa do paciente com exames detalhados e discussão do caso.',
      icon: Stethoscope
    },
    {
      step: '02',
      title: 'Planejamento Cirúrgico',
      description: 'Elaboração de estratégia personalizada com equipe multidisciplinar.',
      icon: Users
    },
    {
      step: '03',
      title: 'Procedimento',
      description: 'Execução da cirurgia com tecnologia de ponta e monitoramento contínuo.',
      icon: Heart
    },
    {
      step: '04',
      title: 'Recuperação',
      description: 'Acompanhamento pós-operatório especializado e reabilitação cardíaca.',
      icon: Shield
    }
  ]

  const emergencyFeatures = [
    'Plantão médico 24 horas',
    'UTI cardiovascular especializada',
    'Laboratório de hemodinâmica',
    'Centro cirúrgico híbrido',
    'Equipe de enfermagem especializada',
    'Protocolo de emergência cardíaca'
  ]

  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-20 translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-red-100 to-pink-100 rounded-full opacity-20 -translate-x-36 translate-y-36"></div>

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
            <span className="text-gray-900">Especialidades em</span>
            <br />
            <span className="gradient-text">Cirurgia Cardíaca</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Oferecemos uma gama completa de procedimentos cardíacos, desde cirurgias minimamente 
            invasivas até transplantes complexos, sempre com os mais altos padrões de qualidade.
          </motion.p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              className={`${service.bgColor} rounded-2xl p-8 shadow-lg card-hover group border border-gray-100`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-xl font-medium shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Saiba Mais
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nosso Processo de Cuidado
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Um protocolo estruturado que garante os melhores resultados em cada etapa do tratamento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Section */}
        <motion.div
          className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-8 lg:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Clock className="h-12 w-12 mr-4" />
                <div>
                  <h3 className="text-3xl font-bold">Atendimento de Emergência</h3>
                  <p className="text-red-100">Disponível 24 horas por dia</p>
                </div>
              </div>
              
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Para situações de emergência cardíaca, nossa equipe está sempre preparada 
                para oferecer atendimento imediato com protocolos de segurança rigorosos.
              </p>
              
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="h-5 w-5 mr-2 inline" />
                Contato de Emergência
              </motion.button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {emergencyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="text-white font-medium text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}