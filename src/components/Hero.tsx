import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/bovann.png";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-purple-900/20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left my-[60px]">

            <h1 className="text-5xl md:text-6xl mb-4 leading-tight my-[6px] px-[5px] py-[10px] text-center font-extrabold lg:text-7xl">
              <span className="text-red-600 font-extrabold mx-0 px-[53px] text-8xl block">BOVANN GROUP</span>
            </h1>

            <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto text-center">
              Nous accompagnons la réussite de votre projet et de votre carrière à travers formations professionnelles, services numériques et solutions multimédia de pointe.
            </p>

            <div className="flex flex-row gap-4 justify-center">
              <a href="#formations">
                <Button className="btn-outline-enhanced group" asChild>
                  <span>
                    Découvrir nos formations
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </a>
              <a href="#prestations">
                <Button variant="outline" className="btn-outline-enhanced" asChild>
                  <span>
                    <Play className="mr-2 h-5 w-5" />
                    Voir nos prestations
                  </span>
                </Button>
              </a>
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