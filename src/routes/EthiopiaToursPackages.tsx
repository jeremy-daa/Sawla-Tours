import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EthiopiaToursArray, Tour } from "../Data/EthiopiaToursArray";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Map from "../components/Map";
import NotFound from "./NotFound";
import TourDescription from "../components/TourDescription";
import PlannerPolaroid from "../components/PlannerPolaroid";
import TourDescription2 from "../components/TourDescription2";
import GenericGrid from "../components/GenericGrid";
import TrekkingDescription from "../components/TrekkingDescription";

const EthiopiaToursPackages = () => {
  const [isFourth, setIsFourth] = useState<boolean>(false);
  const [tour, setTour] = useState<Tour | null>(null);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    const selectedTour = EthiopiaToursArray.find(
      (tour) => tour.id === Number(id)
    );
    if (selectedTour) {
      setTour(selectedTour);
      if (selectedTour.id === 4 || selectedTour.id === 8) {
        setIsFourth(true);
      } else {
        setIsFourth(false);
      }
    } else {
      setTour(null);
    }
  }, [id]);
  return (
    <div>
      {tour ? (
        !isFourth ? (
          <>
            <Hero
              title={tour?.title}
              background={tour?.image}
              description={tour?.description}
              link={tour?.link}
              linkname={tour?.linkname}
              index={tour?.index}
            />
            {tour?.intro[0] && (
              <Intro
                title={tour?.intro[0].title}
                description={tour?.intro[0].description}
                lr
                img1={tour?.intro[0].img1}
                img2={tour?.intro[0].img2}
                button={tour?.intro[0].button}
                link={tour?.intro[0].link}
              />
            )}
            {tour?.map && (
              <Map
                title={tour?.map.title}
                description={tour?.map.description}
                image={tour?.map.image}
              />
            )}
            {tour?.intro[1] && (
              <Intro
                title={tour?.intro[1].title}
                description={tour?.intro[1].description}
                lr={tour?.intro[1].lr}
                img1={tour?.intro[1].img1}
                img2={tour?.intro[1].img2}
                button={tour?.intro[1].button}
                link={tour?.intro[1].link}
              />
            )}
            {tour?.tourdescription && (
              <TourDescription
                title={tour?.tourdescription.title}
                image={tour?.tourdescription.image}
                description={tour?.tourdescription.description}
                link={tour?.experience}
              />
            )}
            {tour.intro[2] && (
              <Intro
                title={tour?.intro[2].title}
                description={tour?.intro[2].description}
                lr={tour?.intro[2].lr}
                img1={tour?.intro[2].img1}
                img2={tour?.intro[2].img2}
                button={tour?.intro[2].button}
                link={tour?.intro[2].link}
              />
            )}
            {tour?.tourdescription2 && (
              <TourDescription2
                title={tour?.tourdescription2.title}
                destinations={tour?.tourdescription2.destinations}
                description={tour?.tourdescription2.description}
              />
            )}
            {tour?.intro.slice(3).map((intro, index) => (
              <Intro
                key={index}
                title={intro.title}
                description={intro.description}
                lr={intro.lr}
                img1={intro.img1}
                img2={intro.img2}
                button={intro.button}
                link={intro.link}
              />
            ))}

            <PlannerPolaroid />
            <GenericGrid />
          </>
        ) : (
          <>
            <Hero
              title={tour?.title}
              background={tour?.image}
              description={tour?.description}
              link={tour?.link}
              linkname={tour?.linkname}
              index={tour?.index}
            />
            {tour.intro[0] && (
              <Intro
                title={tour?.intro[0].title}
                description={tour?.intro[0].description}
                lr
                img1={tour?.intro[0].img1}
                img2={tour?.intro[0].img2}
                button={tour?.intro[0].button}
                link={tour?.intro[0].link}
              />
            )}

            {tour?.itinerarydescription &&
              tour.itinerarydescription.map((itinerary, index) => (
                <TrekkingDescription
                  key={index}
                  title={itinerary.title}
                  description={itinerary.description}
                  itineraries={itinerary.itineraries}
                />
              ))}

            {tour.intro[1] && (
              <Intro
                title={tour?.intro[1].title}
                description={tour?.intro[1].description}
                lr={tour?.intro[1].lr}
                img1={tour?.intro[1].img1}
                img2={tour?.intro[1].img2}
                button={tour?.intro[1].button}
                link={tour?.intro[1].link}
              />
            )}

            <PlannerPolaroid />
            <GenericGrid />
          </>
        )
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default EthiopiaToursPackages;
