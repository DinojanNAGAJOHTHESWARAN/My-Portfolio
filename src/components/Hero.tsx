
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {t('name')}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-8">
            {t('title')}
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-8 font-medium">
            "{t('tagline')}"
          </p>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('bio')}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold"
            >
              {t('downloadCV')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 px-8 py-3 text-lg font-semibold"
            >
              {t('contactMe')}
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
