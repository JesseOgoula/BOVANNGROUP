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
                <div className="relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-2 text-center group-hover:text-primary transition-colors">
                    {prestation.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-primary font-medium text-center mb-6 text-sm">
                    {prestation.subtitle}
                  </p>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-8 text-center flex-grow">
                    {prestation.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {prestation.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Button */}
                  <div className="pt-6 border-t border-border/50 text-center">
                    <button className="btn-outline-enhanced mx-auto">
                      Découvrir le service
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
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