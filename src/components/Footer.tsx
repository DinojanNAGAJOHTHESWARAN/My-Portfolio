
import { useLanguage } from "@/contexts/LanguageContext";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Dinojan NagaJohtheswaran</h3>
            <p className="text-slate-400 mb-4">
              Spécialiste en automatisation, data et outils no-code pour optimiser vos processus business.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Automatisation Make & Zapier</li>
              <li>Dashboards Power BI</li>
              <li>Intégrations no-code</li>
              <li>Consulting data</li>
              <li>Formation outils</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-slate-400">
              <p>📧 dinojan.naga@example.com</p>
              <p>📍 Paris, France</p>
              <p>💼 Disponible en freelance</p>
            </div>
          </div>
        </div>

        <Separator className="mb-8 bg-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 Dinojan NagaJohtheswaran. {t('rights')}.
          </p>
          <Button
            variant="ghost"
            onClick={scrollToTop}
            className="text-slate-400 hover:text-white text-sm"
          >
            ↑ Retour en haut
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
