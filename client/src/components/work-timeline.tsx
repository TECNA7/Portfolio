import { MapPin, Star, Sparkles } from "lucide-react";
import { useMemo } from "react";
import SectionReveal from "@/components/section-reveal";
import { useSeason } from "@/contexts/season-context";

// Custom illustrated mountain component
const IllustratedMountain = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M10 70 L25 45 L35 55 L50 25 L65 40 L75 30 L90 50 L100 45 L110 70 Z" 
      fill="currentColor" 
      opacity="0.3"
    />
    <path 
      d="M10 70 L25 45 L35 55 L50 25 L65 40 L75 30 L90 50 L100 45 L110 70" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      opacity="0.6"
    />
    {/* Mountain ridges/shading */}
    <path d="M30 50 L35 55 L40 50" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <path d="M55 35 L60 40 L65 40" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <path d="M85 45 L90 50 L95 47" stroke="currentColor" strokeWidth="1" opacity="0.4" />
  </svg>
);

// Custom illustrated tree cluster component
const IllustratedTrees = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tree 1 */}
    <path d="M15 50 L15 35" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <path d="M15 35 L10 40 L20 40 Z" fill="currentColor" opacity="0.4" />
    <path d="M15 32 L9 38 L21 38 Z" fill="currentColor" opacity="0.5" />
    <path d="M15 29 L8 36 L22 36 Z" fill="currentColor" opacity="0.6" />
    
    {/* Tree 2 */}
    <path d="M30 50 L30 38" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <path d="M30 38 L24 44 L36 44 Z" fill="currentColor" opacity="0.4" />
    <path d="M30 34 L23 41 L37 41 Z" fill="currentColor" opacity="0.5" />
    <path d="M30 30 L22 38 L38 38 Z" fill="currentColor" opacity="0.6" />
    
    {/* Tree 3 */}
    <path d="M45 50 L45 40" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <path d="M45 40 L40 45 L50 45 Z" fill="currentColor" opacity="0.4" />
    <path d="M45 37 L39 43 L51 43 Z" fill="currentColor" opacity="0.5" />
    <path d="M45 34 L38 41 L52 41 Z" fill="currentColor" opacity="0.6" />
  </svg>
);

// Custom illustrated hills component
const IllustratedHills = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M0 35 Q25 15 50 35 T100 35 L100 40 L0 40 Z" 
      fill="currentColor" 
      opacity="0.2"
    />
    <path 
      d="M0 35 Q25 15 50 35 T100 35" 
      stroke="currentColor" 
      strokeWidth="1" 
      opacity="0.4"
    />
  </svg>
);

// Custom illustrated rocks component
const IllustratedRocks = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Rock 1 */}
    <path d="M5 25 L8 18 L12 20 L15 16 L18 25 Z" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="1" />
    {/* Rock 2 */}
    <path d="M22 25 L25 20 L28 22 L31 18 L35 25 Z" fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="1" />
    {/* Rock 3 */}
    <path d="M38 25 L40 22 L43 24 L45 21 L47 25 Z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// Custom illustrated house component
const IllustratedHouse = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* House base */}
    <path d="M15 50 L15 30 L45 30 L45 50 Z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
    {/* Roof */}
    <path d="M10 30 L30 15 L50 30 Z" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="1.5" />
    {/* Door */}
    <rect x="25" y="38" width="10" height="12" fill="currentColor" opacity="0.5" stroke="currentColor" strokeWidth="1" />
    {/* Windows */}
    <rect x="18" y="35" width="5" height="5" fill="currentColor" opacity="0.6" stroke="currentColor" strokeWidth="0.8" />
    <rect x="37" y="35" width="5" height="5" fill="currentColor" opacity="0.6" stroke="currentColor" strokeWidth="0.8" />
    {/* Chimney */}
    <rect x="35" y="18" width="4" height="8" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="1" />
    {/* Roof details */}
    <path d="M15 26 L30 15 L45 26" stroke="currentColor" strokeWidth="1" opacity="0.5" />
  </svg>
);

// Custom illustrated castle component
const IllustratedCastle = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main castle body */}
    <path d="M15 60 L15 25 L65 25 L65 60 Z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
    {/* Left tower */}
    <rect x="10" y="15" width="12" height="45" fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="1.5" />
    {/* Right tower */}
    <rect x="58" y="15" width="12" height="45" fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="1.5" />
    {/* Center tower */}
    <rect x="32" y="8" width="16" height="52" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="1.5" />
    {/* Battlements on towers */}
    <path d="M10 15 L12 15 L12 12 L14 12 L14 15 L16 15 L16 12 L18 12 L18 15 L20 15 L20 12 L22 12 L22 15" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <path d="M58 15 L60 15 L60 12 L62 12 L62 15 L64 15 L64 12 L66 12 L66 15 L68 15 L68 12 L70 12 L70 15" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <path d="M32 8 L34 8 L34 5 L36 5 L36 8 L40 8 L40 5 L42 5 L42 8 L44 8 L44 5 L46 5 L46 8 L48 8" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    {/* Gate */}
    <path d="M35 45 Q35 35 40 35 Q45 35 45 45 L45 60 L35 60 Z" fill="currentColor" opacity="0.5" stroke="currentColor" strokeWidth="1.2" />
    {/* Windows */}
    <rect x="13" y="25" width="4" height="6" fill="currentColor" opacity="0.6" stroke="currentColor" strokeWidth="0.8" />
    <rect x="63" y="25" width="4" height="6" fill="currentColor" opacity="0.6" stroke="currentColor" strokeWidth="0.8" />
    <rect x="38" y="18" width="4" height="6" fill="currentColor" opacity="0.6" stroke="currentColor" strokeWidth="0.8" />
    {/* Flags */}
    <path d="M16 12 L16 5 L20 8 L16 11" fill="currentColor" opacity="0.5" />
    <path d="M64 12 L64 5 L68 8 L64 11" fill="currentColor" opacity="0.5" />
    <path d="M40 5 L40 0 L46 2.5 L40 5" fill="currentColor" opacity="0.5" />
  </svg>
);

interface Role {
  title: string;
  organization: string;
  period: string;
  status: "active" | "semi-active" | "past";
  startDate: Date;
  endDate?: Date;
  position?: { x: number; y: number }; // Position on the map
}

const WorkTimeline = () => {
  const { season } = useSeason();

  const roles: Role[] = [
    {
      title: "Technical/AI Product Manager",
      organization: "FSH Technologies",
      period: "May 2025 - Present",
      status: "active",
      startDate: new Date("2025-05-01"),
    },
    {
      title: "Co-founder & Tech Lead",
      organization: "Rate My Semester Abroad",
      period: "Jun 2025 - Present",
      status: "semi-active",
      startDate: new Date("2025-06-01"),
    },
    {
      title: "President's Student Advisor",
      organization: "Bryn Mawr College",
      period: "Oct 2025 - Present",
      status: "active",
      startDate: new Date("2025-10-01"),
    },
    {
      title: "Peer Mentor for Data Science",
      organization: "Quantitative Center",
      period: "Sep 2025 - Present",
      status: "active",
      startDate: new Date("2025-09-01"),
    },
    {
      title: "Senior Advisor",
      organization: "GirlsWhoCode Bryn Mawr",
      period: "Aug 2025 - Present",
      status: "semi-active",
      startDate: new Date("2025-08-01"),
    },
    {
      title: "Grand Captain",
      organization: "Owl Programming Board",
      period: "Jul 2025 - Present",
      status: "active",
      startDate: new Date("2025-07-01"),
    },
    {
      title: "Data Analyst Contract",
      organization: "National Audubon Society",
      period: "Jan 2025 - May 2025",
      status: "past",
      startDate: new Date("2025-01-01"),
      endDate: new Date("2025-05-01"),
    },
    {
      title: "Teaching Assistant - Computer Science",
      organization: "Bryn Mawr College",
      period: "Sep 2023 - May 2025",
      status: "past",
      startDate: new Date("2023-09-01"),
      endDate: new Date("2025-05-01"),
    },
    {
      title: "President",
      organization: "GirlsWhoCode Bryn Mawr",
      period: "July 2023 - May 2025",
      status: "past",
      startDate: new Date("2023-07-01"),
      endDate: new Date("2025-05-01"),
    },
    {
      title: "Out-reach Manager",
      organization: "Bryn Mawr College",
      period: "Aug 2023 - 2024",
      status: "past",
      startDate: new Date("2023-08-01"),
      endDate: new Date("2024-08-01"),
    },
    {
      title: "Web Designer",
      organization: "Kantipur Health",
      period: "May 2023 - Aug 2024",
      status: "past",
      startDate: new Date("2023-05-01"),
      endDate: new Date("2024-08-01"),
    },
    {
      title: "Community Manager",
      organization: "Arthub Nepal",
      period: "Oct 2021 - June 2023",
      status: "past",
      startDate: new Date("2021-10-01"),
      endDate: new Date("2023-06-01"),
    },
    {
      title: "Student Researcher",
      organization: "SRCN",
      period: "Feb 2021 - Apr 2022",
      status: "past",
      startDate: new Date("2021-02-01"),
      endDate: new Date("2022-04-01"),
    },
    {
      title: "Graphics Designer",
      organization: "IGP",
      period: "June 2021 - Sep 2021",
      status: "past",
      startDate: new Date("2021-06-01"),
      endDate: new Date("2021-09-01"),
    },
  ];

  // Sort by start date (most recent first)
  const sortedRoles = [...roles].sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

  // Group by status
  const activeRoles = sortedRoles.filter(r => r.status === "active");
  const semiActiveRoles = sortedRoles.filter(r => r.status === "semi-active");
  const pastRoles = sortedRoles.filter(r => r.status === "past");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-primary text-primary-foreground";
      case "semi-active":
        return "bg-secondary text-secondary-foreground";
      case "past":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case "active":
        return "bg-primary animate-pulse";
      case "semi-active":
        return "bg-secondary";
      case "past":
        return "bg-muted-foreground/50";
      default:
        return "bg-muted-foreground/50";
    }
  };

  const MapMarker = ({ role, index }: { role: Role; index: number }) => {
    const getMarkerIcon = (status: string) => {
      if (status === "active") return <Star className="w-6 h-6" fill="currentColor" />;
      if (status === "semi-active") return <Sparkles className="w-6 h-6" />;
      return <MapPin className="w-6 h-6" />;
    };

    const getMarkerColor = (status: string) => {
      if (status === "active") return "text-primary bg-primary/20 border-primary shadow-primary/50";
      if (status === "semi-active") return "text-secondary bg-secondary/20 border-secondary shadow-secondary/50";
      return "text-muted-foreground bg-muted/30 border-muted-foreground/30";
    };

    // Position hover card above marker if it's in bottom half of map, below otherwise
    const isBottomHalf = (role.position?.y || 0) > 400;
    const cardPositionClass = isBottomHalf ? "bottom-16" : "top-16";

    return (
      <div 
        className="absolute group"
        style={{
          left: `${role.position?.x || (index % 3) * 33}%`,
          top: `${role.position?.y || Math.floor(index / 3) * 180}px`,
        }}
      >
        {/* Map Pin Marker */}
        <div className={`relative flex items-center justify-center w-14 h-14 rounded-full border-2 ${getMarkerColor(role.status)} shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:shadow-2xl cursor-pointer`}>
          {getMarkerIcon(role.status)}
          {role.status === "active" && (
            <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
          )}
        </div>

        {/* Info Card on Hover - dynamically positioned */}
        <div className={`absolute left-1/2 -translate-x-1/2 ${cardPositionClass} w-64 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-10`}>
          <div className="bg-card p-4 rounded-xl shadow-2xl border border-border">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h4 className="font-semibold text-card-foreground text-sm leading-tight">
                {role.title}
              </h4>
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${getStatusColor(role.status)}`}>
                {role.status === "active" ? "●" : role.status === "semi-active" ? "◐" : "○"}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-1">
              {role.organization}
            </p>
            <p className="text-xs text-muted-foreground/80">
              {role.period}
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Create stable, deterministic positioning for the map layout
  // Chronologically ordered from earliest to latest, memoized to prevent repositioning on re-renders
  const positionedRoles = useMemo(() => {
    // First reverse to go from earliest to latest
    const chronologicalRoles = [...sortedRoles].reverse();
    
    // Create a winding path layout with predetermined positions
    // Path flows from bottom-left (earliest) to top-right (latest) with generally upward progression
    const positions: Array<{ x: number; y: number }> = [
      { x: 10, y: 680 },   // 1. Start bottom left (earliest)
      { x: 18, y: 620 },   // 2. Moving up-right
      { x: 28, y: 570 },   // 3.
      { x: 20, y: 510 },   // 4. Winding left, still ascending
      { x: 32, y: 450 },   // 5. Back right
      { x: 45, y: 400 },   // 6.
      { x: 38, y: 350 },   // 7. Slight left
      { x: 50, y: 300 },   // 8. Moving right
      { x: 62, y: 260 },   // 9. Continue upward
      { x: 68, y: 220 },   // 10. 
      { x: 75, y: 200 },   // 11. Continue ascending
      { x: 70, y: 160 },   // 12. Winding left, still up
      { x: 78, y: 130 },   // 13.
      { x: 85, y: 70 },    // 14. End top right (latest - index 13)
    ];
    
    return chronologicalRoles.map((role, index) => ({
      ...role,
      position: positions[index] || positions[positions.length - 1], // Use last position as fallback
    }));
  }, [sortedRoles]);

  return (
    <div className="mt-24 mb-24">
      <SectionReveal>
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text">
            My Journey Map
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my professional path through this interactive map
          </p>
        </div>
      </SectionReveal>

      {/* Legend */}
      <SectionReveal>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-primary" fill="currentColor" />
            <span className="text-sm text-muted-foreground">Active</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-secondary" />
            <span className="text-sm text-muted-foreground">Semi-Active</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Past</span>
          </div>
        </div>
      </SectionReveal>

      {/* Interactive Map */}
      <SectionReveal>
        <div className="relative bg-gradient-to-br from-background via-card/30 to-background rounded-3xl p-8 min-h-[800px] border border-border/50 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-[33%] w-24 h-24 bg-accent rounded-full blur-3xl" />
          </div>

          {/* Landscape Elements */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            {/* Mountains in background - distributed across map */}
            <div className={`absolute bottom-16 left-8 transition-all duration-1000 ${
              season === 'winter' ? 'text-blue-300 dark:text-blue-400' :
              season === 'spring' ? 'text-pink-300 dark:text-pink-400' :
              season === 'summer' ? 'text-amber-300 dark:text-amber-400' :
              season === 'fall' ? 'text-orange-300 dark:text-orange-400' :
              'text-red-300 dark:text-red-400'
            }`}>
              <IllustratedMountain className="w-40 h-28" />
            </div>
            <div className={`absolute bottom-20 right-12 transition-all duration-1000 ${
              season === 'winter' ? 'text-blue-400 dark:text-blue-500' :
              season === 'spring' ? 'text-pink-400 dark:text-pink-500' :
              season === 'summer' ? 'text-amber-400 dark:text-amber-500' :
              season === 'fall' ? 'text-orange-400 dark:text-orange-500' :
              'text-red-400 dark:text-red-500'
            }`}>
              <IllustratedMountain className="w-48 h-32" />
            </div>
            <div className={`absolute bottom-12 left-[33%] transition-all duration-1000 ${
              season === 'winter' ? 'text-blue-200 dark:text-blue-300' :
              season === 'spring' ? 'text-pink-200 dark:text-pink-300' :
              season === 'summer' ? 'text-amber-200 dark:text-amber-300' :
              season === 'fall' ? 'text-orange-200 dark:text-orange-300' :
              'text-red-200 dark:text-red-300'
            }`}>
              <IllustratedMountain className="w-36 h-24" />
            </div>

            {/* Hills scattered - filling gaps */}
            <div className={`absolute bottom-28 right-[25%] transition-all duration-1000 ${
              season === 'winter' ? 'text-blue-200 dark:text-blue-300' :
              season === 'spring' ? 'text-pink-200 dark:text-pink-300' :
              season === 'summer' ? 'text-green-200 dark:text-green-300' :
              season === 'fall' ? 'text-amber-200 dark:text-amber-300' :
              'text-green-200 dark:text-green-300'
            }`}>
              <IllustratedHills className="w-32 h-16" />
            </div>
            <div className={`absolute bottom-32 left-[25%] transition-all duration-1000 ${
              season === 'winter' ? 'text-blue-200 dark:text-blue-300' :
              season === 'spring' ? 'text-pink-200 dark:text-pink-300' :
              season === 'summer' ? 'text-green-200 dark:text-green-300' :
              season === 'fall' ? 'text-amber-200 dark:text-amber-300' :
              'text-green-200 dark:text-green-300'
            }`}>
              <IllustratedHills className="w-36 h-20" />
            </div>
            <div className={`absolute top-[20%] left-[60%] transition-all duration-1000 ${
              season === 'winter' ? 'text-blue-200 dark:text-blue-300' :
              season === 'spring' ? 'text-pink-200 dark:text-pink-300' :
              season === 'summer' ? 'text-green-200 dark:text-green-300' :
              season === 'fall' ? 'text-amber-200 dark:text-amber-300' :
              'text-green-200 dark:text-green-300'
            }`}>
              <IllustratedHills className="w-32 h-16" />
            </div>
            <div className={`absolute top-[45%] right-[15%] transition-all duration-1000 ${
              season === 'winter' ? 'text-blue-200 dark:text-blue-300' :
              season === 'spring' ? 'text-pink-200 dark:text-pink-300' :
              season === 'summer' ? 'text-green-200 dark:text-green-300' :
              season === 'fall' ? 'text-amber-200 dark:text-amber-300' :
              'text-green-200 dark:text-green-300'
            }`}>
              <IllustratedHills className="w-36 h-20" />
            </div>
            <div className={`absolute bottom-[45%] left-[45%] transition-all duration-1000 ${
              season === 'winter' ? 'text-blue-200 dark:text-blue-300' :
              season === 'spring' ? 'text-pink-200 dark:text-pink-300' :
              season === 'summer' ? 'text-green-200 dark:text-green-300' :
              season === 'fall' ? 'text-amber-200 dark:text-amber-300' :
              'text-green-200 dark:text-green-300'
            }`}>
              <IllustratedHills className="w-34 h-18" />
            </div>
            <div className={`absolute top-[70%] right-[50%] transition-all duration-1000 ${
              season === 'winter' ? 'text-blue-200 dark:text-blue-300' :
              season === 'spring' ? 'text-pink-200 dark:text-pink-300' :
              season === 'summer' ? 'text-green-200 dark:text-green-300' :
              season === 'fall' ? 'text-amber-200 dark:text-amber-300' :
              'text-green-200 dark:text-green-300'
            }`}>
              <IllustratedHills className="w-32 h-16" />
            </div>

            {/* Trees - well distributed */}
            <div className={`absolute top-20 left-12 transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-16 h-16" />
            </div>
            <div className={`absolute top-16 right-20 transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-14 h-14" />
            </div>
            <div className={`absolute top-[33%] left-[25%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-20 h-20" />
            </div>
            <div className={`absolute top-[25%] right-[33%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-16 h-16" />
            </div>
            <div className={`absolute bottom-[33%] left-20 transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-12 h-12" />
            </div>
            <div className={`absolute bottom-[25%] right-16 transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-16 h-16" />
            </div>
            <div className={`absolute top-[67%] left-[33%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-14 h-14" />
            </div>

            {/* Rocks - filling gaps */}
            <div className={`absolute top-[25%] left-16 transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-400 dark:text-gray-500' :
              season === 'spring' ? 'text-gray-500 dark:text-gray-600' :
              season === 'summer' ? 'text-gray-500 dark:text-gray-600' :
              season === 'fall' ? 'text-gray-600 dark:text-gray-700' :
              'text-gray-500 dark:text-gray-600'
            }`}>
              <IllustratedRocks className="w-10 h-7" />
            </div>
            <div className={`absolute bottom-[25%] left-[33%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-400 dark:text-gray-500' :
              season === 'spring' ? 'text-gray-500 dark:text-gray-600' :
              season === 'summer' ? 'text-gray-500 dark:text-gray-600' :
              season === 'fall' ? 'text-gray-600 dark:text-gray-700' :
              'text-gray-500 dark:text-gray-600'
            }`}>
              <IllustratedRocks className="w-12 h-8" />
            </div>
            <div className={`absolute top-[75%] right-[33%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-400 dark:text-gray-500' :
              season === 'spring' ? 'text-gray-500 dark:text-gray-600' :
              season === 'summer' ? 'text-gray-500 dark:text-gray-600' :
              season === 'fall' ? 'text-gray-600 dark:text-gray-700' :
              'text-gray-500 dark:text-gray-600'
            }`}>
              <IllustratedRocks className="w-9 h-6" />
            </div>

            {/* Houses - spread across map */}
            <div className={`absolute top-[33%] left-8 transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-600 dark:text-gray-500' :
              season === 'spring' ? 'text-pink-500 dark:text-pink-600' :
              season === 'summer' ? 'text-amber-500 dark:text-amber-600' :
              season === 'fall' ? 'text-orange-500 dark:text-orange-600' :
              'text-pink-500 dark:text-pink-600'
            }`}>
              <IllustratedHouse className="w-14 h-14" />
            </div>
            <div className={`absolute top-1/2 right-12 transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-600 dark:text-gray-500' :
              season === 'spring' ? 'text-pink-500 dark:text-pink-600' :
              season === 'summer' ? 'text-amber-500 dark:text-amber-600' :
              season === 'fall' ? 'text-orange-500 dark:text-orange-600' :
              'text-pink-500 dark:text-pink-600'
            }`}>
              <IllustratedHouse className="w-16 h-16" />
            </div>
            <div className={`absolute bottom-[33%] right-[25%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-600 dark:text-gray-500' :
              season === 'spring' ? 'text-pink-500 dark:text-pink-600' :
              season === 'summer' ? 'text-amber-500 dark:text-amber-600' :
              season === 'fall' ? 'text-orange-500 dark:text-orange-600' :
              'text-pink-500 dark:text-pink-600'
            }`}>
              <IllustratedHouse className="w-12 h-12" />
            </div>

            {/* Castles - prominent positions */}
            <div className={`absolute top-12 right-8 transition-all duration-1000 ${
              season === 'winter' ? 'text-blue-400 dark:text-blue-500' :
              season === 'spring' ? 'text-purple-400 dark:text-purple-500' :
              season === 'summer' ? 'text-yellow-600 dark:text-yellow-700' :
              season === 'fall' ? 'text-amber-800 dark:text-amber-900' :
              'text-purple-400 dark:text-purple-500'
            }`}>
              <IllustratedCastle className="w-24 h-24" />
            </div>
            <div className={`absolute bottom-[25%] left-12 transition-all duration-1000 ${
              season === 'winter' ? 'text-blue-400 dark:text-blue-500' :
              season === 'spring' ? 'text-purple-400 dark:text-purple-500' :
              season === 'summer' ? 'text-yellow-600 dark:text-yellow-700' :
              season === 'fall' ? 'text-amber-800 dark:text-amber-900' :
              'text-purple-400 dark:text-purple-500'
            }`}>
              <IllustratedCastle className="w-20 h-20" />
            </div>

            {/* Additional trees - filling more gaps */}
            <div className={`absolute top-[75%] left-[25%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-14 h-14" />
            </div>
            <div className={`absolute bottom-[33%] right-[33%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-16 h-16" />
            </div>
            <div className={`absolute top-1/2 left-2/3 transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-12 h-12" />
            </div>

            {/* Many more trees spread across the entire map */}
            <div className={`absolute top-[40%] right-[20%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-14 h-14" />
            </div>
            <div className={`absolute top-[50%] right-[45%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-16 h-16" />
            </div>
            <div className={`absolute bottom-[10%] right-[50%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-14 h-14" />
            </div>
            <div className={`absolute bottom-[15%] left-[60%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-12 h-12" />
            </div>
            <div className={`absolute bottom-[20%] right-[60%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-18 h-18" />
            </div>
            <div className={`absolute bottom-[5%] left-[70%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-16 h-16" />
            </div>
            <div className={`absolute top-[12%] left-[65%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-14 h-14" />
            </div>
            <div className={`absolute top-[18%] right-[55%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-20 h-20" />
            </div>
            <div className={`absolute top-[22%] left-[80%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-12 h-12" />
            </div>
            <div className={`absolute top-[28%] right-[70%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-16 h-16" />
            </div>
            <div className={`absolute top-[32%] left-[75%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-14 h-14" />
            </div>
            <div className={`absolute top-[38%] right-[65%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-18 h-18" />
            </div>
            <div className={`absolute top-[42%] left-[85%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-16 h-16" />
            </div>
            <div className={`absolute top-[48%] right-[75%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-20 h-20" />
            </div>
            <div className={`absolute top-[52%] left-[90%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-14 h-14" />
            </div>
            <div className={`absolute top-[58%] right-[80%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-12 h-12" />
            </div>
            <div className={`absolute top-[62%] left-[95%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-16 h-16" />
            </div>
            <div className={`absolute top-[68%] right-[85%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-18 h-18" />
            </div>
            <div className={`absolute top-[72%] left-[5%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-14 h-14" />
            </div>
            <div className={`absolute top-[78%] right-[5%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-20 h-20" />
            </div>
            <div className={`absolute top-[82%] left-[15%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-12 h-12" />
            </div>
            <div className={`absolute top-[88%] right-[15%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-16 h-16" />
            </div>
            <div className={`absolute top-[92%] left-[45%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-14 h-14" />
            </div>
            <div className={`absolute top-[95%] right-[45%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-18 h-18" />
            </div>
            <div className={`absolute bottom-[2%] left-[30%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-16 h-16" />
            </div>
            <div className={`absolute bottom-[8%] right-[40%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-20 h-20" />
            </div>
            <div className={`absolute bottom-[12%] left-[55%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-14 h-14" />
            </div>
            <div className={`absolute bottom-[18%] right-[55%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-12 h-12" />
            </div>
            <div className={`absolute bottom-[22%] left-[65%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-18 h-18" />
            </div>
            <div className={`absolute bottom-[28%] right-[70%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-16 h-16" />
            </div>
            <div className={`absolute bottom-[35%] left-[75%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-20 h-20" />
            </div>
            <div className={`absolute bottom-[40%] right-[80%] transition-all duration-1000 ${
              season === 'winter' ? 'text-gray-500 dark:text-gray-600' :
              season === 'spring' ? 'text-green-500 dark:text-green-600' :
              season === 'summer' ? 'text-green-600 dark:text-green-700' :
              season === 'fall' ? 'text-amber-600 dark:text-amber-700' :
              'text-green-700 dark:text-green-800'
            }`}>
              <IllustratedTrees className="w-14 h-14" />
            </div>

            {/* Water/rivers from different directions - better positioned */}
            {/* River from top-left */}
            <div className={`absolute top-8 left-24 w-40 h-40 transition-all duration-1000 ${
              season === 'winter' ? 'text-blue-300 dark:text-blue-400' :
              season === 'spring' ? 'text-blue-400 dark:text-blue-500' :
              season === 'summer' ? 'text-cyan-400 dark:text-cyan-500' :
              season === 'fall' ? 'text-blue-400 dark:text-blue-500' :
              'text-blue-400 dark:text-blue-500'
            }`}>
              <svg className="w-full h-full opacity-15" viewBox="0 0 160 160" preserveAspectRatio="none">
                <path
                  d="M10,10 Q50,40 80,60 T140,100"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="none"
                />
              </svg>
            </div>

            {/* Stream from right side */}
            <div className={`absolute top-[25%] right-8 w-32 h-48 transition-all duration-1000 ${
              season === 'winter' ? 'text-blue-300 dark:text-blue-400' :
              season === 'spring' ? 'text-blue-400 dark:text-blue-500' :
              season === 'summer' ? 'text-cyan-400 dark:text-cyan-500' :
              season === 'fall' ? 'text-blue-400 dark:text-blue-500' :
              'text-blue-400 dark:text-blue-500'
            }`}>
              <svg className="w-full h-full opacity-15" viewBox="0 0 128 192" preserveAspectRatio="none">
                <path
                  d="M120,20 Q90,70 80,120 T70,180"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </div>

            {/* Pond in middle area */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
              season === 'winter' ? 'text-blue-300 dark:text-blue-400' :
              season === 'spring' ? 'text-blue-400 dark:text-blue-500' :
              season === 'summer' ? 'text-cyan-400 dark:text-cyan-500' :
              season === 'fall' ? 'text-blue-400 dark:text-blue-500' :
              'text-blue-400 dark:text-blue-500'
            }`}>
              <svg className="w-24 h-16 opacity-20" viewBox="0 0 96 64" preserveAspectRatio="none">
                <ellipse cx="48" cy="32" rx="40" ry="28" fill="currentColor" />
              </svg>
            </div>

            {/* River from bottom-left */}
            <div className={`absolute bottom-8 left-16 w-48 h-48 transition-all duration-1000 ${
              season === 'winter' ? 'text-blue-300 dark:text-blue-400' :
              season === 'spring' ? 'text-blue-400 dark:text-blue-500' :
              season === 'summer' ? 'text-cyan-400 dark:text-cyan-500' :
              season === 'fall' ? 'text-blue-400 dark:text-blue-500' :
              'text-blue-400 dark:text-blue-500'
            }`}>
              <svg className="w-full h-full opacity-15" viewBox="0 0 192 192" preserveAspectRatio="none">
                <path
                  d="M10,180 Q60,140 100,120 T180,80"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="none"
                />
              </svg>
            </div>

            {/* Stream from left side */}
            <div className={`absolute top-[60%] left-4 w-32 h-40 transition-all duration-1000 ${
              season === 'winter' ? 'text-blue-300 dark:text-blue-400' :
              season === 'spring' ? 'text-blue-400 dark:text-blue-500' :
              season === 'summer' ? 'text-cyan-400 dark:text-cyan-500' :
              season === 'fall' ? 'text-blue-400 dark:text-blue-500' :
              'text-blue-400 dark:text-blue-500'
            }`}>
              <svg className="w-full h-full opacity-15" viewBox="0 0 128 160" preserveAspectRatio="none">
                <path
                  d="M10,20 Q40,60 50,100 T60,150"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </div>

            {/* Small lake in top-right quadrant */}
            <div className={`absolute top-[35%] right-[20%] transition-all duration-1000 ${
              season === 'winter' ? 'text-blue-300 dark:text-blue-400' :
              season === 'spring' ? 'text-blue-400 dark:text-blue-500' :
              season === 'summer' ? 'text-cyan-400 dark:text-cyan-500' :
              season === 'fall' ? 'text-blue-400 dark:text-blue-500' :
              'text-blue-400 dark:text-blue-500'
            }`}>
              <svg className="w-20 h-14 opacity-20" viewBox="0 0 80 56" preserveAspectRatio="none">
                <ellipse cx="40" cy="28" rx="35" ry="24" fill="currentColor" />
              </svg>
            </div>

            {/* Additional winding paths */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" style={{ zIndex: 0 }}>
              <path
                d="M 100 600 Q 150 580 200 590 Q 250 600 300 580"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                className={`transition-all duration-1000 ${
                  season === 'winter' ? 'text-gray-400' :
                  season === 'spring' ? 'text-green-400' :
                  season === 'summer' ? 'text-amber-400' :
                  season === 'fall' ? 'text-orange-400' :
                  'text-gray-400'
                }`}
              />
              <path
                d="M 500 200 Q 550 220 600 210 Q 650 200 700 220"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                className={`transition-all duration-1000 ${
                  season === 'winter' ? 'text-gray-400' :
                  season === 'spring' ? 'text-green-400' :
                  season === 'summer' ? 'text-amber-400' :
                  season === 'fall' ? 'text-orange-400' :
                  'text-gray-400'
                }`}
              />
            </svg>

            {/* River flowing through */}
            <div className={`absolute bottom-10 left-0 right-0 transition-all duration-1000 ${
              season === 'winter' ? 'text-blue-300 dark:text-blue-400' :
              season === 'spring' ? 'text-blue-400 dark:text-blue-500' :
              season === 'summer' ? 'text-cyan-400 dark:text-cyan-500' :
              season === 'fall' ? 'text-blue-400 dark:text-blue-500' :
              'text-blue-400 dark:text-blue-500'
            }`}>
              <svg className="w-full h-20 opacity-15" viewBox="0 0 1000 80" preserveAspectRatio="none">
                <path
                  d="M0,40 Q250,20 500,40 T1000,40 L1000,80 L0,80 Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Plains/Ground */}
            <div className={`absolute bottom-0 left-0 right-0 h-24 transition-all duration-1000 ${
              season === 'winter' ? 'bg-gradient-to-t from-blue-100/30 to-transparent dark:from-blue-900/20' :
              season === 'spring' ? 'bg-gradient-to-t from-green-100/30 to-transparent dark:from-green-900/20' :
              season === 'summer' ? 'bg-gradient-to-t from-green-200/30 to-transparent dark:from-green-800/20' :
              season === 'fall' ? 'bg-gradient-to-t from-amber-100/30 to-transparent dark:from-amber-900/20' :
              'bg-gradient-to-t from-green-100/30 to-transparent dark:from-green-900/20'
            }`} />

            {/* Flickering Sun for Summer */}
            {season === 'summer' && (
              <div className="absolute top-8 right-16 animate-pulse">
                <div className="relative">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full opacity-80 animate-ping absolute" />
                  <div className="w-16 h-16 bg-yellow-300 rounded-full opacity-90 relative" />
                </div>
              </div>
            )}
          </div>

          {/* Connecting Lines (Path) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50" style={{ zIndex: 1 }}>
            {positionedRoles.slice(0, -1).map((role, index) => {
              const next = positionedRoles[index + 1];
              return (
                <line
                  key={index}
                  x1={`${role.position.x}%`}
                  y1={`${role.position.y}px`}
                  x2={`${next.position.x}%`}
                  y2={`${next.position.y}px`}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="text-primary"
                />
              );
            })}
          </svg>

          {/* Map Markers */}
          <div className="relative" style={{ zIndex: 2 }}>
            {positionedRoles.map((role, index) => (
              <MapMarker key={index} role={role} index={index} />
            ))}
          </div>
        </div>
      </SectionReveal>
    </div>
  );
};

export default WorkTimeline;
