import { useLanguage } from "@/contexts/LanguageContext";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Dinojan Nagajohtheswaran</h3>
            <p className="text-slate-400 mb-4">
              Specialist in automation, data, and no-code tools to optimize your business processes.
            </p>
            <div className="flex space-x-4">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-white"
              >
                <a
                  href="https://www.linkedin.com/in/dinojan-nagajohtheswaran-99a745150/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-white"
              >
                <a
                  href="https://github.com/DinojanNAGAJOHTHESWARAN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-white"
              >
                <a href="mailto:dnagajohtheswaran@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Make & Zapier Automation</li>
              <li>Dashboard Creation</li>
              <li>No-code Integrations</li>
              <li>Data Consulting</li>
              <li>Training on Data Tools</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-slate-400">
              <p>📧 dnagajohtheswaran@gmail.com</p>
              <p>📍 Paris, France</p>
              <p>💼 Available for freelance</p>
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
            ↑ Back to top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
