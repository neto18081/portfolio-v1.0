import React, { useEffect, useState } from 'react';

import Layout from './components/Layout';

import AOS from 'aos'
import "aos/dist/aos.css"

import HTMLReactParser from 'html-react-parser';

type Experience = {
  title: string,
  date: string,
  content: string
}

type About = {
  title: string,
  content: string
}

interface DataType {
  experience: Array<Experience>,
  about: About,
}

// const rawData:DataType = require('./db.json');

function App() {
  const [lang, setLang] = useState("pt");
  
  const [data, setData] = useState<DataType>(require('./db.json')[lang]);
  const [experience, setExperience] = useState<Experience & {active: number}>({...data.experience[0], active: 0});

  useEffect(() => {
    console.log(data)
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, []);

  return (
    <Layout>
      <div className='tw-flex tw-items-center tw-justify-center tw-px-[20px] tw-py-[50px] tw-max-w-[1024px] tw-mx-auto tw-w-full tw-flex-col md:tw-flex-row tw-gap-[30px] sm:tw-gap-[10px]'>
        <div data-aos="fade-right" className='tw-w-full md:tw-w-[50%] tw-flex tw-items-center tw-justify-center md:tw-justify-start'>
          <div className='tw-max-w-[400px] tw-w-full tw-flex tw-items-start tw-flex-col tw-gap-[20px]'>
            <h1 className='tw-text-[42px] sm:tw-text-[56px] tw-font-extrabold tw-text-black tw-leading-[90%]'>Olá, <span className='tw-text-[28px] sm:tw-text-[32px]'>sou</span><br/>Pedro Nunes, <br/><span className='tw-text-[28px] sm:tw-text-[32px]'>Desenvolvedor Web</span></h1>
            <span className='tw-block'>Trabalho com programação de sites, tanto frontend quanto backend.</span>
            <div className='tw-flex tw-items-center tw-justify-start tw-gap-[20px]'>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/pedro-nunes-23a767184/"><img src="/Linkedin.svg" alt="Linkedin" /></a>
              <a target="_blank" rel="noreferrer" href="https://github.com/neto18081"><img src="/GitHub.svg" alt="Github" /></a>
            </div>
          </div>
        </div>
        <div data-aos="slide-right" className='tw-w-full md:tw-w-[50%]'>
          <img src="/banner.png" alt="Pedro Nunes" />
        </div>
      </div>

      <div className='tw-px-[20px]'>
        <h2>Experiência & Educação</h2>

        <div className='tw-mx-auto tw-w-full tw-max-w-[1024px] tw-py-[40px] tw-flex tw-items-center tw-justify-center tw-gap-[20px] tw-flex-col md:tw-flex-row'>
          <div className='tw-flex tw-items-start tw-justify-center tw-flex-col tw-w-full md:tw-w-[30%] md:tw-border-r-[2px] tw-border-gray'>
            {data.experience.map((e, i) => (
              <button style={i === experience.active ? {borderLeft: "6px solid #4f95d0"} : undefined} 
              key={i} 
              onClick={() => setExperience({...e, active: i})} 
              className="tw-flex tw-item-start tw-justify-center tw-flex-col tw-text-left tw-border-l-[6px] tw-border-gray tw-px-[20px] tw-py-[10px] hover:tw-shadow-lg tw-duration-500 tw-ease-out">
                <span className='tw-text-[20px] tw-font-medium tw-pb-[10px]'>{e.title}</span>
                <span className='tw-text-gray'>{e.date}</span>
              </button>
            ))}
            
          </div>
          <div className='tw-w-full md:tw-w-[70%]'>
            <span className='tw-text-gray'>{experience.date}</span>
              <p className='tw-pl-[30px] tw-py-[10px] tw-font-medium'>{HTMLReactParser(experience.content)}</p>
          </div>
        </div>
      </div>

      <div className='tw-px-[20px] tw-py-[75px] tw-mx-auto tw-w-full tw-max-w-[1024px]'>
        <h2 className='tw-text-left tw-pb-[20px]'>{data.about.title}</h2>
        <div>
          {HTMLReactParser(data.about.content)}
        </div>
      </div>
    </Layout>
  );
}

export default App;
