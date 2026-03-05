import { ThumbsUp, ThumbsDown, Minus, Book, Headphones, Film, ExternalLink } from "lucide-react";
import SectionReveal from "@/components/section-reveal";

type RecommendationType = "recommend" | "mild-recommend" | "dont-recommend";

interface Recommendation {
  title: string;
  url: string;
  type: RecommendationType;
}

interface MediaCategory {
  icon: typeof Book;
  title: string;
  items: Recommendation[];
  emptyMessage?: string;
}

const Recommendations = () => {
  const getRecommendationBadge = (type: RecommendationType) => {
    switch (type) {
      case "recommend":
        return (
          <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
            <ThumbsUp className="w-4 h-4" />
            <span>Recommend</span>
          </div>
        );
      case "mild-recommend":
        return (
          <div className="flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
            <Minus className="w-4 h-4" />
            <span>Mild Recommend</span>
          </div>
        );
      case "dont-recommend":
        return (
          <div className="flex items-center gap-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-3 py-1 rounded-full text-sm font-medium">
            <ThumbsDown className="w-4 h-4" />
            <span>Don't Recommend</span>
          </div>
        );
    }
  };

  const categories: MediaCategory[] = [
    {
      icon: Book,
      title: "Books",
      items: [
        {
          title: "AI Engineering",
          url: "https://www.google.com/books/edition/AI_Engineering/abM1EQAAQBAJ?hl=en&gbpv=1&pg=PT5&printsec=frontcover",
          type: "recommend",
        },
        {
          title: "Agentic Artificial Intelligence",
          url: "https://www.google.com/books/edition/Agentic_Artificial_Intelligence/UfRTEQAAQBAJ?hl=en&gbpv=1&printsec=frontcover",
          type: "mild-recommend",
        },
      ],
    },
    {
      icon: Headphones,
      title: "Podcasts",
      items: [
        {
          title: "Why AI evals are the hottest new skill for product builders | Hamel Husain & Shreya Shankar",
          url: "https://youtu.be/BsWxPI9UM4c?si=jCTvZls2kFPkrlYe",
          type: "recommend",
        },
        {
          title: "How AI is reshaping the product role | Oji and Ezinne Udezue",
          url: "https://youtu.be/e1R_-esuO9o?si=l6_LPgOdPqnQcF28",
          type: "mild-recommend",
        },
      ],
    },
    {
      icon: Film,
      title: "Movies",
      items: [],
      emptyMessage: "Haven't watched any movies recently :(",
    },
  ];

  return (
    <section id="recommendations" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <SectionReveal>
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text">
              What I'm Reading & Watching
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Books, podcasts, and movies I've enjoyed - or not
            </p>
          </div>
        </SectionReveal>

        <div className="space-y-16">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <SectionReveal key={category.title}>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-3xl font-semibold text-card-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {category.items.length > 0 ? (
                    <div className="grid gap-4">
                      {category.items.map((item, itemIndex) => (
                        <SectionReveal key={itemIndex}>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-card p-6 rounded-2xl shadow-lg card-hover group"
                            data-testid={`recommendation-${category.title.toLowerCase()}-${itemIndex}`}
                          >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <div className="flex-1">
                                <h4 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors mb-2">
                                  {item.title}
                                </h4>
                                <div className="flex items-center gap-2 text-primary text-sm">
                                  <span>View details</span>
                                  <ExternalLink className="w-4 h-4" />
                                </div>
                              </div>
                              <div className="flex-shrink-0">
                                {getRecommendationBadge(item.type)}
                              </div>
                            </div>
                          </a>
                        </SectionReveal>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-card p-8 rounded-2xl shadow-lg text-center">
                      <p className="text-muted-foreground italic">
                        {category.emptyMessage || "No items yet"}
                      </p>
                    </div>
                  )}
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
