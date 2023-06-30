import Hero from "../components/Hero";
import Simien2 from "../assets/simien_2.jpg";
import Intro from "../components/Intro";
import Gondar2 from "../assets/gonder_2.jpeg";
import Axum1 from "../assets/axum_1.jpg";
import PackagesList from "../components/PackagesList";
import {
  DestinationPackagesArray,
  EthiopiaTourPackagesArray,
} from "../Data/PackagesArray";
import ImageGallery from "../components/ImageGallery";
import Planner from "../components/Planner";
import Slider from "../components/Slider";

const EthiopiaTours = () => {
  const packages = DestinationPackagesArray.filter((p) => {
    const title = p.title.toLowerCase();
    return (
      title.startsWith("lalibela") ||
      title.startsWith("axum") ||
      title.startsWith("bahir dar")
    );
  });

  return (
    <div className="ethiopia-tours">
      <Hero
        title="Ethiopia Tours"
        index={false}
        background={Simien2}
        description="Embark on an extraordinary journey through Ethiopia's Historic Tours, where ancient wonders and vibrant cultures intertwine harmoniously"
        link="/contact"
      />
      <Intro
        title="Historic Tours in Ethiopia"
        description1="Discover the storied treasures that define Ethiopia's identity, from the rock-hewn churches of Tigray to the awe-inspiring city of Axum. Traverse the famed Historic Route, immersing yourself in architectural marvels and breathtaking landscapes, while uncovering hidden gems that captivate the intrepid explorer. Ethiopia's Historic and Cultural Tours offer an unforgettable odyssey, celebrating a rich history and diverse cultures untouched by colonialism."
        description2="Ethiopia's Historic and Cultural Tours offer a unique opportunity to discover the country's rich history and diverse cultures. Unlike other African nations, Ethiopia's identity is deeply rooted in its independence, with a history that stretches back thousands of years. From the ancient city of Axum to the rock-hewn churches of Tigray and Lalibela and the stelae fields at Tiya, Ethiopia's Historic Route through the North is a must-see destination for any history enthusiast."
        img1={Gondar2}
        img2={Axum1}
        button="View Historic Tours"
        link="/ethiopia-tours/historic-tours"
        lr={true}
      />
      <ImageGallery />

      <div className="ethiopia-tours-wrapper">
        <PackagesList
          title="Best Historic Tours"
          packages={packages}
          description="The Historic Route is easily accessible by road or a combination of road and air travel. The best-known historic sites include Axum, Lalibela, Gondar, and Bahir Dar, and to make the most out of your trip, it is recommended to spend at least two days in each destination. The Historic Route is a living testimony to Ethiopia's rich cultural heritage, showcasing the country's architectural wonders and the breathtaking beauty of its natural landscapes."
        />
      </div>
      <Slider
        title="Ethiopia Tours Packages"
        description="Our most popular tours are listed below. These tours are designed to give you a taste of what is possible. We can tailor any itinerary to suit your requirements and interests."
        cards={EthiopiaTourPackagesArray}
      />
      <Planner />
    </div>
  );
};

export default EthiopiaTours;
