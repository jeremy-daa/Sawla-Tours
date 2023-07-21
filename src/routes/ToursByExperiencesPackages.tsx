import { useEffect, useState } from "react";
import GenericGrid from "../components/GenericGrid";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import PackagesList from "../components/PackagesList";
import PlannerPolaroid from "../components/PlannerPolaroid";
import {
  ExperiencePackage,
  ExperiencesPackagesArray,
} from "../Data/ExperiencesPackagesArray";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
const ToursByExperiencesPackages = () => {
  const [experience, setExperience] = useState<ExperiencePackage | null>(null);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    const selectedExperience = ExperiencesPackagesArray.find(
      (experience) => experience.id === Number(id)
    );
    if (selectedExperience) {
      setExperience(selectedExperience);
    } else {
      setExperience(null);
    }
  }, [id]);
  return (
    <div className="historic-wrapper">
      {experience ? (
        <>
          {experience.title && (
            <Hero
              title={experience.title}
              description={experience.description}
              index={experience.index}
              background={experience.image}
              link={experience.link}
            />
          )}
          {experience.intro[0] && (
            <Intro
              title={experience.intro[0].title}
              description={experience.intro[0].description}
              lr={experience.intro[0].lr}
              img1={experience.intro[0].img1}
              img2={experience.intro[0].img2}
              subtitle={experience.intro[0].subtitle}
              button={experience.intro[0].button}
              link={experience.intro[0].link}
            />
          )}
          {experience.packageslist && (
            <PackagesList
              title={experience.packageslist.title}
              description={experience.packageslist.description}
              packages={experience.packageslist.packages}
            />
          )}
          {experience.intro[1] && (
            <Intro
              title={experience.intro[1].title}
              description={experience.intro[1].description}
              lr={experience.intro[1].lr}
              img1={experience.intro[1].img1}
              img2={experience.intro[1].img2}
              subtitle={experience.intro[1].subtitle}
              button={experience.intro[1].button}
              link={experience.intro[1].link}
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

export default ToursByExperiencesPackages;
