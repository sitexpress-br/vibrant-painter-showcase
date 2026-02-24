import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4 text-gradient">PintorPro</h3>
            <p className="text-background/80 font-body">
              Transformando espaços com qualidade e profissionalismo desde 2010.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 font-body text-background/80">
              <li>Pintura Interna</li>
              <li>Pintura Externa</li>
              <li>Pintura Decorativa</li>
              <li>Textura e Grafiato</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 font-body text-background/80">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                (11) 98765-4321
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                contato@pintorpro.com.br
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                São Paulo, SP
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Redes Sociais</h4>
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
          © 2025 PintorPro. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
