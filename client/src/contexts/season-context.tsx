import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Season = "fall" | "spring" | "summer" | "winter" | "holiday";

interface SeasonColors {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  border: string;
  input: string;
  ring: string;
}

const seasonPalettes: Record<Season, SeasonColors> = {
  fall: {
    background: "hsl(40, 50%, 98%)",
    foreground: "hsl(15, 70%, 20%)",
    card: "hsl(40, 30%, 96%)",
    cardForeground: "hsl(20, 60%, 25%)",
    popover: "hsl(40, 50%, 98%)",
    popoverForeground: "hsl(15, 70%, 20%)",
    primary: "hsl(25, 50%, 50%)",
    primaryForeground: "hsl(40, 50%, 98%)",
    secondary: "hsl(35, 40%, 85%)",
    secondaryForeground: "hsl(20, 60%, 30%)",
    muted: "hsl(40, 25%, 92%)",
    mutedForeground: "hsl(25, 30%, 40%)",
    accent: "hsl(30, 40%, 70%)",
    accentForeground: "hsl(15, 70%, 20%)",
    border: "hsl(35, 30%, 88%)",
    input: "hsl(35, 25%, 90%)",
    ring: "hsl(25, 50%, 50%)",
  },
  spring: {
    background: "hsl(320, 50%, 98%)",
    foreground: "hsl(220, 60%, 25%)",
    card: "hsl(210, 45%, 96%)",
    cardForeground: "hsl(220, 50%, 30%)",
    popover: "hsl(320, 50%, 98%)",
    popoverForeground: "hsl(220, 60%, 25%)",
    primary: "hsl(340, 70%, 75%)",
    primaryForeground: "hsl(220, 60%, 25%)",
    secondary: "hsl(200, 50%, 85%)",
    secondaryForeground: "hsl(220, 50%, 30%)",
    muted: "hsl(210, 30%, 92%)",
    mutedForeground: "hsl(220, 30%, 45%)",
    accent: "hsl(280, 60%, 80%)",
    accentForeground: "hsl(220, 60%, 25%)",
    border: "hsl(210, 35%, 90%)",
    input: "hsl(210, 30%, 92%)",
    ring: "hsl(340, 70%, 75%)",
  },
  summer: {
    background: "hsl(45, 60%, 98%)",
    foreground: "hsl(140, 50%, 20%)",
    card: "hsl(50, 40%, 96%)",
    cardForeground: "hsl(140, 45%, 25%)",
    popover: "hsl(45, 60%, 98%)",
    popoverForeground: "hsl(140, 50%, 20%)",
    primary: "hsl(45, 85%, 60%)",
    primaryForeground: "hsl(140, 50%, 20%)",
    secondary: "hsl(120, 40%, 75%)",
    secondaryForeground: "hsl(140, 45%, 25%)",
    muted: "hsl(50, 30%, 90%)",
    mutedForeground: "hsl(140, 30%, 40%)",
    accent: "hsl(160, 50%, 65%)",
    accentForeground: "hsl(140, 50%, 20%)",
    border: "hsl(50, 35%, 88%)",
    input: "hsl(50, 30%, 90%)",
    ring: "hsl(45, 85%, 60%)",
  },
  winter: {
    background: "hsl(200, 40%, 98%)",
    foreground: "hsl(210, 70%, 15%)",
    card: "hsl(200, 35%, 96%)",
    cardForeground: "hsl(210, 60%, 20%)",
    popover: "hsl(200, 40%, 98%)",
    popoverForeground: "hsl(210, 70%, 15%)",
    primary: "hsl(200, 80%, 55%)",
    primaryForeground: "hsl(0, 0%, 100%)",
    secondary: "hsl(220, 30%, 85%)",
    secondaryForeground: "hsl(210, 60%, 20%)",
    muted: "hsl(200, 25%, 92%)",
    mutedForeground: "hsl(210, 30%, 40%)",
    accent: "hsl(180, 50%, 70%)",
    accentForeground: "hsl(210, 70%, 15%)",
    border: "hsl(200, 30%, 88%)",
    input: "hsl(200, 25%, 92%)",
    ring: "hsl(200, 80%, 55%)",
  },
  holiday: {
    background: "hsl(0, 0%, 98%)",
    foreground: "hsl(140, 70%, 15%)",
    card: "hsl(0, 60%, 96%)",
    cardForeground: "hsl(140, 60%, 20%)",
    popover: "hsl(0, 0%, 98%)",
    popoverForeground: "hsl(140, 70%, 15%)",
    primary: "hsl(0, 75%, 55%)",
    primaryForeground: "hsl(0, 0%, 100%)",
    secondary: "hsl(140, 50%, 35%)",
    secondaryForeground: "hsl(0, 0%, 100%)",
    muted: "hsl(0, 0%, 92%)",
    mutedForeground: "hsl(140, 30%, 40%)",
    accent: "hsl(45, 100%, 50%)",
    accentForeground: "hsl(0, 0%, 15%)",
    border: "hsl(0, 50%, 88%)",
    input: "hsl(0, 0%, 92%)",
    ring: "hsl(0, 75%, 55%)",
  },
};

interface SeasonContextType {
  season: Season;
  setSeason: (season: Season) => void;
}

const SeasonContext = createContext<SeasonContextType | undefined>(undefined);

export const SeasonProvider = ({ children }: { children: ReactNode }) => {
  const [season, setSeason] = useState<Season>(() => {
    if (typeof window === "undefined") return "fall";
    try {
      const saved = localStorage.getItem("season");
      return (saved as Season) || "fall";
    } catch {
      return "fall";
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    try {
      localStorage.setItem("season", season);
    } catch {
      console.warn("Failed to save season preference");
    }
    
    const root = document.documentElement;
    root.setAttribute("data-season", season);
  }, [season]);

  return (
    <SeasonContext.Provider value={{ season, setSeason }}>
      {children}
    </SeasonContext.Provider>
  );
};

export const useSeason = () => {
  const context = useContext(SeasonContext);
  if (!context) {
    throw new Error("useSeason must be used within SeasonProvider");
  }
  return context;
};
