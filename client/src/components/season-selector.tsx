import { Leaf, Snowflake, Sun, Coffee, Gift } from "lucide-react";
import { useSeason, Season } from "@/contexts/season-context";
import { cn } from "@/lib/utils";

const SeasonSelector = () => {
  const { season, setSeason } = useSeason();

  const seasons = [
    {
      id: "fall" as Season,
      icon: Coffee,
      label: "Fall",
      color: "hsl(25, 50%, 50%)",
      bgColor: "bg-[hsl(25,50%,50%)]/10",
      hoverColor: "hover:bg-[hsl(25,50%,50%)]/20",
    },
    {
      id: "spring" as Season,
      icon: Leaf,
      label: "Spring",
      color: "hsl(340, 70%, 75%)",
      bgColor: "bg-[hsl(340,70%,75%)]/10",
      hoverColor: "hover:bg-[hsl(340,70%,75%)]/20",
    },
    {
      id: "summer" as Season,
      icon: Sun,
      label: "Summer",
      color: "hsl(45, 85%, 60%)",
      bgColor: "bg-[hsl(45,85%,60%)]/10",
      hoverColor: "hover:bg-[hsl(45,85%,60%)]/20",
    },
    {
      id: "winter" as Season,
      icon: Snowflake,
      label: "Winter",
      color: "hsl(200, 80%, 55%)",
      bgColor: "bg-[hsl(200,80%,55%)]/10",
      hoverColor: "hover:bg-[hsl(200,80%,55%)]/20",
    },
    {
      id: "holiday" as Season,
      icon: Gift,
      label: "Holiday",
      color: "hsl(0, 75%, 55%)",
      bgColor: "bg-[hsl(0,75%,55%)]/10",
      hoverColor: "hover:bg-[hsl(0,75%,55%)]/20",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4" data-testid="season-selector">
      <p className="text-sm text-muted-foreground font-medium">Choose Your Season</p>
      <div className="flex gap-3">
        {seasons.map((s) => {
          const Icon = s.icon;
          const isActive = season === s.id;
          
          return (
            <button
              key={s.id}
              onClick={() => setSeason(s.id)}
              className={cn(
                "group relative p-4 rounded-2xl transition-all duration-300",
                s.bgColor,
                s.hoverColor,
                isActive && "ring-2 scale-110",
                "hover:scale-105"
              )}
              style={{
                ...(isActive && { '--tw-ring-color': s.color } as React.CSSProperties),
              }}
              data-testid={`season-${s.id}`}
              aria-label={`Switch to ${s.label} theme`}
            >
              <Icon
                className="w-6 h-6 transition-transform group-hover:rotate-12"
                style={{ color: s.color }}
              />
              <span className="sr-only">{s.label}</span>
              
              {isActive && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: s.color }} />
              )}
            </button>
          );
        })}
      </div>
      <p className="text-xs text-muted-foreground capitalize">{season}</p>
    </div>
  );
};

export default SeasonSelector;
