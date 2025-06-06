
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Calendar, Target, Lightbulb, TrendingUp } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
      type: "Automatisation",
      gradient: "from-blue-500 to-cyan-500",
      duration: "3 mois",
      client: "ACE ÉNERGIE"
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
      gradient: "from-green-500 to-emerald-500",
      duration: "2 mois",
      client: "Entreprise confidentielle"
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
      gradient: "from-purple-500 to-pink-500",
      duration: "1 mois",
      client: "Équipe interne"
    }
  ];

  const project = projects.find(p => p.id === parseInt(id || ""));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            {language === "fr" ? "Projet non trouvé" : "Project not found"}
          </h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            {language === "fr" ? "Retour à l'accueil" : "Back to home"}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {language === "fr" ? "Retour aux projets" : "Back to projects"}
        </Button>

        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <Badge 
              variant="outline" 
              className={`text-transparent bg-gradient-to-r ${project.gradient} bg-clip-text border-blue-200 dark:border-blue-800 mb-4`}
            >
              {project.type}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {project.title[language]}
            </h1>
            <div className="flex justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {project.duration}
              </span>
              <span>•</span>
              <span>{project.client}</span>
            </div>
          </div>

          {/* Project details grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-effect border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <Lightbulb className="h-5 w-5 text-blue-600" />
                  {t('context')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.context[language]}
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <Target className="h-5 w-5 text-green-600" />
                  {t('objective')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.objective[language]}
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <ExternalLink className="h-5 w-5 text-purple-600" />
                  {language === "fr" ? "Approche" : "Approach"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.approach[language]}
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <TrendingUp className="h-5 w-5 text-emerald-600" />
                  {t('results')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium leading-relaxed">
                  {project.results[language]}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tools used */}
          <Card className="glass-effect border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white">
                {language === "fr" ? "Outils utilisés" : "Tools used"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
