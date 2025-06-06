import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const { t, language } = useLanguage();

  const techStacks = [
    {
      category: { fr: "Automatisation", en: "Automation" },
      tools: ["Make", "Zapier", "Notion", "Airtable", "n8n"],
      gradient: "from-blue-500 to-cyan-500",
      icon: "🔄"
    },
    {
      category: { fr: "Data / BI", en: "Data / BI" },
      tools: ["Power BI", "Google Sheets", "SQL", "Dataiku", "Excel"],
      gradient: "from-green-500 to-emerald-500",
      icon: "📊"
    },
    {
      category: { fr: "Développement", en: "Development" },
      tools: ["Python", "APIs", "JavaScript", "HTML/CSS", "Git"],
      gradient: "from-purple-500 to-pink-500",
      icon: "💻"
    },
    {
      category: { fr: "Marketing Digital", en: "Digital Marketing" },
      tools: ["HubSpot", "Google Analytics", "Marketing Automation", "Looker", "Lead Generation"],
      gradient: "from-orange-500 to-red-500",
      icon: "🎯"
    }
  ];

  return (
    <section id="skills" className="py-32 px-4 bg-slate-50/50 dark:bg-slate-900/50 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t('skillsTitle')}
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {t('skillsSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {techStacks.map((stack, index) => (
            <Card
              key={index}
              className="glass-effect hover-lift border-0 shadow-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Colored header bar */}
              <div className={`h-2 bg-gradient-to-r ${stack.gradient}`}></div>

              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
                  <span className="text-3xl mr-4">{stack.icon}</span>
                  <span className="bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                    {stack.category[language]}
                  </span>
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-wrap gap-3">
                {stack.tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="text-sm">
                    {tool}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Optional: Stats or other section can go here */}
      </div>
    </section>
  );
};

export default Skills;
