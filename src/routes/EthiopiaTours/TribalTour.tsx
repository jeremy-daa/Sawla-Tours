import Hero from "../../components/Hero";
import Intro3 from "../../assets/intro_3.jpg";
import Intro from "../../components/Intro";
import Hamer1 from "../../assets/hamer_1.jpeg";
import Karo1 from "../../assets/karo_1.jpg";
import Map from "../../components/Map";
import TribalTours from "../../assets/Maps/TribalTours.jpg";
import Konso1 from "../../assets/konso_1.jpg";
import Surma1 from "../../assets/surma_1.jpeg";
import Surma2 from "../../assets/surma_2.jpeg";
import TourDescription from "../../components/TourDescription";
import PlannerPolaroid from "../../components/PlannerPolaroid";
import TourDescription2 from "../../components/TourDescription2";

const HistoricTour = () => {
  return (
    <div className="tribal-tour-wrapper">
      <Hero
        background={Intro3}
        title="Tribal Ethiopia Tours"
        description="An adventure through Ethiopia’s diverse cultures and traditions. "
        link="/enquire"
        index={false}
      />
      <Intro
        title="The Extraordinary journey through Ethiopia's Historic Sites"
        description1="Explore the richness of Ethiopia's Cultural Tours, where diverse cultures converge. Experience the vibrant tapestry of cultural diversity unlike anywhere else in Africa. From stunning landscapes to iconic monuments and fascinating wildlife, every part of your journey is infused with a vibrant cultural essence that brings it to life."
        description2="Embark on a journey of discovery with Ethiopia's Tribal and Cultural Tours, where visitors can experience the unique traditions and lifestyles of the different ethnic groups situated along the Omo River in the South. The tribes, including the Arbore, Nyangatom, Dasenech, Karo, Hamer, and Mursi, have lived on the lands for centuries, with their first contact with the modern world only occurring within the last two to three decades. "
        lr
        img1={Hamer1}
        img2={Karo1}
        button="Start Planning"
        link="/enquire"
      />
      <Map
        title="Tribal Tour Destinations"
        description="The Tribal Tour covers an eclectic mix of destinations that are selected to give you the best experience of Ethiopia's diverse cultures and traditions. It is a journey that will take you through the Omo Valley, where you will meet the different tribes that have lived there for centuries. You will also visit the Konso and Dorze tribes, who are known for their unique traditions and lifestyles. And many more... "
        image={TribalTours}
      />
      <Intro
        title="What to Expect on the Tribal Tour"
        description1="Visitors can witness the beauty, nature, discipline, tranquility, and centuries-old traditions that define these tribes, while also enjoying the marvelous scenery, wildlife, and birdlife that make this region a must-see destination."
        description2="Before reaching the Omo River, visitors can explore the home of the Dorze people in Chencha, renowned for their bamboo bee-hive shaped houses and colorful weaving skills. Further south are the Konso people, known for their intricately terraced hillsides and wooden totems that adorn their cemeteries. Along the Omo River, visitors can discover the Surma, who are famous for body painting and women wearing lip plates, and experience the extraordinary rite of passage of the Hamer people called the Bull Jumping ceremony (Ukuli Bula), representing a life-changing event for young men who pass from boyhood into adulthood."
        lr={false}
        img1={Surma2}
        img2={Konso1}
        button="Start Planning"
        link="/enquire"
      />
      <TourDescription
        title="A Rough Summary of the Itenerary"
        image={Surma1}
        description1={
          "To fully experience the wonders of the Omo Valley, at least eight days should be allowed, with the east bank offering lodges for accommodation while the west bank requires camping. We can provide all the necessary gear for a comfortable camping experience. In the far west in Gambella, along the Baro River, visitors can discover the Anuak, Nuer, and Mizingir people, accessible by air or a two-day road trip."
        }
        description2={
          "Ethiopia's Tribal and Cultural Tours offer a unique and unforgettable journey through the customs and traditions of these remarkable ethnic groups, providing a rare insight into their pre-materialist cultures and anthropology."
        }
      />

      <TourDescription2
        title="Places included in the Itenerary"
        destinations={[
          {
            title: "Omo River",
            description:
              "Situated in the South of Ethiopia, the passage highlights the tribes living along the Omo River. These tribes include the Arbore, Nyangatom, Dasenech, Karo, Hamer, and Mursi.",
          },
          {
            title: "Chencha",
            description:
              "Home of the Dorze people known for their bamboo bee-hive shaped houses and colorful weaving skills. Chencha is mentioned as a place to explore before reaching the Omo River.",
          },
          {
            title: "Konso",
            description:
              "Located further south, the passage mentions the Konso people, known for their intricately terraced hillsides and wooden totems that adorn their cemeteries.",
          },
          {
            title: "Surma",
            description:
              "Along the Omo River, visitors can discover the Surma people. They are famous for body painting and women wearing lip plates.",
          },
          {
            title: "Hamer",
            description:
              "The Hamer people, who are known for their Bull Jumping ceremony (Ukuli Bula), representing a significant rite of passage for young men.",
          },
          {
            title: "Gambella",
            description:
              "In the far west along the Baro River, visitors can discover the Anuak, Nuer, and Mizingir people. It is accessible by air or a two-day road trip.",
          },
        ]}
        description="The Tribal Tours itenerary includes the following destinations: "
      />
      <PlannerPolaroid />
    </div>
  );
};

export default HistoricTour;
