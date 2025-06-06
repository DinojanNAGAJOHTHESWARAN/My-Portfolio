import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const { language } = useLanguage();

  const categories = [
    {
      title: {
        fr: "Automatisation",
        en: "Automation"
      },
      icon: "🔄",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Make", level: 90 },
        { name: "Zapier", level: 90 },
        { name: "Notion", level: 80 },
        { name: "Airtable", level: 48 },
        { name: "n8n", level: 59 }
      ]
    },
    {
      title: {
        fr: "Datavisualisation",
        en: "Data Visualization"
      },
      icon: "📊",
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Google Sheets", level: 95 },
        { name: "SQL", level: 80 },
        { name: "Dataiku", level: 70 },
        { name: "Excel", level: 95 }
      ]
    },
    {
      title: {
        fr: "Développement",
        en: "Development"
      },
      icon: "💻",
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "Python", level: 80 },
        { name: "APIs", level: 85 },
        { name: "JavaScript", level: 30 },
        { name: "HTML/CSS", level: 80 },
        { name: "Git", level: 50 }
      ]
    },
    {
      title: {
        fr: "Marketing Digital",
        en: "Digital Marketing"
      },
      icon: "🎯",
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "HubSpot", level: 88 },
        { name: "Google Analytics", level: 85 },
        { name: "Marketing Automation", level: 90 },
        { name: "Looker", level: 65 },
        { name: "Lead Generation", level: 70 }
      ]
    }
  ];

  const stats = [
    {
      number: "50+",
      label: {
        fr: "Automatisations créées",
        en: "Automations created"
      },
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      number: "15+",
      label: {
        fr: "Projets complétés",
        en: "Projects completed"
      },
      gradient: "from-green-500 to-emerald-500"
    },
    {
      number: "70%",
      label: {
        fr: "Gain de productivité moyen",
        en: "Average productivity gain"
      },
      gradient: "from-purple-500 to-pink-500"
    },
    {
      number: "3",
      label: {
        fr: "Années d'expérience",
        en: "Years of experience"
      },
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-32 px-4 bg-slate-50/50 dark:bg-slate-900/50 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {language === "fr" ? "Compétences" : "Skills"}
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {language === "fr"
              ? "Voici les outils et technologies que je maîtrise"
              : "Here are the tools and technologies I master"}
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {categories.map((cat, index) => (
            <Card
              key={index}
              className="glass-effect hover-lift border-0 shadow-xl animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${cat.gradient}`}></div>

              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
                  <span className="text-3xl mr-4">{cat.icon}</span>
                  <span className="bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                    {cat.title[language]}
                  </span>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                {cat.skills.map((skill, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <Progress
                        value={skill.level}
                        className="h-3 bg-slate-200 dark:bg-slate-700"
                      />
                      <div
                        className={`absolute top-0 left-0 h-3 bg-gradient-to-r ${cat.gradient} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div
                className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.number}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                {stat.label[language]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
