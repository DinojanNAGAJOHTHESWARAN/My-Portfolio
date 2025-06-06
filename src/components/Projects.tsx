import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: {
        en: "AI-powered Lead Scoring for Malt",
        fr: "Scoring de Leads par IA pour Malt"
      },
      context: {
        en: "Malt needed to improve lead conversion and unify fragmented marketing data across platforms.",
        fr: "Malt devait améliorer la conversion des leads et centraliser des données marketing dispersées."
      },
      objective: {
        en: "Automate lead scoring and segmentation to boost campaign performance and sales handover.",
        fr: "Automatiser le scoring et la segmentation pour améliorer les campagnes et le transfert aux Sales."
      },
      approach: {
        en: "Built an AI-driven workflow using Make, Mistral AI, and Google Sheets, with real-time updates and Slack alerts.",
        fr: "Création d’un workflow IA avec Make, Mistral AI et Google Sheets, mises à jour en temps réel et alertes Slack."
      },
      results: {
        en: "Cut lead qualification time by 50%, increased conversion rate by 30%, and improved Sales-Marketing alignment.",
        fr: "Réduction du temps de qualification des leads de 50%, augmentation du taux de conversion de 30%, meilleure synergie Sales-Marketing."
      },
      tools: ["Make", "Google Sheets", "Mistral AI", "Slack", "Salesforce", "Calendly"],
      type: "Marketing Automation",
      gradient: "from-rose-500 to-orange-500"
    },
    {
      id: 2,
      title: {
        fr: "Dashboard Analytics avec Power BI",
        en: "Analytics Dashboard with Power BI"
      },
      context: {
        fr: "Besoin de visualiser les KPIs business en temps réel pour faciliter la prise de décision stratégique.",
        en: "Need to visualize business KPIs in real-time to facilitate strategic decision-making."
      },
      objective: {
        fr: "Développer un tableau de bord interactif qui centralise toutes les métriques importantes de l'entreprise.",
        en: "Develop an interactive dashboard that centralizes all important company metrics."
      },
      approach: {
        fr: "Connexion de multiples sources de données avec Power BI, création de visualisations dynamiques et mise en place d'alertes automatiques.",
        en: "Connected multiple data sources with Power BI, created dynamic visualizations and set up automatic alerts."
      },
      results: {
        fr: "Amélioration de 60% de la vitesse de prise de décision et identification de 3 nouveaux leviers de croissance.",
        en: "60% improvement in decision-making speed and identification of 3 new growth levers."
      },
      tools: ["Power BI", "SQL", "Excel", "Python"],
      type: "Data Analysis",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: {
        fr: "Système de notification Notion/Slack",
        en: "Notion/Slack notification system"
      },
      context: {
        fr: "L'équipe avait besoin d'un système de notification intelligent pour les projets critiques dans Notion.",
        en: "The team needed an intelligent notification system for critical projects in Notion."
      },
      objective: {
        fr: "Automatiser les notifications Slack basées sur les changements de statut dans Notion avec des règles personnalisées.",
        en: "Automate Slack notifications based on status changes in Notion with custom rules."
      },
      approach: {
        fr: "Intégration Notion API avec Zapier, création de webhooks personnalisés et logique conditionnelle avancée.",
        en: "Notion API integration with Zapier, custom webhooks creation and advanced conditional logic."
      },
      results: {
        fr: "Réduction de 80% des retards de communication et amélioration de la réactivité d'équipe.",
        en: "80% reduction in communication delays and improved team responsiveness."
      },
      tools: ["Notion", "Slack", "Zapier", "API"],
      type: "Communication",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const handleProjectClick = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t('projectsTitle')}
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {t('projectsSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group glass-effect hover-lift border-0 shadow-xl overflow-hidden animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <Badge 
                    variant="outline" 
                    className={`text-transparent bg-gradient-to-r ${project.gradient} bg-clip-text border-blue-200 dark:border-blue-800`}
                  >
                    {project.type}
                  </Badge>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="h-4 w-4 text-slate-400" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {project.title[language]}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3 text-sm uppercase tracking-wider">
                    {t('context')}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.context[language]}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3 text-sm uppercase tracking-wider">
                    {t('objective')}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.objective[language]}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3 text-sm uppercase tracking-wider">
                    {t('results')}
                  </h4>
                  <p className="text-sm font-medium bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {project.results[language]}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {tool}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-6 group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-indigo-50 dark:group-hover:from-blue-950 dark:group-hover:to-indigo-950 transition-all duration-300 border-blue-200 dark:border-blue-800"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProjectClick(project.id);
                  }}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {language === "fr" ? "Voir le projet" : "View project"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
