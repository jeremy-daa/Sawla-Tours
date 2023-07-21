import Hero from "../components/Hero";
import Lalibela4 from "../assets/lalibela_4.jpg";
// import Planner from "../components/Planner";
import Intro from "../components/Intro";
import Lalibela3 from "../assets/lalibela_3.jpg";
import Danakil3 from "../assets/danakil_3.jpeg";
import PackagesGrid from "../components/PackagesGrid";
import PlannerPolaroid from "../components/PlannerPolaroid";
import IntroPackages from "../components/IntroPackages";
import { DestinationPackagesArray } from "../Data/PackagesArray";
import GenericGrid from "../components/GenericGrid";
import { DestinationPackagesNameArray } from "../Data/PackagesArray";

const PopularDesinations = () => {
  return (
    <div className="ethiopia-destionations">
      <Hero
        title="Popular Destinations"
        index={false}
        background={Lalibela4}
        description="Prepare to immerse yourself in the authentic Ethiopia as we guide you on a transformative journey to explore the abundant wealth of history, culture, and wildlife that this spectacular country has to offer."
        link="/enquire"
      />
      <Intro
        title="About Our Popular Destinations"
        description={[
          "As a deluxe intrepid tour agency, we curate exceptional journeys that go beyond the ordinary. Our itineraries are designed to showcase the hidden gems and iconic landmarks of Ethiopia, ensuring that every moment of your adventure is filled with awe and wonder. Whether you yearn to explore ancient historical sites, engage with vibrant local communities, or witness the diverse wildlife in its natural habitat, Sawal Tours will create a personalized itinerary that surpasses your expectations.",
          "Join us on this unparalleled expedition and let us unveil the true essence of Ethiopia. From the rock-hewn churches of Lalibela to the ancient ruins of Aksum, from the vibrant markets of Addis Ababa to the breathtaking landscapes of the Danakil Depression, every step of your journey will be carefully crafted to create memories that will last a lifetime.",
        ]}
        img1={Danakil3}
        img2={Lalibela3}
        button="Our Popular Destinations"
        link="#top-destinations"
        lr={true}
      />
      <IntroPackages
        id="top-destinations"
        packages={DestinationPackagesArray}
        title1="Our "
        title2="Popular Destinations"
        link="top-destinations"
      />
      <Intro
        title="Unlock the secrets of a timeless land"
        subtitle="Journeys that go beyond the ordinary"
        description={[
          "Ethiopia isn't just a travel destination; it's a journey of discovery, a realm of extraordinary experiences waiting to unfold. Ethiopia is an adventurer's paradise, a historian's dream, and a culture enthusiast's delight. Browse below to learn more about the top destinations that await your exploration:",
        ]}
        img1={Danakil3}
        img2={Lalibela3}
        button="Our Popular Destinations"
        link="#top-destinations"
        lr={false}
      />
      <PackagesGrid
        title="Our Destinations"
        placeholder="Where would you like to go?"
        packages={DestinationPackagesNameArray}
      />
      <PlannerPolaroid />
      <GenericGrid />
    </div>
  );
};

export default PopularDesinations;
