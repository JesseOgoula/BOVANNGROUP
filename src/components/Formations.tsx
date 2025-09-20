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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formations.flatMap(category => 
            category.items.map((formation, index) => {
              const Icon = formation.icon;
              const categoryIndex = formations.findIndex(cat => cat.items.includes(formation));
              return (
                <div key={`${categoryIndex}-${index}`} className="group relative">
                  <div className="relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    
                    {/* Category badge */}
                    <div className="mb-4">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider bg-muted px-3 py-1 rounded-full">
                        {formations[categoryIndex].category}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {formation.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {formation.description}
                    </p>
                    
                    {/* Button */}
                    <div className="pt-4 border-t border-border/50">
                      <button className="text-primary font-medium text-sm hover:text-primary/80 transition-colors group-hover:translate-x-1 transform duration-200 flex items-center">
                        En savoir plus
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
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