
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    home: "Accueil",
    projects: "Projets",
    skills: "Compétences",
    experience: "Expérience",
    contact: "Contact",
    
    // Hero section
    name: "Dinojan Nagajohtheswaran",
    title: "Chargé d'automatisation – Data & Business",
    tagline: "Je conçois des solutions automatisées qui boostent la productivité des équipes data et marketing.",
    bio: "Étudiant en MSc \"AI Applied to Business\" à Eugenia School, je combine des compétences en automatisation, no-code et data pour créer des systèmes efficaces, pilotés par la donnée. Actuellement en alternance chez ACE ÉNERGIE, j'automatise des process business complexes à l'aide d'outils comme Make, Zapier, Notion et Airtable.",
    downloadCV: "Télécharger mon CV",
    contactMe: "Me contacter",
    
    // Projects section
    projectsTitle: "Mes Projets",
    projectsSubtitle: "Découvrez mes réalisations en automatisation et data business",
    context: "Contexte",
    objective: "Objectif",
    approach: "Approche & Outils",
    results: "Résultats",
    learned: "Apprentissages",
    
    // Skills section
    skillsTitle: "Compétences & Outils",
    skillsSubtitle: "Mon expertise technique et no-code",
    automation: "Automatisation",
    dataViz: "Data & Visualisation",
    development: "Développement",
    marketing: "CRM / Marketing",
    creative: "Outils créatifs",
    
    // Experience section
    experienceTitle: "Expérience & Formation",
    experienceSubtitle: "Mon parcours professionnel et académique",
    current: "Actuellement",
    present: "Aujourd'hui",
    
    // Contact section
    contactTitle: "Contactez-moi",
    contactSubtitle: "Discutons de vos projets d'automatisation",
    name_field: "Nom",
    email_field: "Email",
    message_field: "Message",
    send: "Envoyer",
    
    // Footer
    rights: "Tous droits réservés",
    
    // Theme
    lightMode: "Mode clair",
    darkMode: "Mode sombre"
  },
  en: {
    // Navigation
    home: "Home",
    projects: "Projects",
    skills: "Skills",
    experience: "Experience",
    contact: "Contact",
    
    // Hero section
    name: "Dinojan Nagajohtheswaran",
    title: "Automation Specialist – Data & Business",
    tagline: "I design automated solutions that boost data and marketing teams' productivity.",
    bio: "MSc student in \"AI Applied to Business\" at Eugenia School, I combine automation, no-code, and data skills to create efficient, data-driven systems. Currently working as an intern at ACE ÉNERGIE, I automate complex business processes using tools like Make, Zapier, Notion, and Airtable.",
    downloadCV: "Download my CV",
    contactMe: "Contact me",
    
    // Projects section
    projectsTitle: "My Projects",
    projectsSubtitle: "Discover my achievements in automation and data business",
    context: "Context",
    objective: "Objective",
    approach: "Approach & Tools",
    results: "Results",
    learned: "What I learned",
    
    // Skills section
    skillsTitle: "Skills & Tools",
    skillsSubtitle: "My technical and no-code expertise",
    automation: "Automation",
    dataViz: "Data & Visualization",
    development: "Development",
    marketing: "CRM / Marketing",
    creative: "Creative Tools",
    
    // Experience section
    experienceTitle: "Experience & Education",
    experienceSubtitle: "My professional and academic journey",
    current: "Currently",
    present: "Present",
    
    // Contact section
    contactTitle: "Contact me",
    contactSubtitle: "Let's discuss your automation projects",
    name_field: "Name",
    email_field: "Email",
    message_field: "Message",
    send: "Send",
    
    // Footer
    rights: "All rights reserved",
    
    // Theme
    lightMode: "Light mode",
    darkMode: "Dark mode"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
