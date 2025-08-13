import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Award, Users, Star, CheckCircle, Target, Zap } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Cuidado Compassivo',
      description: 'Tratamos cada paciente com o carinho e atenção que merecem, entendendo que por trás de cada caso há uma vida preciosa.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Segurança Máxima',
      description: 'Utilizamos os mais rigorosos protocolos de segurança e tecnologias avançadas para garantir os melhores resultados.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: 'Excelência Técnica',
      description: 'Nossa equipe é formada por cirurgiões altamente qualificados com anos de experiência em procedimentos cardíacos complexos.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Inovação Constante',
      description: 'Estamos sempre atualizados com as mais recentes técnicas e equipamentos para oferecer o melhor tratamento disponível.',
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  const achievements = [
    { number: '25+', label: 'Anos de Experiência', icon: Users },
    { number: '10000+', label: 'Cirurgias Realizadas', icon: Heart },
    { number: '98%', label: 'Taxa de Sucesso', icon: Star },
    { number: '24h', label: 'Emergência Disponível', icon: Shield }
  ]

  const differentials = [
    'Equipe multidisciplinar especializada',
    'Tecnologia de ponta em cirurgia cardíaca',
    'Acompanhamento pós-operatório personalizado',
    'Atendimento humanizado e integral',
    'Protocolos internacionais de segurança',
    'Centro cirúrgico com equipamentos de última geração'
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-10 -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100 rounded-full opacity-10 translate-x-48 translate-y-48"></div>

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
            <span className="text-gray-900">Liderando o Caminho em</span>
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
            Há mais de 25 anos, dedicamos nossas vidas a salvar vidas. Nossa missão é oferecer 
            cirurgias cardíacas de excelência, combinando tecnologia avançada com cuidado humano.
          </motion.p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <achievement.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Mission & Vision */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Nossa Missão</h3>
                  <p className="text-red-600 font-medium">Salvando vidas com excelência</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Proporcionar cuidados cardíacos de classe mundial, utilizando as mais avançadas 
                técnicas cirúrgicas e tecnologias disponíveis. Nosso compromisso é com a vida 
                e o bem-estar de cada paciente que confia em nossa expertise.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Nossa Visão</h3>
                  <p className="text-red-600 font-medium">Referência em cardiologia</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ser reconhecida como a principal referência em cirurgia cardíaca, sempre 
                inovando e estabelecendo novos padrões de qualidade no cuidado cardiovascular, 
                transformando vidas através da medicina de precisão.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Differentials */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
                Nossos Diferenciais
              </h3>
              <div className="space-y-4">
                {differentials.map((differential, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{differential}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores Fundamentais
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Princípios que guiam cada decisão e cada procedimento em nossa prática médica
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg card-hover group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}