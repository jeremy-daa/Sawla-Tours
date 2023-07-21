import Hero from "../components/Hero";
import Intro from "../components/Intro";
import IntroPackages from "../components/IntroPackages";
import Intro1 from "../assets/intro_1.jpg";
import Intro2 from "../assets/intro_2.jpg";
import Intro3 from "../assets/intro_3.jpg";
import Intro4 from "../assets/intro_4.jpg";
import Simien3 from "../assets/simien_3.jpg";
import PackagesList from "../components/PackagesList";
import Slider from "../components/Slider";
import {
  DestinationPackagesArray,
  EthiopiaTourPackagesArray,
  ToursByExperienceArray,
} from "../Data/PackagesArray";
import ImageGallery from "../components/ImageGallery";
import PlannerPolaroid from "../components/PlannerPolaroid";
import GenericGrid from "../components/GenericGrid";

const Home = () => {
  return (
    <div className="home">
      <Hero background={Simien3} index title="Home" link="#about" />
      <Intro
        img1={Intro1}
        img2={Intro2}
        title="Welcome to Sawla Tours"
        subtitle="Where Extraordinary Journeys Unfold"
        description={[
          "We're not just a travel company; we're your key to unlocking unforgettable adventures in the heart of Ethiopia, the mesmerizing jewel of Africa.",
          "Our mission? To unveil Ethiopia's enchanting magic, tailored uniquely to you. With us, travel is not a one-size-fits-all affair but a deeply personalized journey, sculpted around your desires, budget, and adventure spirit.",
        ]}
        lr
        button="About Us"
        link="/about-us"
      />
      <IntroPackages
        title1="Our Popular"
        title2="Tours by Experience"
        link="tours-by-experiences"
        packages={ToursByExperienceArray}
      />

      <Intro
        img1={Intro3}
        img2={Intro4}
        title="Experience the Sawla difference"
        subtitle="Your Journey, Your Way"
        description={[
          "A boutique tour specialist celebrated for our personalized, bespoke Ethiopian experiences. Our two-decade legacy in crafting exceptional tours and safaris aligns our thrill for exploration with a profound commitment to community conservation and development.",
          "With us, your travel dreams take center stage. Our dedicated team meticulously designs your itinerary to mirror your aspirations, painting an authentic picture of Ethiopia's vibrant cultures, historical wonders, and awe-inspiring wildlife.",
        ]}
        lr={false}
        button="Our Top Destinations"
        link="/top-destinations"
      />
      <Slider
        title="Our Popular Ethiopia Tours"
        description="Our most popular tours are listed below. These tours are designed to give you a taste of what is possible. We can tailor any itinerary to suit your requirements and interests."
        cards={EthiopiaTourPackagesArray}
      />
      <PackagesList
        title="Ethiopia Popular Destinations"
        packages={DestinationPackagesArray}
      />
      <ImageGallery />
      {/* <Planner /> */}

      <PlannerPolaroid />
      <GenericGrid />
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
