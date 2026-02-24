import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Menu, X, Paintbrush2 } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };
  const menuItems = [
    {
      label: "Processo",
      id: "processo",
    },
    {
      label: "Serviços",
      id: "servicos",
    },
    {
      label: "Avaliações",
      id: "avaliacoes",
    },
    {
      label: "Galeria",
      id: "galeria",
    },
  ];
  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          className={`text-2xl font-heading font-bold flex items-center gap-2 transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
          whileHover={{
            scale: 1.05,
          }}
        >
          <Paintbrush2 className={isScrolled ? "text-primary" : "text-white"} size={32} />
          PintorPro
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-body transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"}`}
            >
              {item.label}
            </button>
          ))}
          <Button variant="whatsapp" onClick={() => scrollToSection("orcamento")} className="bg-[#075e54]">
            <WhatsAppIcon size={20} />
            Solicitar Orçamento
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: "auto",
          }}
          exit={{
            opacity: 0,
            height: 0,
          }}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-body text-foreground hover:text-primary transition-colors text-left"
              >
                {item.label}
              </button>
            ))}
            <Button variant="whatsapp" onClick={() => scrollToSection("orcamento")} className="w-full">
              <WhatsAppIcon size={20} />
              Solicitar Orçamento
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};
export default Header;
