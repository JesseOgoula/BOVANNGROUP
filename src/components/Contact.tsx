import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const Contact = () => {
  // --- Formations & Prestations titles for dropdowns ---
  const formationsList = [
    "Journalisme Reporter d'Images (JRI)",
    "Community Manager & Web Master",
    "Développement Web",
    "Développement Mobile",
    "Maintenance, Administration Systèmes & Réseaux",
    "Réalisation et Montage de Photos & Vidéos"
  ];
  const prestationsList = [
    "Communication événementielle",
    "Management et gestion de carrière",
    "Services informatiques"
  ];

  // --- Form state ---
  const [form, setForm] = React.useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    pays: "",
    ville: "",
    adresse: "",
    motif: "",
    choix: ""
  });

  // --- Handle change ---
  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value, ...(name === "motif" ? { choix: "" } : {}) }));
  }

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
            {/* ...existing code... */}
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
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
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
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
                  <Button variant="outline" size="icon" className="btn-outline-enhanced hover:bg-blue-600 hover:border-blue-600">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="btn-outline-enhanced hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-purple-500">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="btn-outline-enhanced hover:bg-black hover:border-gray-800">
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
              <CardTitle>Décrivez-nous votre besoin</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input name="nom" value={form.nom} onChange={handleChange} placeholder="Nom" className="bg-background/50" />
                  </div>
                  <div>
                    <Input name="prenom" value={form.prenom} onChange={handleChange} placeholder="Prénom" className="bg-background/50" />
                  </div>
                </div>
                <Input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" className="bg-background/50" />
                <Input name="telephone" value={form.telephone} onChange={handleChange} type="tel" placeholder="Téléphone" className="bg-background/50" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input name="pays" value={form.pays} onChange={handleChange} placeholder="Pays" className="bg-background/50" />
                  <Input name="ville" value={form.ville} onChange={handleChange} placeholder="Ville" className="bg-background/50" />
                  <Input name="adresse" value={form.adresse} onChange={handleChange} placeholder="Adresse" className="bg-background/50" />
                </div>
                <div>
                  <label htmlFor="motif" className="block text-sm font-medium text-muted-foreground mb-1">Je souhaite&nbsp;:</label>
                  <div className="relative">
                      <select
                        id="motif"
                        name="motif"
                        value={form.motif}
                        onChange={handleChange}
                        className="w-full appearance-none bg-background/70 border border-primary/40 rounded-lg px-4 py-3 pr-10 text-base text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition shadow-sm hover:border-red-500 focus:bg-red-700 hover:bg-red-700"
                        style={{ color: '#fff', fontWeight: 500, letterSpacing: 0.2, backgroundColor: form.motif ? undefined : undefined }}
                      >
                        <option value="" className="bg-background text-white font-normal hover:bg-red-700 focus:bg-red-700">Sélectionnez une option</option>
                        <option value="formation" className="bg-background text-white font-semibold hover:bg-red-700 focus:bg-red-700">Suivre une formation</option>
                        <option value="prestation" className="bg-background text-white font-semibold hover:bg-red-700 focus:bg-red-700">Bénéficier d'une prestation</option>
                      </select>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-primary">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      </span>
                  </div>
                </div>
                {form.motif === "formation" && (
                  <div>
                    <label htmlFor="choix" className="block text-sm font-medium text-muted-foreground mb-1">Formation souhaitée&nbsp;:</label>
                    <div className="relative">
                      <select
                        id="choix"
                        name="choix"
                        value={form.choix}
                        onChange={handleChange}
                        className="w-full appearance-none bg-background/70 border border-primary/40 rounded-lg px-4 py-3 pr-10 text-base text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition shadow-sm hover:border-red-500 focus:bg-red-700 hover:bg-red-700"
                        style={{ color: '#fff', fontWeight: 500, letterSpacing: 0.2, backgroundColor: form.choix ? undefined : undefined }}
                      >
                        <option value="" className="bg-background text-white font-normal hover:bg-red-700 focus:bg-red-700">Sélectionnez une formation</option>
                        {formationsList.map(f => (
                          <option key={f} value={f} className="bg-background text-white font-semibold hover:bg-red-700 focus:bg-red-700">{f}</option>
                        ))}
                      </select>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-primary">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      </span>
                    </div>
                  </div>
                )}
                {form.motif === "prestation" && (
                  <div>
                    <label htmlFor="choix" className="block text-sm font-medium text-muted-foreground mb-1">Prestation souhaitée&nbsp;:</label>
                    <div className="relative">
                      <select
                        id="choix"
                        name="choix"
                        value={form.choix}
                        onChange={handleChange}
                        className="w-full appearance-none bg-background/70 border border-primary/40 rounded-lg px-4 py-3 pr-10 text-base text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition shadow-sm hover:border-red-500 focus:bg-red-700 hover:bg-red-700"
                        style={{ color: '#fff', fontWeight: 500, letterSpacing: 0.2, backgroundColor: form.choix ? undefined : undefined }}
                      >
                        <option value="" className="bg-background text-white font-normal hover:bg-red-700 focus:bg-red-700">Sélectionnez une prestation</option>
                        {prestationsList.map(p => (
                          <option key={p} value={p} className="bg-background text-white font-semibold hover:bg-red-700 focus:bg-red-700">{p}</option>
                        ))}
                      </select>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-primary">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      </span>
                    </div>
                  </div>
                )}
                <Button className="hero-button w-full">
                  Envoyer
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