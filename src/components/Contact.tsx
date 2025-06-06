import { useLanguage } from "@/contexts/LanguageContext";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    name: "Dinojan Nagajohtheswaran",
    description: {
      fr: "Spécialiste en automatisation, data et outils no-code pour optimiser vos processus business.",
      en: "Specialist in automation, data, and no-code tools to optimize your business processes."
    },
    servicesTitle: {
      fr: "Services",
      en: "Services"
    },
    servicesList: {
      fr: [
        "Automatisation Make & Zapier",
        "Création de Dashboards",
        "Intégrations no-code",
        "Consulting data",
        "Formation outils data"
      ],
      en: [
        "Automation with Make & Zapier",
        "Dashboard Creation",
        "No-code Integrations",
        "Data Consulting",
        "Data Tools Training"
      ]
    },
    contactTitle: {
      fr: "Contact",
      en: "Contact"
    },
    contactInfo: {
      email: "📧 dnagajohtheswaran@gmail.com",
      location: "📍 Paris, France",
      availability: {
        fr: "💼 Disponible en freelance",
        en: "💼 Available for freelance"
      }
    },
    rights: {
      fr: "Tous droits réservés",
      en: "All rights reserved"
    },
    backToTop: {
      fr: "↑ Retour en haut",
      en: "↑ Back to top"
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{content.name}</h3>
            <p className="text-slate-400 mb-4">{content.description[language]}</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{content.servicesTitle[language]}</h4>
            <ul className="space-y-2 text-slate-400">
              {content.servicesList[language].map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{content.contactTitle[language]}</h4>
            <div className="space-y-2 text-slate-400">
              <p>{content.contactInfo.email}</p>
              <p>{content.contactInfo.location}</p>
              <p>{content.contactInfo.availability[language]}</p>
            </div>
          </div>
        </div>

        <Separator className="mb-8 bg-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 {content.name}. {content.rights[language]}.
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
