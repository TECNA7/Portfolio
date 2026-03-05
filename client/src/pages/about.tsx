import { Briefcase, Code, Palette, Newspaper, ExternalLink } from "lucide-react";
import SectionReveal from "@/components/section-reveal";
import WorkTimeline from "@/components/work-timeline";
import kripaPhoto from "@assets/kripa_1762134417548.jpeg";

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <SectionReveal>
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Computer Science student and Technical/AI Product Manager building innovative solutions
            </p>
          </div>
        </SectionReveal>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <SectionReveal>
            <img 
              src={kripaPhoto} 
              alt="Kripa Lamichhane professional photo" 
              className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto"
              data-testid="img-headshot"
            />
          </SectionReveal>
          
          <div className="space-y-6">
            <SectionReveal>
              <div className="bg-card p-8 rounded-2xl shadow-lg card-hover">
                <h3 className="font-serif text-2xl font-semibold mb-4 text-card-foreground">
                 Data Product Manager
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a Computer Science major at Bryn Mawr College with a passion for AI and product management. I love building innovative solutions that bridge technology and user needs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">
                    Product Management
                  </span>
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                    Data Analyst
                  </span>
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                    AI Solutions
                  </span>
                </div>
              </div>
            </SectionReveal>
            
            <SectionReveal>
              <div className="bg-card p-8 rounded-2xl shadow-lg card-hover">
                <h3 className="font-serif text-2xl font-semibold mb-4 text-card-foreground">
                  Experience
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3" data-testid="experience-design">
                    <Briefcase className="text-primary w-5 h-5" />
                    <span>Technical/AI Product Manager at FSH Technologies</span>
                  </li>
                  <li className="flex items-center gap-3" data-testid="experience-development">
                    <Code className="text-primary w-5 h-5" />
                    <span>Data Mentor at Q-center</span>
                  </li>
                  <li className="flex items-center gap-3" data-testid="experience-branding">
                    <Palette className="text-primary w-5 h-5" />
                    <span>Founder of Girls Who Code Bryn Mawr</span>
                  </li>
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>

        {/* News Section */}
        <SectionReveal>
          <div className="mt-24">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text">
                In the News
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Featured articles and highlights
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <SectionReveal>
                <a
                  href="https://www.brynmawr.edu/about-college/college-leadership/president-cadge/initiatives-progress/initiatives/presidential-student-advisory-council-students"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-card p-6 rounded-2xl shadow-lg card-hover group"
                  data-testid="news-presidential-advisory"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Newspaper className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                        Presidential Student Advisory Council
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Serving as President's Student Advisor, organizing tech events, and leading campus-wide initiatives
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm">
                        <span>Read more</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </a>
              </SectionReveal>
              <SectionReveal>
                <a
                  href="https://summerinternships.blogs.brynmawr.edu/2025/09/12/fsh-technologies-summer-internships-kripa-lamichhane-26/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-card p-6 rounded-2xl shadow-lg card-hover group"
                  data-testid="news-fsh-internship"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Newspaper className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                        FSH Technologies Summer Internship
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Summer 2024 internship experience at FSH Technologies
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm">
                        <span>Read more</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </a>
              </SectionReveal>

              <SectionReveal>
                <a
                  href="https://www.brynmawr.edu/news/summer-internships-kripa-lamichhane-26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-card p-6 rounded-2xl shadow-lg card-hover group"
                  data-testid="news-brynmawr-internship"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Newspaper className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                        Summer Internships Featured
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Featured on Bryn Mawr College news for summer internship achievements
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm">
                        <span>Read more</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </a>
              </SectionReveal>

              <SectionReveal>
                <a
                  href="https://www.haverford.edu/marketing-and-communications/news/looking-beyond-brochure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-card p-6 rounded-2xl shadow-lg card-hover group"
                  data-testid="news-haverford"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Newspaper className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                        Looking Beyond the Brochure
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Featured in Haverford College news
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm">
                        <span>Read more</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </a>
              </SectionReveal>

              <SectionReveal>
                <a
                  href="https://1000dreamsfund.org/success/kripa-l-20-funded/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-card p-6 rounded-2xl shadow-lg card-hover group"
                  data-testid="news-1000dreams"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Newspaper className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                        1000 Dreams Fund Success Story
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Featured as a funded scholar success story
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm">
                        <span>Read more</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </a>
              </SectionReveal>

              <SectionReveal>
                <a
                  href="https://www.youtube.com/shorts/feiaYnZTsLE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-card p-6 rounded-2xl shadow-lg card-hover group"
                  data-testid="news-youtube"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Newspaper className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                        Video Feature
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Watch the video highlight
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm">
                        <span>Watch video</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </a>
              </SectionReveal>
            </div>
          </div>
        </SectionReveal>

        {/* Work Timeline */}
        <WorkTimeline />

        {/* Know Me Better CTA */}
        <SectionReveal>
          <div className="mt-24 mb-12">
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 p-12 rounded-3xl shadow-lg text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Want to Know Me Better?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Explore my handcrafted candles and personal recommendations on books, podcasts, and more
              </p>
              <a
                href="/know-me-better"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105"
                data-testid="link-know-me-better"
              >
                Discover More About Me
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default About;
