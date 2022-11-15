import React, { useState } from "react";

type Props = {};

const wait = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(true), 1000);
  });
const useShowMoveSplash = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [direction, setDirection] = useState<string>();
  const open = async () => {
    setIsVisible(true);
    await wait();
    setIsVisible(false);
  };

  return { isVisible, open };
};

export default useShowMoveSplash;
