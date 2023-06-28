import { ImLocation2 } from "react-icons/im";
import Card from "./Card";
import Lalibela1 from "../assets/lalibela_1.jpg";
import Simien1 from "../assets/simien_1.jpeg";
import { Link } from "react-router-dom";

const IntroPackages = () => {
  return (
    <div className="experience-packages-wrapper">
      <h2 className="packages-title">
        <ImLocation2 /> Our Popular{" "}
        <Link to="/experiences" className="link">
          Tours by Experience
        </Link>
      </h2>
      <div className="packages">
        <Card
          className="package-card"
          image={Lalibela1}
          title="Genna Jubilation"
          description="An extraordinary journey to Ethiopia, immersing yourself in the joyous festivities of Genna, the Ethiopian Christmas. This meticulously crafted itinerary takes you on a captivating exploration of..."
          link="/experiences/genna-jubilation"
          days={9}
        />
        <Card
          className="package-card"
          image={Simien1}
          title="Simien Trekking"
          link="/experiences/simien-trekking"
          description="An unforgettable journey through the breathtaking landscapes and rich cultural heritage of Ethiopia. This meticulously crafted itinerary combines the thrill of trekking in the Simien Mountains with the exploration of historical gems such as Axum, Lalibela, and Gonder."
          days={10}
        />
        <Card
          className="package-card"
          image={Lalibela1}
          title="Bale Mountain Trekking"
          link="/experiences/bale-mountain-trekking"
          description="A mesmerizing expedition into the heart of Ethiopia's natural wonders with our exclusive itinerary, 'Bale Mountain Trekking: A Majestic Journey through Ethiopia's Alpine Wonderland.'"
          days={11}
        />
      </div>
    </div>
  );
};

export default IntroPackages;
