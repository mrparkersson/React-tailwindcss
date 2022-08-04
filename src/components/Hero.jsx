import React from 'react';
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from '@heroicons/react/solid';
import cyberbg from '../assets/cyber-bg.png';

const Hero = () => {
  return (
    <div className=" w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className=" grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className=" flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className=" text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className=" text-2xl">This is our Tech brand.</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>
        <div>
          <img className=" w-full" src={cyberbg} alt="background" />
        </div>
        <div
          className=" absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
        mx-1 md:left-1/2 transform md:t-translate-x-1/2 bg-zinc-200 border-slate-300 rounded-xl text-center shadow-xl
        "
        >
          <p>Data Services</p>
          <div>
            <p>Icon. App Security</p>
            <p>Icon. Dashboard Design</p>
            <p>Icon. Cloud Data</p>
            <p>Icon. API</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
