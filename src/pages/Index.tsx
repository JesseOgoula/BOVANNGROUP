import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Formations from "@/components/Formations";
import Prestations from "@/components/Prestations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Formations />
        <Prestations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
