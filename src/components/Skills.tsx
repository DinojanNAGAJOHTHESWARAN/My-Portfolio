
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      category: t('automation'),
      skills: [
        { name: "Make", level: 95 },
        { name: "Zapier", level: 90 },
        { name: "Notion", level: 88 },
        { name: "Airtable", level: 85 },
        { name: "n8n", level: 75 }
      ],
      color: "bg-blue-500"
    },
    {
      category: t('dataViz'),
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Google Sheets", level: 90 },
        { name: "SQL", level: 80 },
        { name: "Dataiku", level: 70 },
        { name: "Excel", level: 95 }
      ],
      color: "bg-green-500"
    },
    {
      category: t('development'),
      skills: [
        { name: "Python", level: 75 },
        { name: "APIs", level: 85 },
        { name: "JavaScript", level: 70 },
        { name: "HTML/CSS", level: 80 },
        { name: "Git", level: 75 }
      ],
      color: "bg-purple-500"
    },
    {
      category: t('marketing'),
      skills: [
        { name: "HubSpot", level: 88 },
        { name: "Google Analytics", level: 85 },
        { name: "Marketing Automation", level: 90 },
        { name: "CRM", level: 85 },
        { name: "Lead Generation", level: 82 }
      ],
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {t('skillsTitle')}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('skillsSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
                  <div className={`w-3 h-3 rounded-full ${category.color} mr-3`}></div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Automations créées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">15+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Projets complétés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">70%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Gain de productivité moyen</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">3</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Années d'expérience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
