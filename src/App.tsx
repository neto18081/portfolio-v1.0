import React, { useEffect } from 'react';

import Layout from './components/Layout';

import AOS from 'aos'
import "aos/dist/aos.css"

function App() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, []) 

  return (
    <Layout>
      <div className='tw-flex tw-items-center tw-justify-center tw-px-[20px] tw-py-[50px] tw-max-w-[1024px] tw-mx-auto tw-w-full tw-flex-col md:tw-flex-row tw-gap-[30px] sm:tw-gap-[10px]'>
        <div data-aos="fade-right" className='tw-w-full md:tw-w-[50%] tw-flex tw-items-center tw-justify-center md:tw-justify-start'>
          <div className='tw-max-w-[400px] tw-w-full tw-flex tw-items-start tw-flex-col tw-gap-[20px]'>
            <h1 className='tw-text-[42px] sm:tw-text-[56px] tw-font-extrabold tw-leading-[90%]'>Olá, <span className='tw-text-[28px] sm:tw-text-[32px]'>sou</span><br/>Pedro Nunes, <br/><span className='tw-text-[28px] sm:tw-text-[32px]'>Desenvolvedor Web</span></h1>
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
    </Layout>
  );
}

export default App;
