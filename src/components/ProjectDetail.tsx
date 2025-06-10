import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Calendar, Target, Lightbulb, TrendingUp, Users, Zap, Database, AlertTriangle, CheckCircle2, Download, FileText } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const projects = [
    {
      id: 1,
      title: {
        en: "AI-driven Lead Scoring and Personalization Workflow for Malt",
        fr: "Workflow de Scoring de Leads et Personnalisation Piloté par l'IA pour Malt"
      },
      context: {
        en: "Malt approached us with a key challenge: how to increase its visibility and user engagement. Although the company already delivers high-value content through various channels (market studies, AI trend reports, and industry whitepapers), the personalization process is limited, conversion rates are suboptimal, and user data is fragmented across platforms. Additionally, there is a lack of consolidated metrics for campaign performance.",
        fr: "Malt nous a sollicités avec une problématique centrale : comment augmenter sa visibilité et renforcer l'adoption de sa plateforme par ses clients. Malgré la production régulière de contenus premium diffusés sur plusieurs canaux (études de marché, rapports IA, whitepapers sectoriels), le processus de personnalisation reste limité, les taux de conversion sont faibles, les données utilisateurs sont dispersées, et le suivi des campagnes manque de métriques consolidées."
      },
      objective: {
        en: "To enhance campaign efficiency and sales performance by automating lead qualification, scoring, and segmentation. This includes using AI to identify high-potential leads, optimizing marketing efforts, and providing a streamlined, data-driven handover to sales teams.",
        fr: "Améliorer l'efficacité des campagnes et les performances commerciales en automatisant la qualification, le scoring et la segmentation des leads. Il s'agit d'utiliser l'IA pour identifier les prospects à fort potentiel, optimiser les efforts marketing et assurer un passage fluide et basé sur les données vers les équipes commerciales."
      },
      approach: {
        en: `We built a group project with a clearly defined workflow that automates the lead scoring process using Make (Integromat). Data from Google Sheets—aggregating traffic, LinkedIn Ads, and Salesforce activity—is extracted and processed. The Mistral AI model scores leads based on custom rules, and updates are made in real-time.

The workflow includes:

• Real-time scoring and segmentation (1–3 tiers)
• Gmail for personalized email dispatch to prospects
• Calendly for automated scheduling of meetings with Sales
• Slack notifications to Sales teams regarding high-quality leads and booked meetings

These systems communicate seamlessly to reduce manual operations and improve commercial reactivity.`,
        fr: `Ce projet de groupe a été conçu avec un workflow précis pour automatiser le scoring des leads à l'aide de Make (Integromat). Les données issues de Google Sheets – centralisant le trafic, les campagnes LinkedIn Ads et les interactions sur Salesforce – sont extraites et traitées. L'IA Mistral attribue un score aux leads selon des règles prédéfinies, avec des mises à jour en temps réel.

Le processus inclut :

• Un scoring en temps réel avec segmentation en 3 niveaux
• L'envoi d'e-mails personnalisés via Gmail
• La prise de rendez-vous automatisée avec Calendly
• Des notifications sur Slack à destination des équipes Sales concernant les leads à fort potentiel et les réunions planifiées`
      },
      results: {
        en: "Real-time, AI-powered scoring of leads\nDrastically improved prioritization of high-quality prospects\nEnhanced coordination between marketing and sales\nTime savings and reduced manual tasks\nCentralized and cleaned data improving reporting capabilities",
        fr: "Scoring des leads automatisé et piloté par IA en temps réel\nPriorisation fortement améliorée des prospects à fort potentiel\nCoordination renforcée entre marketing et Sales\nGain de temps et réduction des tâches manuelles\nDonnées centralisées et nettoyées, facilitant le reporting"
      },
      tools: [
        "Make (Integromat)",
        "Google Sheets",
        "Mistral AI",
        "Salesforce",
        "LinkedIn Ads",
        "Gmail",
        "Calendly",
        "Slack",
        "Notion"
      ],
      type: "Marketing Automation / Data Integration / AI-assisted Sales Enablement",
      gradient: "from-indigo-500 to-blue-600",
      duration: "4 semaines",
      client: "Malt",
      images: [
        {
          url: "https://images.unsplash.com/photo-1581092580505-988d7b6dcf9e?w=1200&h=600&fit=crop",
          title: {
            en: "AI-Powered Analytics Dashboard",
            fr: "Tableau de Bord Analytics Alimenté par IA"
          }
        },
        {
          url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop",
          title: {
            en: "Data Integration Architecture",
            fr: "Architecture d'Intégration de Données"
          }
        },
        {
          url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
          title: {
            en: "Automated Workflow Engine",
            fr: "Moteur de Workflow Automatisé"
          }
        },
        {
          url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&h=600&fit=crop",
          title: {
            en: "Real-time Processing System",
            fr: "Système de Traitement en Temps Réel"
          }
        }
      ]
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
      client: "Entreprise confidentielle",
      heroImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop",
      workflowImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop"
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
      client: "Équipe interne",
      heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop",
      workflowImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop"
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
      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate("/")}
            className="glass-effect border-0 shadow-lg hover-lift"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {language === "fr" ? "Retour aux projets" : "Back to projects"}
          </Button>
          
          <div className="flex items-center gap-4">
            <Badge 
              variant="outline" 
              className={`text-transparent bg-gradient-to-r ${project.gradient} bg-clip-text border-blue-200 dark:border-blue-800 px-6 py-2 text-sm font-medium`}
            >
              {project.type}
            </Badge>
          </div>
        </div>

        {/* Dashboard Header */}
        <div className="mb-12">
          <div className="relative bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 rounded-3xl p-8 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {project.title[language]}
              </h1>
              <div className="flex flex-wrap gap-6 text-lg">
                <div className="flex items-center gap-3 bg-white/20 rounded-full px-4 py-2">
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">{project.duration}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/20 rounded-full px-4 py-2">
                  <Users className="h-5 w-5" />
                  <span className="font-medium">{project.client}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="space-y-8">
          {/* Situation & Problem Analysis Row */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Situation/Context Card */}
            <Card className="glass-effect border-0 shadow-xl hover-lift group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-4 text-slate-900 dark:text-white text-xl">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
                      {language === "fr" ? "Situation" : "Situation"}
                    </span>
                    <div className="text-lg font-bold">
                      {t('context')}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                  {project.context[language]}
                </p>
              </CardContent>
            </Card>

            {/* Problem/Objective Card */}
            <Card className="glass-effect border-0 shadow-xl hover-lift group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-600"></div>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-4 text-slate-900 dark:text-white text-xl">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 shadow-lg">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-orange-600 dark:text-orange-400 font-semibold">
                      {language === "fr" ? "Problématique" : "Problem"}
                    </span>
                    <div className="text-lg font-bold">
                      {t('objective')}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                  {project.objective[language]}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Visual Gallery for Project 1 */}
          {project.id === 1 && project.images && (
            <Card className="glass-effect border-0 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-slate-900 dark:text-white text-2xl font-bold flex items-center justify-center gap-3">
                  <Database className="h-7 w-7 text-indigo-600" />
                  {language === "fr" ? "Architecture & Visualisations" : "Architecture & Visualizations"}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {project.images.map((image, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                      <img 
                        src={image.url} 
                        alt={image.title[language]}
                        className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white text-lg font-semibold">
                          {image.title[language]}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Hero Image for other projects */}
          {project.id !== 1 && (
            <Card className="glass-effect border-0 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
              <img 
                src={project.heroImage} 
                alt={project.title[language]}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h2 className="text-white text-xl md:text-2xl font-bold">
                  {language === "fr" ? "Aperçu du projet" : "Project Overview"}
                </h2>
              </div>
            </Card>
          )}

          {/* Solution/Approach Section */}
          <Card className="glass-effect border-0 shadow-xl hover-lift group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600"></div>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-4 text-slate-900 dark:text-white text-xl">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-purple-600 dark:text-purple-400 font-semibold">
                    {language === "fr" ? "Solution" : "Solution"}
                  </span>
                  <div className="text-lg font-bold">
                    {language === "fr" ? "Approche & Méthodologie" : "Approach & Methodology"}
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="text-slate-700 dark:text-slate-300 leading-relaxed text-base space-y-4">
                {project.approach[language].split('\n\n').map((paragraph, index) => (
                  <p key={index} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Results & Impact Section */}
          <Card className="glass-effect border-0 shadow-xl hover-lift group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-green-600"></div>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-4 text-slate-900 dark:text-white text-xl">
                <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                    {language === "fr" ? "Impact" : "Impact"}
                  </span>
                  <div className="text-lg font-bold">
                    {t('results')}
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="space-y-4">
                {project.results[language].split('\n').map((result, index) => (
                  <div key={index} className="flex items-start gap-4 group/item">
                    <div className="p-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-emerald-700 dark:text-emerald-300 font-medium leading-relaxed text-base">
                      {result}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technical Architecture for other projects */}
          {project.id !== 1 && project.workflowImage && (
            <Card className="glass-effect border-0 shadow-xl overflow-hidden hover-lift relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-4 text-slate-900 dark:text-white text-xl">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 shadow-lg">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
                      {language === "fr" ? "Architecture" : "Architecture"}
                    </span>
                    <div className="text-lg font-bold">
                      {language === "fr" ? "Infrastructure technique" : "Technical Infrastructure"}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <img 
                  src={project.workflowImage} 
                  alt={language === "fr" ? "Architecture du projet" : "Project Architecture"}
                  className="w-full h-48 md:h-64 object-cover"
                />
              </CardContent>
            </Card>
          )}

          {/* Technologies & Tools */}
          <Card className="glass-effect border-0 shadow-xl hover-lift relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-500 to-slate-600"></div>
            <CardHeader className="pb-6">
              <CardTitle className="text-slate-900 dark:text-white text-2xl font-bold text-center flex items-center justify-center gap-3">
                <Zap className="h-7 w-7 text-slate-600" />
                {language === "fr" ? "Stack Technologique" : "Technology Stack"}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {project.tools.map((tool) => (
                  <Badge 
                    key={tool} 
                    variant="secondary" 
                    className="px-4 py-3 bg-gradient-to-br from-slate-100 via-slate-50 to-white dark:from-slate-800 dark:via-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-200 text-center justify-center hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200 dark:border-slate-600 text-sm font-medium"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Documentation & Resources for Project 1 */}
          {project.id === 1 && (
            <Card className="glass-effect border-0 shadow-xl hover-lift relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
              <CardHeader className="pb-6">
                <CardTitle className="text-slate-900 dark:text-white text-2xl font-bold text-center flex items-center justify-center gap-3">
                  <FileText className="h-7 w-7 text-cyan-600" />
                  {language === "fr" ? "Documentation & Ressources" : "Documentation & Resources"}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <a 
                    href="https://judicious-profit-bcc.notion.site/Premier-rendu-Team-10-1a600279629f80b488e2c7d134b200e2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden"
                  >
                    <div className="flex items-center justify-center px-6 py-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-blue-500/20">
                      <div className="text-center">
                        <ExternalLink className="w-8 h-8 mx-auto mb-3 group-hover:rotate-12 transition-transform" />
                        <span className="font-semibold text-lg block">
                          {language === "fr" ? "Documentation Complète" : "Complete Documentation"}
                        </span>
                        <span className="text-blue-100 text-sm mt-1 block">
                          {language === "fr" ? "Voir sur Notion" : "View on Notion"}
                        </span>
                      </div>
                    </div>
                  </a>
            
                  <a 
                    href="/Rendu_Malt.pdf" 
                    download 
                    className="group relative overflow-hidden"
                  >
                    <div className="flex items-center justify-center px-6 py-8 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-green-500/20">
                      <div className="text-center">
                        <Download className="w-8 h-8 mx-auto mb-3 group-hover:translate-y-1 transition-transform" />
                        <span className="font-semibold text-lg block">
                          {language === "fr" ? "Présentation PDF" : "PDF Presentation"}
                        </span>
                        <span className="text-green-100 text-sm mt-1 block">
                          {language === "fr" ? "Télécharger" : "Download"}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
