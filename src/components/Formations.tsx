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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formations.flatMap(category => 
            category.items.map((formation, index) => {
              const Icon = formation.icon;
              const categoryIndex = formations.findIndex(cat => cat.items.includes(formation));
              return (
                <div key={`${categoryIndex}-${index}`} className="group relative">
                  {/* Gradient background card */}
                  <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${formation.color} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden`}>
                    {/* Glass effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 rounded-2xl"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      
                      {/* Category badge */}
                      <div className="absolute top-6 right-6">
                        <span className="text-xs font-medium text-white/60 uppercase tracking-wider bg-white/10 px-2 py-1 rounded-full backdrop-blur-sm">
                          {formations[categoryIndex].category}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
                        {formation.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-white/70 text-sm leading-relaxed mb-6">
                        {formation.description}
                      </p>
                      
                      {/* Button */}
                      <button className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm">
                        En savoir plus
                      </button>
                    </div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-pulse"></div>
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