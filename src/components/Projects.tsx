
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      id: 1,
      title: {
        fr: "Automatisation CRM avec Make & Airtable",
        en: "CRM Automation with Make & Airtable"
      },
      context: {
        fr: "ACE ÉNERGIE avait besoin d'automatiser la gestion de leurs leads commerciaux pour optimiser le processus de vente.",
        en: "ACE ÉNERGIE needed to automate their sales lead management to optimize the sales process."
      },
      objective: {
        fr: "Créer un workflow automatisé qui synchronise les leads entre différentes plateformes et déclenche des actions personnalisées.",
        en: "Create an automated workflow that synchronizes leads between different platforms and triggers personalized actions."
      },
      approach: {
        fr: "Utilisation de Make pour créer des scénarios complexes, Airtable comme base de données centralisée, et intégration avec HubSpot.",
        en: "Used Make to create complex scenarios, Airtable as a centralized database, and integration with HubSpot."
      },
      results: {
        fr: "Réduction de 70% du temps de traitement des leads et amélioration de 45% du taux de conversion.",
        en: "70% reduction in lead processing time and 45% improvement in conversion rate."
      },
      tools: ["Make", "Airtable", "HubSpot", "Zapier"],
      type: "Automatisation"
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
      type: "Data Analysis"
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
      type: "Communication"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {t('projectsTitle')}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('projectsSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    {project.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {project.title[language]}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">{t('context')}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{project.context[language]}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">{t('objective')}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{project.objective[language]}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">{t('results')}</h4>
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium">{project.results[language]}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full mt-4 group-hover:bg-blue-50 dark:group-hover:bg-blue-950">
                  Voir le projet
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
