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
        en: "AI-driven Lead Scoring and Personalization Workflow for Malt",
        fr: "Workflow de Scoring de Leads et Personnalisation Piloté par l’IA pour Malt"
      },
      context: {
        en: "Malt approached us with a key challenge: how to increase its visibility and user engagement. Although the company already delivers high-value content through various channels (market studies, AI trend reports, and industry whitepapers), the personalization process is limited, conversion rates are suboptimal, and user data is fragmented across platforms. Additionally, there is a lack of consolidated metrics for campaign performance.",
        fr: "Malt nous a sollicités avec une problématique centrale : comment augmenter sa visibilité et renforcer l’adoption de sa plateforme par ses clients. Malgré la production régulière de contenus premium diffusés sur plusieurs canaux (études de marché, rapports IA, whitepapers sectoriels), le processus de personnalisation reste limité, les taux de conversion sont faibles, les données utilisateurs sont dispersées, et le suivi des campagnes manque de métriques consolidées."
      },
      objective: {
        en: "To enhance campaign efficiency and sales performance by automating lead qualification, scoring, and segmentation. This includes using AI to identify high-potential leads, optimizing marketing efforts, and providing a streamlined, data-driven handover to sales teams.",
        fr: "Améliorer l'efficacité des campagnes et les performances commerciales en automatisant la qualification, le scoring et la segmentation des leads. Il s’agit d’utiliser l’IA pour identifier les prospects à fort potentiel, optimiser les efforts marketing et assurer un passage fluide et basé sur les données vers les équipes commerciales."
      },
      approach: {
        en: "We built a group project with a clearly defined workflow that automates the lead scoring process using Make (Integromat). Data from Google Sheets—aggregating traffic, LinkedIn Ads, and Salesforce activity—is extracted and processed. The Mistral AI model scores leads based on custom rules, and updates are made in real-time. The workflow includes: real-time scoring and segmentation (1–3 tiers), Gmail for personalized email dispatch to prospects, Calendly for automated scheduling of meetings with Sales, Slack notifications to Sales teams regarding high-quality leads and booked meetings. These systems communicate seamlessly to reduce manual operations and improve commercial reactivity.",
        fr: "Ce projet de groupe a été conçu avec un workflow précis pour automatiser le scoring des leads à l’aide de Make (Integromat). Les données issues de Google Sheets – centralisant le trafic, les campagnes LinkedIn Ads et les interactions sur Salesforce – sont extraites et traitées. L’IA Mistral attribue un score aux leads selon des règles prédéfinies, avec des mises à jour en temps réel. Le processus inclut : un scoring en temps réel avec segmentation en 3 niveaux, l’envoi d’e-mails personnalisés via Gmail, la prise de rendez-vous automatisée avec Calendly, des notifications sur Slack à destination des équipes Sales concernant les leads à fort potentiel et les réunions planifiées."
      },
      results: {
        en: "Real-time, AI-powered scoring of leads. Drastically improved prioritization of high-quality prospects. Enhanced coordination between marketing and sales. Time savings and reduced manual tasks. Centralized and cleaned data improving reporting capabilities.",
        fr: "Scoring des leads automatisé et piloté par IA en temps réel. Priorisation fortement améliorée des prospects à fort potentiel. Coordination renforcée entre marketing et Sales. Gain de temps et réduction des tâches manuelles. Données centralisées et nettoyées, facilitant le reporting."
      },
      tools: [
        "Make",
        "Google Sheets",
        "Mistral AI",
        "Salesforce",
        "LinkedIn Ads",
        "Gmail",
        "Calendly",
        "Slack",
        "Notion"
      ],
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
              {/* Header avec gradient */}
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
