import Hero from "../components/Hero";
import Simien2 from "../assets/simien_2.jpg";
import Intro from "../components/Intro";
import Gondar2 from "../assets/gonder_2.jpeg";
import Axum1 from "../assets/axum_1.jpg";
import PackagesList from "../components/PackagesList";
import { EthiopiaTourPackagesArraySimplified } from "../Data/PackagesArray";
import ImageGallery from "../components/ImageGallery";
import PlannerPolaroid from "../components/PlannerPolaroid";
import GenericGrid from "../components/GenericGrid";

const EthiopiaTours = () => {
  const packages = EthiopiaTourPackagesArraySimplified;

  return (
    <div className="ethiopia-tours">
      <Hero
        title="Ethiopia Tour Themes"
        index={false}
        background={Simien2}
        description="Bespoke Ethiopian Expeditions"
        link="/enquire"
      />
      <Intro
        title="Bespoke Ethiopian Expeditions"
        subtitle="Anywhere in Ethiopia"
        description={[
          "The journey themes you witness on our platform serve merely as an appetizer to the grand banquet of travel experiences we're capable of orchestrating. It's just a glimpse of what Sawla can offer. With a treasure trove of experience in crafting exceptional Ethiopian journeys, our team is ready to design an unforgettable adventure just for you. Every journey is unique, just like you, and always with a positive spin.",
          "Brimming with love for Ethiopia, equipped with vast knowledge, and teamed with top-notch safari guides and trusted local pros, we don't just do travel - we redefine it.",
        ]}
        img1={Gondar2}
        img2={Axum1}
        button="Explore the Possibilities"
        link="#tours"
        lr={true}
      />
      <ImageGallery />

      <div className="ethiopia-tours-wrapper">
        <PackagesList
          title="Ethiopia Tour Theme Packages"
          packages={packages}
          description="Dive into uncharted territories and wilderness, be part of meaningful conservation efforts, elevate your travel dreams in untouched spots, and soak in genuine cultural moments."
        />
      </div>
      <PlannerPolaroid />
      <GenericGrid />
    </div>
  );
};

export default EthiopiaTours;
