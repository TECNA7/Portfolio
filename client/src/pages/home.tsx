import { Star, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import SectionReveal from "@/components/section-reveal";
import TypingAnimation from "@/components/typing-animation";
import SeasonSelector from "@/components/season-selector";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6 text-center">
        <SectionReveal>
          <div className="mb-6">
            <Star
              className="text-accent text-2xl animate-pulse mx-auto"
              data-testid="star-icon"
            />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Kripa </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            I am passionate about{" "}
            <TypingAnimation
              words={[
                "innovation",
                "AI solutions",
                "product strategy",
                "technology",
                "user experience",
              ]}
              className="text-primary"
            />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" data-testid="button-discover-story">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg hover:scale-105">
                Discover My Story
              </button>
            </Link>
            <Link href="/projects" data-testid="button-view-work">
              <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg hover:scale-105">
                View My Work
              </button>
            </Link>
          </div>
        </SectionReveal>
        
        <SectionReveal>
          <div className="mt-16">
            <SeasonSelector />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default Home;
