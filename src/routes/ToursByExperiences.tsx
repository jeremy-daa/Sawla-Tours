import { ToursByExperienceArray } from "../Data/PackagesArray";
import GenericGrid from "../components/GenericGrid";
import Hero from "../components/Hero";
import PlannerPolaroid from "../components/PlannerPolaroid";
import Wollo1 from "../assets/wollo_1.jpg";
import Intro from "../components/Intro";
import Lalibela4 from "../assets/lalibela_4.jpg";
import Yemata1 from "../assets/yemata_1.jpg";
import Slider from "../components/Slider";
import PackagesGrid from "../components/PackagesGrid";

const ToursByExperiances = () => {
  const packages = ToursByExperienceArray.map((item) => {
    return {
      title: item.title,
      image: item.image,
      link: item.link,
    };
  });
  const TopToursByExperience = ToursByExperienceArray.sort(
    () => 0.5 - Math.random()
  ).slice(0, 5);

  return (
    <div>
      <Hero
        title="Tours By Experiences"
        index={false}
        background={Wollo1}
        description="Your pathfinder to extraordinary Ethiopian experiences"
        link="/enquire"
      />
      <Intro
        title="Your pathfinder to extraordinary Ethiopian experiences"
        subtitle="Tours by Experiences"
        description={[
          "As seasoned experts, we pair passion with decades of local knowledge to create tours as unique as you.",
          "With Sawla, every journey unfolds countless possibilities. Relish the richness of history, the depth of tribal cultures, the pulsating vibe of festivals, the adrenaline of adventures, and the beauty of Ethiopian landscapes – all tailored to your tastes.",
        ]}
        lr
        link="#top-tours"
        button="Top Tours by Experience"
        img1={Lalibela4}
        img2={Yemata1}
      />
      <section id="top-tours">
        <Slider
          title="Top Tours by Experience"
          description="We've curated our top tours by experience to help you find the perfect match."
          cards={TopToursByExperience}
        />
      </section>
      <Intro
        title="A Tour for every taste"
        subtitle="What's your travel style?"
        description={[
          "Are you a history buff? Our Historic Tours reveal ancient wonders. If cultural immersion is your calling, Tribal Tours will immerse you in Ethiopia's diverse societies.  ",
          "For festival lovers, our Festival Tours offer vibrant celebrations, while our Adventure Tours test your mettle in the wild.",
          "Photographers can capture breathtaking vistas in our Photography Tours, and nature enthusiasts will love our Birding and Wildlife Tours.",
        ]}
        lr={false}
        link="#top-tours"
        button="Top Tours by Experience"
        img1={Lalibela4}
        img2={Yemata1}
      />
      <PackagesGrid
        title="Our Tours by Experience"
        placeholder="Search by experience"
        packages={packages}
      />

      <PlannerPolaroid />
      <GenericGrid />
    </div>
  );
};

export default ToursByExperiances;
