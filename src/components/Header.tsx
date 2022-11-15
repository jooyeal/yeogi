import React from "react";

type Props = {
  onClick: () => void;
};

const Header: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="fixed top-0 z-50 flex h-12 w-screen items-center justify-end pr-8 text-white">
      <p className="cursor-pointer font-bold" onClick={onClick}>
        처음으로
      </p>
    </div>
  );
};

export default Header;
