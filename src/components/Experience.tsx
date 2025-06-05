
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const { t, language } = useLanguage();

  const experiences = [
    {
      type: "work",
      title: {
        fr: "Chargé d'automatisation",
        en: "Automation Specialist"
      },
      company: "ACE ÉNERGIE",
      location: "Paris, France",
      period: {
        fr: "2024 - Aujourd'hui",
        en: "2024 - Present"
      },
      description: {
        fr: "Automatisation des processus business complexes, développement de workflows avec Make et Zapier, optimisation des systèmes CRM et création de dashboards analytiques.",
        en: "Automation of complex business processes, workflow development with Make and Zapier, CRM systems optimization and analytical dashboards creation."
      },
      skills: ["Make", "Zapier", "Airtable", "HubSpot", "Power BI"]
    },
    {
      type: "work",
      title: {
        fr: "Chef de projet numérique",
        en: "Digital Project Manager"
      },
      company: "DICOM - Ministère de l'Intérieur",
      location: "Paris, France",
      period: {
        fr: "2024",
        en: "2024"
      },
      description: {
        fr: "Gestion de projets de transformation numérique, coordination d'équipes multidisciplinaires et optimisation des processus internes.",
        en: "Digital transformation project management, multidisciplinary team coordination and internal process optimization."
      },
      skills: ["Gestion de projet", "Transformation digitale", "Coordination", "Process"]
    },
    {
      type: "work",
      title: {
        fr: "Chargé de marketing digital",
        en: "Digital Marketing Specialist"
      },
      company: "I-Shooting",
      location: "Paris, France",
      period: {
        fr: "2023",
        en: "2023"
      },
      description: {
        fr: "Développement de stratégies marketing digitales, automatisation des campagnes et analyse des performances avec Google Analytics.",
        en: "Digital marketing strategy development, campaign automation and performance analysis with Google Analytics."
      },
      skills: ["Marketing Digital", "Google Analytics", "Automatisation", "SEO"]
    }
  ];

  const education = [
    {
      title: {
        fr: "MSc AI Applied to Business",
        en: "MSc AI Applied to Business"
      },
      school: "Eugenia School",
      period: {
        fr: "2024 - 2026",
        en: "2024 - 2026"
      },
      description: {
        fr: "Formation spécialisée en intelligence artificielle appliquée au business, avec focus sur l'automatisation et l'analyse de données.",
        en: "Specialized training in artificial intelligence applied to business, with focus on automation and data analysis."
      }
    },
    {
      title: {
        fr: "BUT Marketing Digital",
        en: "BUT Digital Marketing"
      },
      school: "Paris Sorbonne Nord",
      period: {
        fr: "2021 - 2024",
        en: "2021 - 2024"
      },
      description: {
        fr: "Formation complète en marketing digital, data analytics et outils no-code pour l'automatisation marketing.",
        en: "Complete training in digital marketing, data analytics and no-code tools for marketing automation."
      }
    },
    {
      title: {
        fr: "Licence de Droit",
        en: "Law Degree"
      },
      school: "Paris II Assas",
      period: {
        fr: "2019 - 2021",
        en: "2019 - 2021"
      },
      description: {
        fr: "Formation juridique solide avec développement des compétences analytiques et de résolution de problèmes.",
        en: "Solid legal training with development of analytical and problem-solving skills."
      }
    }
  ];

  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {t('experienceTitle')}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('experienceSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience professionnelle */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Expérience Professionnelle
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg font-bold text-slate-900 dark:text-white">
                          {exp.title[language]}
                        </CardTitle>
                        <CardDescription className="text-blue-600 dark:text-blue-400 font-medium">
                          {exp.company} • {exp.location}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="text-slate-600 border-slate-300">
                        {exp.period[language]}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {exp.description[language]}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Formation */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Formation
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg font-bold text-slate-900 dark:text-white">
                          {edu.title[language]}
                        </CardTitle>
                        <CardDescription className="text-green-600 dark:text-green-400 font-medium">
                          {edu.school}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="text-slate-600 border-slate-300">
                        {edu.period[language]}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400">
                      {edu.description[language]}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
