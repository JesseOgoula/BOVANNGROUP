import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="Bovann Group Logo" className="w-10 h-10 object-contain rounded-lg p-1 shadow" />
              <span className="text-xl font-bold gradient-text">BOVANN GROUP</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Formateur de talents et créateur de solutions innovantes dans les domaines 
              de la communication, l'informatique et le multimédia.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:contact@bovanngroup.com" className="hover:text-primary transition-colors">
                  contact@bovanngroup.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+228 70 25 65 65 / +228 97 19 65 65</span>
              </div>
            </div>

          </div>

          {/* Formations */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Formations</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Journalisme JRI</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community Manager</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Développement Web</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Développement Mobile</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Administration IT</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Multimédia</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Prestations</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Communication événementielle</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Management d'artistes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Services informatiques</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">House of Challenge</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} BOVANN GROUP SAS. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-primary transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;