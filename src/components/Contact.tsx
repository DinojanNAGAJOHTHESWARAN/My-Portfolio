import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { language } = useLanguage();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const content = {
    title: {
      fr: "Contact",
      en: "Contact"
    },
    subtitle: {
      fr: "N'hésitez pas à me contacter",
      en: "Feel free to reach out"
    },
    directContact: {
      fr: "Contactez-moi directement",
      en: "Contact me directly"
    },
    directContactDesc: {
      fr: "Plusieurs moyens pour discuter de votre projet",
      en: "Several ways to discuss your project"
    },
    availableFor: {
      fr: "Disponible pour",
      en: "Available for"
    },
    availability: {
      fr: [
        "Missions d'automatisation",
        "Projets Data & Analytics",
        "Conseil en No-code",
        "Formation sur Make/Zapier"
      ],
      en: [
        "Automation missions",
        "Data & Analytics projects",
        "No-code consulting",
        "Make/Zapier training"
      ]
    },
    sendMessage: {
      fr: "Envoyez-moi un message",
      en: "Send me a message"
    },
    sendMessageDesc: {
      fr: "Je réponds généralement sous 24h",
      en: "I usually respond within 24 hours"
    },
    name: {
      fr: "Nom",
      en: "Name"
    },
    email: {
      fr: "E-mail",
      en: "Email"
    },
    message: {
      fr: "Message",
      en: "Message"
    },
    send: {
      fr: "Envoyer",
      en: "Send"
    },
    sending: {
      fr: "Envoi...",
      en: "Sending..."
    },
    toastTitle: {
      fr: "Message envoyé !",
      en: "Message sent!"
    },
    toastDesc: {
      fr: "Je vous répondrai dès que possible.",
      en: "I'll get back to you as soon as possible."
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: content.toastTitle[language],
        description: content.toastDesc[language]
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {content.title[language]}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {content.subtitle[language]}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                  {content.directContact[language]}
                </CardTitle>
                <CardDescription>{content.directContactDesc[language]}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700 dark:text-slate-300">
                    dnagajohtheswaran@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700 dark:text-slate-300">
                    LinkedIn: Dinojan Nagajohtheswaran
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700 dark:text-slate-300">
                    GitHub: @DinojanNAGAJOHTHESWARAN
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">{content.availableFor[language]}</h3>
                <ul className="space-y-2 text-sm">
                  {content.availability[language].map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                {content.sendMessage[language]}
              </CardTitle>
              <CardDescription>{content.sendMessageDesc[language]}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">{content.name[language]}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">{content.email[language]}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message">{content.message[language]}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isLoading ? content.sending[language] : content.send[language]}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
