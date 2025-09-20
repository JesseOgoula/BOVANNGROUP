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


import { useState } from "react";

const Formations = () => {
  const [showAll, setShowAll] = useState(false);
  const allFormations = formations.flatMap(category =>
    category.items.map((formation, index) => {
      const Icon = formation.icon;
      const categoryIndex = formations.findIndex(cat => cat.items.includes(formation));
      return {
        key: `${categoryIndex}-${index}`,
        Icon,
        category: formations[categoryIndex].category,
        title: formation.title,
        description: formation.description
      };
    })
  );
  const displayedFormations = showAll ? allFormations : allFormations.slice(0, 3);

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

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {displayedFormations.map(({ key, Icon, category, title, description }) => (
            <Card
              key={key}
              className="card-glow transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/60 border border-border rounded-2xl bg-card"
              style={{ maxWidth: '320px', margin: '0 auto' }}
            >
              <CardHeader className="flex flex-col items-center justify-center pb-2">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-3 shadow-sm">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full mb-2">
                  {category}
                </span>
                <CardTitle className="text-center text-lg font-bold text-white mb-1">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm text-center">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          {allFormations.length > 3 && (
            <Button className="hero-button" onClick={() => setShowAll(v => !v)}>
              {showAll ? "Réduire" : "Voir toutes nos formations"}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Formations;