import { client } from "@/sanity/lib/client";
import RecentPostSection from "./components/RecentPostSection";
import FeaturedCardSection from "./components/FeaturedCardSection";
import { MainData, PostData, WorkData } from "@/types";
import HeroSection from "./components/HeroSection";


export default async function Home() {
  const getData = async () => {
    try {


      return client.fetch<{
        mainData: MainData[];
        postData: PostData[];
        workData: WorkData[];

      }>(`
      {
      
      "mainData":*[_type == "main"] {
      _id,
      title,
      description,
      image
      
    },
     "postData":*[_type == "post1"] {
      _id,
      title,
      date,
      tags,
      description    
      },
    "workData":*[_type == "work"] {
     _id,
      title,
      year,
      tags,
      description,
      image
          }
      }
       
      
      `
      )
    } catch (error) {
      console.error("Error fetching data", error);
      return { mainData: [], postData: [], workData: [] }
    }


  }
  const { mainData, postData, workData } = await getData()
  // console.log("Postdata on home: ",postData)

  return (
    <main>
      {/* Hero section */}
      <HeroSection mainData={mainData?.[0]} />


      {/* Recent Posts Section */}
      <RecentPostSection postData={postData ?? []} />

      {/* Featured Card Section */}
      <FeaturedCardSection workData={workData ?? []} />









    </main>
  );
}
