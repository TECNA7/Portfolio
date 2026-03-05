import { ThumbsUp, ThumbsDown, Minus, Book, Headphones, Film, ExternalLink, Flame, Heart } from "lucide-react";
import { useState } from "react";
import SectionReveal from "@/components/section-reveal";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

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

const KnowMeBetter = () => {
  const [likedItems, setLikedItems] = useState<{ [key: number]: boolean }>({});
  const [floatingHearts, setFloatingHearts] = useState<{
    [key: string]: boolean;
  }>({});

  const candles = [
    {
      id: 1,
      name: "Apple Her Brew",
      description: "A warming blend of apple and herbal notes that creates a cozy, autumn-inspired atmosphere.",
      price: "$24.99",
      image: "/candles/apple-her-brew.jpeg",
    },
    {
      id: 2,
      name: "Berry Kiss",
      description: "Sweet berry fragrances that fill your space with romantic, fruity aromas.",
      price: "$26.99",
      image: "/candles/berry-kiss.jpeg",
    },
    {
      id: 3,
      name: "Black Tea",
      description: "Sophisticated black tea scent with subtle earthy undertones for a calming experience.",
      price: "$28.99",
      image: "/candles/black-tea.jpeg",
    },
    {
      id: 4,
      name: "Blue Herbal Tea",
      description: "Refreshing herbal blend with floral notes that brings tranquility to any room.",
      price: "$27.99",
      image: "/candles/blue-herbal-tea.jpeg",
    },
    {
      id: 5,
      name: "Espressotails",
      description: "Rich coffee aroma mixed with cocktail-inspired scents for an energizing ambiance.",
      price: "$29.99",
      image: "/candles/espressotails.jpeg",
    },
    {
      id: 6,
      name: "Foam Layer Mocktail",
      description: "Light and airy fragrance reminiscent of your favorite non-alcoholic cocktails.",
      price: "$25.99",
      image: "/candles/foam-layer-mocktail.jpeg",
    },
    {
      id: 7,
      name: "Golden Rose Spice",
      description: "Luxurious blend of rose petals and warm spices that creates an elegant atmosphere.",
      price: "$32.99",
      image: "/candles/golden-rose-spice.jpeg",
    },
    {
      id: 8,
      name: "Honeydew Hug",
      description: "Sweet melon fragrance that wraps your space in fresh, summery comfort.",
      price: "$24.99",
      image: "/candles/honeydew-hug.jpeg",
    },
    {
      id: 9,
      name: "Hot Chocolate",
      description: "Warm cocoa scent that brings the comfort of winter evenings indoors.",
      price: "$26.99",
      image: "/candles/hot-chocolate.jpeg",
    },
    {
      id: 10,
      name: "Signature Blend",
      description: "Our exclusive house blend featuring carefully curated aromatic notes.",
      price: "$34.99",
      image: "/candles/signature-blend.jpeg",
    },
    {
      id: 11,
      name: "Lavenderberry Luxe",
      description: "Premium lavender with berry undertones for ultimate relaxation and luxury.",
      price: "$31.99",
      image: "/candles/lavenderberry-luxe.jpeg",
    },
    {
      id: 12,
      name: "Melon Bliss",
      description: "Fresh melon fragrance that brings summer sunshine to any space.",
      price: "$25.99",
      image: "/candles/melon-bliss.jpeg",
    },
    {
      id: 13,
      name: "Midnight Brewberry",
      description: "Dark berry and coffee blend perfect for cozy evening moments.",
      price: "$28.99",
      image: "/candles/midnight-brewberry.jpeg",
    },
    {
      id: 14,
      name: "Orange Bee",
      description: "Citrusy orange with honey notes that energizes and uplifts your mood.",
      price: "$26.99",
      image: "/candles/orange-bee.jpeg",
    },
    {
      id: 15,
      name: "Rose Orange Mocktail",
      description: "Elegant rose and citrus combination inspired by sophisticated cocktails.",
      price: "$29.99",
      image: "/candles/rose-orange-mocktail.jpeg",
    },
    {
      id: 16,
      name: "Summer Love",
      description: "Romantic floral blend that captures the essence of warm summer evenings.",
      price: "$27.99",
      image: "/candles/summer-love.jpeg",
    },
    {
      id: 17,
      name: "Back to Bali",
      description: "Tropical escape with exotic florals and coconut undertones.",
      price: "$30.99",
      image: "/candles/back-to-bali.jpeg",
    },
    {
      id: 18,
      name: "Café Latte",
      description: "Rich coffee and milk fragrance that brings café vibes to your home.",
      price: "$28.99",
      image: "/candles/cafe-latte.jpeg",
    },
    {
      id: 19,
      name: "Coffee",
      description: "Pure coffee bean aroma for the ultimate coffee lover's experience.",
      price: "$27.99",
      image: "/candles/coffee.jpeg",
    },
    {
      id: 20,
      name: "Mangonada",
      description: "Tropical mango blend with a hint of spice for an exotic adventure.",
      price: "$29.99",
      image: "/candles/mangonada.jpeg",
    },
  ];

  const handleHeartClick = (
    candleId: number,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setLikedItems((prev) => ({ ...prev, [candleId]: !prev[candleId] }));

    const heartId = `${candleId}-${Date.now()}`;
    setFloatingHearts((prev) => ({ ...prev, [heartId]: true }));

    setTimeout(() => {
      setFloatingHearts((prev) => {
        const newState = { ...prev };
        delete newState[heartId];
        return newState;
      });
    }, 2000);
  };

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
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionReveal>
            <div className="mb-16 text-center">
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 gradient-text">
                Know Me Better
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover my creative passions and personal recommendations
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Candles Section */}
      <section id="candles" className="py-20 relative candles-gradient">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionReveal>
            <div className="mb-16 text-center">
              <div className="mb-6">
                <Flame
                  className="text-primary text-4xl mx-auto"
                  data-testid="flame-icon"
                />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Handcrafted Candles
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Creating ambient magic through artisanal wax creations and
                enchanting scents
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {candles.map((candle) => (
              <SectionReveal key={candle.id}>
                <div
                  className="bg-card rounded-2xl overflow-hidden shadow-lg card-hover"
                  data-testid={`card-candle-${candle.id}`}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <img
                        src={candle.image}
                        alt={candle.name}
                        className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        data-testid={`img-candle-${candle.id}`}
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                      <VisuallyHidden.Root>
                        <DialogTitle>{candle.name}</DialogTitle>
                      </VisuallyHidden.Root>
                      <VisuallyHidden.Root>
                        <DialogDescription>
                          {candle.description} - {candle.price}
                        </DialogDescription>
                      </VisuallyHidden.Root>
                      <div className="relative">
                        <img
                          src={candle.image}
                          alt={candle.name}
                          className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                          <h3 className="text-white font-serif text-xl font-semibold mb-1">
                            {candle.name}
                          </h3>
                          <p className="text-white/90 text-sm">
                            {candle.description}
                          </p>
                          <p className="text-white font-bold text-lg mt-2">
                            {candle.price}
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold mb-3 text-card-foreground">
                      {candle.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {candle.description}
                    </p>
                    <div className="flex items-center justify-center relative">
                      <button
                        onClick={(e) => handleHeartClick(candle.id, e)}
                        className={`p-3 rounded-full text-2xl transition-all duration-300 transform hover:scale-110 ${
                          likedItems[candle.id]
                            ? "text-red-500 bg-red-50 hover:bg-red-100"
                            : "text-gray-400 bg-gray-50 hover:bg-gray-100 hover:text-red-400"
                        }`}
                        data-testid={`button-heart-${candle.id}`}
                      >
                        <Heart
                          className={`w-6 h-6 transition-all duration-300 ${
                            likedItems[candle.id] ? "fill-current" : ""
                          }`}
                        />
                      </button>

                      {Object.keys(floatingHearts)
                        .filter((key) => key.startsWith(`${candle.id}-`))
                        .map((heartId) => (
                          <div
                            key={heartId}
                            className="floating-heart absolute pointer-events-none"
                            style={{
                              left: "50%",
                              top: "50%",
                              transform: "translate(-50%, -50%)",
                            }}
                          >
                            <Heart className="w-4 h-4 text-red-500 fill-current" />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section id="recommendations" className="py-20 relative">
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
    </div>
  );
};

export default KnowMeBetter;
