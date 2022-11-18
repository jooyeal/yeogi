import Link from "next/link";
import React, { useState } from "react";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";

type Props = {
  items: {
    name: string;
    url: string;
    desc: string;
  }[];
};

const Accordion: React.FC<Props> = ({ items }) => {
  const [selected, setSelected] = useState<number | undefined>();
  return (
    <div className="h-auto rounded-lg border">
      {items.map((item, index) => (
        <div key={index}>
          <div
            className="flex cursor-pointer items-center justify-between p-2"
            onClick={() => {
              if (selected === index) {
                setSelected(undefined);
              } else {
                setSelected(index);
              }
            }}
          >
            <span>- {item.name}</span>
            {selected === index ? (
              <BiCaretUp size={20} />
            ) : (
              <BiCaretDown size={20} />
            )}
          </div>
          <div
            className={`transition-all ${
              selected === index ? "h-80" : "h-0"
            } overflow-auto`}
          >
            <Link href={item.url}>
              <p className="p-2 font-bold text-emerald-300">
                상세정보를 보려면 클릭!
              </p>
            </Link>
            <p className="p-2">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
