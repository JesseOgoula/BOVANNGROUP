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
            <h1 className="text-5xl md:text-6xl mb-6 leading-tight my-[6px] px-[5px] py-[10px] text-center font-extrabold lg:text-7xl">
              <span className="gradient-text my-[38px] font-extrabold mx-0 px-[53px] py-[2px] text-8xl">Que fait</span>
              <br />
              <span className="text-foreground font-extrabold text-center text-6xl leading-tight">BOVANN GROUP</span>
              <span className="text-primary text-8xl px-[13px]">?</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Nous formons les talents de demain dans les domaines de la communication, 
              l'informatique et le multimédia. Découvrez nos formations et prestations de pointe.
            </p>

            <div className="flex flex-row gap-4 justify-center lg:justify-start">
              <Button className="hero-button group">
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