import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Header from "@/components/Header";

import Footer from "@/components/Footer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FixedWhatsApp from "@/components/FixedWhatsApp";
import GalleryLightbox from "@/components/GalleryLightbox";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Paintbrush, Home, Sparkles, CheckCircle, Clock, Shield, Award, Star, MapPin } from "lucide-react";
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

  const heroSlides = [
    {
      title: "Transformons Votre Espace",
      subtitle: "Avec des couleurs qui inspirent et une finition parfaite",
    },
    {
      title: "Qualité Professionnelle",
      subtitle: "Équipe expérimentée et matériaux de première qualité",
    },
    {
      title: "Votre Satisfaction Garantie",
      subtitle: "Des résultats qui dépassent vos attentes",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen">
      <Header />
      <FixedWhatsApp />
      <GalleryLightbox
        images={galleryImages}
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {heroBackgrounds.map((bg, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === activeSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        <div className="container mx-auto px-4 text-center z-10">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              {heroSlides[activeSlide].title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-body mb-8">
              {heroSlides[activeSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="whatsapp"
                size="lg"
                onClick={() => document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#075e54]"
              >
                <WhatsAppIcon size={20} />
                Demander un Devis Gratuit
              </Button>
            </div>
          </motion.div>

          <div className="flex gap-2 justify-center mt-12">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === activeSlide ? "bg-white w-8" : "bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Processus Section */}
      <section id="processus" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Notre <span className="text-gradient">Processus</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Un processus structuré pour garantir des résultats exceptionnels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle, title: "1. Évaluation", desc: "Analyse complète de l'environnement et des besoins" },
              { icon: Paintbrush, title: "2. Préparation", desc: "Protection et préparation des surfaces" },
              { icon: Sparkles, title: "3. Exécution", desc: "Application professionnelle avec des techniques avancées" },
              { icon: Award, title: "4. Finalisation", desc: "Inspection finale et livraison impeccable" },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-shadow h-full">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center">
                    <step.icon className="text-white" size={32} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{step.title}</h3>
                  <p className="text-muted-foreground font-body">{step.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Nos <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Des solutions sur mesure pour chaque projet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Peinture Intérieure",
                desc: "Espaces résidentiels et commerciaux avec une finition haut de gamme",
                features: ["Chambres et salons", "Cuisines et salles de bain", "Bureaux"],
              },
              {
                icon: Paintbrush,
                title: "Peinture Extérieure",
                desc: "Protection et esthétique pour façades et espaces extérieurs",
                features: ["Façades", "Balcons et terrasses", "Zones communes"],
              },
              {
                icon: Sparkles,
                title: "Peinture Décorative",
                desc: "Techniques spéciales pour des espaces uniques et raffinés",
                features: ["Textures", "Effets spéciaux", "Design personnalisé"],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 hover:shadow-2xl transition-all h-full">
                  <div className="w-20 h-20 mb-6 gradient-accent rounded-2xl flex items-center justify-center">
                    <service.icon className="text-white" size={40} />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground font-body mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm font-body">
                        <CheckCircle className="text-accent" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avant et Après Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Avant et <span className="text-gradient">Après</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Découvrez la transformation que nous pouvons réaliser
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider beforeImage={beforeImage} afterImage={afterImage} beforeLabel="Avant" afterLabel="Après" />
          </div>
        </div>
      </section>

      {/* Pourquoi Nous Choisir Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Pourquoi <span className="text-gradient">Nous Choisir</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Clock, title: "Ponctualité", desc: "Nous respectons les délais et votre emploi du temps" },
              { icon: Shield, title: "Garantie", desc: "Garantie sur l'ensemble de nos prestations" },
              { icon: Award, title: "Qualité", desc: "Matériaux premium et savoir-faire reconnu" },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center">
                  <benefit.icon className="text-white" size={36} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground font-body">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis Section */}
      <section id="avis" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Ce Que Disent <span className="text-gradient">Nos Clients</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-yellow-400 text-yellow-400" size={28} />
              ))}
              <span className="text-xl font-body ml-2">5.0 sur Google</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sophie Müller",
                text: "Un travail impeccable ! L'équipe est très professionnelle et le résultat dépasse nos attentes.",
                rating: 5,
              },
              {
                name: "Pierre Dupont",
                text: "Ponctualité et qualité exceptionnelle. Je recommande sans hésitation !",
                rating: 5,
              },
              {
                name: "Marie Leblanc",
                text: "Ils ont complètement transformé notre appartement. Le résultat est magnifique et moderne !",
                rating: 5,
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-xl transition-shadow h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="fill-yellow-400 text-yellow-400" size={18} />
                    ))}
                  </div>
                  <p className="font-body text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-heading font-semibold">— {review.name}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie Section */}
      <section id="galerie" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Galerie de <span className="text-gradient">Projets</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Découvrez quelques-uns de nos travaux réalisés
            </p>
          </motion.div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="break-inside-avoid"
              >
                <img
                  src={img}
                  alt={`Projet ${index + 1}`}
                  className="w-full rounded-xl hover:shadow-2xl transition-all cursor-pointer hover:scale-105"
                  onClick={() => openLightbox(index)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demander un Devis Section */}
      <section id="devis" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Demander un <span className="text-gradient">Devis</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body mb-8">
              Contactez-nous pour transformer votre espace avec une qualité professionnelle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <h3 className="font-heading font-semibold text-2xl mb-6">Contactez-nous</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#075e54]">
                    <WhatsAppIcon className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-heading font-semibold mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/41764459436"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground font-body hover:text-[#25D366] transition-colors"
                    >
                      +41 76 445 94 36
                    </a>
                  </div>
                </div>


                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-heading font-semibold mb-1">Localisation</p>
                    <p className="text-muted-foreground font-body">Suisse</p>
                    <p className="text-sm text-muted-foreground font-body">
                      Nous intervenons dans toute la Suisse romande
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-muted-foreground font-body text-center">
                    ⏱️ Réponse sous 24 heures
                    <br />
                    ✅ Devis gratuit et sans engagement
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-0 overflow-hidden h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760000!2d6.6322734!3d46.5196535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c31202a56533b%3A0xc36eee3c6e498541!2sSuisse!5e0!3m2!1sfr!2sch!4v1234567890123!5m2!1sfr!2sch"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Ambiance Rénovation"
              />
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      
    </div>
  );
};

export default Index;
