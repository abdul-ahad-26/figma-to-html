import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { WorkData } from '@/types';

type FeaturedCardProps ={
  work:WorkData;
}

const FeaturedCard = ({work}:FeaturedCardProps) => {
  return (

      <div className="project-details">
        <Image alt={work.title} src={urlFor(work.image).url()} width={246} height={180} loading='lazy'/>
        <div className="text">
          <h2>{work.title}</h2>
          <div className="highlights">
            <div className="year">{work.year}</div>
            <div className="tags">{work.tags.join(' , ')}</div>
          </div>
          <p className="description">{work.description}</p>
        </div>
      </div>
      
  )
}

export default React.memo(FeaturedCard)