import Hero from "../components/Hero";
import Simien2 from "../assets/simien_2.jpg";
import Intro from "../components/Intro";
import Gondar2 from "../assets/gonder_2.jpeg";
import Axum1 from "../assets/axum_1.jpg";
import PackagesList from "../components/PackagesList";
import { EthiopiaTourPackagesArraySimplified } from "../Data/PackagesArray";
import ImageGallery from "../components/ImageGallery";
import Slider from "../components/Slider";
import PlannerPolaroid from "../components/PlannerPolaroid";

const EthiopiaTours = () => {
  const packages = EthiopiaTourPackagesArraySimplified;

  return (
    <div className="ethiopia-tours">
      <Hero
        title="Ethiopia Tours"
        index={false}
        background={Simien2}
        description="Bespoke Ethiopian Expeditions"
        link="/enquire"
      />
      <Intro
        title="Bespoke Ethiopian Expeditions"
        subtitle="Anywhere in Ethiopia"
        description1="The journey themes you witness on our platform serve merely as an appetizer to the grand banquet of travel experiences we're capable of orchestrating. It's just a glimpse of what Sawla can offer. With a treasure trove of experience in crafting exceptional Ethiopian journeys, our team is ready to design an unforgettable adventure just for you. Every journey is unique, just like you, and always with a positive spin."
        description2="
        Brimming with love for Ethiopia, equipped with vast knowledge, and teamed with top-notch safari guides and trusted local pros, we don't just do travel - we redefine it."
        img1={Gondar2}
        img2={Axum1}
        button="Explore the Possibilities"
        link="#tours"
        lr={true}
      />
      <ImageGallery />

      <div className="ethiopia-tours-wrapper">
        <PackagesList
          title="Ethiopia Tour Packages"
          packages={packages}
          description="Dive into uncharted territories and wilderness, be part of meaningful conservation efforts, elevate your travel dreams in untouched spots, and soak in genuine cultural moments."
        />
      </div>
      <Slider
        title="Ethiopia Tours Packages"
        description="Our most popular tours are listed below. These tours are designed to give you a taste of what is possible. We can tailor any itinerary to suit your requirements and interests."
        cards={EthiopiaTourPackagesArraySimplified}
      />
      {/* <Intro
        title="Historic Tours in Ethiopia"
        description1="Discover the storied treasures that define Ethiopia's identity, from the rock-hewn churches of Tigray to the awe-inspiring city of Axum. Traverse the famed Historic Route, immersing yourself in architectural marvels and breathtaking landscapes, while uncovering hidden gems that captivate the intrepid explorer. Ethiopia's Historic and Cultural Tours offer an unforgettable odyssey, celebrating a rich history and diverse cultures untouched by colonialism."
        description2="Ethiopia's Historic and Cultural Tours offer a unique opportunity to discover the country's rich history and diverse cultures. Unlike other African nations, Ethiopia's identity is deeply rooted in its independence, with a history that stretches back thousands of years. From the ancient city of Axum to the rock-hewn churches of Tigray and Lalibela and the stelae fields at Tiya, Ethiopia's Historic Route through the North is a must-see destination for any history enthusiast."
        img1={Gondar2}
        img2={Axum1}
        button="View Historic Tours"
        link="/ethiopia-tours/historic"
        lr={true}
      /> */}
      <PlannerPolaroid />
    </div>
  );
};

export default EthiopiaTours;
