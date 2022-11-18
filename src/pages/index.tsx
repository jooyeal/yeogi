import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import InitialScreen from "../components/InitialScreen";
import MoveSplash, { Direction } from "../components/MoveSplash";
import useShowMoveSplash from "../hooks/useShowMoveSplash";
import useSmoothNumber from "../hooks/useSmoothNumber";
import spacingConvert from "../utils/spacingConvert";

const Home: NextPage = () => {
  const { number, move } = useSmoothNumber();
  const { isVisible, open } = useShowMoveSplash();
  const [direction, setDirection] = useState<Direction>();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative h-screen w-screen overflow-hidden bg-black">
        <Header
          onClick={() => {
            move({ w: 0, h: 0 });
            setDirection("up");
            open();
          }}
        />
        <div
          style={{
            transform: `translate(${-number.w}px, ${-number.h}px)`,
          }}
          className="h-screen4 w-screen4 text-white transition-all duration-1000"
        >
          <InitialScreen
            onClick={() => {
              move({
                w: spacingConvert("ex12"),
                h: spacingConvert("ex12"),
              });
              setDirection("rightdown");
              open();
            }}
          />
          <Container
            w="left-ex12"
            h="top-ex12"
            onClickNext={() => {
              move({ w: spacingConvert("ex6"), h: spacingConvert("ex24") });
              setDirection("leftdown");
              open();
            }}
            onClickPrev={() => {
              move({ w: 0, h: 0 });
              setDirection("leftup");
              open();
            }}
          />
          <Container
            w="left-ex6"
            h="top-ex24"
            onClickNext={() => {
              move({ w: spacingConvert("ex32"), h: spacingConvert("ex26") });
              setDirection("rightdown");
              open();
            }}
            onClickPrev={() => {
              move({ w: spacingConvert("ex12"), h: spacingConvert("ex12") });
              setDirection("rightup");
              open();
            }}
          />
          <Container
            w="left-ex32"
            h="top-ex26"
            onClickNext={() => {}}
            onClickPrev={() => {
              move({ w: spacingConvert("ex6"), h: spacingConvert("ex24") });
              setDirection("leftup");
              open();
            }}
          />
        </div>
        <MoveSplash open={isVisible} direction={direction} />
      </div>
    </>
  );
};

export default Home;
