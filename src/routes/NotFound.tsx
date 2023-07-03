import Hero from "../components/Hero";
import Bahirdar1 from "../assets/bahir_dar_1.jpg";

const NotFound = () => {
  return (
    <div>
      <Hero
        title="We're sorry, but we can't find the page you're looking for."
        description="Either the page is under construction, or it doesn't exist."
        background={Bahirdar1}
        index={false}
        link="/"
        linkname="Go Home"
      />
    </div>
  );
};

export default NotFound;
