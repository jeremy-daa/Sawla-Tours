import Hero from "../../components/Hero";
import Lalibela2 from "../../assets/lalibela_2.jpeg";

const HistoricTour = () => {
  return (
    <div>
      <Hero
        background={Lalibela2}
        title="Festivals and Special Events Tours"
        description="Experience the vibrant world of Ethiopian festivals, where ancient traditions come alive through colorful celebrations and powerful spiritual energy"
        link="/enquire"
        index={false}
      />
    </div>
  );
};

export default HistoricTour;
