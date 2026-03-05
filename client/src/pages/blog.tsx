import { Link } from "wouter";
import SectionReveal from "@/components/section-reveal";
import kripaPhoto from "@assets/kripa_aboutus_1758336848329.jpeg";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How AI Works in a Startup vs a College Institution",
      excerpt:
        "For me, balancing life between being a full-time student and a Technical Product Manager has made me see AI from two very different worlds. In college, AI feels like an idea we're still trying to trust. At my startup, it's a thing we depend on every day.",
      readTime: "4 min read",
      date: "Oct 2, 2025",
      tags: ["AI", "Startup", "College"],
      author: "Kripa Lamichhane",
      avatar: kripaPhoto,
    },
    {
      id: 2,
      title: "AI Not as a Tool, but as a Teammate : Progression on Use of AI",
      excerpt:
        "Exploring how I changed approach of using AI from chatbots to agents.",
      readTime: "3 min read",
      date: "Oct 28, 2025",
      tags: ["Product Management", "AI"],
      author: "Kripa Lamichhane",
      avatar: kripaPhoto,
    },
    {
      id: 3,
      title: "The Perception: Different Angles, Different Tales",
      excerpt:
        "Coming Soon",
      readTime: "3 min read",
      date: "Nov 10, 2025",
      tags: ["Psychology", "Perception"],
      author: "Kripa Lamichhane",
      avatar: kripaPhoto,
    },
  ];

  return (
    <section id="blog" className="min-h-screen py-20 relative blog-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <SectionReveal>
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Latest Thoughts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sharing insights on design, technology, and creative processes
            </p>
          </div>
        </SectionReveal>

        <div className="space-y-12">
          {blogPosts.map((post, index) => (
            <div key={post.id}>
              <SectionReveal>
                <article data-testid={`article-${post.id}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={post.avatar}
                      alt={`${post.author} avatar`}
                      className="w-12 h-12 rounded-full"
                      data-testid={`img-avatar-${post.id}`}
                    />
                    <div>
                      <p className="font-medium text-gray-900">{post.author}</p>
                      <p className="text-sm text-gray-500">
                        {post.readTime} · {post.date}
                      </p>
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4 text-gray-900 hover:text-gray-700 cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                    <Link
                      href={`/blog/${post.id}`}
                      data-testid={`button-read-more-${post.id}`}
                    >
                      <span className="text-amber-700 hover:text-amber-800 font-medium text-sm cursor-pointer transition-colors">
                        Read more →
                      </span>
                    </Link>
                  </div>
                </article>
              </SectionReveal>
              {index < blogPosts.length - 1 && (
                <hr className="border-gray-200 mt-12" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
