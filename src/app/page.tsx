import Image from "next/image";
import Card from "@/app/components/Card"
import FeaturedCard from "@/app/components/FeaturedCard";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <main >

            <div className="text-container">
              <h1 className="main-heading">Hi, I am John, Creative Technologist</h1>
              <p className="main-para">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              <button className="resume-btn">Download Resume</button>
            </div>
            <div>
              <Image src="/person.png" width={298} height={308} alt="person" ></Image>
            </div>
          </main>
        </div>
      </section>

      <div className="recent-post-section">
        <div className="container">
          <div className="heading">
            <h3 className="recent-post">Recent Post</h3>
            <span className="view-all-button">View all</span>
          </div>

          <div className="card-parent">
            <Card />
            <Card />


          </div>

        </div>
      </div>

      <section className="featured-works-section">
        <div className="container">
          <div className="heading">Featured works</div>

          <div className="featured-card-list">
            <FeaturedCard imageLink={'/project1.png'} />
            <FeaturedCard imageLink={'/project2.png'} />
            <FeaturedCard imageLink={'/project3.png'} />
          </div>


        </div>
      </section>



    </>
  );
}
