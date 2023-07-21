import Hero from "../../components/Hero";
import Gonder3 from "../../assets/gonder_3.jpg";
import Intro from "../../components/Intro";
import Axum1 from "../../assets/axum_1.jpg";
import Tigray2 from "../../assets/tigray_2.jpg";
import PlannerPolaroid from "../../components/PlannerPolaroid";
// import PackagesGrid from "../../components/PackagesGrid";
import { HistoricAndCulturalToursArray } from "../../Data/PackagesArray";
import PackagesList from "../../components/PackagesList";
interface ExperiencePackage {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  linkname: string;
  index: boolean;
  intro: {
    title: string;
    description: string[];
    lr: boolean;
    img1: string;
    img2: string;
    subtitle?: string;
    button: string;
    link: string;
  }[];
  packageslist: {
    title: string;
    description: string;
    packages: {
      title: string;
      description: string;
      link: string;
      image: string;
      days?: number;
    };
  }[];
}
const ExperienceHistoric = () => {
  return (
    <div className="historic-wrapper">
      <Hero
        title="Historic and Cultural Tours"
        description=""
        index={false}
        background={Gonder3}
        link="/enquire"
      />
      <Intro
        title="The Extraordinary journey through Ethiopia's Historic Sites"
        description={[
          "Embark on an extraordinary journey through Ethiopia's Historic Tours, where ancient wonders and vibrant cultures intertwine harmoniously. Discover the storied treasures that define Ethiopia's identity, from the rock-hewn churches of Tigray to the awe-inspiring city of Axum.",
          "Traverse the famed Historic Route, immersing yourself in architectural marvels and breathtaking landscapes, while uncovering hidden gems that captivate the intrepid explorer. Ethiopia's Historic and Cultural Tours offer an unforgettable odyssey, celebrating a rich history and diverse cultures untouched by colonialism.",
        ]}
        lr
        img1={Axum1}
        img2={Tigray2}
        button="Start Planning"
        link="/enquire"
      />
      <PackagesList
        title={"Iteneraries included"}
        description="Below are some of our most popular itineraries in the historic and cultural category. We can also customize any of these itineraries or create a new one from scratch."
        packages={HistoricAndCulturalToursArray}
      />
      <PlannerPolaroid />
    </div>
  );
};

export default ExperienceHistoric;
