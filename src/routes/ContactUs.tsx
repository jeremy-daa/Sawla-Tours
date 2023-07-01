import Contact from "../components/Contact";
import ContactMap from "../components/ContactMap";
import Hero from "../components/Hero";
import Omo1 from "../assets/omo_1.jpg";

const ContactUS = () => {
  return (
    <div className="contact">
      <Hero
        title="Contact Us"
        description="What would you like to know? We are here to help you."
        background={Omo1}
        index={false}
      />
      <ContactMap />
      <Contact />
    </div>
  );
};

export default ContactUS;
