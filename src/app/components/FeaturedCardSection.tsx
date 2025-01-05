import React from 'react'
import FeaturedCard from './FeaturedCard'
import { WorkData } from '@/types';

type FeaturedCardSectionProps = {
  workData: WorkData[];
}

const FeaturedCardSection = ({ workData }: FeaturedCardSectionProps) => {
  return (

    <section className="featured-works-section">

      <div className="container">
        <div className="heading">Featured works</div>
        <div className="featured-card-list">
         
          {workData?.length > 0 ?
            (workData.map((work) => 
                <FeaturedCard work={work} key={work._id} />
            )) :
            (
              <p>No featured works available.</p>

            )
          }

        </div>
      </div>

    </section>

  )
}

export default FeaturedCardSection