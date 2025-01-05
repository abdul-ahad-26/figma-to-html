import { urlFor } from '@/sanity/lib/image'
import React from 'react'
import Image from "next/image";
import { MainData } from '@/types';

type HeroSectionProps={
  mainData : MainData;
}

const HeroSection = ({mainData}: HeroSectionProps) => {
  return (
         <section className="hero-section">
           <div className="container">
             <main >
   
               <div className="text-container">
                 <h1 className="main-heading">{mainData.title}</h1>
                 <p className="main-para">{mainData.description}</p>
                 <button className="resume-btn">Download Resume</button>
               </div>
               <div>
                 <Image className="image" src={urlFor(mainData.image).url()} width={298} height={308} alt="person" />
               </div>
             </main>
             
           </div>
         </section>
  )
}

export default HeroSection