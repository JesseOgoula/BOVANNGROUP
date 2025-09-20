import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/bovann-hero.png";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-purple-900/20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left my-[60px]">

            <h1 className="text-5xl md:text-6xl mb-4 leading-tight my-[6px] px-[5px] py-[10px] text-center font-extrabold lg:text-7xl">
              <span className="gradient-text my-[38px] font-extrabold mx-0 px-[53px] py-[2px] text-8xl block">BOVANN GROUP</span>
              <span className="block text-foreground font-extrabold text-center text-4xl md:text-5xl mt-2">Accélérateur de talents & d'innovation</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto lg:mx-0">
              Nous accompagnons la réussite de votre projet et de votre carrière à travers&nbsp;
              <span className="font-semibold text-primary">formations professionnelles</span>,&nbsp;
              <span className="font-semibold text-primary">services numériques</span> et&nbsp;
              <span className="font-semibold text-primary">solutions multimédia</span> de pointe.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
                <ArrowRight className="w-4 h-4" /> Communication
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
                <ArrowRight className="w-4 h-4" /> Informatique
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
                <ArrowRight className="w-4 h-4" /> Multimédia
              </span>
            </div>

            <div className="flex flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-outline-enhanced group">
                Découvrir nos formations
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="btn-outline-enhanced">
                <Play className="mr-2 h-5 w-5" />
                Voir nos prestations
              </Button>
            </div>

            {/* Stats */}
            
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img src={heroImage} alt="BOVANN GROUP - Formation professionnelle avec notre directeur" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary to-red-600 rounded-full opacity-30 animate-pulse" style={{
            boxShadow: 'var(--glow-secondary)'
          }}></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-red-600 to-primary rounded-full opacity-40 animate-pulse" style={{
            animationDelay: '1s',
            boxShadow: 'var(--glow-secondary)'
          }}></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;