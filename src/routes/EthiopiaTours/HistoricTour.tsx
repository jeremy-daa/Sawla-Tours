import Intro from "../../components/Intro";
import Hero from "../../components/Hero";
import Map from "../../components/Map";
import PlannerPolaroid from "../../components/PlannerPolaroid";
import TourDescription from "../../components/TourDescription";
import TourDescription2 from "../../components/TourDescription2";
import Gonder1 from "../../assets/gonder_1.jpeg";
import HistoricTours from "../../assets/Maps/HistoricTours.jpg";
import Axum1 from "../../assets/axum_1.jpg";
import Axum2 from "../../assets/axum_2.jpg";
import Tigray2 from "../../assets/tigray_2.jpg";
const HistoricTour = () => {
  const descriptionString1 =
    'Aside from the well-known destinations, there are also other hidden gems that are worth exploring. Visitors can discover the sacred Church of Gishen Mariam in Wollo, the neolithic site at Melka Kunture near Addis Ababa, and the beautiful churches and monasteries on the road from Addis Ababa to Bahir Dar, such as Mertulle Mariam. For those interested in archaeology, the Hadar site is where "Lucy" and other hominid species were discovered in the Afar Regional State. ';
  const descriptionString2 =
    "For a unique cultural experience, visitors can also explore the Muslim city of Harar with its 99 mosques, old walled city, and particular architectural style. Ethiopia's Historic and Cultural Tours offer an unforgettable journey through the country's rich history and diverse cultures, showcasing its unique identity that has remained largely untouched by colonialism.";
  return (
    <div className="historic-tour-wrapper">
      <Hero
        index={false}
        title="Historic Ethiopia Tours"
        description="The Historic Tour is a journey through Ethiopia’s rich and fascinating history. The tour includes visits to the ancient capital of Axum, the Blue Nile Falls, the castles of Gondar, the rock-hewn churches of Lalibela, and the walled city of Harar."
        link="/enquire"
        background={Gonder1}
      />
      <Intro
        title="The Extraordinary journey through Ethiopia's Historic Sites"
        description={[
          "Embark on an extraordinary journey through Ethiopia's Historic Tours, where ancient wonders and vibrant cultures intertwine harmoniously. Discover the storied treasures that define Ethiopia's identity, from the rock-hewn churches of Tigray to the awe-inspiring city of Axum.",
          "Traverse the famed Historic Route, immersing yourself in architectural marvels and breathtaking landscapes, while uncovering hidden gems that captivate the intrepid explorer. Ethiopia's Historic and Cultural Tours offer an unforgettable odyssey, celebrating a rich history and diverse cultures untouched by colonialism.",
        ]}
        lr
        img1={Axum1}
        img2={Tigray2}
        button="Start Planning"
        link="/enquire"
      />
      <Map
        title="Historic Tour Destinations"
        description="The Historic Tour is a journey through Ethiopia’s rich and fascinating history. The tour includes visits to the ancient capital of Axum, the Blue Nile Falls, the castles of Gondar, the rock-hewn churches of Lalibela, and the walled city of Harar. And many more..."
        image={HistoricTours}
      />
      <Intro
        title="What to Expect on the Historic Tour"
        description={[
          "Ethiopia's Historic and Cultural Tours offer a unique opportunity to discover the country's rich history and diverse cultures. Unlike other African nations, Ethiopia's identity is deeply rooted in its independence, with a history that stretches back thousands of years. From the ancient city of Axum to the rock-hewn churches of Tigray and Lalibela and the stelae fields at Tiya, Ethiopia's Historic Route through the North is a must-see destination for any history enthusiast.",
          "The Historic Route is easily accessible by road or a combination of road and air travel. The best-known historic sites include Axum, Lalibela, Gondar, and Bahir Dar, and to make the most out of your trip, it is recommended to spend at least two days in each destination. The Historic Route is a living testimony to Ethiopia's rich cultural heritage, showcasing the country's architectural wonders and the breathtaking beauty of its natural landscapes.",
        ]}
        lr={false}
        img1={Axum1}
        img2={Tigray2}
        button="Start Planning"
        link="/enquire"
      />
      <TourDescription
        title="A Rough Summary of the Itenerary"
        image={Axum2}
        description={[descriptionString1, descriptionString2]}
      />
      <TourDescription2
        title="Places included in the Itenerary"
        destinations={[
          {
            title: "Abune Yemata Guh",
            description:
              "Abune Yemata Guh is a church located in the Gheralta cluster in Tigray, Ethiopia. The church is located on a cliff, at an altitude of 2,580 metres (8,460 ft). It is notable for its dome and wall paintings dating back to the 5th century AD. The church is dedicated to Abuna Yemata, a priest who is said to have led the nine saints who spread Christianity in Tigray.",
          },
          {
            title: "Axum",
            description:
              "Axum is a city in northern Ethiopia. It's known for its tall, carved obelisks, relics of the ancient Kingdom of Aksum. Most are in the northern Stelae Park, including a huge fallen pillar, now in pieces. Centuries-old St. Mary of Zion is a Christian church and pilgrimage site believed to have housed the biblical Ark of the Covenant. The neighboring Chapel of the Tablet is said to contain the Ark today.",
          },
          {
            title: "Lalibela",
            description:
              "Lalibela is a town in the Amhara region of northern Ethiopia. It's known for its distinctive rock-cut churches dating from the 12th and 13th centuries, which are pilgrimage sites for Coptic Christians. Carved out of rock, the subterranean monoliths include huge Bete Medhane Alem, and cross-shaped Bete Giyorgis. Many are joined by tunnels and trenches, and some have carved bas-reliefs and colored frescoes inside.",
          },
          {
            title: "Tiya",
            description:
              "Tiya is a town in central Ethiopia. It's known for the Tiya archaeological site, a UNESCO World Heritage Site. The site contains 36 monuments, including 32 carved stelae covered with symbols, most of which are difficult to decipher. The stelae are believed to have been erected between the 12th and 14th centuries. The site also includes excavated megaliths and stone circles.",
          },
          {
            title: "Gondar",
            description:
              "Gondar is a city in northern Ethiopia. It's known for the walled Fasil Ghebbi fortress and palace compound, once the seat of Ethiopian emperors. Dominating it is the immense 17th-century castle of Emperor Fasilides, which combines Portuguese, Indian and local architectural styles. Outside the complex is Debre Berhan Selassie church, with an interior of elaborate murals, including a ceiling decorated with winged angels.",
          },
          {
            title: "Bahir Dar",
            description:
              "Bahir Dar is a city in northwest Ethiopia. It sits on the southern shore of Lake Tana, Ethiopia's largest lake. Islands in the lake are home to medieval monasteries, including Azwa Maryam, which has colorful murals. Nearby on the Zege Peninsula, the Ura Kidane Mihret monastery is known for its elaborate, colorful murals. The Blue Nile River snakes southeast of the city toward the towering cliffs at the Blue Nile Falls.",
          },
          {
            title: "Dessie",
            description:
              "Dessie is a city and a Zone in north-central Ethiopia. Located in the Debub Wollo Zone of the Amhara Region, it sits at a latitude and longitude of 11°8′N 39°38′E, with an elevation between 2,470 and 2,550 metres above sea level.",
          },
          {
            title: "Melka Kunture",
            description:
              "Melka Kunture is a Paleolithic site in the upper Awash Valley in Ethiopia. It is located about 50 kilometers south of Addis Ababa on the west bank of the Awash River, a tributary of the Blue Nile. The site is located within the boundaries of the Awash National Park.",
          },
          {
            title: "Harar",
            description:
              "Harar is a city in eastern Ethiopia. It's surrounded by a centuries-old defensive wall, which has several large gates, including Duke's Gate. The city is known for its mazelike alleys and traditional houses decorated inside with flat hanging baskets. The city's landmarks include 18th-century Jami Mosque and the walled Feres Magala, or French, Village, with its colorful buildings and such attractions as the house of famed poet Arthur Rimbaud.",
          },
          {
            title: "Hadar",
            description:
              "Hadar is a village in Ethiopia, on the southern edge of the Afar Triangle. It is notable for the nearby archaeological digs which have yielded some of the most famous hominin fossils ever discovered, including Lucy, the partial skeleton of a specimen of Australopithecus afarensis. The hominin fossils of Hadar are estimated to date to 3.4 million years ago, and include the remains of 13 individuals, making it one of the richest and most varied early hominin sites in Africa.",
          },
        ]}
        description="The Historic Tour itenerary includes the following destinations: "
      />
      <PlannerPolaroid />
    </div>
  );
};

export default HistoricTour;
