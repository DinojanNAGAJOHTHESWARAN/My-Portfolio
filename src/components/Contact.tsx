import { useLanguage } from "@/contexts/LanguageContext";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const content = {
    name: "Dinojan Nagajohtheswaran",
    description: {
      fr: "Spécialiste en automatisation, data et outils no-code pour optimiser vos processus business.",
      en: "Automation, data, and no-code tools specialist to optimize your business processes."
    },
    services: {
      fr: "Services",
      en: "Services"
    },
    serviceList: {
      fr: [
        "Automatisation Make & Zapier",
        "Création de Dashboards",
        "Intégrations no-code",
        "Consulting data",
        "Formation outils data"
      ],
      en: [
        "Make & Zapier automation",
        "Dashboard creation",
        "No-code integrations",
        "Data consulting",
        "Data tools training"
      ]
    },
    contact: {
      fr: "Contact",
      en: "Contact"
    },
    location: {
      fr: "📍 Paris, France",
      en: "📍 Paris, France"
    },
    availability: {
      fr: "💼 Disponible en freelance",
      en: "💼 Available for freelance work"
    },
    backToTop: {
      fr: "↑ Retour en haut",
      en: "↑ Back to top"
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{content.name}</h3>
            <p className="text-slate-400 mb-4">
              {content.description[language]}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/dinojan-nagajohtheswaran-99a745150/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>

              <a
                href="https://github.com/DinojanNAGAJOHTHESWARAN"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <Github className="h-5 w-5" />
                </Button>
              </a>

              <a
                href="mailto:dnagajohtheswaran@gmail.com"
                aria-label="Email"
              >
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{content.services[language]}</h4>
            <ul className="space-y-2 text-slate-400">
              {content.serviceList[language].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{content.contact[language]}</h4>
            <div className="space-y-2 text-slate-400">
              <p>📧 dnagajohtheswaran@gmail.com</p>
              <p>{content.location[language]}</p>
              <p>{content.availability[language]}</p>
            </div>
          </div>
        </div>

        <Separator className="mb-8 bg-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 Dinojan Nagajohtheswaran. {t("rights")}.
          </p>
          <Button
            variant="ghost"
            onClick={scrollToTop}
            className="text-slate-400 hover:text-white text-sm"
          >
            {content.backToTop[language]}
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
