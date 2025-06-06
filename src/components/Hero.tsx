import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const { t, language } = useLanguage(); // Added language here

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Set CV file depending on language, default to English if not French
  const cvFile = language === 'fr' ? '/cv-fr.pdf' : '/cv-en.pdf';

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 relative">
      <div className="container mx-auto max-w-5xl text-center">
        <div className="animate-fade-in-up">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <Avatar className="w-32 h-32 ring-4 ring-blue-200 dark:ring-blue-800 shadow-xl">
              <AvatarImage 
                src="/profile_picture.jpg"
                alt="Dinojan Nagajohtheswaran"
                className="object-cover w-full h-full scale-150 object-center"
                style={{ objectPosition: "center 30%" }} 
              />
              <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                DN
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full border border-blue-200 dark:border-blue-800">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              ✨ Spécialiste Automatisation & Data
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {t('name')}
            </span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-slate-700 dark:text-slate-300 mb-6">
            {t('title')}
          </h2>

          <p className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text mb-12 font-medium">
            "{t('tagline')}"
          </p>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('bio')}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a href={cvFile} download target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
              >
                {t('downloadCV')}
              </Button>
            </a>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover-lift"
            >
              {t('contactMe')}
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-8 mb-16">
            <a
              href="https://www.linkedin.com/in/dinojan-nagajohtheswaran-99a745150/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Button variant="ghost" size="lg" className="group text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110">
                <Linkedin className="h-8 w-8" />
              </Button>
            </a>
            <a
              href="https://github.com/DinojanNAGAJOHTHESWARAN"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Button variant="ghost" size="lg" className="group text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110">
                <Github className="h-8 w-8" />
              </Button>
            </a>
            <a
              href="mailto:dnagajohtheswaran@gmail.com"
              aria-label="Email"
            >
              <Button variant="ghost" size="lg" className="group text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110">
                <Mail className="h-8 w-8" />
              </Button>
            </a>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToProjects}
            className="animate-bounce text-slate-400 hover:text-blue-600 transition-colors duration-300"
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
