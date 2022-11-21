import React from "react";
import { useInView } from "react-intersection-observer";
import classnames from "classnames";
import Image from "next/image";
import Accordion from "./Accordion";

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
  | "ex32"
  | "ex33"
  | "ex34"
  | "ex35"
  | "ex36"
  | "ex37"
  | "ex38"
  | "ex39"
  | "ex40"
  | "ex41"
  | "ex42";

type Props = {
  w: string;
  h: string;
  title: string;
  image: string;
  desc: string;
  items?: {
    name: string;
    url: string;
    desc: string;
  }[];
  isLast?: boolean;
  onClickNext: () => void;
  onClickPrev: () => void;
};

const Container: React.FC<Props> = ({
  w,
  h,
  title,
  image,
  desc,
  items,
  isLast,
  onClickNext,
  onClickPrev,
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
    delay: 1000,
  });
  const classStr = classnames("absolute h-screen w-screen p-10", w, h);
  return (
    <div ref={ref} className={classStr}>
      <div className="z-50 h-full overflow-auto rounded-lg border p-10">
        <div
          className={
            inView
              ? "transition-all duration-500"
              : "opacity-0 transition-all duration-500"
          }
        >
          <div className="mb-2 flex justify-between">
            <p
              className="cursor-pointer rounded-lg border p-1"
              onClick={onClickPrev}
            >
              이전
            </p>
            {!isLast && (
              <p
                className="cursor-pointer rounded-lg border p-1"
                onClick={onClickNext}
              >
                다음
              </p>
            )}
          </div>
          <div>
            <div className="laptop:flex">
              <div>
                <span>{title}</span>
                <div>
                  <Image src={image} width={500} height={500} alt="" />
                </div>
              </div>
              <div className="p-4">{desc}</div>
            </div>
            {items && (
              <div className="mt-4">
                <Accordion items={items} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
