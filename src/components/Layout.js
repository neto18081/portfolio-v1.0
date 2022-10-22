import Header from "./Header";

export default function Layout({ children, changeLang, lang }) {
  return (
    <>
      <Header changeLang={changeLang} lang={lang} />
      {children}
    </>
  );
}
