import {
  ExternalLink,
  Smartphone,
  Code,
  Github,
  Eye,
  Plus,
} from "lucide-react";
import { SiInstagram } from "react-icons/si";
import SectionReveal from "@/components/section-reveal";

interface EngineeringProject {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const Projects = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Instagram Stories - Search in Filter Enhancement",
      description:
        "Designed a search functionality for Instagram's filter selection, addressing finite scroll limitations and poor filter discoverability. Used competitive analysis against Snapchat and real-time search suggestions to improve user engagement and reduce time-to-filter application.",
      image:
        "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&h=500&fit=crop",
      tags: [
        "Product Management",
        "UX Research",
        "A/B Testing",
        "Competitive Analysis",
      ],
      date: "Jan 2024",
      problem:
        "Limited filter discoverability with finite scroll causing user frustration",
      focus: "Time-to-filter application reduction and creative expression",
      icon: SiInstagram,
      externalUrl: "https://casestudiesbykripa.com/caseinstagram",
    },
    {
      id: 2,
      title: "Discover iOS App - Report Theft Feature",
      description:
        "Designed a prominent 'Report Theft' button for Discover's home screen to reduce fraud reporting time from multiple steps to under 5 seconds. Defined MVP features, success metrics, and launch strategy targeting 60.6M cardholders with focus on college students and young professionals.",

      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
      tags: [
        "Product Management",
        "iOS Development",
        "Fraud Prevention",
        "User Testing",
      ],
      date: "Dec 2024",
      problem:
        "Hidden fraud reporting features causing delays in high-stress situations",
      focus: "Emergency response optimization and user trust building",
      icon: Smartphone,
      externalUrl: "https://casestudiesbykripa.com/casediscoverapp",
    },
  ];

  const engineeringProjects: EngineeringProject[] = [
    {
      id: 1,
      title: "Rate My Semester",
      description:
        "A comprehensive platform for students to rate and review semester abroad programs, helping future students make informed decisions about their international education experiences.",
      techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      liveUrl: "https://ratemysemesterabroad.com/",
    },
    {
      id: 2,
      title: "ArtHubNepal",
      description:
        "Served as lead researcher for ArtHubNepal, a digital platform showcasing and preserving Nepali art and culture. Contributed to research efforts aimed at making traditional and contemporary Nepali artwork accessible to a global audience through technology.",
      techStack: ["Research", "Database Management", "Analysis"],
      liveUrl: "https://www.arthubnepal.com/",
    },
    {
      id: 3,
      title: "BeReal Kripa",
      description:
        "Generated a BeReal clone with camera access for uploads, session persistence, and timed posting notifications. Implemented user controls that restrict photo visibility until uploads, along with commenting capabilities for enhanced user interaction.",
      techStack: ["Swift", "Xcode", "Figma"],
      githubUrl: "https://github.com/TECNA7/BeRealKripa",
      liveUrl: "https://giphy.com/embed/Glh1xipT8MZMMT8UfY",
    },
    {
      id: 4,
      title: "Hunt",
      description:
        "Developed the Hunt app with a task list, detailed views, photo uploads for completion, and automatic location tagging. Created a custom app icon and loading screen to enhance user experience and interface cohesion.",
      techStack: ["Swift", "XCode", "Figma"],
      githubUrl: "https://github.com/TECNA7/Hunt/tree/main",
      liveUrl: "https://giphy.com/embed/lVifsPT2LvI9TrscXB",
    },
    {
      id: 5,
      title: "Harmony Hub",
      description:
        "Built a full-stack music streaming website with MongoDB & PostgreSQL featuring interactive queries and data exploration. Deployed on the college server, ensuring 24/7 uptime and a user-friendly interface that supports smooth navigation and data retrieval.",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "PostgreSQL",
        "MongoDB",
        "NodeJS",
      ],
      liveUrl:
        "https://drive.google.com/file/d/1rZqYDmOT4wXI15oHrDgIoaizovxq_pQH/view?usp=drive_link",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <SectionReveal>
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Product Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-world product management projects showcasing user-centered
              design and strategic thinking
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((project) => (
            <SectionReveal key={project.id}>
              <div
                className="bg-card rounded-2xl overflow-hidden shadow-lg card-hover"
                data-testid={`card-project-${project.id}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  data-testid={`img-project-${project.id}`}
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <project.icon className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-card-foreground">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {project.date}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-xs font-medium text-card-foreground mb-1">
                      Problem:
                    </p>
                    <p className="text-xs text-muted-foreground mb-2">
                      {project.problem}
                    </p>
                    <p className="text-xs font-medium text-card-foreground mb-1">
                      Focus:
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {project.focus}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1 transition-colors"
                    data-testid={`button-case-study-${project.id}`}
                  >
                    View Case Study <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Software Engineering Projects Section */}
        <SectionReveal>
          <div className="mt-24 mb-16 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Software Engineering Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technical projects showcasing full-stack development and
              programming expertise
            </p>
          </div>
        </SectionReveal>

        {engineeringProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engineeringProjects.map((project) => (
              <SectionReveal key={project.id}>
                <div
                  className="bg-card rounded-2xl overflow-hidden shadow-lg card-hover"
                  data-testid={`card-engineering-${project.id}`}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      data-testid={`img-engineering-${project.id}`}
                    />
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Code className="w-6 h-6 text-primary" />
                      <h3 className="font-serif text-xl font-semibold text-card-foreground">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack?.map((tech) => (
                        <span
                          key={tech}
                          className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1 transition-colors"
                          data-testid={`button-github-${project.id}`}
                        >
                          <Github className="w-3 h-3" /> Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1 transition-colors"
                          data-testid={`button-live-${project.id}`}
                        >
                          <Eye className="w-3 h-3" />
                          {project.liveUrl.includes("giphy.com")
                            ? "Video Demo"
                            : project.liveUrl.includes("drive.google.com")
                              ? "View Project"
                              : "Live Demo"}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        ) : (
          <SectionReveal>
            <div className="text-center py-16">
              <div className="bg-card rounded-2xl p-12 shadow-lg max-w-md mx-auto">
                <Plus className="w-16 h-16 text-muted-foreground mx-auto mb-6 opacity-50" />
                <h3 className="font-serif text-xl font-semibold mb-4 text-card-foreground">
                  Engineering Projects Coming Soon
                </h3>
                <p className="text-muted-foreground text-sm">
                  This section will showcase technical projects including web
                  applications, mobile apps, and open source contributions.
                </p>
              </div>
            </div>
          </SectionReveal>
        )}
      </div>
    </section>
  );
};

export default Projects;
