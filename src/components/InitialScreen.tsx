import React from "react";

type Props = {
  onClick: () => void;
};

const InitialScreen: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="h-screen w-screen pt-16">
      <div className="flex h-screen flex-col justify-center gap-10 p-4">
        <p className="text-8xl font-bold">여기누가 </p>
        <p className="text-8xl font-bold">오자고 했냐...?</p>
        <p className="text-6xl font-bold">- 동경編</p>
        <div className="flex justify-end">
          <button
            className="h-12 w-40 rounded-lg border text-white"
            onClick={onClick}
          >
            보러가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default InitialScreen;
