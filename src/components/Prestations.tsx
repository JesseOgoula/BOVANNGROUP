import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Wrench } from "lucide-react";

const prestations = [
  {
    title: "Communication événementielle",
    subtitle: "House of Challenge",
    description: "Organisation et gestion complète d'événements corporate et grand public. De la conception à la réalisation, nous créons des expériences mémorables.",
    icon: Calendar,
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
              <Card key={index} className="card-glow group hover:scale-105 transition-all duration-300 h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {prestation.title}
                  </CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {prestation.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center">
                    {prestation.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {prestation.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-purple-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className="w-full mt-6 btn-outline-enhanced group-hover:bg-primary group-hover:text-primary-foreground">
                    Découvrir le service
                  </Button>
                </CardContent>
              </Card>
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