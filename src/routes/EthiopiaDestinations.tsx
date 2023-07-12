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
// import IntroPackages from "../components/IntroPackages";
// import { DestinationPackagesArray } from "../Data/PackagesArray";

const EthiopiaDesinations = () => {
  return (
    <div className="ethiopia-destionations">
      <Hero
        title="Ethiopia Top Destinations"
        index={false}
        background={Lalibela4}
        description="Prepare to immerse yourself in the authentic Ethiopia as we guide you on a transformative journey to explore the abundant wealth of history, culture, and wildlife that this spectacular country has to offer."
        link="/contact"
      />
      <Intro
        title="About Our Top Destinations"
        description1="As a deluxe intrepid tour agency, we curate exceptional journeys that go beyond the ordinary. Our itineraries are designed to showcase the hidden gems and iconic landmarks of Ethiopia, ensuring that every moment of your adventure is filled with awe and wonder. Whether you yearn to explore ancient historical sites, engage with vibrant local communities, or witness the diverse wildlife in its natural habitat, Sawal Tours will create a personalized itinerary that surpasses your expectations."
        description2="Join us on this unparalleled expedition and let us unveil the true essence of Ethiopia. From the rock-hewn churches of Lalibela to the ancient ruins of Aksum, from the vibrant markets of Addis Ababa to the breathtaking landscapes of the Danakil Depression, every step of your journey will be carefully crafted to create memories that will last a lifetime."
        img1={Danakil3}
        img2={Lalibela3}
        button="Our Top Destinations"
        link="#top-destinations"
        lr={true}
      />
      <IntroPackages
        custom
        packages={DestinationPackagesArray}
        title1="Our "
        title2="Top Destinations"
        link="top-destinations"
      />
      <PackagesGrid />
      <PlannerPolaroid />
    </div>
  );
};

export default EthiopiaDesinations;
