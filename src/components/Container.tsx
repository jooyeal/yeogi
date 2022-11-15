import React from "react";
import { useInView } from "react-intersection-observer";
import classnames from "classnames";

export type SpacingValue =
  | "ex1"
  | "ex2"
  | "ex3"
  | "ex4"
  | "ex5"
  | "ex6"
  | "ex7"
  | "ex8"
  | "ex9"
  | "ex10"
  | "ex11"
  | "ex12"
  | "ex13"
  | "ex14"
  | "ex15"
  | "ex16"
  | "ex17"
  | "ex18"
  | "ex19"
  | "ex20"
  | "ex21"
  | "ex22"
  | "ex23"
  | "ex24"
  | "ex25"
  | "ex26"
  | "ex27"
  | "ex28"
  | "ex29"
  | "ex30"
  | "ex31"
  | "ex32";

type Props = {
  w: string;
  h: string;
  onClick: () => void;
};

const Container: React.FC<Props> = ({ w, h, onClick }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const classStr = classnames("absolute h-screen w-screen p-10", w, h);
  return (
    <div ref={ref} className={classStr}>
      <div className="z-50 h-full rounded-lg border p-10">
        <button onClick={onClick}>click</button>
        <div
          className={
            inView
              ? "transition-all duration-500"
              : "opacity-0 transition-all duration-500"
          }
        >
          hello
        </div>
      </div>
    </div>
  );
};

export default Container;
