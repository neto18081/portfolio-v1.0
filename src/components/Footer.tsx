type FooterType = {
  rights: string;
  developed: string;
};

export default function Footer({ lang }: { lang: string }) {
  const data: FooterType = require("../db/footer.json")[lang];
  return (
    <div className="tw-px-[20px] tw-w-full tw-py-[10px] tw-flex tw-items-center tw-justify-evenly tw-bg-[#4F95D0] tw-flex-wrap">
      <div className="tw-max-w-[1280px] tw-mx-auto tw-w-full tw-flex tw-items-center tw-justify-evenly tw-bg-[#4F95D0] tw-flex-wrap">
        <span className="tw-text-white tw-text-center">
          ©2022 <strong className="tw-font-bold">Pedro Nunes</strong>.{" "}
          {data.rights}
        </span>
        <div className="tw-flex tw-items-center tw-justify-start tw-gap-[20px] tw-m-[20px]">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/pedro-nunes-23a767184/"
          >
            <img src="/Linkedin-white.svg" alt="Linkedin" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/neto18081"
          >
            <img src="/GitHub-white.svg" alt="Github" />
          </a>
        </div>
        <span className="tw-text-white tw-text-center">
          {data.developed} <strong className="tw-font-bold">Pedro Nunes</strong>
        </span>
      </div>
    </div>
  );
}
