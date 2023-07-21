import Hero from "../components/Hero";
import Intro from "../components/Intro";
import DestinationDescription from "../components/DestinationDescription";
import PlannerPolaroid from "../components/PlannerPolaroid";
import GenericGrid from "../components/GenericGrid";
import {
  Destination,
  PopularDestinationsArray,
} from "../Data/PopularDestinationsArray";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const PopularDestinationsPackages = () => {
  const [destination, setDestination] = useState<Destination | null>(null);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    const selectedDestination = PopularDestinationsArray.find(
      (destination) => destination.id === Number(id)
    );
    if (selectedDestination) {
      setDestination(selectedDestination);
    } else {
      setDestination(null);
    }
  }, [id]);
  return (
    <div>
      {destination ? (
        <>
          {destination.title && (
            <Hero
              background={destination.image}
              index={false}
              title={destination.title}
              description={destination.description}
              link="/enquire"
              linkname="Start Planning"
            />
          )}
          {destination.intro && (
            <Intro
              img1={destination.intro[0].img1}
              img2={destination.intro[0].img2}
              title={destination.intro[0].title}
              subtitle={destination.intro[0].subtitle}
              description={destination.intro[0].description}
              button={destination.intro[0].button}
              lr={destination.intro[0].lr}
              link={destination.intro[0].link}
            />
          )}
          {destination.description && (
            <div id="why">
              <DestinationDescription
                destination={destination.destinationdescription.destination}
                reasons={destination.destinationdescription.reasons}
              />
            </div>
          )}
          {destination.intro[1] && (
            <Intro
              img1={destination.intro[1].img1}
              img2={destination.intro[1].img2}
              title={destination.intro[1].title}
              subtitle={destination.intro[1].subtitle}
              description={destination.intro[1].description}
              button={destination.intro[1].button}
              lr={destination.intro[1].lr}
              link={destination.intro[1].link}
            />
          )}
          <PlannerPolaroid />
          <GenericGrid />
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default PopularDestinationsPackages;
