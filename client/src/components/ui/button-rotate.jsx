import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import './button-rotate.css';

export const ButtonRotate = ({ href, text = "LIVE DEMO • LIVE DEMO • " }) => {
  const chars = Array.from(text);
  const degreeStep = 360 / chars.length;

  const Content = () => (
    <div className="border p-1 rounded-full border-dotted border-primary group">
      <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden p-0 grid place-content-center bg-primary text-white shadow-xl transition-all duration-300 group-hover:scale-105 active:scale-95">
        <p className="absolute inset-0 animate-text-rotation pointer-events-none">
          {chars.map((char, i) => (
            <span
              key={i}
              style={{ 
                position: "absolute",
                inset: "10px",
                transform: `rotate(${degreeStep * i}deg)`,
                transformOrigin: "50% 50%",
                userSelect: "none",
                display: "inline-block",
                fontSize: "11px",
                fontWeight: "800",
                color: "white",
                textTransform: "uppercase",
                letterSpacing: "0.12em"
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </p>

        <div className="relative w-[44px] h-[44px] rounded-full text-primary bg-white flex items-center justify-center overflow-hidden shadow-inner">
          <svg
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-5 h-5 transition-all duration-300 ease-in-out svg-primary"
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            />
          </svg>
          <svg
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-5 h-5 transition-all duration-300 ease-in-out svg-secondary"
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="outline-none no-underline">
        <Content />
      </a>
    );
  }

  return <Content />;
};
