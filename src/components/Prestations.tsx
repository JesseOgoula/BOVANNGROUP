import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Wrench } from "lucide-react";

const prestations = [
  {
    title: "Communication événementielle",
    subtitle: "House of Challenge",
    description: "Organisation et gestion complète d'événements corporate et grand public. De la conception à la réalisation, nous créons des expériences mémorables.",
    icon: Calendar,
    color: "from-red-500 to-pink-500",
    features: [
      "Événements corporate",
      "Lancement de produits",
      "Conférences et séminaires",
      "Animation et production"
    ]
  },
  {
    title: "Management et gestion de carrière",
    subtitle: "d'artistes & influenceurs",
    description: "Accompagnement personnalisé pour développer et gérer la carrière d'artistes et d'influenceurs dans l'écosystème digital moderne.",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Stratégie de développement",
      "Gestion des contrats",
      "Relations publiques",
      "Monétisation de contenu"
    ]
  },
  {
    title: "Services informatiques",
    subtitle: "Solutions techniques complètes",
    description: "Prestations IT sur mesure pour accompagner la transformation digitale de votre entreprise avec expertise et innovation.",
    icon: Wrench,
    color: "from-green-500 to-emerald-500",
    features: [
      "Développement sur mesure",
      "Maintenance et support",
      "Conseil en IT",
      "Infrastructure et sécurité"
    ]
  }
];

const Prestations = () => {
  return (
    <section id="prestations" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">Nos Prestations</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des services professionnels adaptés à vos besoins, 
            pour vous accompagner dans tous vos projets.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {prestations.map((prestation, index) => {
            const Icon = prestation.icon;
            return (
              <div key={index} className="group relative h-full">
                {/* Gradient background card */}
                <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${prestation.color} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden h-full flex flex-col`}>
                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 rounded-2xl"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-white/90 transition-colors">
                      {prestation.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="text-white/80 font-medium text-center mb-4 text-sm">
                      {prestation.subtitle}
                    </p>
                    
                    {/* Description */}
                    <p className="text-white/70 text-sm leading-relaxed mb-6 text-center">
                      {prestation.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6 flex-grow">
                      {prestation.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-white/80">
                          <div className="w-2 h-2 bg-white/40 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Button */}
                    <button className="w-full px-4 py-3 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm">
                      Découvrir le service
                    </button>
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-pulse"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button className="hero-button">
            Demander un devis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Prestations;