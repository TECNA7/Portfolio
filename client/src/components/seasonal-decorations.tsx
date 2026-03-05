import { useSeason } from "@/contexts/season-context";

const SeasonalDecorations = () => {
  const { season } = useSeason();

  return (
    <>
      {/* Winter - Snowflakes */}
      {season === "winter" && (
        <>
          {[...Array(8)].map((_, i) => (
            <div
              key={`snow-${i}`}
              className="snowflake-fall"
              style={{
                left: `${10 + i * 12}%`,
                animationDelay: `${i * 1.5}s`,
              }}
            >
              ❄️
            </div>
          ))}
        </>
      )}

      {/* Summer - Shining Sun */}
      {season === "summer" && (
        <div className="shining-sun">
          ☀️
        </div>
      )}

      {/* Spring - Cherry Blossoms */}
      {season === "spring" && (
        <>
          {[...Array(6)].map((_, i) => (
            <div
              key={`blossom-${i}`}
              className="cherry-blossom"
              style={{
                left: `${15 + i * 15}%`,
                animationDelay: `${i * 2}s`,
              }}
            >
              🌸
            </div>
          ))}
        </>
      )}

      {/* Holiday - Falling Gifts */}
      {season === "holiday" && (
        <>
          {[...Array(5)].map((_, i) => (
            <div
              key={`gift-${i}`}
              className="gift-drop"
              style={{
                left: `${20 + i * 20}%`,
                animationDelay: `${i * 1.2}s`,
              }}
            >
              🎁
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default SeasonalDecorations;
