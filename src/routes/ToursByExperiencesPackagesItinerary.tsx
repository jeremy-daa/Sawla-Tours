import { useEffect, useState } from "react";
import {
  ExperiencesPackageItineraryArray,
  Itinerary,
} from "../Data/ExperiencesPackagesItineraryArray";
import GenericGrid from "../components/GenericGrid";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import ItineraryDescription from "../components/ItineraryDescription";
import PlannerPolaroid from "../components/PlannerPolaroid";
import TourDescription2 from "../components/TourDescription2";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

// export interface Itinerary {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   link: string;
//   linkname: string;
//   index: boolean;
//   intro: {
//     title: string;
//     description: string[];
//     lr: boolean;
//     img1: string;
//     img2: string;
//     subtitle?: string;
//     button: string;
//     link: string;
//   }[];
//   tourdescription2: {
//     title: string;
//     description: string;
//     destinations: {
//       title: string;
//       description: string;
//     }[];
//   }[];
//   itinerarydescription: {
//     title: string;
//     itineraries: {
//       title: string;
//       description: string[];
//       image: string;
//     }[];
//   };
// }

const ToursByExperiencesPackageItinerary = () => {
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    const selectedItinerary = ExperiencesPackageItineraryArray.find(
      (itinerary) => itinerary.id === Number(id)
    );
    if (selectedItinerary) {
      setItinerary(selectedItinerary);
    } else {
      setItinerary(null);
    }
  }, [id]);
  return (
    <div>
      {/* <Hero
        title="Footsteps of History"
        index={false}
        background={"wagwan"}
        description="Unveiling Ethiopia's Ancient Legacy"
        link="/enquire"
      />
      <Intro
        title="Introducing Footsteps of History"
        subtitle="Unveiling Ethiopia's Ancient Legacy"
        description={[
          "Embark on a captivating 8-day journey through Ethiopia, where the echoes of ancient civilizations and the grandeur of nature converge. This thoughtfully crafted tour invites history enthusiasts to delve into the rich cultural heritage of Ethiopia, from the vibrant streets of Addis Ababa to the architectural wonders of Gonder and the awe-inspiring rock-hewn churches of Lalibela.",
          "Traverse the majestic Simien Mountains, walking amidst breathtaking plateaus and gorges. Each destination on this itinerary reveals the storied past of Ethiopia, offering a profound understanding of its historical significance. Join us on this enchanting expedition as we unravel the ancient secrets and monumental legacies of this extraordinary land.",
        ]}
        lr={false}
        link="#destination-highlights"
        button="Destination Highlights"
        img1={"Axum4"}
        img2={"Axum5"}
      />
      <div id="destination-highlights">
        <TourDescription2
          title="Highlighted Destinations"
          destinations={[
            {
              title: "Addis Ababa",
              description:
                "Immerse yourself in Ethiopia's capital, exploring its museums, markets, and iconic landmarks.",
            },
            {
              title: "Gonder",
              description:
                "Discover the Royal Enclosure, featuring medieval castles and the awe-inspiring Debre Berhan Selassie Church.",
            },
            {
              title: "Simien Mountains",
              description:
                "Venture into this UNESCO World Heritage Site, walking amidst stunning alpine landscapes and encountering unique wildlife.",
            },
            {
              title: "Lalibela",
              description:
                "Witness the architectural marvels of the rock-hewn churches, a testament to human craftsmanship and spiritual devotion.",
            },
          ]}
          description="The Footsteps of History itenerary includes the following destinations: "
        />
        <TourDescription2
          title="Itinerary at a Glance"
          destinations={[
            {
              title: "Day 1",
              description:
                "Arrive in Addis Ababa and explore the vibrant capital city",
            },
            {
              title: "Day 2",
              description:
                "Fly to Gonder and drive to the Simien Mountains National Park",
            },
            {
              title: "Day 3",
              description:
                "Explore and immerse yourself in the beauty of the Simien Mountains",
            },
            {
              title: "Day 4",
              description:
                "Drive to Gonder and uncover its historical treasures",
            },
            {
              title: "Day 5",
              description:
                "Fly to Lalibela and visit the renowned rock-hewn churches",
            },
            {
              title: "Day 6",
              description: "Explore more of Lalibela's captivating churches",
            },
            {
              title: "Day 7",
              description:
                "Fly back to Addis Ababa and embark on a sightseeing tour",
            },
            {
              title: "Day 8",
              description:
                "Depart from Addis Ababa with lasting memories of Ethiopia's ancient heritage.",
            },
          ]}
          description="The itinerary at a glance for the Footsteps of History tour is as follows:"
        />
      </div>
      <ItineraryDescription
        title={"Day by day Tour Itinerary"}
        itineraries={[
          {
            title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
            description: [
              "Upon arrival at Bole International Airport in Addis Ababa, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel.",
              "This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes.",
              "Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees. Overnight in Addis Ababa.",
            ],
            image: "Addis1",
          },
          {
            title:
              "DAY 2: FLY TO GONDER, & DRIVE TO SIMIEN MOUNTAIN NATIONAL PARK",
            description: [
              "This morning, board a short flight to Gonder and upon arrival, you drive to the Simien Mountains. It is a UNESCO World Heritage Site and one of Africa’s largest ranges. More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia.",
              "Simien's landscapes vary from plateaus, escarpments, and steep gorges to rolling hills and pinnacles. Enjoy an afternoon walk around the lodge, amid the breathtaking alpine sceneries. This will help you to acclimatize your body to the altitude. Overnight in Simiens.",
            ],
            image: "Gonder3",
          },
          {
            title: "DAY 3: EXPLORE SIMIEN MOUNTAINS",
            description: [
              "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we’ll get to know better alongside field researchers.",
              "We’ll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer. Overnight in Simiens.",
            ],
            image: "Simien1",
          },
          {
            title: "DAY 4: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
            description: [
              'A scenic drive returns you to Gondar- famous for its medieval castles and churches. Gondar was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as "the Camelot of Africa".',
              "Spend the afternoon exploring the city of Gondar. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.",
              "We continue on to the Church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings. It is rumored to have once been the proposed final resting place of the Ark of the Covenant. Overnight in Gonder.",
            ],
            image: "Gonder4",
          },
          {
            title: "DAY 5: FLY TO LALIBELA & VISIT THE ROCK HEWN CHURCHES",
            description: [
              "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
              "Lalibela indeed offers a great opportunity for any traveler. After check-in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north-western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel. Overnight in Lalibela.",
            ],
            image: "Lalibela4",
          },
          {
            title: "DAY 6: EXPLORE MORE ROCK CHURCHES",
            description: [
              "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs.",
              "Drive back to Lalibela. In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here. Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches. Overnight in Lalibela.",
            ],
            image: "Lalibela6",
          },
          {
            title: "DAY 7: FLY TO ADDIS & EXPLORE SIGHTSEEING",
            description: [
              'This morning you fly back to Addis and tour more of the city. Visit the National Museum, with its many archaeological findings, including the famous complete fossil remains of 3 million-year-old "Lucy."',
              "Explore the Merkato, one of the largest open-air markets in the world, and wander the vast range of goods and artifacts. You will have time for shopping. Overnight in Addis Ababa.",
            ],
            image: "Addis2",
          },
          {
            title: "DAY 8: DEPART FROM ADDIS ABABA",
            description: [
              "Depending of your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla tours.",
            ],
            image: "Addis1",
          },
        ]}
      />
      <PlannerPolaroid />
      <GenericGrid /> */}
      {itinerary ? (
        <>
          {itinerary.title && (
            <Hero
              title={itinerary.title}
              index={itinerary.index}
              background={itinerary.image}
              description={itinerary.description}
              link="/enquire"
            />
          )}
          {itinerary.intro[0] && (
            <Intro
              title={itinerary.intro[0].title}
              subtitle={itinerary.intro[0].subtitle}
              description={itinerary.intro[0].description}
              lr={itinerary.intro[0].lr}
              link={itinerary.intro[0].link}
              button={itinerary.intro[0].button}
              img1={itinerary.intro[0].img1}
              img2={itinerary.intro[0].img2}
            />
          )}
          <div id="destination-highlights">
            {itinerary.tourdescription2 &&
              itinerary.tourdescription2.map((tourdescription2, index) => (
                <TourDescription2
                  key={index}
                  title={tourdescription2.title}
                  description={tourdescription2.description}
                  destinations={tourdescription2.destinations}
                />
              ))}
          </div>
          {itinerary.itinerarydescription && (
            <ItineraryDescription
              title={itinerary.itinerarydescription.title}
              itineraries={itinerary.itinerarydescription.itineraries}
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

export default ToursByExperiencesPackageItinerary;
