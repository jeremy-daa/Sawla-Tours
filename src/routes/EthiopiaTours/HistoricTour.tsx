import Hero from "../../components/Hero";
import Map from "../../components/Map";
import Gonder1 from "../../assets/gonder_1.jpeg";
import HistoricTours from "../../assets/Maps/HistoricTours.jpg";
import Intro from "../../components/Intro";
import Axum1 from "../../assets/axum_1.jpg";
import Axum2 from "../../assets/axum_2.jpg";
import Tigray2 from "../../assets/tigray_2.jpg";
import PlannerPolaroid from "../../components/PlannerPolaroid";
import TourDescription from "../../components/TourDescription";
const HistoricTour = () => {
  const descriptionString1 =
    'Aside from the well-known destinations, there are also other hidden gems that are worth exploring. Visitors can discover the sacred Church of Gishen Mariam in Wollo, the neolithic site at Melka Kunture near Addis Ababa, and the beautiful churches and monasteries on the road from Addis Ababa to Bahir Dar, such as Mertulle Mariam. For those interested in archaeology, the Hadar site is where "Lucy" and other hominid species were discovered in the Afar Regional State. ';
  const descriptionString2 =
    "For a unique cultural experience, visitors can also explore the Muslim city of Harar with its 99 mosques, old walled city, and particular architectural style. Ethiopia's Historic and Cultural Tours offer an unforgettable journey through the country's rich history and diverse cultures, showcasing its unique identity that has remained largely untouched by colonialism.";
  return (
    <div className="historic-tour-wrapper">
      <Hero
        index={false}
        title="Historic Tour"
        description="The Historic Tour is a journey through Ethiopia’s rich and fascinating history. The tour includes visits to the ancient capital of Axum, the Blue Nile Falls, the castles of Gondar, the rock-hewn churches of Lalibela, and the walled city of Harar."
        link="/contact"
        background={Gonder1}
      />
      <Intro
        title="The Extraordinary journey through Ethiopia's Historic Sites"
        description1="Embark on an extraordinary journey through Ethiopia's Historic Tours, where ancient wonders and vibrant cultures intertwine harmoniously. Discover the storied treasures that define Ethiopia's identity, from the rock-hewn churches of Tigray to the awe-inspiring city of Axum."
        description2="Traverse the famed Historic Route, immersing yourself in architectural marvels and breathtaking landscapes, while uncovering hidden gems that captivate the intrepid explorer. Ethiopia's Historic and Cultural Tours offer an unforgettable odyssey, celebrating a rich history and diverse cultures untouched by colonialism."
        lr
        img1={Axum1}
        img2={Tigray2}
        button="Start Planning"
        link="/enquire"
      />
      <Map
        title="Historic Tour Destinations"
        description="The Historic Tour is a journey through Ethiopia’s rich and fascinating history. The tour includes visits to the ancient capital of Axum, the Blue Nile Falls, the castles of Gondar, the rock-hewn churches of Lalibela, and the walled city of Harar. And many more..."
        image={HistoricTours}
      />
      <Intro
        title="What to Expect on the Historic Tour"
        description1="Ethiopia's Historic and Cultural Tours offer a unique opportunity to discover the country's rich history and diverse cultures. Unlike other African nations, Ethiopia's identity is deeply rooted in its independence, with a history that stretches back thousands of years. From the ancient city of Axum to the rock-hewn churches of Tigray and Lalibela and the stelae fields at Tiya, Ethiopia's Historic Route through the North is a must-see destination for any history enthusiast."
        description2="The Historic Route is easily accessible by road or a combination of road and air travel. The best-known historic sites include Axum, Lalibela, Gondar, and Bahir Dar, and to make the most out of your trip, it is recommended to spend at least two days in each destination. The Historic Route is a living testimony to Ethiopia's rich cultural heritage, showcasing the country's architectural wonders and the breathtaking beauty of its natural landscapes."
        lr={false}
        img1={Axum1}
        img2={Tigray2}
        button="Start Planning"
        link="/enquire"
      />
      <TourDescription
        title="Destinations on the Historic Tour"
        image={Axum2}
        description1={descriptionString1}
        description2={descriptionString2}
      />
      <PlannerPolaroid />
    </div>
  );
};

export default HistoricTour;
