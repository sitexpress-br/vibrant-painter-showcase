import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Credits from "@/components/Credits";
import Footer from "@/components/Footer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FixedWhatsApp from "@/components/FixedWhatsApp";
import GalleryLightbox from "@/components/GalleryLightbox";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Paintbrush, Home, Sparkles, CheckCircle, Clock, Shield, Award, Star, Mail, MapPin } from "lucide-react";
import heroImage1 from "@/assets/hero-bg-1.jpg";
import heroImage2 from "@/assets/hero-bg-2.jpg";
import heroImage3 from "@/assets/hero-bg-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import beforeImage from "@/assets/before-paint.jpg";
import afterImage from "@/assets/after-paint.jpg";
const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const heroBackgrounds = [heroImage1, heroImage2, heroImage3];
  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
  const heroSlides = [{
    title: "Transformamos Seu Espaço",
    subtitle: "Com cores que inspiram e acabamento perfeito"
  }, {
    title: "Qualidade Profissional",
    subtitle: "Equipe experiente e materiais de primeira linha"
  }, {
    title: "Sua Satisfação é Garantida",
    subtitle: "Resultados que superam expectativas"
  }];

  // Auto-rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 60
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.6
    }
  };
  return <div className="min-h-screen">
      <Header />
      <FixedWhatsApp />
      <GalleryLightbox images={galleryImages} isOpen={lightboxOpen} currentIndex={lightboxIndex} onClose={() => setLightboxOpen(false)} onNavigate={setLightboxIndex} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Rotating Background Images */}
        {heroBackgrounds.map((bg, index) => <motion.div key={index} className="absolute inset-0" initial={{
        opacity: 0
      }} animate={{
        opacity: index === activeSlide ? 1 : 0
      }} transition={{
        duration: 1
      }} style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }} />)}

        <div className="container mx-auto px-4 text-center z-10">
          <motion.div key={activeSlide} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              {heroSlides[activeSlide].title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-body mb-8">
              {heroSlides[activeSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="whatsapp" size="lg" onClick={() => document.getElementById("orcamento")?.scrollIntoView({
              behavior: "smooth"
            })} className="bg-[#075e54]">
                <WhatsAppIcon size={20} />
                Solicitar Orçamento Grátis
              </Button>
            </div>
          </motion.div>

          {/* Slide indicators */}
          <div className="flex gap-2 justify-center mt-12">
            {heroSlides.map((_, index) => <button key={index} onClick={() => setActiveSlide(index)} className={`w-3 h-3 rounded-full transition-all ${index === activeSlide ? "bg-white w-8" : "bg-white/50"}`} />)}
          </div>
        </div>
      </section>

      {/* Processo Section */}
      <section id="processo" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Nosso Processo de <span className="text-gradient">Pintura</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Seguimos um processo estruturado para garantir resultados excepcionais
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[{
            icon: CheckCircle,
            title: "1. Avaliação",
            desc: "Análise completa do ambiente e necessidades"
          }, {
            icon: Paintbrush,
            title: "2. Preparação",
            desc: "Proteção e preparo das superfícies"
          }, {
            icon: Sparkles,
            title: "3. Execução",
            desc: "Aplicação profissional com técnicas avançadas"
          }, {
            icon: Award,
            title: "4. Finalização",
            desc: "Inspeção final e entrega impecável"
          }].map((step, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1,
            duration: 0.5
          }} viewport={{
            once: true
          }}>
                <Card className="p-6 text-center hover:shadow-xl transition-shadow h-full">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center">
                    <step.icon className="text-white" size={32} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{step.title}</h3>
                  <p className="text-muted-foreground font-body">{step.desc}</p>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Tipos de Pintura Section */}
      <section id="servicos" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Tipos de <span className="text-gradient">Pintura</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Soluções personalizadas para cada necessidade
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            icon: Home,
            title: "Pintura Interna",
            desc: "Ambientes residenciais e comerciais com acabamento premium",
            features: ["Quartos e salas", "Cozinhas e banheiros", "Escritórios"]
          }, {
            icon: Paintbrush,
            title: "Pintura Externa",
            desc: "Proteção e beleza para fachadas e áreas externas",
            features: ["Fachadas", "Muros e portões", "Áreas de lazer"]
          }, {
            icon: Sparkles,
            title: "Pintura Decorativa",
            desc: "Técnicas especiais para ambientes únicos e sofisticados",
            features: ["Texturas", "Efeitos especiais", "Design personalizado"]
          }].map((service, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: index * 0.1,
            duration: 0.5
          }} viewport={{
            once: true
          }}>
                <Card className="p-8 hover:shadow-2xl transition-all h-full">
                  <div className="w-20 h-20 mb-6 gradient-accent rounded-2xl flex items-center justify-center">
                    <service.icon className="text-white" size={40} />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground font-body mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => <li key={idx} className="flex items-center gap-2 text-sm font-body">
                        <CheckCircle className="text-accent" size={16} />
                        {feature}
                      </li>)}
                  </ul>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Antes e Depois Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Antes e <span className="text-gradient">Depois</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Veja a transformação que podemos fazer no seu espaço
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider beforeImage={beforeImage} afterImage={afterImage} beforeLabel="Antes" afterLabel="Depois" />
          </div>
        </div>
      </section>

      {/* Por Que Nos Escolher Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Por Que <span className="text-gradient">Nos Escolher</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[{
            icon: Clock,
            title: "Pontualidade",
            desc: "Cumprimos prazos e respeitamos seu tempo"
          }, {
            icon: Shield,
            title: "Garantia",
            desc: "Garantia de 2 anos em todos os serviços"
          }, {
            icon: Award,
            title: "Qualidade",
            desc: "Materiais premium e mão de obra especializada"
          }].map((benefit, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1,
            duration: 0.5
          }} viewport={{
            once: true
          }} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center">
                  <benefit.icon className="text-white" size={36} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground font-body">{benefit.desc}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Avaliações Google Section */}
      <section id="avaliacoes" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              O Que Nossos <span className="text-gradient">Clientes Dizem</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="fill-yellow-400 text-yellow-400" size={28} />)}
              <span className="text-xl font-body ml-2">5.0 no Google</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            name: "Maria Silva",
            text: "Serviço impecável! A equipe foi super profissional e o resultado ficou além das expectativas.",
            rating: 5
          }, {
            name: "João Santos",
            text: "Pontualidade e qualidade excepcional. Recomendo de olhos fechados!",
            rating: 5
          }, {
            name: "Ana Costa",
            text: "Transformaram completamente minha casa. Ficou linda e moderna!",
            rating: 5
          }].map((review, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: index * 0.1,
            duration: 0.5
          }} viewport={{
            once: true
          }}>
                <Card className="p-6 hover:shadow-xl transition-shadow h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} className="fill-yellow-400 text-yellow-400" size={18} />)}
                  </div>
                  <p className="font-body text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-heading font-semibold">— {review.name}</p>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section id="galeria" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Galeria de <span className="text-gradient">Projetos</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Confira alguns dos nossos trabalhos realizados
            </p>
          </motion.div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.05,
            duration: 0.5
          }} viewport={{
            once: true
          }} className="break-inside-avoid">
                <img src={img} alt={`Projeto ${index + 1}`} className="w-full rounded-xl hover:shadow-2xl transition-all cursor-pointer hover:scale-105" onClick={() => openLightbox(index)} />
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Solicite um Orçamento Section */}
      <section id="orcamento" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Solicite um <span className="text-gradient">Orçamento</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body mb-8">
              Entre em contato conosco para transformar seu espaço com qualidade profissional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <Card className="p-8">
              <h3 className="font-heading font-semibold text-2xl mb-6">Entre em Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#075e54]">
                    <WhatsAppIcon className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-heading font-semibold mb-1">WhatsApp</p>
                    <a href="https://wa.me/5511987654321" target="_blank" rel="noopener noreferrer" className="text-muted-foreground font-body hover:text-[#25D366] transition-colors">
                      (11) 98765-4321
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-heading font-semibold mb-1">Email</p>
                    <p className="text-muted-foreground font-body">contato@pintorpro.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-heading font-semibold mb-1">Localização</p>
                    <p className="text-muted-foreground font-body">São Paulo, SP</p>
                    <p className="text-sm text-muted-foreground font-body">Atendemos toda a região metropolitana</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-muted-foreground font-body text-center">
                    ⏱️ Resposta em até 24 horas<br />
                    ✅ Orçamento sem compromisso
                  </p>
                </div>
              </div>
            </Card>

            {/* Map */}
            <Card className="p-0 overflow-hidden h-[400px]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.03963303315!2d-46.87549754749446!3d-23.682074980297324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização PintorPro" />
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <Credits />
    </div>;
};
export default Index;