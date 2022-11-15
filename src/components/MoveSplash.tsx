import React from "react";
import Lottie from "lottie-react";
import arrowAnimation from "./arrow.json";

export type Direction =
  | "up"
  | "down"
  | "rightdown"
  | "rightup"
  | "leftdown"
  | "leftup"
  | "right"
  | "left";

type Props = {
  open: boolean;
  direction?: Direction;
};

const getDirection = (direction: Direction) => {
  switch (direction) {
    case "up":
      return "-rotate-90";
    case "down":
      return "rotate-90";
    case "leftdown":
      return "rotate-135";
    case "right":
      return "";
    case "left":
      return "rotate-180";
    case "leftup":
      return "-rotate-135";
    case "rightdown":
      return "rotate-45";
    case "rightup":
      return "-rotate-45";
  }
};

const MoveSplash: React.FC<Props> = ({ open, direction }) => {
  const options = {
    animationData: arrowAnimation,
    loop: true,
  };
  if (!open) return null;
  return (
    <div className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center text-white">
      <div className={`${getDirection(direction ?? "right")}`}>
        <Lottie
          animationData={arrowAnimation}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
            className: "lottie-svg-class",
          }}
        />
      </div>
    </div>
  );
};

export default MoveSplash;
