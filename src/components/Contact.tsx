import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">Contactez-nous</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prêt à commencer votre formation ou votre projet ? 
            Notre équipe est là pour vous accompagner.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-500 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:contact@bovanngroup.com" className="text-primary hover:underline">
                  contact@bovanngroup.com
                </a>
              </CardContent>
            </Card>

            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-500 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  Téléphone
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <a href="tel:+22870256565" className="text-primary hover:underline block">
                    +228 70 25 65 65
                  </a>
                </div>
                <div>
                  <a href="tel:+22897196565" className="text-primary hover:underline block">
                    +228 97 19 65 65
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="card-glow">
              <CardHeader>
                <CardTitle>Suivez-nous</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="hover:bg-blue-600 hover:text-white transition-colors">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-black hover:text-white transition-colors">
                    <FaTiktok className="h-5 w-5" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-2">@BovannGroupSAS</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle>Envoyez-nous un message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="Nom" className="bg-background/50" />
                  </div>
                  <div>
                    <Input placeholder="Prénom" className="bg-background/50" />
                  </div>
                </div>
                
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-background/50" 
                />
                
                <Input 
                  placeholder="Sujet" 
                  className="bg-background/50" 
                />
                
                <Textarea 
                  placeholder="Votre message..."
                  rows={5}
                  className="bg-background/50"
                />

                <Button className="hero-button w-full">
                  Envoyer le message
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