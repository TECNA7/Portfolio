import { useRoute } from "wouter";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { Link } from "wouter";
import SectionReveal from "@/components/section-reveal";
import kripaPhoto from "@assets/kripa_aboutus_1758336848329.jpeg";

interface BlogPostData {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
  tags: string[];
  author: string;
  avatar: string;
}

const blogPostsData: BlogPostData[] = [
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
    content: `
# How AI Works in a Startup vs a College Institution

*By Kripa Lamichhane*

For me, balancing life between being a full-time student and a Technical Product Manager has made me see AI from two very different worlds. In college, AI feels like an idea we're still trying to trust. At my startup, it's a thing we depend on every day. While both ways it looks like I'm using AI but what that means is very different.

## Learning AI in College

In class, AI lives in theory and curiosity. I use chatbots' "Study & Learn" features to understand concepts, or Perplexity AI to find recent articles for my economics assignments. Sometimes I'll even ask an AI tool to review my work or grade it, just to see what I missed.

AI in college feels like a *study buddy*. There's no pressure to be perfect, it's about exploring how things work, asking endless Wh-questions, and getting lost in the process. The tradeoff is speed, it takes longer. I test an idea, reflect, maybe discuss it in a group, and only then move forward.

Chip Huyen, in *AI Engineering*, talks about this kind of space as where we can learn the system before building the system. That freedom to explore without consequences is what college gives me.

## Working with AI in a Startup

At FSH Technologies, we build configurable software for municipalities across the U.S., helping cities digitize their processes while keeping people and workflows at the center.

Here, AI isn't something we talk about but it's something we use. I work with internal AI agents to handle repetitive tasks, generate fake data for testing my theories, and ethically scrape information. I also built a Notion space for our company and trained Notion AI to sound like me. It's a new concept to have an AI version of myself documenting updates, but it saves time.

Our company is fast-paced which means speed matters. If something breaks, there's no time to write a paper about it. We debug, tweak, deploy, and move on. As Chip Huyen describes in Chapter 2 (The AI Development Loop), it's about **shortening the iteration cycle**.

That's the biggest contrast with academia where in a startup, AI has to work **today**. Data access is messy, deployment is constant, and decisions are fast. There's no "perfect" model, only useful ones which again keep changing fast.

## The Difference

**In college, I use AI to think better.**

**At the startup, I use AI to build faster.**

In one place, I value reflection, and in the other I focus on action. It's also because of how different both areas are, like how Colleges and Universities focus on understanding and reproducibility whereas startups care about speed and results. They equally matter but are in completely different directions.

## Living in Both Worlds

My vision towards AI has changed completely as I work in both domains concurrently. I don't see AI as a mystery nor as a trend. It's that intersectional point which connects data, models, and human decisions.

I try to bring a student mindset by questioning how things work and why we do them in FSH Technologies. And, In school I try to bring my startup mindset by focusing on what's practical and keep improving.

Chip Huyen writes in *AI Engineering* (pp. 112–115) about "closing the gap between modeling and reality." That's exactly what living in both environments feels like. I get to live in that space between and experience the different parts of AI.


## Key Terms

**Chatbots** (IBM): A chatbot is a computer program that simulates human conversation with an end user. Not all chatbots are equipped with artificial intelligence (AI), but modern chatbots increasingly use conversational AI techniques such as natural language processing (NLP) to understand user questions and automate responses to them.

**AI Agents** (IBM): An artificial intelligence (AI) agent is a system that autonomously performs tasks by designing workflows with available tools.


## Citation

Huyen, Chip. *AI Engineering*. O'Reilly Media, 2024.
    `,
  },
  {
    id: 2,
    title: "AI Not as a Tool, but as a Teammate : Progression on Use of AI",
    excerpt:
      "Exploring how I changed approach of using AI from chatbots to agents. ",
    readTime: "3 min read",
    date: "Oct 28, 2025",
    tags: ["Product Management", "AI"],
    author: "Kripa Lamichhane",
    avatar: kripaPhoto,
    content: `
# AI Not as a Tool, but as a Teammate : Progression on Use of AI

*By Kripa Lamichhane*

I first used AI in early 2023 because my best friend called it a “quick fact-check bot.” It reminded me of the times when I’d ask Siri random questions just to see what it said. At first, AI felt like a smarter, funnier chatbot. I used it to correct grammar, summarize notes, and play with different tones of writing.
Later that year, as headlines warned that AI might replace human jobs, I kept experimenting quietly. I noticed how each week the chatbots got faster, more coherent, even capable of generating images and code. It still felt like a tool, but a rapidly evolving one.


## The Shift: From Chatbot to Agent

The real shift for me came during Girls Who Code’s Annual Protothon, where I was coordinating mentors and judges. Several mentors proposed prototypes using Replit Agents. I tried one myself to help the students workshop their projects and it felt like a miracle.
Until that moment, “AI” had meant conversational chatbots. Replit Agents showed me AI could not only tell but do. That discovery fits what Phoenix and Taylor describe in Chapter 10 as the transition from prompt to product which is moving beyond single outputs toward systems that integrate action, feedback, and context.
I realized I’d been confined to a small corner of what AI could do. That discovery sent me down a path of structured prompting and prompt engineering on learning what information the AI actually needed and how to frame it efficiently.
My metric was simple – efficiency. I learned to measure AI not by replies but by cost, time, and energy saved.

  • On Replit, I began using edit commands instead of using multiple serial prompts or rewriting code from scratch.
  • For structured letters, I forced JSON-formatted outputs to prevent hallucination and fine-tuned responses to our tone.
  • Later, I started training agents to write like me, automate recurring documents, and manage workflows even when I wasn’t online.

My mental shift was clear: less time rewriting, more time reviewing. AI has become my quiet teammate, freeing hours for higher-level thinking, user research, and learning.


### Working With AI Now

Today, AI is part of nearly everything I do.

  • **Tools:** Notion AI, Claude Code, Claude, Perplexity AI, ChatGPT, and Replit Agent.
  • **Use:** drafting, reviewing, OCR conversions, turning sticky notes into workflows, converting meeting notes into Linear tickets, and visualizing priorities.


I treat each AI system differently. Each has a structure tuned to its task. I run pre-prompt evaluations and post-evaluations to test hypotheses about which model performs best for a given workload. 
For me, decisions come down to cost and time. And, If automation saves no cost or time , I don’t use it. 


## Reflections: Power and Caution

AI is still imperfect and it still hallucinates and misses context. Many of my first agents failed completely before improving. Maybe that’s because of better training data or maybe that’s accumulated context. But, either way, it reminds me that humans remain in the testing and production layer.
There are risks too like over-automation can dull creativity, especially in design and writing. Sometimes it feels like the market itself is shifting faster than I can think, which is a kind of FOMO loop where every new feature suggests what humans might soon stop doing.
But even with that tension, I’ve learned that AI becomes truly useful only when treated as a collaborator, not a replacement. It listens, adapts, sometimes surprises me like any teammate learning alongside you.
The most valuable thing I’ve built isn’t an agent or a workflow. It’s a belief that AI doesn’t replace human intent but it amplifies it when we design the collaboration right.


## Reference
Phoenix, James, and Mike Taylor. *Prompt Engineering for Generative AI.* O’Reilly Media, 2024. Chapter 10 “Building AI-Powered Applications.”`,
  },
  {
    id: 3,
    title: "The Perception: Different Angles, Different Tales",
    excerpt:
      "Coming Soon",
    readTime: "3 min read",
    date: "Nov 10, 2024",
    tags: ["Development", "Accessibility"],
    author: "Kripa Lamichhane",
    avatar: kripaPhoto,
    content: `
# The Perception: Different Angles, Different Tales
*By Kripa Lamichhane*
Coming Soon - I know you are waiting but give some time & research :)
 `,
  },
  {
    id: 4,
    title: "Color Psychology in Digital Design",
    excerpt:
      "Understanding how colors influence user behavior and emotions can dramatically improve your design decisions. Let's explore the science behind color choices in digital interfaces...",
    readTime: "6 min read",
    date: "Dec 5, 2024",
    tags: ["Psychology", "Color Theory"],
    author: "Kripa Lamichhane",
    avatar: kripaPhoto,
    content: `
# Color Psychology in Digital Design
uwe98ruwe9rw

## The Science Behind Color Perception
fsiofjsoi

### Neurological Response to Color
dvijdsnvosdi

## Core Color Psychology Principles

### Red: Energy and Urgency
vdshfsdiuf
\`\`\`css
.urgent-button {
  background-color: #dc2626; /* Red-600 */
  color: white;
  /* Use sparingly to maintain impact */
}
\`\`\`

### Blue: Trust and Stability
wdifusjdhifdijf
### Global Design Strategy
\`\`\`css
/* Design system that considers cultural context */
:root {
  --success-primary: #22c55e; /* Green - universally positive */
  --warning-primary: #f59e0b; /* Amber - clear warning without alarm */
  --error-primary: #ef4444; /* Red - urgent but not overwhelming */
  --info-primary: #3b82f6; /* Blue - trustworthy and calm */
}

/* Cultural variant overrides */
[data-region="asia"] {
  --celebration-color: #dc2626; /* Red for celebrations */
  --mourning-color: #f8fafc; /* Light for somber contexts */
}
\`\`\`

## Color Accessibility and Inclusive Design

### Color Contrast Requirements
Follow WCAG guidelines for text contrast:

\`\`\`css
/* Minimum contrast ratios */
.normal-text {
  /* AA: 4.5:1 ratio minimum */
  color: #374151; /* Gray-700 */
  background-color: #ffffff;
}

.large-text {
  /* AA: 3:1 ratio minimum for 18px+ */
  color: #6b7280; /* Gray-500 */
  background-color: #ffffff;
}

.aaa-compliant {
  /* AAA: 7:1 ratio for enhanced accessibility */
  color: #1f2937; /* Gray-800 */
  background-color: #ffffff;
}
\`\`\`

### Color Blindness Considerations
- **Never rely on color alone** to convey information
- Use patterns, shapes, and text labels alongside color
- Test with color blindness simulators

\`\`\`css
/* Good: Multiple visual indicators */
.status-indicator {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
}

.status-success {
  background-color: #dcfce7; /* Green background */
  color: #166534; /* Dark green text */
  border-left: 4px solid #22c55e; /* Green border */
}

.status-success::before {
  content: "✓ "; /* Icon indicator */
  font-weight: bold;
}
\`\`\`

## Practical Color Application Strategies

### Creating Emotional Hierarchies
Use color intensity to guide user attention:

\`\`\`css
/* Primary action - highest contrast */
.btn-primary {
  background-color: #2563eb;
  color: white;
  box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.3);
}

/* Secondary action - medium contrast */
.btn-secondary {
  background-color: transparent;
  color: #2563eb;
  border: 2px solid #2563eb;
}

/* Tertiary action - lowest contrast */
.btn-tertiary {
  background-color: transparent;
  color: #6b7280;
  text-decoration: underline;
}
\`\`\`

### Data Visualization Color Strategies

\`\`\`css
/* Sequential data (showing progression) */
.data-sequential {
  --color-1: #eff6ff; /* Lightest blue */
  --color-2: #bfdbfe;
  --color-3: #60a5fa;
  --color-4: #2563eb;
  --color-5: #1d4ed8; /* Darkest blue */
}

/* Categorical data (distinct categories) */
.data-categorical {
  --category-1: #ef4444; /* Red */
  --category-2: #f59e0b; /* Amber */
  --category-3: #22c55e; /* Green */
  --category-4: #3b82f6; /* Blue */
  --category-5: #8b5cf6; /* Purple */
}

/* Diverging data (showing deviation from center) */
.data-diverging {
  --negative-strong: #dc2626;
  --negative-weak: #fca5a5;
  --neutral: #f3f4f6;
  --positive-weak: #86efac;
  --positive-strong: #16a34a;
}
\`\`\`

## Dynamic Color Systems

### Adaptive Color Based on Context
\`\`\`javascript
// Adjust colors based on time of day
function getContextualColors() {
  const hour = new Date().getHours();
  
  if (hour >= 6 && hour < 12) {
    // Morning - energetic colors
    return {
      primary: '#f59e0b', // Amber
      accent: '#eab308'   // Yellow
    };
  } else if (hour >= 12 && hour < 18) {
    // Afternoon - focused colors
    return {
      primary: '#3b82f6', // Blue
      accent: '#1d4ed8'   // Darker blue
    };
  } else {
    // Evening - calming colors
    return {
      primary: '#6366f1', // Indigo
      accent: '#8b5cf6'   // Purple
    };
  }
}

// Apply contextual colors
const colors = getContextualColors();
document.documentElement.style.setProperty('--color-primary', colors.primary);
document.documentElement.style.setProperty('--color-accent', colors.accent);
\`\`\`

### User Preference Integration
\`\`\`javascript
// Respect user's color scheme preference
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');

function updateColorScheme() {
  if (prefersHighContrast.matches) {
    document.documentElement.classList.add('high-contrast');
  }
  
  if (prefersDarkMode.matches) {
    document.documentElement.classList.add('dark-mode');
  }
}

// Listen for changes
prefersDarkMode.addListener(updateColorScheme);
prefersHighContrast.addListener(updateColorScheme);
updateColorScheme();
\`\`\`

## Testing Color Effectiveness

### A/B Testing Color Changes
\`\`\`javascript
// Example: Testing button colors for conversion
function testButtonColors() {
  const variants = [
    { color: '#2563eb', name: 'blue' },
    { color: '#dc2626', name: 'red' },
    { color: '#059669', name: 'green' }
  ];
  
  const selectedVariant = variants[Math.floor(Math.random() * variants.length)];
  
  document.querySelector('.cta-button').style.backgroundColor = selectedVariant.color;
  
  // Track conversion rates by variant
  analytics.track('button_variant_shown', {
    variant: selectedVariant.name,
    timestamp: Date.now()
  });
}
\`\`\`

### Usability Testing Considerations
- Test with users from different cultural backgrounds
- Include users with various types of color vision
- Test under different lighting conditions
- Monitor completion rates and error rates by color scheme

## Advanced Color Techniques

### Semantic Color Systems
\`\`\`css
/* Semantic color variables */
:root {
  /* Functional colors */
  --color-text-primary: #1f2937;
  --color-text-secondary: #6b7280;
  --color-text-disabled: #9ca3af;
  
  /* Interactive colors */
  --color-interactive-primary: #2563eb;
  --color-interactive-hover: #1d4ed8;
  --color-interactive-active: #1e40af;
  --color-interactive-disabled: #d1d5db;
  
  /* Feedback colors */
  --color-feedback-success: #059669;
  --color-feedback-warning: #d97706;
  --color-feedback-error: #dc2626;
  --color-feedback-info: #0284c7;
}
\`\`\`

### Color Animation and Transitions
\`\`\`css
.color-transition {
  transition: background-color 0.2s ease-out, color 0.2s ease-out;
}

/* Hover state with smooth color transition */
.interactive-element:hover {
  background-color: var(--color-interactive-hover);
  transform: translateY(-1px);
}

/* Focus state for accessibility */
.interactive-element:focus {
  outline: 2px solid var(--color-interactive-primary);
  outline-offset: 2px;
}
\`\`\`

## Future of Color in Digital Design

### Emerging Technologies
djfdsks

### AI-Powered Color Selection
fsdjfhsdkj

## Conclusion
fsdifjsdifl
    `,
  },
];

const BlogPost = () => {
  const [, params] = useRoute("/blog/:id");
  const postId = params?.id ? parseInt(params.id) : null;
  const post = blogPostsData.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Post Not Found
          </h2>
          <Link href="/blog" data-testid="back-to-blog-not-found">
            <span className="text-amber-700 hover:text-amber-800 font-medium cursor-pointer">
              ← Back to Blog
            </span>
          </Link>
        </div>
      </div>
    );
  }

  // Helper function to process inline markdown (bold and italic)
  const processInlineMarkdown = (text: string) => {
    const parts = [];
    let currentText = text;
    let key = 0;

    while (currentText.length > 0) {
      // Process bold (**text**)
      const boldMatch = currentText.match(/\*\*(.+?)\*\*/);
      if (boldMatch) {
        const beforeBold = currentText.substring(0, boldMatch.index);
        if (beforeBold) {
          parts.push(<span key={`text-${key++}`}>{beforeBold}</span>);
        }
        parts.push(<strong key={`bold-${key++}`} className="font-bold">{boldMatch[1]}</strong>);
        currentText = currentText.substring((boldMatch.index || 0) + boldMatch[0].length);
        continue;
      }

      // Process italic (*text*)
      const italicMatch = currentText.match(/\*(.+?)\*/);
      if (italicMatch) {
        const beforeItalic = currentText.substring(0, italicMatch.index);
        if (beforeItalic) {
          parts.push(<span key={`text-${key++}`}>{beforeItalic}</span>);
        }
        parts.push(<em key={`italic-${key++}`} className="italic">{italicMatch[1]}</em>);
        currentText = currentText.substring((italicMatch.index || 0) + italicMatch[0].length);
        continue;
      }

      // No more markdown, add remaining text
      parts.push(<span key={`text-${key++}`}>{currentText}</span>);
      break;
    }

    return parts.length > 0 ? parts : text;
  };

  // Convert markdown-like content to HTML (improved implementation)
  const formatContent = (content: string) => {
    const lines = content.split("\n");
    const elements = [];
    let currentCodeBlock = "";
    let inCodeBlock = false;
    let currentList = [];
    let inList = false;

    for (let index = 0; index < lines.length; index++) {
      const line = lines[index].trim();

      // Handle code blocks
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          // End code block
          elements.push(
            <pre
              key={`code-${index}`}
              className="bg-gray-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto"
            >
              <code>{currentCodeBlock}</code>
            </pre>,
          );
          currentCodeBlock = "";
          inCodeBlock = false;
        } else {
          // Start code block
          if (inList) {
            // Close any open list first
            elements.push(
              <ul
                key={`list-${index}`}
                className="list-disc list-inside space-y-2 mb-4"
              >
                {currentList}
              </ul>,
            );
            currentList = [];
            inList = false;
          }
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        currentCodeBlock += lines[index] + "\n";
        continue;
      }

      // Handle list items
      if (line.startsWith("- ")) {
        if (!inList) {
          inList = true;
        }
        currentList.push(
          <li key={`li-${index}`} className="text-gray-700">
            {processInlineMarkdown(line.substring(2))}
          </li>,
        );
        continue;
      } else if (inList) {
        // End list
        elements.push(
          <ul
            key={`list-${index}`}
            className="list-disc list-inside space-y-2 mb-4"
          >
            {currentList}
          </ul>,
        );
        currentList = [];
        inList = false;
      }

      // Handle other markdown elements
      if (!line) {
        elements.push(<br key={index} />);
      } else if (line.startsWith("# ")) {
        elements.push(
          <h1
            key={index}
            className="text-4xl font-bold font-serif text-gray-900 mb-6 mt-8"
          >
            {processInlineMarkdown(line.substring(2))}
          </h1>,
        );
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2
            key={index}
            className="text-2xl font-bold font-serif text-gray-900 mb-4 mt-6"
          >
            {processInlineMarkdown(line.substring(3))}
          </h2>,
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3
            key={index}
            className="text-xl font-semibold text-gray-900 mb-3 mt-5"
          >
            {processInlineMarkdown(line.substring(4))}
          </h3>,
        );
      } else if (line.startsWith("**") && line.endsWith("**")) {
        elements.push(
          <p key={index} className="font-bold text-gray-900 mb-2">
            {processInlineMarkdown(line.slice(2, -2))}
          </p>,
        );
      } else if (
        line.startsWith("*") &&
        line.endsWith("*") &&
        !line.includes("**")
      ) {
        elements.push(
          <p
            key={index}
            className="italic text-gray-600 mb-4 text-center border-l-4 border-amber-200 pl-4"
          >
            {processInlineMarkdown(line.slice(1, -1))}
          </p>,
        );
      } else if (line.startsWith("---")) {
        elements.push(
          <hr key={index} className="border-gray-300 my-6" />,
        );
      } else {
        elements.push(
          <p key={index} className="text-gray-700 mb-4 leading-relaxed">
            {processInlineMarkdown(line)}
          </p>,
        );
      }
    }

    // Close any remaining open list
    if (inList) {
      elements.push(
        <ul key="final-list" className="list-disc list-inside space-y-2 mb-4">
          {currentList}
        </ul>,
      );
    }

    return elements;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-8">
        <SectionReveal>
          <Link href="/blog" data-testid="back-to-blog">
            <span className="flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium mb-8 transition-colors cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </span>
          </Link>
        </SectionReveal>

        <SectionReveal>
          <article className="prose prose-lg max-w-none">
            {/* Article Header */}
            <header className="mb-8">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <img
                    src={post.avatar}
                    alt={`${post.author} avatar`}
                    className="w-10 h-10 rounded-full"
                    data-testid="author-avatar"
                  />
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span className="font-medium">{post.author}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>

                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Article Content */}
            <div className="text-gray-700 leading-relaxed">
              {formatContent(post.content)}
            </div>
          </article>
        </SectionReveal>

        {/* Back to Blog Footer */}
        <SectionReveal>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <Link href="/blog" data-testid="back-to-blog-footer">
              <span className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg hover:scale-105 cursor-pointer">
                ← Back to All Posts
              </span>
            </Link>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
};

export default BlogPost;
