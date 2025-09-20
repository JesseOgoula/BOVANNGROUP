import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
              <Card
                key={index}
                className="card-glow transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/60 border border-border rounded-2xl bg-card"
                style={{ maxWidth: '320px', margin: '0 auto' }}
              >
                <CardHeader className="flex flex-col items-center justify-center pb-2">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-3 shadow-sm">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full mb-2">
                    {prestation.subtitle}
                  </span>
                  <CardTitle className="text-center text-lg font-bold text-white mb-1">
                    {prestation.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm text-center mb-4">
                    {prestation.description}
                  </p>
                  <ul className="space-y-2">
                    {prestation.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
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