import React from "react";

import Footer from "./Footer";
import Header from "./Header";
// children, changeLang, lang

type LayoutProps = {
  lang: string;
  children: JSX.Element[];
  changeLang: (lang: string) => void;
};

export default function Layout({ children, changeLang, lang }: LayoutProps) {
  return (
    <>
      <Header changeLang={changeLang} lang={lang} />
      {children}
      <Footer lang={lang} />
    </>
  );
}
