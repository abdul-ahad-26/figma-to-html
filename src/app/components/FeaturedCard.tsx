import React from 'react';
import Image from 'next/image';

const FeaturedCard = (props:{imageLink:string}) => {
  return (
    <>

      <div className="project-details">
        <Image src={props.imageLink} alt="project1" width={246} height={180}></Image>
        <div className="text">
          <h2>Designing Dashboards</h2>
          <div className="highlights">
            <div className="year">2020</div>
            <div className="project-name">Dashboard</div>
          </div>
          <p className="description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </div></>
  )
}

export default FeaturedCard