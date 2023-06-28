import Hero from "../components/Hero";
import Intro from "../components/Intro";
import IntroPackages from "../components/IntroPackages";
import Intro1 from "../assets/intro_1.jpg";
import Intro2 from "../assets/intro_2.jpg";
import Intro3 from "../assets/intro_3.jpg";
import Intro4 from "../assets/intro_4.jpg";
import PackagesList from "../components/PackagesList";
import Slider from "../components/Slider";
import PackagesArray from "../Data/PackagesArray";

const Home = () => {
  return (
    <div className="home">
      <Hero background="../src/assets/bg_1.jpg" index title="Home" />
      <Intro
        img1={Intro1}
        img2={Intro2}
        title="Embark on Extraordinary Journeys with Sawal Tours"
        description1="At Sawal Tours, we specialize in creating extraordinary journeys and adventures for sophisticated and discerning travelers throughout Ethiopia. As a deluxe tour agency, we cater to those who seek exceptional experiences and unforgettable adventures. Join us and discover the true essence of Ethiopia in style"
        description2="As Ethiopian specialists, we are dedicated to helping you discover the uniqueness and significance of this captivating country in the Horn of Africa. With our passionate team and extensive network of local partners, we are committed to crafting a trip that aligns with your dreams, budget, and thirst for adventure."
        lr
        button="About Us"
      />
      <IntroPackages />

      <Intro
        img1={Intro3}
        img2={Intro4}
        title="Deluxe Tours and Safaris Tailored to Your Needs"
        description1="Sawla Tours, a small, deluxe tour company, specializes in tailor-made holidays to Ethiopia. With over twenty years of experience in organizing high-quality tours and safaris, we are deeply committed to responsible travel and tourism. Our pride lies in our unwavering focus on community conservation and development initiatives."
        description2="Our team is devoted to planning your journey, ensuring it caters to your specific requirements. Our ultimate goal is to provide our clients with a unique and personalized experience in this remarkably diverse country."
        lr={false}
        button="Explore Our Tours"
      />
      <Slider />
      <PackagesList
        title="Our Popular Ethiopian Tours"
        packages={PackagesArray}
      />
    </div>
  );
};

export default Home;
