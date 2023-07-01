import { ImLocation2 } from "react-icons/im";
import Card from "./Card";
import Lalibela1 from "../assets/lalibela_1.jpg";
import Simien1 from "../assets/simien_1.jpeg";
import Bale1 from "../assets/bale_2.jpg";
import { Link } from "react-router-dom";
import pickRandom from "../functions/pickRandom";
interface Props {
  custom?: boolean;
  title1?: string;
  title2?: string;
  link?: string;
  packages?: Package[];
}
interface Package {
  title: string;
  description: string;
  image: string;
  link: string;
  days?: number;
}

const IntroPackages = ({ custom, title1, title2, link, packages }: Props) => {
  const random = pickRandom<Package>(packages ?? [], 3);
  return (
    <div className="experience-packages-wrapper">
      {custom ? (
        <h2 className="packages-title" data-aos="fade-down">
          <ImLocation2 /> {title1}{" "}
          <Link to={`/${link}`} className="link">
            {title2}
          </Link>
        </h2>
      ) : (
        <h2 className="packages-title" data-aos="fade-down">
          <ImLocation2 /> Our Popular{" "}
          <Link to="/experiences" className="link">
            Tours by Experience
          </Link>
        </h2>
      )}
      <div className="packages">
        {custom ? (
          <>
            {random.map((item) => (
              <Card
                className="package-card"
                image={item.image}
                title={item.title}
                description={item.description}
                link={item.link}
                days={item.days}
              />
            ))}
          </>
        ) : (
          <>
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
              image={Bale1}
              title="Bale Mountain Trekking"
              link="/experiences/bale-mountain-trekking"
              description="A mesmerizing expedition into the heart of Ethiopia's natural wonders with our exclusive itinerary, 'Bale Mountain Trekking: A Majestic Journey through Ethiopia's Alpine Wonderland.'"
              days={11}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default IntroPackages;
