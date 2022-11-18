import React from "react";
import { useInView } from "react-intersection-observer";
import classnames from "classnames";
import Image from "next/image";

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
  onClickNext: () => void;
  onClickPrev: () => void;
};

const Container: React.FC<Props> = ({ w, h, onClickNext, onClickPrev }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    delay: 1000,
  });
  const classStr = classnames("absolute h-screen w-screen p-10", w, h);
  return (
    <div ref={ref} className={classStr}>
      <div className="z-50 h-full rounded-lg border p-10">
        <div
          className={
            inView
              ? "transition-all duration-500"
              : "opacity-0 transition-all duration-500"
          }
        >
          <div>
            <span>첫날 - 신바시</span>
            <div>
              <Image
                src="/shinbashi_main.jpeg"
                width={500}
                height={500}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex justify-between">
        <p className="cursor-pointer" onClick={onClickPrev}>
          이전으로
        </p>
        <p className="cursor-pointer" onClick={onClickNext}>
          다음으로
        </p>
      </div>
    </div>
  );
};

export default Container;
