import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowLeft, ExternalLink, Calendar, Target, Lightbulb, TrendingUp, Users, Zap, Database } from "lucide-react";

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
        en: `We built a group project with a clearly defined workflow that automates the lead scoring process using Make (Integromat). Data from Google Sheets—aggregating traffic, LinkedIn Ads, and Salesforce activity—is extracted and processed. The Mistral AI model scores leads based on custom rules, and updates are made in real-time.\n\nThe workflow includes:\n\n- Real-time scoring and segmentation (1–3 tiers)\n- Gmail for personalized email dispatch to prospects\n- Calendly for automated scheduling of meetings with Sales\n- Slack notifications to Sales teams regarding high-quality leads and booked meetings\n\nThese systems communicate seamlessly to reduce manual operations and improve commercial reactivity.\n\n[View Project Details](https://judicious-profit-bcc.notion.site/Premier-rendu-Team-10-1a600279629f80b488e2c7d134b200e2)`,
        fr: `Ce projet de groupe a été conçu avec un workflow précis pour automatiser le scoring des leads à l'aide de Make (Integromat). Les données issues de Google Sheets – centralisant le trafic, les campagnes LinkedIn Ads et les interactions sur Salesforce – sont extraites et traitées. L'IA Mistral attribue un score aux leads selon des règles prédéfinies, avec des mises à jour en temps réel.\n\nLe processus inclut :\n\n- Un scoring en temps réel avec segmentation en 3 niveaux\n- L'envoi d'e-mails personnalisés via Gmail\n- La prise de rendez-vous automatisée avec Calendly\n- Des notifications sur Slack à destination des équipes Sales concernant les leads à fort potentiel et les réunions planifiées\n\n[Voir le projet complet](https://judicious-profit-bcc.notion.site/Premier-rendu-Team-10-1a600279629f80b488e2c7d134b200e2)`
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
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate("/")}
          className="mb-8 glass-effect border-0 shadow-lg hover-lift"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {language === "fr" ? "Retour aux projets" : "Back to projects"}
        </Button>

        <div className="space-y-12">
          {/* Enhanced Header with gradient background */}
          <div className="text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative z-10 py-12">
              <Badge 
                variant="outline" 
                className={`text-transparent bg-gradient-to-r ${project.gradient} bg-clip-text border-blue-200 dark:border-blue-800 mb-6 text-lg px-6 py-2`}
              >
                {project.type}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                {project.title[language]}
              </h1>
              <div className="flex justify-center gap-6 text-lg text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  {project.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-500" />
                  {project.client}
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Image Carousel for first project */}
          {project.id === 1 && project.images && (
            <Card className="glass-effect border-0 shadow-2xl overflow-hidden">
              <CardHeader className="text-center pb-0">
                <CardTitle className="text-slate-900 dark:text-white text-2xl">
                  {language === "fr" ? "Galerie du Projet" : "Project Gallery"}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <Carousel className="w-full max-w-4xl mx-auto">
                  <CarouselContent>
                    {project.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative group">
                          <img 
                            src={image.url} 
                            alt={image.title[language]}
                            className="w-full h-96 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl"></div>
                          <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-white text-xl font-bold">
                              {image.title[language]}
                            </h3>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="glass-effect border-0 shadow-lg" />
                  <CarouselNext className="glass-effect border-0 shadow-lg" />
                </Carousel>
              </CardContent>
            </Card>
          )}

          {/* Fallback hero image for other projects */}
          {project.id !== 1 && (
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={project.heroImage} 
                alt={project.title[language]}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h2 className="text-white text-xl md:text-2xl font-bold">
                  {language === "fr" ? "Aperçu du projet" : "Project Overview"}
                </h2>
              </div>
            </div>
          )}

          {/* Enhanced project details grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="glass-effect border-0 shadow-xl hover-lift group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  {t('context')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  {project.context[language]}
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0 shadow-xl hover-lift group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  {t('objective')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  {project.objective[language]}
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0 shadow-xl hover-lift group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  {language === "fr" ? "Approche" : "Approach"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg whitespace-pre-line">
                  {project.approach[language]}
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0 shadow-xl hover-lift group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  {t('results')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {project.results[language].split('\n').map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-emerald-600 dark:text-emerald-400 font-medium leading-relaxed">
                        {result}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced workflow image for other projects */}
          {project.id !== 1 && project.workflowImage && (
            <Card className="glass-effect border-0 shadow-xl overflow-hidden hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  {language === "fr" ? "Architecture technique" : "Technical Architecture"}
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

          {/* Enhanced tools section */}
          <Card className="glass-effect border-0 shadow-xl hover-lift">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white text-2xl">
                {language === "fr" ? "Technologies & Outils" : "Technologies & Tools"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {project.tools.map((tool) => (
                  <Badge 
                    key={tool} 
                    variant="secondary" 
                    className="px-4 py-3 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 text-slate-700 dark:text-slate-300 text-center justify-center hover:scale-105 transition-transform duration-200 shadow-lg"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Enhanced external resources for first project */}
          {project.id === 1 && (
            <Card className="glass-effect border-0 shadow-xl hover-lift">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white text-2xl">
                  {language === "fr" ? "Ressources & Documentation" : "Resources & Documentation"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <a 
                    href="https://judicious-profit-bcc.notion.site/Premier-rendu-Team-10-1a600279629f80b488e2c7d134b200e2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <ExternalLink className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                    <span className="font-medium">
                      {language === "fr" ? "Documentation Complète" : "Complete Documentation"}
                    </span>
                  </a>
            
                  <a 
                    href="/Rendu_Malt.pdf" 
                    download 
                    className="group flex items-center justify-center px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <ArrowLeft className="w-5 h-5 rotate-90 mr-3 group-hover:translate-y-1 transition-transform" />
                    <span className="font-medium">
                      {language === "fr" ? "Présentation PDF" : "PDF Presentation"}
                    </span>
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
