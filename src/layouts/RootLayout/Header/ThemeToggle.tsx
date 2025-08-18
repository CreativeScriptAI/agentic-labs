import React from "react";
import { Emoji } from "src/components/Emoji";
import useScheme from "src/hooks/useScheme";

type Props = Record<string, never>;

const ThemeToggle: React.FC<Props> = () => {
  const [scheme, setScheme] = useScheme();

  const handleClick = () => {
    setScheme(scheme === "light" ? "dark" : "light");
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <Emoji>{scheme === "light" ? "☀️" : "🌙"}</Emoji>
    </div>
  );
};

export default ThemeToggle;
