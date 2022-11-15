import { useState } from "react";

type SmoothNumberParams = { w: number; h: number };

export default function useSmoothNumber(initNum?: SmoothNumberParams) {
  const [endNumber, setEndNumber] = useState<SmoothNumberParams>({
    w: 0,
    h: 0,
  });

  const move = (number: SmoothNumberParams) => {
    setEndNumber(number);
  };

  return { number: endNumber, move };
}
