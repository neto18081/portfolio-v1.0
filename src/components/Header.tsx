import { SiJavascript } from "react-icons/si";

import { useState } from "react";
import "@animated-burgers/burger-squeeze/dist/styles.css";

import Burger from "@animated-burgers/burger-squeeze";

type HeaderProps = {
  lang: string;
  changeLang: (lang: string) => void;
};

export default function Header({ changeLang, lang }: HeaderProps) {
  const [burger, setBurger] = useState(false);
  const ul: { name: string; link: string }[] =
    require("../db/header.json")[lang];

  return (
    <>
      <div className="tw-flex tw-items-center tw-justify-center tw-w-full tw-px-[20px] tw-h-[70px] tw-shadow-md tw-fixed tw-bg-white tw-z-[100]">
        <div
          id="header"
          className="tw-flex tw-items-center tw-justify-between tw-w-full tw-mx-auto tw-max-w-[1280px]"
        >
          <div className="tw-flex tw-items-center tw-gap-[10px]">
            <span className="tw-font-medium tw-text-[22px]">Pedro</span>
            <SiJavascript color="#ffdf00" size={25} />
          </div>

          <ul
            className={`tw-flex tw-items-center tw-justify-center tw-gap-[20px] tw-fixed md:tw-static tw-top-[70px] tw-right-0 tw-flex-col tw-h-[calc(100vh-70px)] tw-w-full md:tw-h-auto md:tw-w-auto md:tw-flex-row tw-bg-theme md:tw-bg-transparent tw-duration-300 tw-ease-out ${
              burger ? "tw-translate-x-0" : "tw-translate-x-full"
            } md:tw-translate-x-0`}
          >
            {ul.map((u, i) => (
              <a
                key={i}
                className="menu-link"
                onClick={() => setBurger(false)}
                href={u.link}
              >
                <li>{u.name}</li>
              </a>
            ))}

            <div className="tw-text-white md:tw-text-black">
              <button
                className={`tw-text-[22px] ${lang === "pt" && "tw-font-bold"}`}
                onClick={() => {
                  setBurger(false);
                  changeLang("pt");
                }}
              >
                PT
              </button>
              <span className="tw-text-white md:tw-text-black"> | </span>
              <button
                className={`tw-text-[22px] ${lang === "en" && "tw-font-bold"}`}
                onClick={() => {
                  setBurger(false);
                  changeLang("en");
                }}
              >
                EN
              </button>
            </div>
          </ul>
          <Burger
            className="tw-block md:tw-hidden"
            onClick={() => setBurger(!burger)}
            isOpen={burger}
          />
        </div>
      </div>
      <div className="tw-h-[70px] tw-w-full"></div>
    </>
  );
}
