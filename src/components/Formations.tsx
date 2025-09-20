import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Code, Globe, Monitor, Settings, Video } from "lucide-react";

const formations = [
  {
    category: "Communication",
    items: [
      {
        title: "Journalisme Reporter d'Images (JRI)",
        description: "Formation complète en journalisme vidéo et reportage",
        icon: Camera,
        color: "from-red-500 to-pink-500"
      },
      {
        title: "Community Manager & Web Master",
        description: "Gestion des réseaux sociaux et administration web",
        icon: Globe,
        color: "from-blue-500 to-cyan-500"
      }
    ]
  },
  {
    category: "Informatique",
    items: [
      {
        title: "Développement Web",
        description: "Création d'applications et sites web modernes",
        icon: Code,
        color: "from-green-500 to-emerald-500"
      },
      {
        title: "Développement Mobile",
        description: "Applications iOS et Android natives et hybrides",
        icon: Monitor,
        color: "from-purple-500 to-violet-500"
      },
      {
        title: "Maintenance, Administration Systèmes & Réseaux",
        description: "Gestion et sécurité des infrastructures IT",
        icon: Settings,
        color: "from-orange-500 to-red-500"
      }
    ]
  },
  {
    category: "Multimédia",
    items: [
      {
        title: "Réalisation et Montage de Photos & Vidéos",
        description: "Production et post-production audiovisuelle professionnelle",
        icon: Video,
        color: "from-indigo-500 to-purple-500"
      }
    ]
  }
];

const Formations = () => {
  return (
    <section id="formations" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">Nos Formations</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des programmes de formation adaptés aux besoins du marché, 
            dispensés par des experts reconnus dans leur domaine.
          </p>
        </div>

        <div className="space-y-12">
          {formations.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-semibold mb-6 text-primary">{category.category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((formation, index) => {
                  const Icon = formation.icon;
                  return (
                    <Card key={index} className="card-glow group hover:scale-105 transition-all duration-300 cursor-pointer">
                      <CardHeader>
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${formation.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {formation.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground mb-4">
                          {formation.description}
                        </CardDescription>
                        <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          En savoir plus
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="hero-button">
            Voir toutes nos formations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Formations;