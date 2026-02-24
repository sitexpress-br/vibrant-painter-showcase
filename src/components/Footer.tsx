import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="Ambiance Rénovation" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-background/80 font-body">
              Spécialisée dans la peinture du bâtiment et les travaux de rénovation intérieure et extérieure depuis 2010.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2 font-body text-background/80">
              <li>Peinture Intérieure</li>
              <li>Peinture Extérieure</li>
              <li>Peinture Décorative</li>
              <li>Rénovation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 font-body text-background/80">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                +41 76 445 94 36
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                contact@ambiance-renovation.ch
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                Suisse
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Réseaux Sociaux</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60 font-body text-sm">
          © 2025 Ambiance Rénovation Peinture Sa. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
