import Images from "./Images";
import { ItineraryArray } from "./temp";
export interface Itinerary {
  id: number;
  experience: number;
  title: string;
  description: string;
  image: string;
  link: string;
  linkname: string;
  index: boolean;
  intro: {
    title: string;
    description: string[];
    lr: boolean;
    img1: string;
    img2: string;
    subtitle?: string;
    button: string;
    link: string;
  }[];
  tourdescription2: {
    title: string;
    description: string;
    destinations: {
      title: string;
      description: string;
    }[];
  }[];
  itinerarydescription: {
    title: string;
    itineraries: {
      title: string;
      description: string[];
      image: string;
    }[];
  };
}
const images = Images;
export const ExperiencesPackageItineraryArray: Itinerary[] = [
  {
    id: 1,
    experience: 1,
    title: "Footsteps of History",
    index: false,
    image: images.axum3,
    description: "Unveiling Ethiopia's Ancient Legacy",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Footsteps of History",
        description: [
          "Embark on a captivating 8-day journey through Ethiopia, where the echoes of ancient civilizations and the grandeur of nature converge. This thoughtfully crafted tour invites history enthusiasts to delve into the rich cultural heritage of Ethiopia, from the vibrant streets of Addis Ababa to the architectural wonders of Gonder and the awe-inspiring rock-hewn churches of Lalibela.",
          "Traverse the majestic Simien Mountains, walking amidst breathtaking plateaus and gorges. Each destination on this itinerary reveals the storied past of Ethiopia, offering a profound understanding of its historical significance. Join us on this enchanting expedition as we unravel the ancient secrets and monumental legacies of this extraordinary land.",
        ],
        lr: true,
        img1: images.axum4,
        img2: images.axum5,
        subtitle: "Unveiling Ethiopia's Ancient Legacy",
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
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
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
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
            description: "Drive to Gonder and uncover its historical treasures",
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
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Upon arrival at Bole International Airport in Addis Ababa, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel.",
            "This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes.",
            "Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa.",
          ],
          image: images.addis1,
        },
        {
          title:
            "DAY 2: FLY TO GONDER, & DRIVE TO SIMIEN MOUNTAIN NATIONAL PARK",
          description: [
            "This morning, board a short flight to Gonder and upon arrival, you drive to the Simien Mountains. It is a UNESCO World Heritage Site and one of Africa’s largest ranges. More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia.",
            "Simien's landscapes vary from plateaus, escarpments, and steep gorges to rolling hills and pinnacles. Enjoy an afternoon walk around the lodge, amid the breathtaking alpine sceneries. This will help you to acclimatize your body to the altitude.",
            "Overnight in Simiens.",
          ],
          image: images.gonder3,
        },
        {
          title: "DAY 3: EXPLORE SIMIEN MOUNTAINS",
          description: [
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we’ll get to know better alongside field researchers.",
            "We’ll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer.",
            "Overnight in Simiens.",
          ],
          image: images.simien1,
        },
        {
          title: "DAY 4: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
          description: [
            'A scenic drive returns you to Gondar- famous for its medieval castles and churches. Gondar was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as "the Camelot of Africa".',
            "Spend the afternoon exploring the city of Gondar. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.",
            "We continue on to the Church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings. It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder.",
          ],
          image: images.gonder4,
        },
        {
          title: "DAY 5: FLY TO LALIBELA & VISIT THE ROCK HEWN CHURCHES",
          description: [
            "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler. After check-in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north-western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela.",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 6: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs.",
            "Drive back to Lalibela. In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here. Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela.",
          ],
          image: images.lalibela6,
        },
        {
          title: "DAY 7: FLY TO ADDIS & EXPLORE SIGHTSEEING",
          description: [
            'This morning you fly back to Addis and tour more of the city. Visit the National Museum, with its many archaeological findings, including the famous complete fossil remains of 3 million-year-old "Lucy."',
            "Explore the Merkato, one of the largest open-air markets in the world, and wander the vast range of goods and artifacts. You will have time for shopping.",
            "Overnight in Addis Ababa.",
          ],
          image: images.addis2,
        },
        {
          title: "DAY 8: DEPART FROM ADDIS ABABA",
          description: [
            "Depending of your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla tours.",
          ],
          image: images.addis1,
        },
      ],
    },
  },
  {
    id: 2,
    experience: 1,
    title: "Ethiopian Odyssey",
    index: false,
    image: images.lalibela5,
    description: "From Ancient Churches to Majestic Landscapes",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Ethiopian Odyssey",
        subtitle: "From Ancient Churches to Majestic Landscapes",
        description: [
          "Embark on a captivating expedition through Ethiopia's ancient wonders, tailored for the passionate historic enthusiast. This immersive tour unveils the country's rich cultural heritage, from the bustling city of Addis Ababa to the enchanting rock-hewn churches of Lalibela, the royal castles of Gonder, and the UNESCO World Heritage Sites of Axum and Harar.",
          "Along the way, we'll delve into the majestic Simien Mountains National Park, visit isolated churches on Lake Tana, and explore the fascinating Tigray rock churches. From remarkable architecture to mystical landscapes, this journey will transport you back in time and leave you in awe of Ethiopia's enduring historical legacy.",
        ],
        lr: true,
        img1: images.axum2,
        img2: images.tigray9,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Begin your journey in Ethiopia's vibrant capital, where a city tour takes you to the Ethnological Museum, Holy Trinity Cathedral, and the oldest coffee roaster, Tomoca.",
          },
          {
            title: "Simien Mountains National Park",
            description:
              "Experience the breathtaking beauty of Africa's largest ranges, with opportunities for scenic walks and encounters with endemic wildlife.",
          },
          {
            title: "Gonder",
            description:
              "Explore the 'Camelot of Africa' and marvel at the royal castles and Debre Berhan Selassie Church, offering a glimpse into Ethiopia's regal past.",
          },
          {
            title: "Lalibela",
            description:
              "Witness the architectural marvel of the rock-hewn churches, a UNESCO World Heritage Site and one of the world's most extraordinary religious sites.",
          },
          {
            title: "Axum",
            description:
              "Uncover the mysteries of ancient Axum, visiting the stelae, Queen of Sheba's Bath, and the legendary Church of Saint Mary of Zion.",
          },
          {
            title: "Tigray Rock Churches",
            description:
              "Venture to the Gheralta area and discover the hidden treasures of the Tigray region, where ancient churches carved into cliffs await exploration.",
          },
          {
            title: "Danakil Depression",
            description:
              "Experience the surreal landscapes of this otherworldly region, including the colorful Dallol area and the salt flats, accompanied by breathtaking sunsets.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa & city tour",
          },
          {
            title: "Day 2",
            description:
              "Fly to Gonder & drive to the Simien Mountains National Park",
          },
          {
            title: "Day 3",
            description: "Explore the Simien Mountains",
          },
          {
            title: "Day 4",
            description: "Drive to Gonder & sightseeing",
          },
          {
            title: "Day 5",

            description: "Fly to Lalibela & visit the rock-hewn churches",
          },
          {
            title: "Day 6",
            description: "Explore more rock churches in & around Lalibela",
          },
          {
            title: "Day 7",
            description: "Fly to Axum & explore the sightseeing",
          },
          {
            title: "Day 8",
            description:
              "Drive to the Gheralta area & visit Tigray rock churches",
          },
          {
            title: "Day 9",

            description: "Continue exploring the Tigray rock churches",
          },
          {
            title: "Day 10",
            description:
              "Drive to the Danakil Depression & sunset over Lake Assale",
          },
          {
            title: "Day 11",
            description:
              "Explore the Dallol area & salt flats, drive to Mekelle",
          },
          {
            title: "Day 12",
            description: "Fly to Addis Ababa & Departure",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel. This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes.",
            "Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis4,
        },
        {
          title:
            "DAY 2: FLY TO GONDER, & DRIVE TO SIMIEN MOUNTAIN NATIONAL PARK",
          description: [
            "This morning board a short flight to Gonder and upon arrival you drive to the Simien Mountains. It is a UNESCO World Heritage Site and one of Africa’s largest ranges. More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia.",
            "Simien's landscapes vary from plateaus, escarpments, and steep gorges to rolling hills and pinnacles. Enjoy an afternoon walk around the lodge, amid the breathtaking alpine sceneries. This will help you to acclimatise your body to the altitude.",
            "Overnight in Simiens. ",
          ],
          image: images.bahirdar1,
        },
        {
          title: "DAY 3: EXPLORE SIMIEN MOUNTAINS",
          description: [
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we’ll get to know better alongside field researchers. We’ll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer.",
            "Overnight in Simiens ",
          ],
          image: images.simien3,
        },
        {
          title: "DAY 4: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
          description: [
            "A scenic drive returns you to Gondar- famous for its medieval castles and churches. Gondar was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. Spend the afternoon exploring the city of Gondar.",
            "In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.  We continue on to the Church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings.  It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder3,
        },
        {
          title: "DAY 5: FLY TO LALIBELA & VISIT THE ROCK-HEWN CHURCHES",
          description: [
            "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th  wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler. After checking in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 6: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good road passing through the most dramatic landscape of countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs. Drive back to Lalibela.",
            "In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here.  Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 7: FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a full-day city tour of Axum –a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. Nearby is the subterranean Tomb of Ramhai, a former king of Axum.",
            "You also visit the Archaeological Museum, before heading to the Queen of Sheba’s Bath. This large reservoir is an excellent place to observe the local women collecting water for washing. Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge’ez (earliest written Ethiopian language), and Greek.",
            "After having a lunch break, continue on your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. It is guarded by “The Guardian” who is the only person allowed into the chapel and the only person who may set eyes on it. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. You then continue to the Queen of Sheba’s Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum ",
          ],
          image: images.axum1,
        },
        {
          title: "DAY 8: DRIVE TO GHERALTA AREA ",
          description: [
            "After breakfast, you drive across the dramatic mountainous landscapes to Gheralta. On your way, you visit the Monastery of Abba Gerima which houses an impressive collection of ancient crosses, crowns, other artifacts and the oldest illustrated Christian manuscripts dated to the fifth-sixth century.",
            "You arrive at the lodge in time for lunch. After settling in, we visit the area’s ancient churches, carved into caves and high up on cliff faces. Believed to date back to 600 ce, the origin of these sanctuaries remains a mystery. You return to your lodge in time to enjoy a beautiful Ethiopian sunset.",
            "Overnight in Gheralta",
          ],
          image: images.yemata2,
        },
        {
          title: "DAY 9: EXPLORE THE TIGRAY ROCK CHURCHES",
          description: [
            "After breakfast, you drive across the dramatic mountainous landscapes to Gheralta. On your way, you visit the Monastery of Abba Gerima which houses an impressive collection of ancient crosses, crowns, other artifacts and the oldest illustrated Christian manuscripts dated to the fifth-sixth century.",
            "You arrive at the lodge in time for lunch. After settling in, we visit the area’s ancient churches, carved into caves and high up on cliff faces. Believed to date back to 600 ce, the origin of these sanctuaries remains a mystery. You return to your lodge in time to enjoy a beautiful Ethiopian sunset.",
            "Overnight in Gheralta",
          ],
          image: images.yemata2,
        },
        {
          title: "DAY 10: DRIVE TO THE DANAKIL DEPRESSION ",
          description: [
            "After breakfast, spend the morning at your leisure which can be arranged for short hiking, bird watching, and visiting the nearby rock-hewn church. After lunch, you drive towards the Danakil region, stopping a number of times en route to take in the spectacular scenery. You arrive in time to enjoy a beautiful Ethiopian sunset over Lake Asale. Overnight camping in the Danakil",
          ],
          image: images.danakil1,
        },
        {
          title: "DAY 11: EXPLORE THE DALLOL AREA & DRIVE TO MEKELLE",
          description: [
            "After an early light breakfast, you start driving to Dallol. It is like nowhere else; a bizarre landscape of colorful mineral deposits, sulfur pools, and geysers, where you will have this early morning to explore this seemingly alien terrain. You then visit the salt canyons, a bizarre landscape where we go for a short walk. On the way back to camp we cross the salt flats where we see the arduous work of salt being extracted by hand and loaded onto the camels. After freshening up and having lunch, we will leave the Danakil and climb the steep mountains to Mekele, climbing from 100 meters below sea level up to 2500m. Mekele is the region’s capital.",
            "Overnight in Mekelle",
          ],
          image: images.danakil2,
        },
        {
          title: "DAY 12: FLY TO ADDIS & DEPARTURE",
          description: [
            "After breakfast, you drive to Mekelle Airport and take the short flight back to Addis Ababa. Upon arrival in Addis, transfer you to your hotel. You have the afternoon free for shopping in Addis Ababa.  Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla Tours. ",
          ],
          image: images.addis1,
        },
      ],
    },
  },
  {
    id: 3,
    experience: 1,
    title: "Ethiopian Odyssey",
    index: false,
    image: images.yemata2,
    description: "Unveiling Ancient Churches and Majestic Landscapes",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Ethiopian Odyssey",
        subtitle: "Unveiling Ancient Churches and Majestic Landscapes",
        description: [
          "Embark on a captivating 11-day journey through Ethiopia, a land steeped in history and adorned with breathtaking landscapes that will leave you spellbound. This thoughtfully curated itinerary takes you on an immersive exploration of Ethiopia's cultural heritage and natural wonders. From the bustling streets of Addis Ababa to the tranquil shores of Lake Tana, discover the hidden gems of this enchanting country.",
          "Marvel at the medieval castles and ornate churches of Gondar, once the royal capital. Immerse yourself in the awe-inspiring beauty of the Simien Mountains, where panoramic vistas and abundant wildlife await your discovery. Experience the architectural marvels of Lalibela's rock-hewn churches, carved meticulously from solid volcanic rock. Explore the ancient treasures of Axum, where legends of the Queen of Sheba and the Ark of the Covenant come to life. ",
          "Delve into the mystical allure of the Gheralta area, home to the enigmatic Tigray rock churches. As your journey draws to a close, you'll return to Addis Ababa, carrying with you the indelible memories of Ethiopia's timeless charm and spiritual grandeur.",
        ],
        lr: true,
        img1: images.lalibela3,
        img2: images.gonder5,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Begin your journey in Ethiopia's capital, where a city tour introduces you to the fascinating Ethnological Museum, Holy Trinity Cathedral, and the birthplace of Ethiopian coffee.",
          },
          {
            title: "Bahir Dar & Lake Tana",
            description:
              "Explore the picturesque city of Bahir Dar and embark on a boat trip to visit the stunning monasteries on the tranquil Lake Tana.",
          },
          {
            title: "Gonder",
            description:
              "Discover the medieval castles and churches of Gonder, known as 'the Camelot of Africa,' and delve into Ethiopia's royal history.",
          },
          {
            title: "Simien Mountains National Park",
            description:
              "Encounter the breathtaking landscapes of the Simien Mountains, home to diverse wildlife such as the Walia ibex and Ethiopian wolf.",
          },
          {
            title: "Lalibela",
            description:
              "Marvel at the renowned rock-hewn churches of Lalibela, a UNESCO World Heritage Site and a testament to the architectural brilliance of ancient Ethiopia.",
          },
          {
            title: "Axum",
            description:
              "Unearth the mysteries of Axum as you explore its towering stelae, the reputed resting place of the Ark of the Covenant, and the captivating ruins of Queen of Sheba's Palace.",
          },
          {
            title: "Tigray Rock Churches",
            description:
              "Journey to the Gheralta area and witness the enigmatic Tigray rock churches, carved into cliffs and shrouded in centuries-old legends.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "DAY 1",
            description: "Arrive in Addis Ababa & a city tour",
          },
          {
            title: "DAY 2",
            description:
              "Fly to Bahir Dar, boat trip to monasteries & explore the city",
          },
          {
            title: "DAY 3",
            description: "Drive to Gonder & sightseeing",
          },
          {
            title: "DAY 4",
            description: "Drive to the Simien Mountains National Park",
          },
          {
            title: "DAY 5",
            description: "Explore the Simien Mountains & drive to Gonder",
          },
          {
            title: "DAY 6",
            description: "Fly to Lalibela & visit the rock-hewn churches",
          },
          {
            title: "DAY 7",
            description: "Explore more rock churches in & around Lalibela",
          },
          {
            title: "DAY 8",
            description: "Fly to Axum & explore the sightseeing",
          },
          {
            title: "DAY 9",
            description:
              "Drive to the Gheralta area & explore the Tigray rock churches",
          },
          {
            title: "DAY 10",
            description: "Explore the Tigray Rock Churches",
          },
          {
            title: "DAY 11",
            description:
              "Drive to Mekelle, catch a flight to Addis & departure",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel. This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets.",
            "Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes. Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis2,
        },
        {
          title: "DAY 2: FLY TO BAHIR DAR & VISIT THE MONASTERIES ON LAKE TANA",
          description: [
            "Board a short flight to Bahir Dar where you are met and transferred to your hotel. Then you embark on a cruise of Lake Tana, the largest highland lake in Ethiopia, to visit monasteries dating back to the 14th century. Located on the forested Zege Peninsula, Azuwa Mariam is the most impressive of the southern monasteries. The walls of the church are completely covered with remarkable 16th-century murals that offer a revealing look into medieval Ethiopia.",
            "You then return to Bahir Dar for lunch at your hotel. Then you head into the colorful market. Later in the afternoon, you drive up Bezawit Hill for impressive views over the town, the Blue Nile, and of Lake Tana with its island monasteries. We aim to get here shortly before sunset to enjoy the magnificent natural light show. Afterward, we return to our hotel.",
            "Overnight in Bahir Dar",
          ],
          image: images.bahirdar4,
        },
        {
          title: "DAY 3: DRIVE TO SIMIEN MOUNTAIN NATIONAL PARK VIA GONDAR",
          description: [
            "This morning’s scenic drive takes you to Simien Mountain National Park via Gonder. The Simien Mountains is a UNESCO World Heritage Site and one of Africa’s largest ranges. More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia. Simien's landscapes vary from plateaus, escarpments, and steep gorges to rolling hills and pinnacles. Enjoy an afternoon walk around the lodge, amid the breathtaking alpine sceneries. This will help you to acclimatise your body to the altitude.",
            "Overnight in Simiens.",
          ],
          image: images.simien1,
        },
        {
          title: "DAY 4: EXPLORE SIMIEN MOUNTAINS",
          description: [
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we’ll get to know better alongside field researchers. We’ll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer.",
            "Overnight in Simiens.",
          ],
          image: images.simien2,
        },
        {
          title: "DAY 5: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
          description: [
            "A scenic drive returns you to Gondar- famous for its medieval castles and churches. Gondar was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. Spend the afternoon exploring the city of Gondar. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years.",
            "You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.  We continue on to the Church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs and paintings.  It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder.",
          ],
          image: images.gonder1,
        },
        {
          title: "DAY 6: FLY TO LALIBELA & VISIT THE ROCK HEWN CHURCHES",
          description: [
            "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th  wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler. After checking in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela1,
        },
        {
          title: "DAY 7: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs. Drive back to Lalibela.",
            "In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here.  Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela.",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 8: FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a full-day city tour of Axum –a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. Nearby is the subterranean Tomb of Ramhai, a former king of Axum. You also visit the Archaeological Museum, before heading to the Queen of Sheba’s Bath.",
            "This large reservoir is an excellent place to observe the local women collecting water for washing. Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge’ez (earliest written Ethiopian language), and Greek.  After having a lunch break, continue on your visit to the church of Saint Mary of Zion.",
            "A chapel in the church is believed by many to contain The Ark of the Covenant. It is guarded by “The Guardian” who is the only person allowed into the chapel and the only person who may set eyes on it. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. You then continue to the Queen of Sheba’s Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum4,
        },
        {
          title: "DAY 9: DRIVE TO GHERALTA AREA ",
          description: [
            "After breakfast, you drive across the dramatic mountainous landscapes to Gheralta. On your way, you visit the Monastery of Abba Garima which houses an impressive collection of ancient crosses, crowns, other artifacts and the oldest illustrated Christian manuscripts dated to the fifth-sixth century. You arrive at the lodge in time for lunch.",
            "After settling in, we visit the area’s ancient churches, carved into caves and high up on cliff faces. Believed to date back to 6 century AD, the origin of these sanctuaries remains a mystery. You return to your lodge in time to enjoy a beautiful Ethiopian sunset.",
            "Overnight in Gheralta",
          ],
          image: images.tigray4,
        },
        {
          title: "DAY 10: EXPLORE THE TIGRAY ROCK CHURCHES",
          description: [
            "After an early breakfast, continue your exploration of the marvelous churches in the Gheralta cluster. Today’s half an hour’s drive takes you to closer to the foot of Korkur Mountain. It is from here you start you hiking up to the plateau. Here you will visit Mariam Korkur and Daniel Korkur rock-hewn churches. The latter one is the smallest church and has a really beautiful view of the surrounding areas.",
            "Drive back to your lodge for lunch. In the afternoon drive to Dugum, where we visit the Dugum Selassie, a rock cave and church carved into granite. It is the only site in the area that houses three sanctuaries, a baptistery, and a crypt.",
            "Overnight in Gheralta",
          ],
          image: images.axum5,
        },
        {
          title: "DAY 11: DRIVE TO MEKELLE & FLY TO ADDIS & DEPARTURE",
          description: [
            "This morning, you drive to Mekele, the regional capital, where you catch your flight to Addis. On arrival in Addis, you transfer to a hotel where you can freshen up and have lunch. You have the afternoon free for shopping in Addis Ababa.  Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 4,
    experience: 1,
    title: "Ethiopian Splendors",
    index: false,
    image: images.lalibela4,
    description: "Unveiling Ancient Wonders and Natural Beauty",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Ethiopian Spledors",
        subtitle: "Unveiling Ancient Wonders and Natural Beauty",
        description: [
          "Embark on an unforgettable 11-day journey through Ethiopia, a land of ancient wonders and breathtaking landscapes. This meticulously crafted itinerary that promises an extraordinary adventure. From the vibrant capital of Addis Ababa to the serene shores of Lake Tana, prepare to immerse yourself in the rich cultural tapestry and awe-inspiring beauty of this remarkable country.",
          'Explore the medieval castles and ornate churches of Gondar, known as the "Camelot of Africa." Marvel at the majestic Simien Mountains, where dramatic scenery and endemic wildlife captivate the senses. Experience the ethereal allure of Lalibela\'s rock-hewn churches, masterpieces carved into solid volcanic rock. Journey to Axum, the ancient capital of the Aksumite Empire, and trace the footsteps of legendary Queen of Sheba.',
          "Delve into the mystique of the Tigray region, where hidden rock-hewn treasures await discovery. As your journey draws to a close, you'll return to Addis Ababa, carrying cherished memories of Ethiopia's timeless wonders.",
        ],
        lr: true,
        img1: images.gonder4,
        img2: images.axum2,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              " Begin your quest in Ethiopia's capital, where you'll discover a fascinating blend of tradition and modernity. Explore the Ethnological Museum and the Holy Trinity Cathedral, steeped in history and adorned with magnificent artwork.",
          },
          {
            title: "Bahir Dar & Lake Tana",

            description:
              "Cruise along the serene waters of Lake Tana, visiting ancient monasteries and uncovering the secrets of centuries-old religious traditions.",
          },
          {
            title: "Simien Mountains National Park",

            description:
              "Venture into the dramatic landscapes of the Simien Mountains, a UNESCO World Heritage Site, where you'll encounter endemic wildlife and awe-inspiring vistas.",
          },
          {
            title: "Gonder",
            description:
              "Step into the Camelot of Africa as you explore Gonder's medieval castles, churches, and the Royal Enclosure, a testament to Ethiopia's regal history.",
          },
          {
            title: "Lalibela",
            description:
              "Marvel at the rock-hewn churches of Lalibela, an architectural wonder and a pilgrimage site for devout Christians.",
          },
          {
            title: "Axum",
            description:
              "Unearth the mysteries of Axum, an ancient city renowned for its towering stelae, royal tombs, and the legendary Ark of the Covenant.",
          },
          {
            title: "Gheralta Region",
            description:
              "Journey to the rugged Gheralta region, where ancient rock-hewn churches are nestled within cliffs, preserving Ethiopia's Christian heritage.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa & city tour",
          },
          {
            title: "Day 2",
            description:
              "Fly to Bahir Dar, visit monasteries on Lake Tana & explore the city",
          },
          {
            title: "Day 3",
            description: "Drive to Simien Mountains National Park",
          },
          {
            title: "Day 4",
            description: "Explore the Simien Mountains",
          },
          {
            title: "Day 5",
            description: "Drive to Gonder & sightseeing",
          },
          {
            title: "Day 6",
            description: "Fly to Lalibela & visit the rock-hewn churches",
          },
          {
            title: "Day 7",
            description: "Explore more rock churches in & around Lalibela",
          },
          {
            title: "Day 8",
            description: "Fly to Axum & explore the sightseeing",
          },
          {
            title: "Day 9",
            description:
              "Drive to the Gheralta region & explore the Tigray rock churches",
          },
          {
            title: "Day 10",
            description: "Fly to Addis Ababa and departure.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel. This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes.",
            "Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: FLY TO BAHIR DAR, VISIT THE MONASTERIES ON LAKE TANA",
          description: [
            "Board a short flight to Bahir Dar where you are met and transferred to your hotel. Then you embark on a cruise of Lake Tana, the largest highland lake in Ethiopia, to visit monasteries dating back to the 14th century. Located on the forested Zege Peninsula, Azuwa Mariam is the most impressive of the southern monasteries. The walls of the church are completely covered with remarkable 16th-century murals that offer a revealing look into medieval Ethiopia.",
            "You then return to Bahir Dar for lunch at your hotel. Then you head into the colorful market. Later in the afternoon, you drive up Bezawit Hill for impressive views over the town, the Blue Nile, and of Lake Tana with its island monasteries. We aim to get here shortly before sunset to enjoy the magnificent natural light show. Afterwards, we return to our hotel.",
            "Overnight in Bahir Dar",
          ],
          image: images.bahirdar4,
        },
        {
          title: "DAY 3: DRIVE TO SIMIEN MOUNTAIN NATIONAL PARK",
          description: [
            "This morning’s drive takes you to Simien Mountain National Park.  You will have lunch stop at Gonder and continue on your drive. Simien Mountain National Park is a UNESCO World Heritage Site and one of Africa’s largest ranges. More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia. ",
            "Simien's landscapes vary from plateaus, escarpments, and steep gorges to rolling hills and pinnacles. Enjoy an afternoon walk around the lodge, amid the breathtaking alpine sceneries. This will help you to acclimatise your body to the altitude.",
            "Overnight in Simiens. ",
          ],
          image: images.simien1,
        },
        {
          title: "DAY 4: EXPLORE SIMIEN MOUNTAINS",
          description: [
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we’ll get to know better alongside field researchers.",
            "We’ll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer.",
            "Overnight in Simiens ",
          ],
          image: images.simien2,
        },
        {
          title: "DAY 5: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
          description: [
            "A scenic drive returns you to Gondar- famous for its medieval castles and churches. Gondar was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. Spend the afternoon exploring the city of Gondar. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.  We continue on to the Church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings.  It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder1,
        },
        {
          title: "DAY 6: FLY TO LALIBELA & VISIT THE ROCK-HEWN CHURCHES",
          description: [
            "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.  Lalibela indeed offers a great opportunity for any traveler.",
            "After checking in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 7: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs.",
            "Drive back to Lalibela. In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here.  Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela6,
        },
        {
          title: "DAY 8: FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a full-day city tour of Axum –a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. Nearby is the subterranean Tomb of Ramhai, a former king of Axum.",
            "You also visit the Archaeological Museum, before heading to the Queen of Sheba’s Bath. This large reservoir is an excellent place to observe the local women collecting water for washing. Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge’ez (earliest written Ethiopian language), and Greek.  After having a lunch break, continue on your visit to the church of Saint Mary of Zion.",
            "A chapel in the church is believed by many to contain The Ark of the Covenant. It is guarded by “The Guardian” who is the only person allowed into the chapel and the only person who may set eyes on it. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. You then continue to the Queen of Sheba’s Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum1,
        },
        {
          title: "DAY 9: DRIVE TO GHERALTA AREA",
          description: [
            "After breakfast, you drive across the dramatic mountainous landscapes to Gheralta. On your way, you visit the Monastery of Abba Gerima which houses an impressive collection of ancient crosses, crowns, other artifacts and the oldest illustrated Christian manuscripts dated to the fifth-sixth century. You arrive at the lodge in time for lunch. After settling in, we visit the area’s ancient churches, carved into caves and high up on cliff faces. Believed to date back to 6 century AD, the origin of these sanctuaries remains a mystery. You return to your lodge in time to enjoy a beautiful Ethiopian sunset.",
            "Overnight in Gheralta",
          ],
          image: images.tigray5,
        },
        {
          title: "DAY 10: EXPLORE THE TIGRAY ROCK CHURCHES",
          description: [
            "After an early breakfast, continue your exploration of the marvelous churches in the Gheralta cluster. Today’s half an hour drive takes you closer to the foot of Korkur Mountain. It is from here you start your hiking up to the plateau. Here you will visit Mariam Korkur and Daniel Korkur rock-hewn churches. The latter is the smallest church and has a really beautiful view of the surrounding areas. Drive back to your lodge for lunch. In the afternoon, drive to Dugum, where we visit the Dugum Selassie, a rock cave and church carved into granite. It is the only site in the area that houses three sanctuaries, a baptistery, and a crypt.",
            "Overnight in Gheralta",
          ],
          image: images.tigray2,
        },
        {
          title: "DAY 11: DRIVE TO MEKELLE & FLY TO ADDIS & DEPARTURE",
          description: [
            "This morning, you drive to Mekele, the regional capital, where you catch your flight to Addis. On arrival in Addis, you transfer to a hotel where you can freshen up and have lunch. You have the afternoon free for shopping in Addis Ababa. Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 5,
    experience: 1,
    title: "Ethiopian Odyssey",
    index: false,
    image: images.danakil3,
    description: "Unveiling Ancient Marvels and Majestic Landscapes",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Ethiopian Odyssey",
        subtitle: "Unveiling Ancient Marvels and Majestic Landscapes",
        description: [
          "Embark on a captivating journey through the heart of Ethiopia, where ancient wonders and awe-inspiring landscapes await your discovery. From the bustling streets of Addis Ababa to the tranquil shores of Lake Tana, prepare to immerse yourself in the captivating cultural heritage and breathtaking beauty of this extraordinary nation. ",
          'Explore the medieval castles and magnificent churches of Gondar, often referred to as the "Camelot of Africa." Traverse the dramatic landscapes of the Simien Mountains National Park, a UNESCO World Heritage Site, where encounters with endemic wildlife and sweeping vistas will leave you spellbound.',
          "Discover the ancient wonders of Axum, the legendary capital of the Aksumite Empire, and be awestruck by the rock-hewn churches of Lalibela, a testament to human ingenuity and devotion. Your journey will also take you to the enigmatic Tigray region, where hidden rock-hewn treasures await, before culminating in Addis Ababa, where you'll bid farewell to this captivating land. ",
        ],
        lr: true,
        img1: images.tigray4,
        img2: images.lalibela5,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Immerse yourself in Ethiopia's vibrant capital, exploring its fascinating museums, iconic cathedrals, and bustling markets.",
          },
          {
            title: "Lake Tana & Monasteries",
            description:
              "Cruise the tranquil waters of Lake Tana to visit isolated monasteries dating back to the 14th century, adorned with captivating murals.",
          },
          {
            title: "Gonder",
            description:
              "Wander through the imperial city of Gonder, where you'll encounter majestic castles, churches, and the renowned Royal Enclosure.",
          },
          {
            title: "Simien Mountains",
            description:
              "Trek through the breathtaking landscapes of Simien Mountains National Park, encountering endemic wildlife and absorbing the majestic scenery.",
          },
          {
            title: "Axum",
            description:
              "Step into the ancient city of Axum, exploring its mysterious stelae, archaeological sites, and legendary Queen of Sheba's Bath.",
          },
          {
            title: "Tigray Rock Churches",
            description:
              "Venture into the rugged Gheralta region to discover the hidden rock-hewn churches, adorned with ancient artifacts and exquisite frescoes.",
          },
          {
            title: "Lalibela",
            description:
              "Marvel at the awe-inspiring rock-cut churches of Lalibela, a UNESCO World Heritage Site and a testament to Ethiopia's rich religious heritage.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",

        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa & a city tour",
          },
          {
            title: "Day 2",
            description: "Explore the city of Addis Ababa",
          },
          {
            title: "Day 3",
            description: "Fly to Bahir Dar & visit monasteries on Lake Tana",
          },
          {
            title: "Day 4",
            description: "Drive to Gonder & explore the city",
          },
          {
            title: "Day 5",
            description:
              "Drive to Simien Mountains National Park & explore the Simien",
          },
          {
            title: "Day 6",
            description: "Drive to Axum & explore the city",
          },
          {
            title: "Day 7",
            description:
              "More sightseeing in Axum & drive to the Gheralta area",
          },
          {
            title: "Day 8",
            description: "Explore the Tigray rock churches",
          },
          {
            title: "Day 9",
            description: "Drive to Mekelle via Wukro",
          },
          {
            title: "Day 10",
            description: "Full-day scenic drive to Lalibela",
          },
          {
            title: "Day 11",
            description: "Explore the rock churches in Lalibela",
          },
          {
            title: "Day 12",

            description: "Excursion to Yemrhan Kristos & Nakuto Leab churches",
          },
          {
            title: "Day 13",
            description: "Fly to Addis Ababa & Departure",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, our hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel for overnight accommodation.",
            "The city enjoys an excellent climate all year round, with an average temperature of 25°C (77°F). With a multiethnic population of over 5 million, Addis Ababa is a pleasant city with wide avenues of jacaranda trees, interesting museums, and one of the largest open-air markets in Africa, known as the “Mercato”. After your long flight and a welcome briefing, you can settle into your hotel for some rest.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: EXPLORE THE CITY OF ADDIS ABABA",
          description: [
            "Today you will spend the day exploring Addis Ababa, which begins with a visit to the Holy Trinity Cathedral. It is the most important Orthodox Church in Addis Ababa and has survived many historical periods, as its interesting architecture can attest. You proceed to visit the National Museum, one of the most important museums in Africa.",
            "The museum is home to the fossilized humanoid Lucy (a 3.5 million year-old fossil), as well as an amazing collection of artifacts, royal items, and art. After lunch, you will continue our visit to St. George’s Cathedral, built in 1896 by Emperor Menelik II. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis2,
        },
        {
          title: "DAY 3: FLY TO BAHIR DAR & VISIT THE MONASTERIES ON LAKE TANA",
          description: [
            "Board a short flight to Bahir Dar where you are met and transferred to your hotel. Then you embark on a cruise of Lake Tana, the largest highland lake in Ethiopia, to visit monasteries dating back to the 14th century. Located on the forested Zege Peninsula, Azuwa Mariam is the most impressive of the southern monasteries.",
            "The walls of the church are completely covered with remarkable 16th-century murals that offer a revealing look into medieval Ethiopia. You then return to Bahir Dar for lunch at your hotel. Then you head into the colorful market. Later in the afternoon, you drive up Bezawit Hill for impressive views over the town, the Blue Nile, and of Lake Tana with its island monasteries. We aim to get here shortly before sunset to enjoy the magnificent natural light show.",
            "Afterward, we return to our hotel.",
            "Overnight in Bahir Dar",
          ],
          image: images.bahirdar1,
        },
        {
          title: "DAY 4: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
          description: [
            "This morning’s drive (180 km) takes you to Gondar, a site of wonders. After some time to rest and have lunch, you will spend today exploring the city of Gondar. It was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.",
            "You continue on to the church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings. It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder1,
        },
        {
          title: "DAY 5: DRIVE TO SIMIEN MOUNTAIN NATIONAL PARK",
          description: [
            "This morning’s drive takes you to Simien Mountain National Park. It is a UNESCO World Heritage Site and one of Africa’s largest ranges. More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia. Simien's landscapes vary from plateaus, escarpments, and steep gorges to rolling hills and pinnacles.",
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we’ll get to know better alongside field researchers. We’ll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer.",
            "Overnight in Simiens",
          ],
          image: images.simien1,
        },
        {
          title: "DAY 6: DRIVE TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "Today's half-day long but scenic journey as you drive to Axum. The views in this remote part of Ethiopia are simply spectacular. The drive affords some excellent photo opportunities of the jagged Simien Mountains and the Tekeze Valley. The route is dotted with intermittent mountain hamlets that add to the splendor of the scenery.",
            "Your journey brings you to the sacred city of Axum in the Tigrayan region. You will check in and have your lunch in the hotel. You will proceed to a half-day city tour of Axum. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. Nearby is the subterranean Tomb of Ramhai, a former king of Axum. You also visit the Archaeological Museum, before heading to the Queen of Sheba’s Bath. Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge’ez (earliest written Ethiopian language), and Greek.",
            "Overnight in Axum",
          ],
          image: images.axum1,
        },
        {
          title: "DAY 7: DRIVE TO GHERALTA AREA",
          description: [
            "In the morning, continue your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. You then continue to the Queen of Sheba’s Palace. The palace area has been fully excavated and is definitely worth a look. After having a lunch break, you drive across the dramatic mountainous landscapes to Gheralta.",
            "On your way, you visit the Monastery of Abba Garima which houses an impressive collection of ancient crosses, crowns, other artifacts, and the oldest illustrated Christian manuscripts dated to the fifth-sixth century.",
            "You arrive at the lodge in time to enjoy a beautiful Ethiopian sunset.",
            "Overnight in Gheralta",
          ],
          image: images.tigray5,
        },
        {
          title: "DAY 8: EXPLORE THE TIGRAY ROCK CHURCHES",
          description: [
            "After an early breakfast, head to explore the marvelous rock churches in the Gheralta cluster. A short drive takes you closer to the foot of Korkur Mountain. It is from here you start you hiking up to the plateau. Here you will visit Mariam Korkur and Daniel Korkur rock-hewn churches. The latter one is the smallest church and has a really beautiful view of the surrounding areas.",
            "Drive back to your lodge for lunch. In the afternoon drive to visit Mariam Papaseti church which is decorated with beautiful mural paintings.",
            "Overnight in Gheralta",
          ],
          image: images.tigray10,
        },
        {
          title: "DAY 9: DRIVE TO MEKELLE",
          description: [
            "This morning you will drive to the Mekele, passing by a number of interesting churches and towns on the way. Carrying on towards Wukro, you first visit Abreha Atsbeha church, one of the most picturesque of the churches in the area with a beautifully decorated interior, depicting biblical scenes and saints. Having a lunch break at Wukro, head to visit Wukro Cherkos, a semi-monolithic church. Inside this crucifix-shaped church, you’ll see patterned pillars and carvings.",
            "Then drive to Mekelle overnight.",
          ],
          image: images.tigray6,
        },
        {
          title: "DAY 10: DRIVE TO LALIBELA",
          description: [
            "A full day's drive today takes you due south, between the mountains to the west and the stark landscape of the Danakil Depression to the east, via the town of Woldiya, to arrive at Laliblea. It is a home of rock-hewn churches and a World Heritage Site. Located at 2,600 meters above sea level, it is the 8th wonder of the world. 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela1,
        },
        {
          title: "DAY 11: VISIT THE ROCK-HEWN CHURCHES",
          description: [
            "After breakfast, this morning is devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here. Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela2,
        },
        {
          title: "DAY 12: EXCURSION TO YEMRHAN KRISTOS & NAKUTO LEAB CHURCHES",
          description: [
            "This morning’s drive takes you to the cave church of Yemrhan Kristos. The drive will be on a good gravel road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs.",
            "Drive back to Lalibela for lunch. Late afternoon, you visit Nakuto Leab Monastery, which houses an impressive collection of ancient crosses and illustrated manuscripts.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela3,
        },
        {
          title: "DAY 13: FLY TO ADDIS & DEPARTURE",
          description: [
            "After breakfast, you transfer to the airport and take the short flight back to Addis Ababa and transfer to your hotel. You have the afternoon free for shopping in Addis Ababa.",
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis3,
        },
      ],
    },
  },
  {
    id: 6,
    experience: 1,
    title: "Journey Through Time",
    index: false,
    image: images.axum4,
    description: "Unveiling Ethiopia's Historic Treasures",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Journey Through Time",
        subtitle: "Unveiling Ethiopia's Historic Treasures",
        description: [
          "Embark on an extraordinary adventure through the captivating history of Ethiopia with our meticulously crafted itinerary. This trip is tailored for the avid historic enthusiast, offering a unique opportunity to explore the country's ancient sites, rock-hewn churches, and legendary landmarks. Immerse yourself in the rich cultural tapestry of Ethiopia as we take you on a journey through time, unveiling the secrets of centuries past.",
          "From Addis Ababa to Gonder, Lalibela to Axum, and Harar, each destination holds its own mesmerizing tales waiting to be discovered. Join us as we delve into Ethiopia's architectural wonders, religious artifacts, and majestic landscapes, creating memories that will last a lifetime.",
        ],
        lr: true,
        img1: images.tigray4,
        img2: images.lalibela5,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Begin your adventure in Ethiopia's vibrant capital, where you'll discover the Ethnological Museum and the breathtaking Holy Trinity Cathedral, offering insights into the nation's diverse heritage.",
          },
          {
            title: "Gonder",
            description:
              "Explore the 'Camelot of Africa' and marvel at the well-preserved castles and palaces within the Royal Enclosure, alongside the iconic Debre Berhan Selassie Church.",
          },
          {
            title: "Simien Mountains National Park",
            description:
              "Embark on a captivating excursion to this UNESCO World Heritage Site, home to stunning peaks, rare wildlife such as the Walia ibex and Ethiopian wolf, and awe-inspiring landscapes.",
          },
          {
            title: "Lalibela",
            description:
              "Witness the architectural wonder of the rock-hewn churches, including Bet Medhane Alem, Bet Emmanuel, and the magnificent cruciform-shaped Bet Giorgis, all carved out of solid volcanic rock.",
          },
          {
            title: "Axum",
            description:
              "Discover the ancient city of Axum, with its towering stelae, the Church of Saint Mary of Zion, and the legendary Queen of Sheba's Palace, steeped in historical significance.",
          },
          {
            title: "Harar",
            description:
              "Step into the enchanting walled city of Harar, where narrow streets, a 16th-century mosque, and the bustling local market provide a glimpse into the region's cultural heritage.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",

        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa & city tour",
          },
          {
            title: "Day 2",
            description:
              "Fly to Gonder, visit the Royal Enclosure & Debre Berhan Selassie Church",
          },
          {
            title: "Day 3",
            description: "Excursion to Simien Mountains National Park",
          },
          {
            title: "Day 4",
            description: "Fly to Lalibela, explore rock-hewn churches",
          },
          {
            title: "Day 5",
            description:
              "Visit Yemrhan Kristos Church and more rock churches in Lalibela",
          },
          {
            title: "Day 6",
            description: "Fly to Axum, explore the city's historic sites",
          },
          {
            title: "Day 7",
            description:
              "Fly to Addis, connect to Dire Dawa, and drive to Harar",
          },
          {
            title: "Day 8",
            description:
              "Explore Harar's old town, markets, and cultural centers",
          },
          {
            title: "Day 9",
            description:
              "Fly back to Addis Ababa, free time for shopping & departure.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport, and then transfer you to your hotel.",
            "This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets.",
            "Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture and traditions, and its collections from thousand-year-old nomadic tribes.",
            "Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family.",
            "We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: FLY TO GONDER",
          description: [
            "This morning, board a short flight to Gonder. Upon arrival, transfer to your hotel. You will spend today exploring the city of Gondar, founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and known as “the Camelot of Africa”.",
            "In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.",
            "You continue on to the church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful mural, cherubs, and paintings. It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder1,
        },
        {
          title: "DAY 3: EXCURSION TO THE SIMIEN MOUNTAINS",
          description: [
            "Early morning start after breakfast, drive to the Simien Mountains, a UNESCO World Heritage Site and one of Africa’s largest ranges.",
            "More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia.",
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we’ll get to know better alongside field researchers.",
            "We’ll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer. Late afternoon you drive back to Gonder.",
            "Overnight in Gonder",
          ],
          image: images.simien1,
        },
        {
          title: "DAY 4: FLY TO LALIBELA & VISIT THE ROCK HEWN CHURCHES",
          description: [
            "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level.",
            "Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler.",
            "After check-in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north – western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 5: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good gravel road passing through the most dramatic landscape of the countryside.",
            "This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, it’s beautiful wooden coffer ceiling inlaid with hexagons and medallions with both figurative and geometric motifs.",
            "Drive back to Lalibela. In the afternoon, you will visit the remaining rock-hewn churches of Lalibela that include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos.",
            "Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here.  Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela2,
        },
        {
          title: "DAY 6: FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning, you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a full-day city tour of Axum – a UNESCO World Heritage Site.",
            "You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. You also visit the Archaeological Museum, before heading to the Queen of Sheba’s Bath.",
            "Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge’ez (earliest written Ethiopian language), and Greek.",
            "Then continue on your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures.",
            "You then continue to the Queen of Sheba’s Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum1,
        },
        {
          title: "DAY 7: FLY TO DIRE DAWA VIA ADDIS ABABA & DRIVE TO HARAR",
          description: [
            "Today you fly via Addis Ababa to Dire Dawa, the commercial centre of the region, and the main railhead for the Djibouti to Addis railway.",
            "From here, you ascend by road from the plains to the walled city of Harar, another UNESCO heritage site. The city walls are pierced by 5 gates topped by 25 towers. The 16th-century mosque with its slender minaret and the narrow streets lined with small shops all give the impression of having wandered into a city from the Arabian nights.",
            "Overnight in Harar",
          ],
          image: images.addis4,
        },
        {
          title: "DAY 8: EXPLORE HARAR",
          description: [
            "Today we explore Jugal (old Harar) on foot, you first head to the daily colorful local market.",
            "Then you visit the Arthur Rimbaud Cultural Center. It is located in a beautiful century-old mansion and houses a small museum, library, and research center devoted to Rimbaud’s time in Ethiopia.",
            "You also visit Sherif Harar Museum, the local municipal museum. Strolling along the winding, cobbled streets, you explore the gates, restored city walls, and interesting Harari houses of this once-secluded town.",
            "This evening at dusk, you pay a visit to the now-legendary “hyena man” at sundown. Illuminated by vehicle headlights, he calls to hyenas to take scraps of camel meat in a ritual derived from local tradition and religious observance.",
            "Overnight in Harar",
          ],
          image: images.harar1,
        },
        {
          title: "DAY 9: FLY TO ADDIS",
          description: [
            "This morning, you drive to Dire Dawa, where you catch your flight to Addis.",
            "On arrival in Addis, you transfer to a hotel where you can freshen up and have lunch.",
            "You have the afternoon free for shopping in Addis Ababa.",
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home.",
            "Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 1,
    experience: 2,
    title: "Enchanting Ethiopia",
    index: false,
    image: images.omo3,
    description: "A Cultural Odyssey through the South Omo Valley",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Enchanting Ethiopia",
        subtitle: "A Cultural Odyssey through the South Omo Valley",
        description: [
          "Embark on a remarkable journey through the captivating landscapes and vibrant cultures of Ethiopia's South Omo Valley. This nine-day expedition discovers the hidden gems and cultural wonders of this extraordinary region. From the awe-inspiring Rift Valley Lakes teeming with birdlife and wildlife to the fascinating encounters with diverse tribes boasting unique customs, your adventure promises to be a feast for the senses.",
          "Immerse yourself in the highly adorned Hamer villages and witness the renowned Mursi tribe, renowned for their striking lip plates. Traverse the scenic terrains, explore national parks, and indulge in the artistic genius of the Karo people's body painting. Delve into the cultural tapestry of Ethiopia, where ancient traditions and modern life intertwine harmoniously. Join us on this artistically curated voyage, where every step reveals the allure of Ethiopia's rich heritage. ",
        ],
        lr: true,
        img1: images.omo1,
        img2: images.mursi1,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Rift Valley Lakes",
            description:
              "Delight in the abundance of birdlife and wildlife as you explore the picturesque lakeshores of Ethiopia's Rift Valley.",
          },
          {
            title: "Tribal Encounters",
            description:
              "Immerse yourself in the rich cultural diversity of the Southern Omo Valley, engaging with tribes renowned for their unique customs and practices.",
          },
          {
            title: "Hamer Villages",
            description:
              "Witness the vibrant beauty of the Hamer people, adorned with intricate jewelry, elaborate costumes, and their distinctive hair styling.",
          },
          {
            title: "The Mursi Tribe",
            description:
              "Encounter the iconic Mursi tribe, famous for their lip plates, and gain insight into their ancient traditions and way of life.",
          },
          {
            title: "Mago National Park",
            description:
              "Embark on an excursion to the park, home to stunning wildlife and an opportunity to visit a Mursi village.",
          },
          {
            title: "Dassenech Village",
            description:
              "Cross the Omo River to reach the traditional Dassenech village and learn about their agro-pastoralist lifestyle.",
          },
          {
            title: "Kara Tribe",
            description:
              "Discover the Karo tribe and their unique body painting techniques, which create intricate patterns on their faces and bodies.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",

        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa & city tour",
          },

          {
            title: "Day 2",
            description: "Drive to Arba Minch",
          },
          {
            title: "Day 3",
            description: "Drive to Jinka via Konso",
          },
          {
            title: "Day 4",
            description:
              "Excursion to Mago National Park and visit Mursi tribe then drive to Turmi",
          },
          {
            title: "Day 5",
            description: "Excursion to visit Dassenech",
          },
          {
            title: "Day 6",
            description: "Excursion to visit Kara",
          },
          {
            title: "Day 7",
            description: "Drive to Arba Minch via Elbore",
          },
          {
            title: "Day 8",
            description: "Excursion to visit Dorze and fly to Addis Ababa",
          },
          {
            title: "Day 9",
            description: "Departure",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel.",
            "This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes.",
            "Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: DRIVE TO ARBA MINCH",
          description: [
            "Early this morning, after breakfast, commence your private driving to the famous lake-side town of Arba Minch. The drive will pass through high mountain plateaus, scenic landscapes, and the beautiful villages of Gurage and Wolayita; en route stop at the archaeological site of Melka Kunture and the stelae field of Tiya. Having lunch stop en route, you continue driving to Arba Minch. It and the surrounding area are inhabited by the people of the Gamo tribe, originally nomads but now farmers. The last section of this drive offers magnificent views of Lake Abaya, surrounded by mountains.",
            "Overnight in Arba Minch",
          ],
          image: images.awassa1,
        },
        {
          title: "DAY 3: DRIVE TO JINKA VIA KONSO",
          description: [
            "This morning, not far from Arba Minch, you will take a relaxing boat trip on Lake Chamo to spot wildlife such as crocodiles, and hippos as well as beautiful aquatic birds.",
            "Leaving Arba Minch behind, you drive to Jinka through dramatic scenery towards the heartland of the tribes of the South Omo Valley. En route, you stop at the village of Konso which is known for its distinctive religious and cultural traditions.",
            "After lunch continue your drive towards Jinka overnight.",
            "Overnight in Jinka",
          ],
          image: images.konso2,
        },
        {
          title: "DAY 4: EXCURSION TO MAGO NATIONAL PARK AND VISIT MURSI TRIBE",
          description: [
            "Today your journey begins early in the morning with an excursion to Mago National Park to visit the Mursi village. They are possibly the most famous residents of the South Omo Valley. The men of the Mursi tribe are renowned warriors, and Mursi women are famous for the lip plates they use for adornment. Learn about the incredibly unique culture.",
            "Having lunch in Jinka, continue to Turmi, crossing an area where Ari, Benna, and eventually Hamer people are living.",
            "Overnight in Turmi",
          ],
          image: images.mursi1,
        },
        {
          title: "DAY 5: EXCURSION TO VISIT DASSENECH",
          description: [
            "After breakfast, your drive will take you through flat-open savannah land and go via Omorate on the eastern banks of the Omo River. Crossing the river by local dugout canoe, you reach the homeland of Dassenech and visit one of their villages. They are agro-pastoralists and herd cattle and practice flood retreat cultivation on both sides of the river.",
            "You return to Turmi and spend the afternoon visiting some small Hamer villages. The Hamer people are particularly beautiful and are most distinguishable by their hair, which they style into thick braids with red mud and lard. They wear thick copper bracelets and necklaces, and elaborate costumes with cowrie shells, beads, and leather.",
            "Overnight in Turmi",
          ],
          image: images.hamer2,
        },
        {
          title: "DAY 6: EXCURSION TO VISIT KARA",
          description: [
            "This morning you take an excursion to Korcho and visit the Karo tribe who are very famous for their body painting. The Karo people use clays and locally available vegetable pigments to trace fantastic patterns on each other’s faces, chests, arms, and legs. Karo men, as with neighboring tribes, are also famous for their unique hairstyle.",
            "Overnight in Turmi",
          ],
          image: images.omo3,
        },
        {
          title: "DAY 7: DRIVE TO ARBA MINCH VIA ELBORE",
          description: [
            "Departing Turmi after breakfast we head for Weyto. Lying midway between Konso and Key Afar, the village is home to the Tsemai and Arbore peoples. These people are mainly farmers and pastoralists, tending their herds and growing sorghum and maize and supplementing it with honey. Continuing from here we cross the Weyto Valley and head for Konso for lunch.",
            "Then you proceed to Arba Minch.",
            "Overnight in Arba Minch",
          ],
          image: images.erbore1,
        },
        {
          title: "DAY 8: EXCURSION TO VISIT DORZE AND FLY TO ADDIS ABABA",
          description: [
            "After breakfast, you drive to visit a local Dorze tribe. The Dorze are one of the small segments of ethnical groups in southern Ethiopia. Once warriors, the Dorze have now turned to farming and weaving to earn a living. Their success in the field of weaving has been phenomenal and the Dorze name is synonymous with the best-woven cotton cloth.",
            "You return to Arba Minch for lunch and transfer to the airport for your flight to Addis Ababa.",
            "Overnight in Addis Ababa",
          ],
          image: images.konso1,
        },
        {
          title: "DAY 9: DEPARTURE",
          description: [
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home.",
            "Thanks for vacationing with Sawla tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 2,
    experience: 2,
    title: "Enchanting Ethiopia",
    index: false,
    image: images.omo2,
    description: "Exploring the Tribes and Natural Wonders of the Omo Valley",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Enchanting Ethiopia",
        subtitle: "Exploring the Tribes and Natural Wonders of the Omo Valley",
        description: [
          "Embark on a journey of awe-inspiring beauty and cultural immersion as we venture into the heart of Ethiopia's Omo Valley. This extraordinary expedition will take you through a kaleidoscope of experiences, from the breathtaking landscapes of the Rift Valley Lakes to encounters with fascinating tribes whose rich traditions and vibrant way of life have captivated the world.",
          "Prepare to be enthralled by the diverse avian and wildlife species that inhabit the region, and be enchanted by the extraordinary adornments of the Hamer and Mursi people, who proudly wear their heritage on their sleeves – or rather, their lips. With each passing day, you'll witness the wonders of nature and the tapestry of human culture intertwine, creating an unforgettable odyssey of discovery. Join us on this remarkable journey through Ethiopia's Omo Valley and be transported to a world where time-honored traditions and captivating landscapes converge in a mesmerizing symphony of colors, traditions, and authenticity. ",
        ],
        lr: true,
        img1: images.omo1,
        img2: images.mursi1,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Rift Valley Lakes",
            description:
              "Discover the abundant birdlife and wildlife that grace the scenic shores of Ethiopia's Rift Valley.",
          },
          {
            title: "Tribal Encounters",
            description:
              "Immerse yourself in the cultural diversity of the region, engaging with tribes renowned for their unique customs and practices.",
          },
          {
            title: "Hamer Villages",
            description:
              "Witness the vibrant beauty of the Hamer people, renowned for their elaborate hairstyles, copper jewelry, and colorful costumes.",
          },
          {
            title: "The Mursi Tribe",
            description:
              "Explore the world of the Mursi, known for their warrior heritage and the distinctive lip plates worn by women.",
          },
          {
            title: "Mago National Park",
            description:
              "Journey into this national park for a glimpse into the daily lives and traditions of the Mursi tribe.",
          },
          {
            title: "Dassenech Village",

            description:
              "Cross the Omo River by traditional canoe to reach the Dassenech village and learn about their agro-pastoralist lifestyle.",
          },
          {
            title: "Karo Tribe",
            description:
              "Encounter the Karo tribe and their incredible body painting techniques, which adorn their faces and bodies with intricate patterns.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",

        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa & a city tour",
          },
          {
            title: "Day 2",
            description: "Fly to Jinka",
          },
          {
            title: "Day 3",
            description:
              "Excursion to Mago National Park to visit the Mursi tribe and drive to Turmi",
          },
          {
            title: "Day 4",
            description: "Excursion to visit Dassenech and Hamer villages",
          },
          {
            title: "Day 5",
            description: "Excursion to visit the Karo tribe",
          },
          {
            title: "Day 6",
            description:
              "Drive to Arba Minch via Elbore and visit Konso village",
          },
          {
            title: "Day 7",
            description: "Boat trip on Lake Chamo & excursion to Dorze village",
          },
          {
            title: "Day 8",
            description: "Fly to Addis Ababa & Departure",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel.",
            "This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes.",
            "Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: FLY TO JINKA",
          description: [
            "A short domestic flight takes you to Jinka where you will meet your vehicle waiting at the airport. You are entering an area where the people living their authentic tribal life. Nowadays a vanishing lifestyle. More than at any other place we shouldn't forget that we are the visitors and act responsibly.",
            "In the afternoon, we visit the Jinka museum at the South Omo Research Centre to learn more about the people living in the area and we visit the Ari people who have adopted a much more 'Western' lifestyle than their neighbors we are going to meet in the coming days.",
            "Overnight in Jinka",
          ],
          image: images.omo3,
        },
        {
          title: "DAY 3: EXCURSION TO MAGO NATIONAL PARK AND VISIT MURSI TRIBE",
          description: [
            "Today your journey begins early in the morning with an excursion to Mago National Park to visit the Mursi village. They are possibly the most famous residents of the South Omo Valley. The men of the Mursi tribe are renowned warriors, and Mursi women are famous for the lip plates they use for adornment. Learn about the incredibly unique culture.",
            "Having lunch in Jinka, continue to Turmi, crossing an area where Ari, Benna, and eventually Hamer people are living.",
            "Overnight in Turmi",
          ],
          image: images.mursi1,
        },
        {
          title: "DAY 4: EXCURSION TO VISIT DASSENECH",
          description: [
            "After breakfast, your drive will take you through flat-open savannah land and go via Omorate on the eastern banks of the Omo River. Crossing the river by local dugout canoe, you reach the homeland of Dassenech and visit one of their villages. They are agro-pastoralists and herd cattle and practice flood retreat cultivation on both sides of the river.",
            "You return to Turmi and spend the afternoon visiting some small Hamer villages. The Hamer people are particularly beautiful and are most distinguishable by their hair, which they style into thick braids with red mud and lard. They wear thick copper bracelets and necklaces, and elaborate costumes with cowrie shells, beads, and leather.",
            "Overnight in Turmi",
          ],
          image: images.omo1,
        },
        {
          title: "DAY 5: EXCURSION TO VISIT KARA",
          description: [
            "This morning you take an excursion to Korcho and visit the Karo tribe who are very famous for their body painting. The Karo people use clays and locally available vegetable pigments to trace fantastic patterns on each other’s faces, chests, arms, and legs. Karo men, as with neighboring tribes, are also famous for their unique hairstyle.",
            "Overnight in Turmi",
          ],
          image: images.karo1,
        },
        {
          title: "DAY 6: DRIVE TO ARBA MINCH VIA ELBORE",
          description: [
            "Departing Turmi after breakfast, we head for Weyto. Lying midway between Konso and Key Afar, the village is home to the Tsemai and Arbore peoples. These people are mainly farmers and pastoralists, tending their herds and growing sorghum and maize and supplementing it with honey.",
            "Continuing from here, we cross the Weyto Valley and head for Konso. After lunch in Karat-Konso village, we meet the Konso people with their maze-like villages and terraces for agriculture. They are also well known for their Waqa stelae, grave markers for the brave and important men of this people. The cultural landscape of Konso is the youngest World Heritage Site in Ethiopia.",
            "Then you proceed to Arba Minch.",
            "Overnight in Arba Minch",
          ],
          image: images.erbore1,
        },
        {
          title: "DAY 7: BOAT TRIP ON LAKE CHAMO & EXCURSION TO DORZE",
          description: [
            "This morning, not far from Arba Minch, you will take a relaxing boat trip on Lake Chamo to spot wildlife such as crocodiles, and hippos as well as many beautiful aquatic birds.",
            "In the afternoon, drive from Arba Minch to the highland village of Dorze. They are one of the small segments of ethnical groups in southern Ethiopia. Once warriors, the Dorze have now turned to farming and weaving to earn a living. Their success in the field of weaving has been phenomenal and the Dorze name is synonymous with best-woven cotton cloth. Monday is market day and well worth a visit.",
            "Overnight in Arba Minch",
          ],
          image: images.konso2,
        },
        {
          title: "DAY 8: FLY TO ADDIS ABABA & DEPARTURE",
          description: [
            "You will have this morning at your leisure. At noon transfer you to the airport for your flight to Addis. On arrival in Addis, you transfer to a hotel where you can freshen up and have lunch.",
            "You have the afternoon free for shopping in Addis Ababa.",
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home.",
            "Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 2,
    experience: 2,
    title: "Enchanting Ethiopia",
    index: false,
    image: images.omo2,
    description: "Exploring the Tribes and Natural Wonders of the Omo Valley",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Enchanting Ethiopia",
        subtitle: "Exploring the Tribes and Natural Wonders of the Omo Valley",
        description: [
          "Embark on a journey of awe-inspiring beauty and cultural immersion as we venture into the heart of Ethiopia's Omo Valley. This extraordinary expedition will take you through a kaleidoscope of experiences, from the breathtaking landscapes of the Rift Valley Lakes to encounters with fascinating tribes whose rich traditions and vibrant way of life have captivated the world.",
          "Prepare to be enthralled by the diverse avian and wildlife species that inhabit the region, and be enchanted by the extraordinary adornments of the Hamer and Mursi people, who proudly wear their heritage on their sleeves – or rather, their lips. With each passing day, you'll witness the wonders of nature and the tapestry of human culture intertwine, creating an unforgettable odyssey of discovery. Join us on this remarkable journey through Ethiopia's Omo Valley and be transported to a world where time-honored traditions and captivating landscapes converge in a mesmerizing symphony of colors, traditions, and authenticity. ",
        ],
        lr: true,
        img1: images.omo1,
        img2: images.mursi1,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Rift Valley Lakes",
            description:
              "Discover the abundant birdlife and wildlife that grace the scenic shores of Ethiopia's Rift Valley.",
          },
          {
            title: "Tribal Encounters",
            description:
              "Immerse yourself in the cultural diversity of the region, engaging with tribes renowned for their unique customs and practices.",
          },
          {
            title: "Hamer Villages",
            description:
              "Witness the vibrant beauty of the Hamer people, renowned for their elaborate hairstyles, copper jewelry, and colorful costumes.",
          },
          {
            title: "The Mursi Tribe",
            description:
              "Explore the world of the Mursi, known for their warrior heritage and the distinctive lip plates worn by women.",
          },
          {
            title: "Mago National Park",
            description:
              "Journey into this national park for a glimpse into the daily lives and traditions of the Mursi tribe.",
          },
          {
            title: "Dassenech Village",

            description:
              "Cross the Omo River by traditional canoe to reach the Dassenech village and learn about their agro-pastoralist lifestyle.",
          },
          {
            title: "Karo Tribe",
            description:
              "Encounter the Karo tribe and their incredible body painting techniques, which adorn their faces and bodies with intricate patterns.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",

        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa & a city tour",
          },
          {
            title: "Day 2",
            description: "Fly to Jinka",
          },
          {
            title: "Day 3",
            description:
              "Excursion to Mago National Park to visit the Mursi tribe and drive to Turmi",
          },
          {
            title: "Day 4",
            description: "Excursion to visit Dassenech and Hamer villages",
          },
          {
            title: "Day 5",
            description: "Excursion to visit the Karo tribe",
          },
          {
            title: "Day 6",
            description:
              "Drive to Arba Minch via Elbore and visit Konso village",
          },
          {
            title: "Day 7",
            description: "Boat trip on Lake Chamo & excursion to Dorze village",
          },
          {
            title: "Day 8",
            description: "Fly to Addis Ababa & Departure",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel.",
            "This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes.",
            "Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: FLY TO JINKA",
          description: [
            "A short domestic flight takes you to Jinka where you will meet your vehicle waiting at the airport. You are entering an area where the people living their authentic tribal life. Nowadays a vanishing lifestyle. More than at any other place we shouldn't forget that we are the visitors and act responsibly.",
            "In the afternoon, we visit the Jinka museum at the South Omo Research Centre to learn more about the people living in the area and we visit the Ari people who have adopted a much more 'Western' lifestyle than their neighbors we are going to meet in the coming days.",
            "Overnight in Jinka",
          ],
          image: images.omo3,
        },
        {
          title: "DAY 3: EXCURSION TO MAGO NATIONAL PARK AND VISIT MURSI TRIBE",
          description: [
            "Today your journey begins early in the morning with an excursion to Mago National Park to visit the Mursi village. They are possibly the most famous residents of the South Omo Valley. The men of the Mursi tribe are renowned warriors, and Mursi women are famous for the lip plates they use for adornment. Learn about the incredibly unique culture.",
            "Having lunch in Jinka, continue to Turmi, crossing an area where Ari, Benna, and eventually Hamer people are living.",
            "Overnight in Turmi",
          ],
          image: images.mursi1,
        },
        {
          title: "DAY 4: EXCURSION TO VISIT DASSENECH",
          description: [
            "After breakfast, your drive will take you through flat-open savannah land and go via Omorate on the eastern banks of the Omo River. Crossing the river by local dugout canoe, you reach the homeland of Dassenech and visit one of their villages. They are agro-pastoralists and herd cattle and practice flood retreat cultivation on both sides of the river.",
            "You return to Turmi and spend the afternoon visiting some small Hamer villages. The Hamer people are particularly beautiful and are most distinguishable by their hair, which they style into thick braids with red mud and lard. They wear thick copper bracelets and necklaces, and elaborate costumes with cowrie shells, beads, and leather.",
            "Overnight in Turmi",
          ],
          image: images.omo1,
        },
        {
          title: "DAY 5: EXCURSION TO VISIT KARA",
          description: [
            "This morning you take an excursion to Korcho and visit the Karo tribe who are very famous for their body painting. The Karo people use clays and locally available vegetable pigments to trace fantastic patterns on each other’s faces, chests, arms, and legs. Karo men, as with neighboring tribes, are also famous for their unique hairstyle.",
            "Overnight in Turmi",
          ],
          image: images.karo1,
        },
        {
          title: "DAY 6: DRIVE TO ARBA MINCH VIA ELBORE",
          description: [
            "Departing Turmi after breakfast, we head for Weyto. Lying midway between Konso and Key Afar, the village is home to the Tsemai and Arbore peoples. These people are mainly farmers and pastoralists, tending their herds and growing sorghum and maize and supplementing it with honey.",
            "Continuing from here, we cross the Weyto Valley and head for Konso. After lunch in Karat-Konso village, we meet the Konso people with their maze-like villages and terraces for agriculture. They are also well known for their Waqa stelae, grave markers for the brave and important men of this people. The cultural landscape of Konso is the youngest World Heritage Site in Ethiopia.",
            "Then you proceed to Arba Minch.",
            "Overnight in Arba Minch",
          ],
          image: images.erbore1,
        },
        {
          title: "DAY 7: BOAT TRIP ON LAKE CHAMO & EXCURSION TO DORZE",
          description: [
            "This morning, not far from Arba Minch, you will take a relaxing boat trip on Lake Chamo to spot wildlife such as crocodiles, and hippos as well as many beautiful aquatic birds.",
            "In the afternoon, drive from Arba Minch to the highland village of Dorze. They are one of the small segments of ethnical groups in southern Ethiopia. Once warriors, the Dorze have now turned to farming and weaving to earn a living. Their success in the field of weaving has been phenomenal and the Dorze name is synonymous with best-woven cotton cloth. Monday is market day and well worth a visit.",
            "Overnight in Arba Minch",
          ],
          image: images.konso2,
        },
        {
          title: "DAY 8: FLY TO ADDIS ABABA & DEPARTURE",
          description: [
            "You will have this morning at your leisure. At noon transfer you to the airport for your flight to Addis. On arrival in Addis, you transfer to a hotel where you can freshen up and have lunch.",
            "You have the afternoon free for shopping in Addis Ababa.",
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home.",
            "Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 3,
    experience: 2,
    title: "Ethiopia's Enigmatic Tribes",
    index: false,
    image: images.karo1,
    description: "A Journey through Cultural Diversity and Natural Splendor",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Ethiopia's Enigmatic Tribes",
        subtitle: "A Journey through Cultural Diversity and Natural Splendor",
        description: [
          "Embark on a captivating expedition to Ethiopia's Omo Valley, where a tapestry of ancient tribes and breathtaking landscapes awaits. This itinerary is tailor-made for the intrepid traveler with a passion for exploring indigenous tribes and their rich heritage. This extraordinary journey will immerse you in the cultural diversity and vibrant traditions of the region, as you encounter the renowned Hamer people, adorned in their distinctive attire and mesmerizing hairstyles, and witness the Mursi tribe's captivating lip plates.",
          "Amidst the scenic beauty of Rift Valley Lakes and the lush greenery surrounding Arba Minch, you'll delve into the traditional lifestyle of the Dorze, famed for their exceptional weaving skills. Journey through picturesque villages, such as Konso and Turmi, where the customs of the Karo and Dassenech tribes will captivate your senses.",
          "As you explore the wildlife-rich Mago National Park, you'll gain a profound appreciation for the unique culture and natural wonders that make Ethiopia's Omo Valley an unrivaled destination. Join us on this unforgettable voyage of discovery and be forever touched by the enchantment of Ethiopia's enigmatic tribes and awe-inspiring landscapes. ",
        ],
        lr: true,
        img1: images.omo1,
        img2: images.mursi1,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Rift Valley Lakes",
            description:
              "Explore the scenic beauty of Ethiopia's Rift Valley and its abundant birdlife and wildlife.",
          },
          {
            title: "Tribal Encounters",
            description:
              "Engage with a region that boasts unparalleled cultural diversity, with the opportunity to interact with various indigenous tribes.",
          },
          {
            title: "Hamer Villages",
            description:
              "Experience the highly adorned Hamer people and their intricate braided hairstyles, copper jewelry, and vibrant costumes.",
          },
          {
            title: "The Mursi Tribe",
            description:
              "Encounter the renowned Mursi tribe, famous for their iconic lip plates and distinct cultural traditions.",
          },
          {
            title: "Boat Trip on Lake Chamo",
            description:
              "Enjoy a relaxing boat trip to spot wildlife, including crocodiles, hippos, and aquatic birds.",
          },
          {
            title: "Karo Tribe",
            description:
              "Visit the Karo tribe and witness their exceptional body painting techniques, showcasing incredible patterns on their faces and bodies.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",

        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa & City Tour",
          },
          {
            title: "Day 2",
            description: "Fly to Arba Minch & visit Dorze village",
          },
          {
            title: "Day 3",
            description: "Boat trip on Lake Chamo & drive to Turmi via Konso",
          },
          {
            title: "Day 4",
            description: "Excursion to the Kara tribe & visit Hamer villages",
          },
          {
            title: "Day 5",
            description: "Excursion to Dassenech village & drive to Jinka",
          },
          {
            title: "Day 6",
            description: "Excursion to Mago National Park & fly to Addis Ababa",
          },
          {
            title: "Day 7",
            description: "Departure",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel.",
            "This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes.",
            "Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: FLY TO ARBA MINCH & VISIT DORZE VILLAGE",
          description: [
            "A short domestic flight takes you to the famous lakeside town of Arba Minch where you will meet your vehicle waiting at the airport.",
            "Then you drive to the highland village of Dorze. They are one of the small segments of ethnical groups in southern Ethiopia. Once warriors, the Dorze have now turned to farming and weaving to earn a living. Their success in the field of weaving has been phenomenal and the Dorze name is synonymous with best-woven cotton cloth. Monday is market day and well worth a visit.",
            "Return to Arba Minch. Overnight in Arba Minch",
          ],
          image: images.konso1,
        },
        {
          title: "DAY 3: DRIVE TO TURMI VIA KONSO & EXCURSION TO KARA",
          description: [
            "This morning, not far from Arba Minch, you will take a relaxing boat trip on Lake Chamo to spot wildlife such as crocodiles and hippos, as well as beautiful aquatic birds.",
            "Leaving Arba Minch behind, you drive to Turmi through dramatic scenery towards the heartland of the tribes of the South Omo Valley. En route, you stop at the village of Konso who are known for their distinctive religious and cultural traditions.",
            "In the afternoon, you take an excursion to Korcho and visit the Karo tribe who are very famous for their body painting. The Karo people use clays and locally available vegetable pigments to trace fantastic patterns on each other’s faces, chests, arms, and legs. Karo men, as with neighboring tribes, are also famous for their unique hairstyle.",
            "Return to Turmi. Overnight in Turmi",
          ],
          image: images.konso2,
        },
        {
          title: "DAY 4: EXCURSION TO VISIT DASSENECH & DRIVE TO JINKA",
          description: [
            "After breakfast, your drive will take you through flat-open savannah land and go via Omorate on the eastern banks of the Omo River. Crossing the river by local dugout canoe, you reach the homeland of Dassenech and visit one of their villages. They are agro-pastoralists and herd cattle and practice flood retreat cultivation on both sides of the river.",
            "Having lunch in Turmi, drive to Jinka, crossing an area where Hammer, Benna, and eventually Ari people are living.",
            "Overnight in Jinka",
          ],
          image: images.omo4,
        },
        {
          title:
            "DAY 5: EXCURSION TO MAGO NATIONAL PARK AND VISIT MURSI TRIBE & FLY TO ADDIS ABABA",
          description: [
            "Today your journey begins early in the morning with an excursion to Mago National Park to visit the Mursi village. They are possibly the most famous residents of the South Omo Valley. The men of the Mursi tribe are renowned warriors, and Mursi women are famous for the lip plates they use for adornment. Learn about the incredibly unique culture.",
            "Having lunch in Jinka, you transfer to Jinka airport for your flight to Addis Ababa.",
            "Overnight in Addis Ababa",
          ],
          image: images.mursi1,
        },
        {
          title: "DAY 6: DEPARTURE",
          description: [
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home.",
            "Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 4,
    experience: 2,
    title: "Discovering the Hidden Realms",
    index: false,
    image: images.surma1,
    description: "Ethiopia's Tribal Odyssey and Pristine Wilderness",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Discovering the Hidden Realms",
        subtitle: "Ethiopia's Tribal Odyssey and Pristine Wilderness",
        description: [
          "Embark on an extraordinary expedition through Ethiopia's captivating landscapes and delve into the rich tapestry of tribal cultures that have remained untouched by time. From the bustling streets of Addis Ababa to the serene shores of Lake Chamo, this journey will unveil the secrets of the Rift Valley Lakes, where diverse birdlife and wildlife flourish.",
          "Venture deep into the South Omo Valley, where encounters with the highly adorned Hamer and famous Mursi tribes will leave you in awe of their ancient traditions, including the mesmerizing lip plates worn by Mursi women. As you traverse the rugged terrains of Omo National Park and witness the extraordinary body paintings of the Kara tribe, prepare to be immersed in a world where nature and humanity intertwine harmoniously.",
          "Unveil the hidden realms of Ethiopia as you wander through Suri villages and traverse the coffee plantations of Jimma, before bidding farewell to this remarkable journey. Join us as we uncover the captivating beauty and cultural richness of Ethiopia's tribal odyssey and pristine wilderness.",
        ],
        lr: true,
        img1: images.omo3,
        img2: images.gambella2,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Rift Valley Lakes",
            description:
              "Discover the abundant birdlife and wildlife in the picturesque Rift Valley region.",
          },
          {
            title: "Tribal Encounters",
            description:
              "Engage with the unique cultural diversity of Ethiopia's indigenous tribes, from the Hamer and Mursi to the Suri and Kara.",
          },
          {
            title: "Mursi Tribe",
            description:
              "Experience the renowned Mursi tribe and witness their fascinating lip plates, symbolizing beauty and identity.",
          },
          {
            title: "Hamer Villages",
            description:
              "Immerse yourself in the adorned Hamer villages, known for their intricate braided hairstyles, copper jewelry, and vibrant costumes.",
          },
          {
            title: "Omo National Park",
            description:
              "Explore the pristine wilderness and diverse ecosystems of the Omo National Park, home to rich flora and fauna.",
          },
          {
            title: "Suri",
            description:
              "Unveil the hidden realms of Ethiopia as you wander through Suri villages",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa & City Tour",
          },
          {
            title: "Day 2",
            description: "Fly to Arba Minch & visit Dorze village",
          },
          {
            title: "Day 3",
            description: "Boat trip on Lake Chamo & drive to Jinka",
          },
          {
            title: "Day 4",
            description: "Excursion to Mursi & drive to Turmi",
          },
          {
            title: "Day 5",
            description:
              "Excursion to Dassenech & visit Hamer in the afternoon",
          },
          {
            title: "Day 6",
            description: "Drive to Omo National Park en route visit Kara",
          },
          {
            title: "Day 7",
            description: "Drive to Kibish and base here for three nights",
          },
          {
            title: "Day 8",
            description:
              "Explore Kibish and spend more time with the Suri tribe",
          },
          {
            title: "Day 9",
            description:
              "Explore Kibish and further immerse in the Suri culture",
          },
          {
            title: "Day 10",
            description: "Drive to Mizan",
          },
          {
            title: "Day 11",
            description: "Drive to Jimma",
          },
          {
            title: "Day 12",
            description: "Fly to Addis Ababa & Departure",
          },
          {
            title: "Day 13",
            description: "Departure from Addis Ababa",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel.",
            "This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes.",
            "Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: FLY TO ARBA MINCH & VISIT DORZE VILLAGE",
          description: [
            "A short domestic flight takes you to the famous lakeside town of Arba Minch where you will meet your vehicle waiting at the airport.",
            "Then you drive to the highland village of Dorze. They are one of the small segments of ethnical groups in southern Ethiopia. Once warriors, the Dorze have now turned to farming and weaving to earn a living. Their success in the field of weaving has been phenomenal and the Dorze name is synonymous with best-woven cotton cloth. Monday is market day and well worth a visit.",
            "Return to Arba Minch. Overnight in Arba Minch",
          ],
          image: images.konso2,
        },
        {
          title: "DAY 3: DRIVE TO JINKA VIA KONSO",
          description: [
            "This morning, not far from Arba Minch, you will take a relaxing boat trip on Lake Chamo to spot wildlife such as crocodiles and hippos, as well as beautiful aquatic birds.",
            "Leaving Arba Minch behind, you drive to Jinka through dramatic scenery towards the heartland of the tribes of the South Omo Valley. En route, you stop at the village of Konso who are known for their distinctive religious and cultural traditions.",
            "After lunch, continue your drive towards Jinka. Overnight in Jinka",
          ],
          image: images.konso1,
        },
        {
          title: "DAY 4: EXCURSION TO MAGO NATIONAL PARK AND VISIT MURSI TRIBE",
          description: [
            "Today your journey begins early in the morning with an excursion to Mago National Park to visit the Mursi village. They are possibly the most famous residents of the South Omo Valley. The men of the Mursi tribe are renowned warriors, and Mursi women are famous for the lip plates they use for adornment. Learn about the incredibly unique culture.",
            "Having lunch in Jinka, continue to Turmi, crossing an area where Ari, Benna, and eventually Hamer people are living. Overnight in Turmi",
          ],
          image: images.mursi1,
        },
        {
          title:
            "DAY 5: EXCURSION TO VISIT DASSENECH & DRIVE TO OMO NATIONAL PARK",
          description: [
            "After breakfast, your drive will take you through flat-open savannah land and go via Omorate on the eastern banks of the Omo River. Crossing the river by local dugout canoe, you reach the homeland of Dassenech and visit one of their villages. They are agro-pastoralists and herd cattle and practice flood retreat cultivation on both sides of the river.",
            "You return to Turmi and spend the afternoon visiting some small Hamer villages. The Hamer people are particularly beautiful and are most distinguishable by their hair, which they style into thick braids with red mud and lard. They wear thick copper bracelets and necklaces, and elaborate costumes with cowrie shells, beads, and leather. Overnight in Turmi",
          ],
          image: images.omo4,
        },
        {
          title: "DAY 6: EXPLORE KARA TRIBE & DRIVE TO OMO NATIONAL PARK",
          description: [
            "This morning you take an excursion to Korcho and visit the Karo tribe, who are very famous for their body painting. The Karo people use clays and locally available vegetable pigments to trace fantastic patterns on each other’s faces, chests, arms, and legs. Karo men, as with neighboring tribes, are also famous for their unique hairstyle.",
            "Leaving Korcho, we drive through the jungle and enter Omo National Park. There are no roads as such but we should arrive at the Park headquarters by late afternoon, in time for a short game drive. Overnight in Omo National Park Camping",
          ],
          image: images.karo1,
        },
        {
          title: "DAY 7: EXPLORE SURI TRIBE IN KIBISH",
          description: [
            "We continue on rough roads through the forest and open savanna land to Kibish.",
            "Passing through small villages of Suri, you will finally arrive in Kibish, where you will be camping for the next two nights.",
            "Overnight in Kibish Camping",
          ],
          image: images.mursi1,
        },
        {
          title: "DAY 8 & 9: INTERACT WITH SURI TRIBE IN KIBISH",
          description: [
            "Spending our next two days here will give us ample opportunities to explore a little more of this region in some depth. The Suri are pastoralists, placing much value on their cattle, which they protect vigorously against theft from neighboring tribes. The Surma, however, also steal livestock from their enemies, and in recent times there has been more pressure on their grazing lands due to input from people from adjacent Sudan who have been displaced by civil war, resulting in not-infrequent fighting in the area.",
            "We will take a break from the vehicles today and do some exploring on foot amongst the nearby Surma villages.",
            "Overnight in Kibish Camping",
          ],
          image: images.suri1,
        },
        {
          title: "DAY 10: DRIVE TO MIZAN",
          description: [
            "This morning is an exciting full-day drive to Mizan Teferi. You will have the afternoon to explore the local market at Mizan.",
            "Overnight in Mizan Teferi",
          ],
          image: images.kafta1,
        },
        {
          title: "DAY 11: DRIVE TO JIMMA",
          description: [
            "This morning is an exciting full-day drive to Jimma. This route takes us through a landscape, much of which is dominated by coffee plantations.",
            "Jimma, the largest city in southwestern Ethiopia and inhabited by Oromo, Kefecho, and Kulo people, is our destination for the evening. It used to be the capital of the former Kaffa Province, and it is this region which is recognized as the home of the Coffee arabica, or coffee.",
            "Overnight in Jimma",
          ],
          image: images.kaffa2,
        },
        {
          title: "DAY 12: FLY TO ADDIS ABABA & DEPARTURE",
          description: [
            "After an enjoyable breakfast, you transfer to Jimma airport for your flight to Addis Ababa. You have the afternoon at leisure and possible to do shopping in the city.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis2,
        },
        {
          title: "DAY 13: DEPARTURE",
          description: [
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home.",
            "Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 5,
    experience: 2,
    title: "Unveiling Ethiopia's Tribal Tapestry",
    index: false,
    image: images.hamer2,
    description: "Cultural Encounters and Scenic Splendors",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Unveiling Ethiopia's Tribal Tapestry",
        subtitle: "Cultural Encounters and Scenic Splendors",
        description: [
          "Embark on a captivating journey through the diverse landscapes and vibrant cultures of Ethiopia's enigmatic South. This extraordinary expedition will immerse you in the awe-inspiring beauty of Rift Valley Lakes, where a plethora of birdlife and wildlife thrive. Prepare to be captivated by the cultural tapestry of the region as you encounter the highly adorned Hamer villages and the famous Mursi tribe with their mesmerizing lip plates.",
          "Traverse the dramatic scenery of the South Omo Valley, visiting the Karo and Dassenech tribes known for their unique body painting and agro-pastoralist lifestyles. From the archaeological wonders of Konso to the serene shores of Lake Chamo, every moment of this journey will leave you spellbound.",
          "Experience the warm hospitality of Arba Minch and Hawassa, and indulge in the vibrant flavors of Ethiopia's renowned coffee plantations. Join us on this extraordinary adventure as we unveil the tribal treasures and lakeside wonders of Ethiopia's enigmatic south. ",
        ],
        lr: true,
        img1: images.hamer2,
        img2: images.suri1,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Rift Valley Lakes",
            description:
              "Discover the remarkable birdlife and diverse wildlife found in the stunning Rift Valley Lakes region.",
          },
          {
            title: "Tribal Encounters",
            description:
              "Immerse yourself in the unique cultural diversity of Ethiopia's indigenous tribes and engage with their customs, rituals, and vibrant traditions.",
          },
          {
            title: "Hamer Villages",
            description:
              "Visit the highly adorned Hamer villages, where locals showcase their elaborate hairstyles, copper jewelry, and vibrant costumes.",
          },
          {
            title: "Mursi Tribe",
            description:
              "Encounter the renowned Mursi tribe and gain insight into their ancient warrior traditions and the intriguing practice of lip plate adornment.",
          },
          {
            title: "Scenic Splendors",
            description:
              "Journey through picturesque landscapes, from the majestic shores of Lake Chamo to the dramatic vistas of Mago National Park.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa and transfer to the hotel.",
          },
          {
            title: "Day 2",
            description:
              "Drive to Arba Minch, passing through scenic mountain plateaus and stopping at archaeological sites en route.",
          },
          {
            title: "Day 3",
            description:
              "Embark on a boat trip on Lake Chamo, spotting wildlife, and then drive to Jinka through stunning landscapes.",
          },
          {
            title: "Day 4",
            description:
              "Explore Mago National Park and visit the iconic Mursi tribe, renowned for their lip plates.",
          },
          {
            title: "Day 5",
            description:
              "Visit the Dassenech tribe, known for their agro-pastoralist lifestyle, and experience the unique culture of the Hamer people.",
          },
          {
            title: "Day 6",
            description:
              "Venture to Korcho and immerse yourself in the vibrant body paintings and distinctive hairstyles of the Kara tribe.",
          },
          {
            title: "Day 7",
            description:
              "Drive back to Arba Minch, passing through the Tsemai and Arbore villages along the way.",
          },
          {
            title: "Day 8",
            description:
              "Continue your journey to Yirgalem, enjoying breathtaking views and visiting Senkele Game Sanctuary.",
          },
          {
            title: "Day 9",
            description:
              "Drive to Hawassa, where you can explore the fish market and enjoy leisure time by the lake.",
          },
          {
            title: "Day 10",
            description:
              "Embark on a scenic drive to Addis Ababa, visiting the stunning lakes of Abijata, Shalla, Langano, and Zeway en route.",
          },
          {
            title: "Day 11",
            description:
              "Departure from Addis Ababa, bidding farewell to the cultural wonders of Ethiopia.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel.",
            "This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes.",
            "Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: DRIVE TO ARBA MINCH",
          description: [
            "Early this morning, after breakfast, commence your private driving to the famous lake-side town of Arba Minch. The drive will pass through high mountain plateaus, scenic landscapes, and the beautiful villages of Gurage and Wolayita; en route stop at the archaeological site of Melka Kunture and the stelae field of Tiya. Having lunch stop en route, you continue driving to Arba Minch. It and the surrounding area are inhabited by the people of the Gamo tribe, originally nomads but now farmers. The last section of this drive offers magnificent views of Lake Abaya, surrounded by mountains.",
            "Overnight in Arba Minch",
          ],
          image: images.awassa1,
        },
        {
          title: "DAY 3: DRIVE TO JINKA VIA KONSO",
          description: [
            "This morning, not far from Arba Minch, you will take a relaxing boat trip on Lake Chamo to spot wildlife such as crocodiles, and hippos as well as beautiful aquatic birds.",
            "Leaving Arba Minch behind, you drive to Jinka through dramatic scenery towards the heartland of the tribes of the South Omo Valley. En route, you stop at the village of Konso who are known for their distinctive religious and cultural traditions. After lunch continue your drive towards Jinka overnight.",
            "Overnight in Jinka",
          ],
          image: images.konso2,
        },
        {
          title: "DAY 4: EXCURSION TO MAGO NATIONAL PARK AND VISIT MURSI TRIBE",
          description: [
            "Today your journey begins early in the morning with an excursion to Mago National Park to visit the Mursi village. They are possibly the most famous residents of the South Omo Valley. The men of the Mursi tribe are renowned warriors, and Mursi women are famous for the lip plates they use for adornment. Learn about the incredibly unique culture.",
            "Having lunch in Jinka, continue to Turmi, crossing an area where Ari, Benna, and eventually Hamer people are living.",
            "Overnight in Turmi",
          ],
          image: images.mursi1,
        },
        {
          title: "DAY 5: EXCURSION TO VISIT DASSENECH",
          description: [
            "After breakfast, your drive will take you through flat-open savannah land and go via Omorate on the eastern banks of the Omo River. Crossing the river by local dugout canoe, you reach the homeland of Dassenech and visit one of their villages. They are agro-pastoralists and herd cattle and practice flood retreat cultivation on both sides of the river.",
            "You return to Turmi and spend the afternoon visiting some small Hamer villages. The Hamer people are particularly beautiful and are most distinguishable by their hair, which they style into thick braids with red mud and lard. They wear thick copper bracelets and necklaces, and elaborate costumes with cowrie shells, beads, and leather.",
            "Overnight in Turmi",
          ],
          image: images.omo3,
        },
        {
          title: "DAY 6: EXCURSION TO VISIT KARA",
          description: [
            "This morning you take an excursion to Korcho and visit the Karo tribe who are very famous for their body painting. The Karo people use clays and locally available vegetable pigments to trace fantastic patterns on each other’s faces, chests, arms, and legs. Karo men, as with neighboring tribes, are also famous for their unique hairstyle.",
            "Overnight in Turmi",
          ],
          image: images.karo1,
        },
        {
          title: "DAY 7: DRIVE TO ARBA MINCH VIA ELBORE",
          description: [
            "Departing Turmi after breakfast we head for Weyto. Lying midway between Konso and Key Afar, the village is home to the Tsemai and Arbore peoples. These people are mainly farmers and pastoralists, tending their herds and growing sorghum and maize and supplementing it with honey.",
            "Continuing from here we cross the Weyto Valley and head for Konso for lunch. Then you proceed to Arba Minch.",
            "Overnight in Arba Minch",
          ],
          image: images.erbore1,
        },
        {
          title: "DAY 8: DRIVE TO YIRGALEM",
          description: [
            "You continue your journey on the bottom of the Rift Valley, and close to your destination, you enter the green and fertile hills where a lot of the famous Ethiopian coffee is grown. En route, you visit Senkele Game Sanctuary where we have a good chance to find the endemic Swayne's hartebeest.",
            "You stay at the Aregash Lodge in Yirgalem, situated at a coffee plantation. The lodge is a fine example of an eco-lodge. The huts are built in the same style as the surrounding Sidamo people. Delicious organic, homegrown, food is served in the restaurant.",
            "Overnight in Yirgalem",
          ],
          image: images.kaffa2,
        },
        {
          title: "DAY 9: DRIVE TO HAWASSA",
          description: [
            "It is a short drive to Hawassa, where we visit the fish market with many birds around, waiting to get their share of the catch of the day. An optional boat trip is available to explore the lake. The afternoon is spending at leisure at our lovely resort.",
            "Overnight in Hawassa",
          ],
          image: images.awassa1,
        },
        {
          title: "DAY 10: DRIVE TO ADDIS ABABA",
          description: [
            "Enjoy breakfast early this morning, and depart early for the Fish Market of Hawassa. Afterward, drive towards Addis Ababa, visiting the region’s lakes en route. The lakes of Abijata and Shalla are particularly stunning. Also visit the lakes of Abijata, Shalla, and Zeway (dependent on water levels) en route.",
            "Overnight in Hawassa",
          ],
          image: images.addis2,
        },
        {
          title: "DAY 11: DEPARTURE",
          description: [
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home.",
            "Thanks for vacationing with Sawla tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 1,
    experience: 3,
    title: "Meskel Marvels",
    index: false,
    image: images.addis6,
    description: "Celebrating Ethiopia’s Religious and Cultural Treasures",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Meskel Marvels",
        subtitle: "Celebrating Ethiopia’s Religious and Cultural Treasures",
        description: [
          "Embark on a remarkable journey through Ethiopia to witness the vibrant celebration of Meskel, an ancient festival marking the finding of the True Cross. This carefully curated itinerary combines the grandeur of Meskel festivities with the exploration of Ethiopia's historical and natural wonders. From the bustling capital of Addis Ababa to the rock-hewn churches of Lalibela and the castles of Gonder, experience the rich cultural heritage and architectural marvels of this captivating land.",
          'Marvel at the breathtaking landscapes of the Simien Mountains, home to endemic wildlife, and immerse yourself in the ancient history of Axum. This journey promises a unique blend of festive traditions, awe-inspiring monuments, and unforgettable experiences. Let "Ethiopian Treasures" be your guide to an unforgettable voyage, where the past intertwines with the present, and the beauty of Ethiopia unfolds at every turn.',
        ],
        lr: true,
        img1: images.addis5,
        img2: images.addis6,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Meskel Celebration",
            description:
              "Experience the vibrant festivities of Meskel, witnessing the Demera being lit and participating in colorful processions and religious rituals.",
          },
          {
            title: "Addis Ababa",
            description:
              "Explore the dynamic capital city, with its intriguing museums, lively markets, and iconic landmarks, such as the Holy Trinity Cathedral.",
          },
          {
            title: "Lake Tana",
            description:
              "Visit isolated churches on the serene shores of Lake Tana, accessible by a scenic boat ride, and immerse yourself in the rich spiritual traditions of Ethiopia.",
          },
          {
            title: "Gonder",
            description:
              "Discover the medieval castles of Gonder, including the magnificent Fasilades Castles and the Debre Berhan Church with its stunning murals.",
          },
          {
            title: "Simien Mountains",
            description:
              "Traverse the dramatic landscapes of the Simien Mountains National Park, walking amidst stunning scenery and encountering endemic wildlife, such as the Walia ibex and Ethiopian wolf.",
          },
          {
            title: "Lalibela",
            description:
              "Marvel at the rock-hewn churches of Lalibela, a UNESCO World Heritage Site, and explore the intricate architecture and religious significance of these ancient wonders.",
          },
          {
            title: "Axum",
            description:
              "Step into the ancient kingdom of Axum, home to stelae, the Queen of Sheba's Bath, and the legendary Church of Saint Mary of Zion.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Arrive in Addis Ababa and embark on a city tour, exploring its museums, cathedrals, and vibrant markets.",
          },
          {
            title: "Day 2",
            description:
              "Fly to Gonder, drive to the Simien Mountains National Park, and acclimatize to the breathtaking alpine landscapes.",
          },
          {
            title: "Day 3",
            description:
              "Explore the Simien Mountains, encounter endemic wildlife, and enjoy nature walks amidst stunning scenery.",
          },
          {
            title: "Day 4",
            description:
              "Return to Gonder and immerse yourself in the medieval history, visiting castles and the Debre Berhan Church.",
          },
          {
            title: "Day 5",
            description:
              "Fly to Lalibela and delve into the mystical world of the rock-hewn churches, witnessing their architectural brilliance.",
          },
          {
            title: "Day 6",
            description:
              "Further explore the rock churches of Lalibela, uncovering their religious significance and intricate carvings.",
          },
          {
            title: "Day 7",
            description:
              "Fly to Axum, unravel the ancient mysteries of this historical city, and visit its stelae, museums, and religious sites.",
          },
          {
            title: "Day 8",
            description:
              "Return to Addis Ababa and join the vibrant celebration of the Eve of Meskel, witnessing the Demera lighting ceremony.",
          },
          {
            title: "Day 9",
            description:
              "Depart from Addis Ababa, carrying unforgettable memories of Ethiopia's cultural treasures.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel.",
            "This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes. Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family.",
            "We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title:
            "DAY 2: FLY TO GONDER, & DRIVE TO SIMIEN MOUNTAIN NATIONAL PARK",
          description: [
            "This morning board a short flight to Gonder and upon arrival, you drive to the Simien Mountains. It is a UNESCO World Heritage Site and one of Africa’s largest ranges. More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia. Simien's landscapes vary from plateaus, escarpments, and steep gorges to rolling hills and pinnacles.",
            "Enjoy an afternoon walk around the lodge, amid the breathtaking alpine sceneries. This will help you acclimatize your body to the altitude.",
            "Overnight in Simiens.",
          ],
          image: images.simien3,
        },
        {
          title: "DAY 3: EXPLORE SIMIEN MOUNTAINS",
          description: [
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we’ll get to know better alongside field researchers. We’ll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer.",
            "Overnight in Simiens.",
          ],
          image: images.simien2,
        },
        {
          title: "DAY 4: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
          description: [
            "A scenic drive returns you to Gondar- famous for its medieval castles and churches. Gondar was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”.",
            "Spend the afternoon exploring the city of Gondar. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.",
            "We continue on to the Church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings. It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder4,
        },
        {
          title: "DAY 5: FLY TO LALIBELA & VISIT THE ROCK-HEWN CHURCHES",
          description: [
            "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler. After checking in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela6,
        },
        {
          title: "DAY 6: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons and medallions with both figurative and geometric motifs. Drive back to Lalibela.",
            "In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here. Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela7,
        },
        {
          title: "DAY 7: FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning, you will fly to Axum, where you are met and transferred to your hotel.",
            "You will proceed to a full-day city tour of Axum – a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. You also visit the Archaeological Museum, before heading to the Queen of Sheba’s Bath.",
            "Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge’ez (earliest written Ethiopian language), and Greek. Then continue on your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures.",
            "You then continue to the Queen of Sheba’s Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum1,
        },
        {
          title: "DAY 8: FLY TO ADDIS & EXPLORE SIGHTSEEING",
          description: [
            "This morning you fly back to Addis and transfer to your hotel.",
            "You will be taken to the festivities kicking off the Eve of Meskel- You'll see the Demera being lit amid much celebration.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis2,
        },
        {
          title: "DAY 9: DEPART FROM ADDIS ABABA",
          description: [
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home.",
            "Thanks for vacationing with Sawla tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 2,
    experience: 3,
    title: "Genna Celebration",
    index: false,
    image: images.lalibela2,
    description: "Celebrating Ethiopian Christmas amidst Ancient Marvels",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Genna Celebration",
        subtitle: "Celebrating Ethiopian Christmas amidst Ancient Marvels",
        description: [
          "Embark on an extraordinary journey to Ethiopia, immersing yourself in the joyous festivities of Genna, the Ethiopian Christmas. This meticulously crafted itinerary takes you on a captivating exploration of Ethiopia's remarkable destinations, where ancient traditions and cultural heritage intertwine with the celebration of Genna.",
          "From the bustling streets of Addis Ababa to the awe-inspiring landscapes of the Simien Mountains, the mystical rock-hewn churches of Lalibela, and the historical treasures of Gonder and Axum, experience the enchantment of Ethiopian Christmas like never before. Witness vibrant processions, attend special church services, and immerse yourself in the spiritual atmosphere of this sacred occasion. This journey promises an unforgettable blend of cultural discovery, breathtaking scenery, and a once-in-a-lifetime celebration of Genna.",
        ],
        lr: true,
        img1: images.lalibela1,
        img2: images.lalibela3,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Explore the vibrant capital city, with its museums, markets, and historic landmarks, while witnessing the fervent preparations for Genna.",
          },
          {
            title: "Lake Tana",
            description:
              "Embark on a boat excursion to visit isolated churches on the tranquil shores of Lake Tana, where traditional Genna celebrations take place.",
          },
          {
            title: "Gonder",
            description:
              'Discover the medieval castles and churches of Gonder, known as the "Camelot of Africa," and experience the blending of Genna festivities with rich historical heritage.',
          },
          {
            title: "Simien Mountains",
            description:
              "Immerse yourself in the stunning landscapes of the Simien Mountains National Park, with opportunities for scenic walks and encounters with endemic wildlife.",
          },
          {
            title: "Lalibela",
            description:
              "Attend the mesmerizing Genna Eve celebrations in Lalibela, surrounded by the rock-hewn churches, and partake in the jubilant processions and rituals.",
          },
          {
            title: "Axum",
            description:
              "Explore the ancient city of Axum, a UNESCO World Heritage Site, and witness the profound Genna traditions amid historical wonders.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Arrive in Addis Ababa and embark on a city tour, immersing yourself in the vibrant atmosphere.",
          },
          {
            title: "Day 2",
            description:
              "Fly to Gonder and drive to the Simien Mountains National Park, where you'll be captivated by the breathtaking alpine landscapes.",
          },
          {
            title: "Day 3",
            description:
              "Explore the stunning Simien Mountains National Park, encountering endemic wildlife and soaking in the serenity of the surroundings.",
          },
          {
            title: "Day 4",
            description:
              "Return to Gonder and delve into its medieval history, exploring the castles and churches.",
          },
          {
            title: "Day 5",
            description:
              "Fly to Axum and embark on a full-day tour, uncovering the ancient treasures.",
          },
          {
            title: "Day 6",
            description:
              "Fly to Lalibela, the center of Genna festivities, and visit the rock-hewn churches on the Eve of Genna, witnessing the captivating ceremony and procession.",
          },
          {
            title: "Day 7",
            description:
              "Experience the jubilant Ethiopian Christmas celebrations in Lalibela, attending special church services and exploring more of the mesmerizing rock churches.",
          },
          {
            title: "Day 8",
            description:
              "Fly back to Addis Ababa and immerse yourself in the city's cultural heritage, visiting museums and markets.",
          },
          {
            title: "Day 9",
            description: "Depart from Addis Ababa.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel.",
            "This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets. Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes. Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family.",
            "We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title:
            "DAY 2: FLY TO GONDER, & DRIVE TO SIMIEN MOUNTAIN NATIONAL PARK",
          description: [
            "This morning board on a short flight to Gonder and upon arrival you drive to the Simien Mountains. It is a UNESCO World Heritage Site and one of Africa’s largest ranges. More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia. Simien's landscapes vary from plateaus, escarpments, and steep gorges to rolling hills and pinnacles.",
            "Enjoy an afternoon walk around the lodge, amid the breathtaking alpine sceneries. This will help you to acclimatise your body to the altitude.",
            "Overnight in Simiens",
          ],
          image: images.simien1,
        },
        {
          title: "DAY 3: EXPLORE SIMIEN MOUNTAINS",
          description: [
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we’ll get to know better alongside field researchers. We’ll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer.",
            "Overnight in Simiens",
          ],
          image: images.simien2,
        },
        {
          title: "DAY 4: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
          description: [
            "A scenic drive returns you to Gondar- famous for its medieval castles and churches. Gondar was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. Spend the afternoon exploring the city of Gondar. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.",
            "We continue on to the Church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings. It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder1,
        },
        {
          title: "DAY 5: FLY TO FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a full-day city tour of Axum –a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. You also visit the Archaeological Museum, before heading to the Queen of Sheba’s Bath.",
            "Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge’ez (earliest written Ethiopian language), and Greek.  Then continue on your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures.",
            "You then continue to the Queen of Sheba’s Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum1,
        },
        {
          title:
            "DAY 6: FLY TO LALIBELA, VISIT THE ROCK HEWN CHURCHES, & ATTEND THE EVE OF THE GENNA CELEBRATION",
          description: [
            "From Axum, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler. After checking in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Today is Ethiopian Christmas Eve in Lalibela. In the evening, head to the rock churches and gather around the edge of the churches to witness the ceremony and procession.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela1,
        },
        {
          title: "DAY 7: ATTEND GENNA CELEBRATION & EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, you will be taken to the church to witness a special church procession at Bete Mariam on the day of Ethiopian Christmas (Genna).",
            "In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here.  Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela7,
        },
        {
          title: "DAY 8: FLY TO ADDIS & EXPLORE SIGHTSEEING",
          description: [
            "This morning you fly back to Addis and tour more of the city. Visit the National Museum, with its many archaeological findings including the famous complete fossil remains of 3 million-year-old 'Lucy.' Explore the Merkato, one of the largest open-air markets in the world and wander the vast range of goods and artifacts. You will have time for shopping.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis2,
        },
        {
          title: "DAY 9: DEPART FROM ADDIS ABABA",
          description: [
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 3,
    experience: 3,
    title: "Sacred Journeys",
    index: false,
    image: images.axum10,
    description:
      "Exploring Ancient Marvels and Celebrating Palm Sunday in Ethiopia",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Sacred Journeys",
        subtitle:
          "Exploring Ancient Marvels and Celebrating Palm Sunday in Ethiopia",
        description: [
          "Embark on a sacred pilgrimage to Ethiopia, immersing yourself in the vibrant celebrations of Palm Sunday in the ancient city of Axum. This carefully curated itinerary takes you on a remarkable adventure, unveiling the rich cultural heritage and historical wonders of Ethiopia. From the bustling streets of Addis Ababa to the majestic rock-hewn churches of Lalibela, and finally, the spiritual ambiance of Axum, experience the profound significance of Palm Sunday amidst ancient marvels.",
          "Witness the vibrant processions, attend special church services, and explore the awe-inspiring landmarks that have shaped Ethiopia's religious identity. This journey promises a unique blend of spiritual enrichment, cultural discovery, and the unforgettable celebration of Palm Sunday in Axum.",
        ],
        lr: true,
        img1: images.axum10,
        img2: images.axum9,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Begin your journey in the vibrant capital, exploring its museums, markets, and landmarks.",
          },
          {
            title: "Lake Tana",
            description:
              "Embark on a boat excursion to visit isolated churches on the tranquil shores of Lake Tana, immersing yourself in the spiritual essence of Ethiopian Christianity.",
          },
          {
            title: "Gonder",
            description:
              "Discover the medieval castles and churches of Gonder, known as the 'Camelot of Africa.'",
          },
          {
            title: "Simien Mountains",
            description:
              "Take a scenic walk in the breathtaking landscapes of the Simien Mountains.",
          },
          {
            title: "Lalibela",
            description:
              "Explore the awe-inspiring rock-hewn churches of Lalibela, a UNESCO World Heritage Site.",
          },
          {
            title: "Axum",
            description:
              "Attend the vibrant Palm Sunday processions and church services in Axum, the heart of Ethiopian Christianity, and explore the historical treasures of this ancient city.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa and embark on a city tour.",
          },
          {
            title: "Day 2",
            description:
              "Fly to Gonder and visit the royal enclosure and Church of Debre Birhan.",
          },
          {
            title: "Day 3",
            description:
              "Fly to Lalibela and explore the magnificent rock-hewn churches.",
          },
          {
            title: "Day 4",
            description:
              "Discover more of Lalibela's hidden treasures, including the cave church of Yemrhan Kristos.",
          },
          {
            title: "Day 5",

            description:
              "Fly to Axum, the cradle of Ethiopian Christianity, and explore the historical landmarks of Axum, including the stelae and the Church of St. Mary of Zion. Later join us to witness the Eve of Palm Sunday celebrations in this ancient city.",
          },
          {
            title: "Day 6",
            description:
              "In the morning join Palm Sunday processions and celebrations in Axum, a spiritual experience like no other.",
          },
          {
            title: "Day 7",
            description: "Fly back to Addis Ababa and depart.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel. This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets.",
            "Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes. Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: FLY TO GONDER",
          description: [
            "This morning board a short flight to Gonder, upon arrival transfer to your hotel. You will spend today exploring the city of Gondar. It was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.",
            "You continue on to the church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings. It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder1,
        },
        {
          title: "DAY 3: FLY TO LALIBELA & VISIT THE ROCK-HEWN CHURCHES",
          description: [
            "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler. After checking in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela6,
        },
        {
          title: "DAY 4: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good gravel road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs. Drive back to Lalibela.",
            "In the afternoon, you will visit the remaining rock-hewn churches of Lalibela that include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here. Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela7,
        },
        {
          title: "DAY 5: FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a city tour of Axum –a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. You also visit the Archaeological Museum, before you head to attend the festivities of the Eve of Palm Sunday.",
            "Today is the main Palm Sunday; you will be taken to witness the morning processions and celebrations. During this important festival day, the whole city comes alive in celebration, with the Church of St Mary of Zion at the center of the festivities.",
            "After lunch, you head to the Queen of Sheba’s Bath. Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge’ez (earliest written Ethiopian language), and Greek. Then continue on your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. You then continue to the Queen of Sheba’s Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum5,
        },
        {
          title: "DAY 6: ATTEND PALM SUNDAY & EXPLORE SIGHTSEEING",
          description: [
            "Today is the main Palm Sunday; you will be taken to witness the morning processions and celebrations. During this important festival day, the whole city comes alive in celebration, with the Church of St Mary of Zion at the center of the festivities.",
            "After lunch, you head to the Queen of Sheba’s Bath. Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge’ez (earliest written Ethiopian language), and Greek.  Then continue on your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. You then continue to the Queen of Sheba’s Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum10,
        },
        {
          title: "DAY 7:  DEPART FROM ADDIS ABABA",
          description: [
            "This morning take a flight back to Addis. You will have the afternoon at leisure. Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 4,
    experience: 3,
    title: "Hidar Tsion in Axum",
    index: false,
    image: images.axum11,
    description:
      "Unveiling Ethiopia's Ancient Treasures and Sacred Celebrations",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Hidar Tsion in Axum",
        subtitle:
          "Unveiling Ethiopia's Ancient Treasures and Sacred Celebrations",
        description: [
          'Embark on a journey that transcends time and immerses you in the captivating heritage of Ethiopia. Our meticulously crafted itinerary, "Hidar Tsion in Axum," unveils a tapestry of wonders, where ancient history and spiritual traditions intertwine.',
          'From the bustling streets of Addis Ababa, adorned with jacaranda trees, to the majestic castles of Gondar, known as "The Camelot of Africa," and the mystical rock-hewn churches of Lalibela, a UNESCO World Heritage Site, this expedition will transport you to a realm of awe-inspiring beauty.',
          "As the journey unfolds, your path leads to Axum, where the air is charged with anticipation for the eve and grand celebration of St. Mary Zion, known as Hidar Tsion. Witness the vibrant processions, immerse yourself in the rich cultural tapestry, and explore the fascinating historical treasures of Axum, including the enigmatic Stelae and the Queen of Sheba's Bath. Let Sawla Tours guide you through this extraordinary odyssey, where ancient wonders come alive amidst breathtaking landscapes and where the spirit of Ethiopia reveals itself in all its glory. ",
        ],
        lr: true,
        img1: images.axum6,
        img2: images.axum7,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Begin your journey in the vibrant capital, exploring its museums, markets, and cultural landmarks as you prepare for the sacred pilgrimage ahead.",
          },
          {
            title: "Lake Tana",
            description:
              "Embark on a boat excursion to visit isolated churches on the tranquil shores of Lake Tana.",
          },
          {
            title: "Gonder",
            description:
              "Delve into the medieval history and cultural heritage of Gonder, known as the 'Camelot of Africa,'",
          },
          {
            title: "Simien Mountains",
            description:
              "Take a scenic walk amidst stunning landscapes in the Simien Mountains.",
          },
          {
            title: "Lalibela",
            description:
              "Explore the awe-inspiring rock-hewn churches of Lalibela, a UNESCO World Heritage Site, feeling the spiritual energy intensify.",
          },
          {
            title: "Axum",
            description:
              "Attend the vibrant celebrations of Hidar Tsion in Axum, the heart of Ethiopian Christianity, and immerse yourself in the spiritual fervor of this sacred festival.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description: "Arrive in Addis Ababa and embark on a city tour.",
          },
          {
            title: "Day 2",
            description:
              "Fly to Gonder and visit the royal enclosure and Church of Debre Birhan.",
          },
          {
            title: "Day 3",
            description:
              "Fly to Lalibela and explore the magnificent rock-hewn churches.",
          },
          {
            title: "Day 4",
            description:
              "Discover more of Lalibela's hidden treasures, including the cave church of Yemrhan Kristos.",
          },

          {
            title: "Day 5",
            description:
              "Fly to Axum and partake in the celebrations of the Eve of Hidar Tsion, witnessing the city come alive with vibrant processions and rituals.",
          },
          {
            title: "Day 6",
            description:
              "Experience the vibrant celebration of Hidar Tsion in Axum, attending special church services and exploring the city's historical landmarks.",
          },
          {
            title: "Day 7",
            description: "Fly back to Addis Ababa and depart.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel. This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets.",
            "Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes. Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family.",
            "We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2:  FLY TO GONDER",
          description: [
            "This morning board a short flight to Gonder, upon arrival transfer to your hotel. You will spend today exploring the city of Gondar. It was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.",
            "You continue on to the church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings. It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder4,
        },
        {
          title: "DAY 3: FLY TO LALIBELA & VISIT THE ROCK-HEWN CHURCHES",
          description: [
            "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler. After checking in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 4: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs.",
            "Drive back to Lalibela. In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here. Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela7,
        },
        {
          title: "DAY 5: FLY TO FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a city tour of Axum –a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. You also visit the Archaeological Museum, before you head to attend the festivities of the Eve of Celebration of St. Mary Zion (Hidar Tsion).",
          ],
          image: images.axum4,
        },
        {
          title:
            "DAY 6: ATTEND CELEBRATION OF ST. MARY ZION & EXPLORE SIGHTSEEING",
          description: [
            "Today is the main St. Mary of Zion; you will be taken to witness the morning processions and celebrations. During this important festival day, the whole city comes alive in celebration, with the Church of St Mary of Zion at the center of the festivities.",
            "After lunch, you head to the Queen of Sheba’s Bath. Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge’ez (earliest written Ethiopian language), and Greek. Then continue on your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures.",
            "You then continue to the Queen of Sheba’s Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum2,
        },
        {
          title: "DAY 7:  DEPART FROM ADDIS ABABA",
          description: [
            "This morning fly back to Addis. You will have the afternoon at leisure. Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 5,
    experience: 3,
    title: "Epiphany Reverie",
    index: false,
    image: images.lalibela11,
    description: "Celebrating Timket in Colorful Addis Ababa",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Epiphany Reverie",
        subtitle: "Celebrating Timket in Colorful Addis Ababa",
        description: [
          "Embark on an extraordinary journey to Ethiopia, where ancient traditions and vibrant celebrations come alive during the enchanting festival of Timket (Commemoration of the Baptism of Christ) in Addis Ababa. This meticulously crafted itinerary invites you to immerse yourself in the rich cultural tapestry and spiritual heritage of Ethiopia.",
          "From exploring the historical wonders of Gonder and the awe-inspiring rock-hewn churches of Lalibela to experiencing the sacred city of Axum, this journey builds up to the climactic celebration of Timket in Addis Ababa. Join the exuberant processions, witness the colorful rituals, and feel the profound spiritual energy as you partake in this transformative experience.",
          "This trip promises a fusion of cultural immersion, spiritual enlightenment, and the unforgettable celebration of Timket in the vibrant capital city of Addis Ababa.",
        ],
        lr: true,
        img1: images.gonder2,
        img2: images.addis5,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Begin your journey in the bustling capital, experiencing its vibrant markets, museums, and iconic landmarks as you prepare for the spectacular Timket celebration.",
          },
          {
            title: "Lake Tana",
            description:
              "Visit isolated churches on the serene shores of Lake Tana, accessible by a scenic boat ride, and immerse yourself in the rich spiritual traditions of Ethiopia.",
          },
          {
            title: "Gonder",
            description:
              "Discover the medieval castles of Gonder, including the magnificent Fasilades Castles and the Debre Berhan Church with its stunning murals.",
          },
          {
            title: "Simien Mountains",
            description:
              "Traverse the dramatic landscapes of the Simien Mountains National Park, walking amidst stunning scenery and encountering endemic wildlife, such as the Walia ibex and Ethiopian wolf.",
          },
          {
            title: "Lalibela",
            description:
              "Marvel at the rock-hewn churches of Lalibela, a UNESCO World Heritage Site, and explore the intricate architecture and religious significance of these ancient wonders.",
          },
          {
            title: "Axum",
            description:
              "Step into the ancient kingdom of Axum, home to stelae, the Queen of Sheba's Bath, and the legendary Church of Saint Mary of Zion.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Arrive in Addis Ababa and embark on a city tour, exploring its museums, cathedrals, and vibrant markets.",
          },
          {
            title: "Day 2",
            description:
              "Fly to Gonder, drive to the Simien Mountains National Park, and acclimatize to the breathtaking alpine landscapes.",
          },
          {
            title: "Day 3",
            description:
              "Explore the Simien Mountains, encounter endemic wildlife, and enjoy nature walks amidst stunning scenery.",
          },
          {
            title: "Day 4",
            description:
              "Return to Gonder and immerse yourself in the medieval history, visiting castles and the Debre Berhan Church.",
          },
          {
            title: "Day 5",
            description:
              "Fly to Lalibela and delve into the mystical world of the rock-hewn churches, witnessing their architectural brilliance.",
          },
          {
            title: "Day 6",
            description:
              "Further explore the rock churches of Lalibela, uncovering their religious significance and intricate carvings.",
          },
          {
            title: "Day 7",
            description:
              "Fly to Axum, unravel the ancient mysteries of this historical city, and visit its stelae, museums, and religious sites.",
          },
          {
            title: "Day 8",
            description:
              "Return to Addis Ababa and attend the vibrant Timket Eve celebration, witnessing the city come alive with colorful processions and rituals.",
          },
          {
            title: "Day 9",
            description:
              "Experience the grand celebration of Timket, participating in the unique ceremonies and joyful festivities before bidding farewell to Ethiopia.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel. This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets.",
            "Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes. Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: FLY TO GONDER",
          description: [
            "This morning board a short flight to Gonder, upon arrival transfer to your hotel. You will spend today exploring the city of Gondar. It was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.",
            "You continue on to the church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings. It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder1,
        },
        {
          title: "DAY 3: EXCURSION TO THE SIMIEN MOUNTAINS",
          description: [
            "Early morning start after breakfast drive to the Simien Mountains. It is a UNESCO World Heritage Site and one of Africa’s largest ranges. More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia.",
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we’ll get to know better alongside field researchers. We’ll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer. Late afternoon you drive back to Gonder.",
            "Overnight in Gonder",
          ],
          image: images.simien1,
        },
        {
          title: "DAY 4: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
          description: [
            "A scenic drive returns you to Gondar- famous for its medieval castles and churches. Gondar was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”.",
            "Spend the afternoon exploring the city of Gondar. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.",
            "We continue on to the Church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings. It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder4,
        },
        {
          title: "DAY 5: FLY TO LALIBELA & VISIT THE ROCK-HEWN CHURCHES",
          description: [
            "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler. After checking in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 6: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good gravel road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs. Drive back to Lalibela.",
            "In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here. Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela7,
        },
        {
          title: "DAY 7: FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a full-day city tour of Axum –a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. You also visit the Archaeological Museum, before heading to the Queen of Sheba’s Bath.",
            "Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge’ez (earliest written Ethiopian language), and Greek.  Then continue on your visit to the church of Saint Mary of Zion.",
            "A chapel in the church is believed by many to contain The Ark of the Covenant. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. You then continue to the Queen of Sheba’s Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum5,
        },
        {
          title: "DAY 8: FLY TO ADDIS & EXPLORE SIGHTSEEING",
          description: [
            "This morning you fly back to Addis and transfer to your hotel. This afternoon, you will be taken to attend the celebration of Timket Eve. Timket, also known as Timkat, is the Ethiopian term for Epiphany, a significant holiday commemorating Christ's baptism in the River Jordan observed by Christians worldwide. However, Timket holds a special place of importance in Ethiopia, where it stands as the most vibrant and momentous event of the year. Commencing on Timket Eve, which falls on January 18, eleven days after Orthodox Christmas, this festival seamlessly blends religious solemnity with secular festivities, including revelry and matchmaking.",
            "According to the Ethiopian epic known as the Kebra Negast, the Ark of the Covenant was reputedly transported from Jerusalem to Ethiopia during the first millennium BC, ultimately becoming the most revered artifact within the Ethiopian Orthodox Church.",
            "As the early afternoon descends upon Timket Eve, priests from various churches reverently carry silk-covered replicas of the Ark in a stately procession toward a nearby body of water. Accompanied by a multitude of church members and devotees numbering in the tens of thousands, the atmosphere resonates with chants, dances, drum beats, horn blasts, the rhythmic waving of prayer sticks, and the jingling of sistrums—a musical instrument reminiscent of ancient times. This spectacle evokes a scene reminiscent of the descriptions found in the Old Testament.",
            "As twilight yields to evening, the priests and devout followers engage in an all-night vigil around the Ark replicas until daybreak. Subsequently, throngs of people congregate around the water's edge. Upon the chief priest bestowing a sacred blessing upon the water, the celebration reaches its zenith. Many plunge into the water with great enthusiasm, while others eagerly await a joyous splash. Following the renewal of religious vows, some of the Ark replicas are triumphantly paraded back in a jubilant procession, mirroring the earlier festivities.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis2,
        },
        {
          title: "DAY 9:  ATTEND TIMKET FESTIVAL & DEPART FROM ADDIS ABABA",
          description: [
            "Today is the most important day in the Ethiopian Orthodox calendar. Early morning you will be taken to take part in the Timket festivities. You join the Ethiopian crowds at the venue where the priests do the special procession. This is followed by a beautiful chanting and a special prayer to bless spring water will be blessed by Archbishop and sprinkled over the crowd.",
            "You head to your hotel to rest and freshen up. Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla tours.",
          ],
          image: images.addis5,
        },
      ],
    },
  },
  {
    id: 1,
    experience: 4,
    title: "Simien Splendor",
    index: false,
    image: images.simien4,
    description: "Trekking Ethiopia's North and Celebrating Culture",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Simien Splendor",
        subtitle: "Trekking Ethiopia's North and Celebrating Culture",
        description: [
          "Set forth on a quest on an unforgettable journey through the breathtaking landscapes and rich cultural heritage of Ethiopia. This meticulously crafted itinerary combines the thrill of trekking in the Simien Mountains with the exploration of historical gems such as Axum, Lalibela, and Gonder.",
          "From the ancient stelae of Axum to the magnificent rock-cut churches of Lalibela, immerse yourself in Ethiopia's fascinating history and spirituality. The highlight of this journey is the exhilarating trek through the Simien Mountains, where you'll witness awe-inspiring vistas, encounter endemic wildlife, and camp under starlit skies.",
          "This adventure culminates in the vibrant city of Addis Ababa, where you'll witness the fusion of tradition and celebration during the final days of your trip. Prepare for a journey of natural splendor, cultural immersion, and unforgettable experiences.",
        ],
        lr: true,
        img1: images.simien1,
        img2: images.simien3,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Begin your journey in Ethiopia's capital, exploring its bustling markets, museums, and vibrant cityscape.",
          },
          {
            title: "Axum",
            description:
              "Uncover the ancient city of Axum, home to granite stelae, the subterranean Tomb of Ramhai, and the legendary Queen of Sheba's Bath.",
          },
          {
            title: "Lalibela",
            description:
              "Marvel at the remarkable rock-hewn churches of Lalibela, a UNESCO World Heritage Site, and delve into the mysteries of Ethiopian Christianity.",
          },
          {
            title: "Gonder",
            description:
              "Explore the medieval castles of Gonder, including the Royal Enclosure and the breathtaking Debre Berhan Selassie Church.",
          },
          {
            title: "Simien Mountains",
            description:
              "Trek through the majestic Simien Mountains National Park, encountering stunning landscapes, endemic wildlife like the gelada baboon and walia ibex, and awe-inspiring viewpoints.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Arrive in Addis Ababa and immerse yourself in the vibrant capital city.",
          },
          {
            title: "Day 2",
            description:
              "Fly to Axum and explore the UNESCO World Heritage Site, discovering ancient stelae and the legendary Queen of Sheba's Bath.",
          },
          {
            title: "Day 3",
            description:
              "Fly to Lalibela and marvel at the extraordinary rock-hewn churches, delving into the spiritual heart of Ethiopia.",
          },
          {
            title: "Day 4",
            description:
              "Explore more of Lalibela's remarkable churches, uncovering their intricate details and spiritual significance.",
          },
          {
            title: "Day 5",
            description:
              "Fly to Gonder and embark on a scenic drive to the Simien Mountains National Park, preparing for an exhilarating trek.",
          },
          {
            title: "Day 6",
            description:
              "Begin your trek from Sankaber, immersing yourself in the stunning landscapes of the Simien Mountains.",
          },
          {
            title: "Day 7",

            description:
              "Continue your trek to Geech, encountering endemic wildlife and enjoying panoramic views.",
          },
          {
            title: "Day 8",
            description:
              "Trek to Chenek, where you'll have the chance to spot walia ibex and gelada baboons.",
          },
          {
            title: "Day 9",
            description:
              "Drive back to Gonder, savoring the last views of the Simien Mountains, and explore the historical treasures of the city.",
          },
          {
            title: "Day 10",
            description:
              "Fly back to Addis Ababa, with free time for shopping and reflecting on your incredible journey.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel. This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets.",
            "Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes. Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis2,
        },
        {
          title: "DAY 2: FLY AXUM & EXPLORE THE CITY",
          description: [
            "In the morning you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a full-day city tour of Axum –a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. Nearby is the subterranean Tomb of Ramhai, a former king of Axum. You also visit the Archaeological Museum, before heading to the Queen of Sheba’s Bath. This large reservoir is an excellent place to observe the local women collecting water for washing.",
            "Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge’ez (earliest written Ethiopian language), and Greek.  After having a lunch break, continue on your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. It is guarded by “The Guardian” who is the only person allowed into the chapel and the only person who may set eyes on it. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. You then continue to the Queen of Sheba’s Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum4,
        },
        {
          title: "DAY 3: FLY TO LALIBELA",
          description: [
            "From Axum, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th  wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches.",
            "Lalibela indeed offers a great opportunity for any traveler. After checking in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 4: EXPLORE THE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs.",
            "Drive back to Lalibela. In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here.  Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela7,
        },
        {
          title: "DAY 5: FLY TO GONDER & DRIVE TO SIMIEN TREK TO SANKABER",
          description: [
            "This morning board a short flight to Gonder, upon arrival transfer to your hotel. You will spend today exploring the city of Gondar. It was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years. You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area.",
            "You continue on to the church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings.  It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder4,
        },
        {
          title:
            "DAY 6: DRIVE TO SIMIEN MOUNTAINS N.P. VIA DEBARK; PM TREK TO SANKABER",
          description: [
            "Today, you drive to Debark, the village base for hiking in the Simien Mountains. The Simien range lies north of Gondar and many of the peaks rise above 4,000m with the highest being Mount Ras Dashen, at 4,543m, the fifth highest in Africa. The mountains are crisscrossed with tracks made by local people traveling from village to village or moving their animals to fresh pastures. The combination of these tracks and the spectacular scenery make for excellent walking.",
            "You start your trek with a 2-3 hour walk to your first camp, Sankaber. During the entire trek, we may spend each night in a different place. The circuits walked will vary depending on local conditions.",
            "Overnight: Camping, Sankaber",
          ],
          image: images.simien6,
        },
        {
          title: "DAY 7: TREK TO GEECH",
          description: [
            "You trek to Geech camp from Sankaber (approx. 5-6 hours), with the possibility of seeing Gelada baboons and red-hot poker plants en route. The gelada baboon is endemic to Ethiopia and has adapted to living on the nearly vertical cliff faces. You may also see the Jinbar River waterfalls today that plummet into Geech Abyss. The Abyss is a vast canyon cut into the main wall of the escarpment. Midday you stop for a picnic pack lunch overlooking the waterfall.",
            "Overnight: Camping, Geech",
          ],
          image: images.simien4,
        },
        {
          title: "DAY 8: TREK TO CHENEK",
          description: [
            "We aim to trek to Chenek camp today on good piste via Inatye (4070m) and along an escarpment (approx. 5-6 hours). From this point, there are spectacular views of the lowlands and across the Simien range with rock spires and prominent mesas. Your highest point today, where you will have lunch is Inatye at 4070m/13,353ft. This takes approx. 4 hours from Geech campsite. This exciting walk traverses the Jinbar River and provides us with fantastic views. You may choose to take the opportunity to freshen up in the nearby stream south of camp.",
            "You overnight at the thyme-covered campsite at Chenek, where we have one last chance to see Lammergeyer, gelada baboon, and Walia ibex.",
            "Overnight: Camping, Chenek",
          ],
          image: images.simien5,
        },
        {
          title: "DAY 9: DRIVE TO GONDER & EXPLORE",
          description: [
            "This morning’s short walk takes you to the opposite of the camp which offers a superb panoramic view of the surrounding area. You may be fortunate enough to spot Walia Ibex here. Then you meet the vehicle that will transport you back to Gondar (approx. 4-5 hours drive). As you drive out of the Simien Mountains, we’ll have time to take in a final look at some of the most spectacular views. The afternoon will be at your leisure in Gondar.",
            "Overnight in Gonder",
          ],
          image: images.gonder5,
        },
        {
          title: "DAY 10: FLY TO ADDIS",
          description: [
            "After breakfast, you transfer to the airport and take the short flight back to Addis Ababa and transfer to your hotel. You have the afternoon free for shopping in Addis Ababa. Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 2,
    experience: 4,
    title: "Tigray community trekking",
    index: false,
    image: images.tigray4,
    description: "Unveiling Ethiopia's Ancient Marvels and Majestic Landscapes",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Tigray community trekking",
        subtitle:
          "Unveiling Ethiopia's Ancient Marvels and Majestic Landscapes",
        description: [
          "Start a voyage on an extraordinary journey through Ethiopia, immersing yourself in its rich cultural heritage and breathtaking landscapes. This carefully curated itinerary combines the exploration of historical treasures such as Addis Ababa, Gonder, Axum, and Lalibela with the exhilaration of trekking in the Tigray region.",
          "From the bustling markets of Addis Ababa to the rock-hewn churches of Lalibela and the stunning vistas of the Simien Mountains, every step of this trip is a feast for the senses. Discover ancient civilizations, encounter endemic wildlife, witness vibrant traditions, and experience the warm hospitality of the Ethiopian people. Get ready for an unforgettable adventure that blends history, spirituality, and natural splendor.",
        ],
        lr: true,
        img1: images.tigray4,
        img2: images.tigray5,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Begin your journey in the vibrant capital city, exploring its museums, markets, and historical landmarks.",
          },
          {
            title: "Lake Tana",
            description:
              "Take a boat ride on Lake Tana and visit isolated churches, immersing yourself in Ethiopia's spiritual heritage.",
          },
          {
            title: "Gonder",
            description:
              "Explore the Fasilades Castles and Debre Berhan Church, marveling at the architectural wonders of this medieval city.",
          },
          {
            title: "Simien Mountains",
            description:
              "Embark on a chance to walk in stunning scenery, encountering endemic wildlife like the Walia ibex and enjoying breathtaking panoramic views.",
          },
          {
            title: "Lalibela",
            description:
              "Discover the UNESCO World Heritage Site of Lalibela, home to the extraordinary rock-cut churches, a testament to Ethiopia's ancient Christian traditions.",
          },
          {
            title: "Axum",
            description:
              "Explore the ancient city of Axum, visiting stelae, the subterranean Tomb of Ramhai, and the renowned Church of Saint Mary of Zion.",
          },
          {
            title: "Tigray Region",
            description:
              "Trek through the captivating landscapes of the Tigray region, discovering remote rock-hewn churches and experiencing the unique culture of the Tigrayan people.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Arrive in Addis Ababa and immerse yourself in the vibrant capital city.",
          },
          {
            title: "Day 2",
            description:
              "Fly to Gonder and drive to the Simien Mountains National Park, preparing for an unforgettable trek.",
          },
          {
            title: "Day 3",
            description:
              "Explore the stunning landscapes of the Simien Mountains, encountering endemic wildlife and enjoying breathtaking views.",
          },
          {
            title: "Day 4",
            description:
              "Drive back to Gonder and embark on a sightseeing tour of the medieval castles and churches.",
          },
          {
            title: "Day 5",
            description:
              "Fly to Lalibela and discover the remarkable rock-hewn churches, delving into the spiritual heart of Ethiopia.",
          },
          {
            title: "Day 6",
            description:
              "Continue exploring the wonders of Lalibela's rock churches, experiencing their intricate beauty and cultural significance.",
          },
          {
            title: "Day 7",
            description:
              "Fly to Axum and immerse yourself in the ancient city's historical and religious treasures.",
          },
          {
            title: "Day 8",
            description:
              "Drive to Rahya and embark on a trek to Erar, experiencing the unique Tigray culture and witnessing stunning landscapes.",
          },
          {
            title: "Day 9",
            description:
              "Trek to Gohagot, encountering picturesque villages,  wildlife, and fascinating rock-hewn churches.",
          },
          {
            title: "Day 10",
            description:
              "Trek to Shimbriti, traversing valleys, ledges, and enjoying panoramic views of the Tigray region.",
          },
          {
            title: "Day 11",
            description:
              "Drive to Gheralta and explore the magnificent rock churches in the area, marveling at their architectural wonders.",
          },
          {
            title: "Day 12",
            description:
              "Drive to Mekelle and catch a flight to Addis Ababa, reflecting on the incredible journey.",
          },
          {
            title: "Day 13",
            description:
              "Depart from Addis Ababa with lasting memories of Ethiopia's cultural and natural splendor.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, your hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel. This afternoon, enjoy a tour of Addis Ababa, a pleasant capital city with wide jacaranda-edged avenues, interesting museums, and lively markets.",
            "Start our visit with the Ethnological Museum for an overview of Ethiopia's history, culture, and traditions, and its collections from thousand-year-old nomadic tribes. Next, see the beautiful baroque-styled Holy Trinity Cathedral which contains the thrones and the tomb of Emperor Haile Selassie (the last king of Ethiopia) and some other members of the royal family. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title:
            "DAY 2: FLY TO GONDER, & DRIVE TO SIMIEN MOUNTAIN NATIONAL PARK",
          description: [
            "This morning board a short flight to Gonder and upon arrival, you drive to the Simien Mountains. It is a UNESCO World Heritage Site and one of Africa’s largest ranges. More than a dozen peaks are higher than 3600 meters, including Ras Dashen, the highest peak in Ethiopia. Simien's landscapes vary from plateaus, escarpments, and steep gorges to rolling hills and pinnacles. Enjoy an afternoon walk around the lodge, amid the breathtaking alpine sceneries. This will help you to acclimatize your body to the altitude.",
            "Overnight in Simiens.",
          ],
          image: images.gonder4,
        },
        {
          title: "DAY 3: EXPLORE SIMIEN MOUNTAINS",
          description: [
            "Your day is spent exploring the Simien Mountains National Park and watching for its endemic residents, including the elusive Walia ibex, the endangered Ethiopian wolf, and the gelada, a primate we’ll get to know better alongside field researchers. We’ll also look for a variety of birds, such as the powerful, cliff-nesting lammergeyer.",
            "Overnight in Simiens",
          ],
          image: images.simien2,
        },
        {
          title: "DAY 4: DRIVE TO GONDER & SIGHTSEEING IN GONDER",
          description: [
            "A scenic drive returns you to Gondar- famous for its medieval castles and churches. Gondar was founded in 1636 by Emperor Fasilades as the royal capital of Ethiopia, and is also known as “the Camelot of Africa”. Spend the afternoon exploring the city of Gondar. In Gondar, there are a dozen castles, built by various kings and a queen over the course of 236 years.",
            "You will visit the Royal Enclosure, among these the Castle of Fasiledes, the oldest and probably the most impressive of all the castles found in the area. We continue on to the Church of Debre Berhan Selassie (a UNESCO World Heritage Site). The interior of Debre Berhan Selassie is decorated with beautiful murals, cherubs, and paintings. It is rumored to have once been the proposed final resting place of the Ark of the Covenant.",
            "Overnight in Gonder",
          ],
          image: images.gonder7,
        },
        {
          title: "DAY 5: FLY TO LALIBELA & VISIT THE ROCK-HEWN CHURCHES",
          description: [
            "From Gonder, a short flight takes you to Lalibela, home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level. Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches. Lalibela indeed offers a great opportunity for any traveler. After checking in and having your lunch in your hotel, the afternoon will be devoted to visiting the first group (or the north–western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 6: EXPLORE MORE ROCK CHURCHES",
          description: [
            "After breakfast, drive to the cave church of Yemrhan Kristos. The drive will be on a good gravel road passing through the most dramatic landscape of the countryside. This exquisite church is a masterpiece of Axumit wood and stone construction style. It is renowned for its interior decoration, its beautiful wooden coffer ceiling inlaid with hexagons, and medallions with both figurative and geometric motifs. Drive back to Lalibela.",
            "In the afternoon, you will visit the remaining rock-hewn churches of Lalibela which include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here. Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela7,
        },
        {
          title: "DAY 7: FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a full-day city tour of Axum –a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. Nearby is the subterranean Tomb of Ramhai, a former king of Axum. You also visit the Archaeological Museum, before heading to the Queen of Sheba’s Bath. This large reservoir is an excellent place to observe the local women collecting water for washing.",
            "Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge’ez (earliest written Ethiopian language), and Greek.  After having a lunch break, continue on your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant.",
            "It is guarded by “The Guardian” who is the only person allowed into the chapel and the only person who may set eyes on it. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. You then continue to the Queen of Sheba’s Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum1,
        },
        {
          title: "DAY 8: DRIVE TO RAHYA & WALK TO ERAR",
          description: [
            "Today, you will transfer by road (4 hours) to Rahya en route to visit the temple of Yeha. It is the oldest of Ethiopia’s antiquities beautifully set in scenic surroundings, dating back to the 5th century BC. You continue your journey into the eastern Tigray, a fascinating region containing many rock-hewn churches dating from the 8th century.",
            "You start a two hours TESFA Tigray trek from a small village called Rahya destined to Erar community guest house. You will meet your local guide here. Your luggage will be loaded on the donkeys. The most westerly guesthouse is at Erar built on an isolated section of the western escarpment with wonderful views westward to the mountains of Adwa and the Niblet pillars. Erar is located on the sandstone escarpment on the western edge of the area, also at 2,800 meters. It is a bit closer to the mountains on the Adwa side with some interesting pinnacles of rock in view to the northwest.",
            "In all the lodges, you will be greeted on arrival by your host with local bread, nuts, popcorn, tea, and coffee. You will be served with tasty local meals.",
            "Overnight in Erar community lodge",
          ],
          image: images.tigray5,
        },
        {
          title: "DAY 9: WALK FROM ERAR TO GOHAGOT",
          description: [
            "This morning after having breakfast, you walk to Gohagot. The walk takes around 5-6 hours and goes past some lovely churches – notably Debre Giorgis, which is a built-up church like that of the ancient churches of Debre Damo and Yemrehana Christos. You walk across rolling plains dotted with cypress trees. Then descend along valleys of giant candelabra cactus and aloe to reach the Valley of Debre Abay.",
            "Like the other villages of Tigray, all the small houses are surrounded by prickly pears and eucalyptus that look more or less exactly like every other house you have passed. The rocky soil atop the plateaus supports only grasses, grains, and legumes. Along the ridges, bushes of prickly pears and stalks of aloe tower grow along the stone-lined paths. The valley is more fertile ground; farmers plant their fields with garlic, onion, corn, and cabbage by irrigating small streams.",
            "After another long day of walking takes you to Gohagot. It is tucked under the cliff but above the villages. Before heading there, you visit the nearby rock church of Gohgot Eyesus, positioned above indigenous woodland at the head of the valley. This is one of beautifully cut-into-the-face sandstone.",
            "From the church, it is about an hour’s walk to the guest house of Gohagot and located at an altitude of 2600 meters. Open your eyes to different birds and small animals on this day too.",
            "Overnight in Gohagot community lodge",
          ],
          image: images.tigray4,
        },
        {
          title: "DAY 10: WALK FROM GOHAGOT TO SHIMBRITI",
          description: [
            "Depart after breakfast for a day walk (approximately 5-4 hrs) to the community site-Shimbriti. From these guesthouses, it is a 5-hour walk through the valleys to Shimbriti. The first one-hour walk takes you from the plateau down to the valley. Following tracks walked by Tigrayan highlanders for the past many years, passing the villages in the valley.",
            "Then climb up escarpments, spotting rock hyraxes and birds, and continue walking along narrow, crumbling ledges with sheer drops. As you get closer to it, you come across an interesting rock tunnel that has been carved through the ridge to give villages on the western side access to the lovely rock church of Maryam Bezuhan. The church itself is an exquisite one, and the trail there hugs the mountain and winds up to the plateau on the top.",
            "The sceneries along the walk are amazingly superb. Unlike the other lodges, on the plateau where it is located, you find here small villages scattered with local stone houses. Having an overwhelming welcoming up on your arrival, you will be served tasty local and have an elaborated traditional coffee ceremony.",
            "You can take a walk along the rim of the mountain at dusk.",
            "Overnight in Shimbriti community lodge",
          ],
          image: images.tigray7,
        },
        {
          title: "DAY 11: WALK FROM SHIMBRITI TO DEGA ARBI & DRIVE TO GHERALTA",
          description: [
            "After an enjoyable breakfast, you take your last morning on a Community walk (2 hours). You will begin by descending for 1 hour, steeply at first and then more gradually, and get on the flatter plain. You pass by the small mangrove forest which grows around the church. You are likely to encounter small cattle herders here – friendly children from the local village.",
            "You will meet your driver with the car at Dega Arbi popular for a Friday weekly market. You transfer to Gheralta Lodge (1.5 hours). Spend the rest of the day at your leisure enjoying the excursions that can be arranged from the lodge. Hiking, bird watching, and visiting the nearby rock-hewn churches are all recommended from here.",
            "Overnight in Gheralta",
          ],
          image: images.tigray8,
        },
        {
          title: "DAY 12: DRIVE TO MEKELLE & FLY TO ADDIS",
          description: [
            "This morning you will drive to Mekele, passing by another number of interesting churches and towns on the way. Carrying on towards Wukro, you first visit Abreha Atsbeha church, one of the most picturesque of the churches in the area with a beautifully decorated interior, depicting biblical scenes and saints. Having a lunch break at Wukro, head to visit Wukro Cherkos, a semi-monolithic church. Inside this crucifix-shaped church, you’ll see patterned pillars and carvings.",
            "Then drive to Mekelle to catch your flight to Addis Ababa.",
            "Overnight in Addis Ababa",
          ],
          image: images.tigray6,
        },
        {
          title: "DAY 13: DEPART FROM ADDIS ABABA",
          description: [
            "Depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 3,
    experience: 4,
    title: "Historic & Wello Community Trekking",
    index: false,
    image: images.wollo1,
    description:
      "A Journey through Ethiopia's Ancient Legacy and Cultural Riches",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Historic & Wello Community Trekking",
        subtitle:
          "A Journey through Ethiopia's Ancient Legacy and Cultural Riches",
        description: [
          "Embark on a journey through the captivating wonders of Ethiopia, where ancient traditions and breathtaking landscapes blend harmoniously. This meticulously crafted itinerary takes you on cultural exploration, from the bustling capital of Addis Ababa to the UNESCO World Heritage Sites of Lalibela's rock-hewn churches and the historical treasures of Axum.",
          "Immerse yourself in the spiritual allure of Lake Tana's monasteries and trek through the stunning scenery of the Tigray region. Witness the country's vibrant culture, encounter endemic wildlife, and marvel at architectural marvels carved from solid rock. This extraordinary adventure promises to unveil the rich tapestry of Ethiopia's heritage and its awe-inspiring natural beauty.",
        ],
        lr: true,
        img1: images.tigray4,
        img2: images.wollo1,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Discover the vibrant capital city, with its bustling markets, historical landmarks, and renowned museums.",
          },
          {
            title: "Lake Tana",
            description:
              "Cruise the tranquil waters and visit isolated monasteries, adorned with ancient murals and steeped in spirituality.",
          },
          {
            title: "Gonder",
            description:
              "Explore the medieval castles and churches, including the impressive Fasilades Castles and Debre Berhan Church.",
          },
          {
            title: "Simien Mountains",
            description:
              "Embark on a chance to walk in stunning scenery, encountering endemic wildlife and enjoying panoramic views of the rugged landscapes.",
          },
          {
            title: "Lalibela",
            description:
              "Experience the architectural wonder of Lalibela's rock-hewn churches, a testament to Ethiopia's ancient Christian heritage.",
          },
          {
            title: "Axum",
            description:
              "Uncover the historical treasures of Axum, including stelae, the Queen of Sheba's Bath, and the Church of Saint Mary of Zion.",
          },
          {
            title: "Tigray Region",
            description:
              "Trek through the awe-inspiring landscapes of the Tigray region, exploring remote rock-hewn churches and immersing yourself in the local culture.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Arrive in Addis Ababa and immerse yourself in the vibrant capital city.",
          },
          {
            title: "Day 2",
            description:
              "Explore the historical and cultural landmarks of Addis Ababa.",
          },
          {
            title: "Day 3",
            description:
              "Fly to Bahir Dar and embark on a serene cruise of Lake Tana, visiting monasteries with ancient murals.",
          },
          {
            title: "Day 4",
            description:
              "Drive to the point where you will start your community trekking.Trek from Werkhaye Mariam to Mequat Mariam, witnessing stunning landscapes and rural communities.",
          },
          {
            title: "Day 5",
            description:
              "Continue the trek to Wajela, surrounded by panoramic views of the picturesque plateau.",
          },
          {
            title: "Day 6",
            description:
              "Trek to Aterow, following the escarpment edge and enjoying encounters with local communities.",
          },
          {
            title: "Day 7",
            description:
              "Drive to Lalibela, home to the extraordinary rock-hewn churches.",
          },
          {
            title: "Day 8",
            description:
              "Explore the architectural marvels of Lalibela's rock-hewn churches.",
          },
          {
            title: "Day 9",
            description:
              "Fly to Axum and delve into the historical treasures of this ancient city.",
          },
          {
            title: "Day 10",
            description:
              "Drive to the Gheralta area and visit the impressive rock churches in the region.",
          },
          {
            title: "Day 11",
            description:
              "Discover more rock churches in the Tigray region, marveling at their architectural intricacy.",
          },
          {
            title: "Day 12",
            description:
              "Drive to Mekelle, catch a flight to Addis Ababa, and reflect on the captivating journey.",
          },
          {
            title: "Day 13",
            description:
              "Depart from Addis Ababa, carrying cherished memories of Ethiopia's cultural marvels",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: ARRIVE IN ADDIS ABABA & CITY TOUR",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, our hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel for overnight accommodation. The city enjoys an excellent climate all year round, with an average temperature of 25°C (77°F). ",
            "With a multiethnic population of over 5 million, Addis Ababa is a pleasant city with wide avenues of jacaranda trees, interesting museums, and one of the largest open-air markets in Africa, known as the “Mercato”. After your long flight and a welcome briefing, you can settle into your hotel for some rest.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "DAY 2: EXPLORE THE CITY OF ADDIS ABABA",
          description: [
            "Today you will spend the day exploring Addis Ababa, which begins with a visit to the Holy Trinity Cathedral. It is the most important Orthodox Church in Addis Ababa and has survived many historical periods, as its interesting architecture can attest. You proceed to visit the National Museum, one of the most important museums in Africa. The museum is home to the fossilized humanoid Lucy (3.5 million year-old fossils), as well as an amazing collection of artifacts, royal items, and art.",
            "After lunch, you will continue our visit to St. George’s Cathedral, built in 1896 by Emperor Menelik II. We end up the city tour by inviting you to the oldest and best coffee roaster and coffee shop-Tomoca. Not only do they serve fantastic Ethiopian coffee, but they also offer other fine coffees.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis2,
        },
        {
          title: "DAY 3: FLY TO BAHIR DAR & VISIT THE MONASTERIES ON LAKE TANA",
          description: [
            "Board a short flight to Bahir Dar where you are met and transferred to your hotel. Then you embark on a cruise of Lake Tana, the largest highland lake in Ethiopia, to visit monasteries dating back to the 14th century. Located on the forested Zege Peninsula, Azuwa Mariam is the most impressive of the southern monasteries. The walls of the church are completely covered with remarkable 16th-century murals that offer a revealing look into medieval Ethiopia.",
            "You then return to Bahir Dar for lunch at your hotel. Then you head into the colorful market. Later in the afternoon, you drive up Bezawit Hill for impressive views over the town, the Blue Nile, and of Lake Tana with its island monasteries. We aim to get here shortly before sunset to enjoy the magnificent natural light show. Afterwards, we return to our hotel.",
            "Overnight in Bahir Dar",
          ],
          image: images.bahirdar3,
        },
        {
          title: "DAY 4: TREK TO MEQUAT MARIAM",
          description: [
            "In the morning, your driver will pick you up from the hotel in Bahir Dar and transfer you to the lunch stop, Werkhaye Mariam. Enjoy a simple traditional lunch of injera & 3 vegetarian wots over coffee or tea before beginning the 3-hour walk through various villages to the escarpment edge.",
            "You will soon arrive at Mequat Mariam on the south and west-facing promontory. The guesthouse offers staggering views into the gorges below that feel the Nile system.",
            "Overnight in Mequat Mariam community lodge",
          ],
          image: images.lalibela8,
        },
        {
          title: "DAY 5: TREK TO WAJELA",
          description: [
            "Wake up to the stunning views of the guesthouse and fresh coffee. Begin today's 7-hour walk to Wajela. The walk combines sections following the escarpment edge with incredible vistas and sections across the meadows and grazing land.",
            "There are plenty of opportunities to see the communities at work. Having a lunch stop at Meskal Mikael, you then continue on the north side to the village of Wajela. Wajela Community Guesthouse is in a bucolic location in west Meket just below the top of the plateau with great views to the west and north.",
            "Overnight in Wajela community lodge",
          ],
          image: images.lalibela5,
        },
        {
          title: "DAY 6: TREK TO ATEROW",
          description: [
            "A beautiful way to start with awe-inspiring views and delicious breakfast, you head to Aterow. An enjoyable 5 hours walking, mostly along the escarpment edge with the steep basalt cliff edge eroded into protruding blocks. Stop for lunch at Gicha next to Giyorgis church before continuing the trail onto Aterow community lodge.",
            "Lunch is served by the community at Gicha by a big Giyorgis church and its lovely wooded churchyard perched on the cliff edge.",
            "Overnight in Aterow community lodge",
          ],
          image: images.tigray8,
        },
        {
          title: "DAY 7: DRIVE TO LALIBELA",
          description: [
            "This morning you have a short walk to the trail-head. You meet your vehicle that will transport you to Lalibela (approx. 2 hours drive). As you drive, you pass most through the beautiful mountains of Lasta. Lalibela is the home of the rock-hewn churches and a World Heritage Site. It is located at an altitude of 2,600 meters above sea level.",
            "Lalibela is the 8th wonder of the world; 11 rock-hewn churches have been cut out of a solid red volcanic rock, some completely hidden in deep trenches, while others stand in open quarried caves and a complex series of tunnels and narrow passageways connect the churches. Lalibela indeed offers a great opportunity for any traveler.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela4,
        },
        {
          title: "DAY 8: EXPLORE THE ROCK CHURCHES",
          description: [
            "After breakfast, you will proceed to a full day exploration of the rock-hewn churches. You start with the visiting of the first group (or the north – western cluster) of churches: Bet Medhane Alem, Bet Mariam, Bet Meskel, and Bet Danaghel.",
            "In the afternoon, you will visit the remaining rock-hewn churches of Lalibela that include the churches of Bet Gabriel - Rafael, Bet Emanuel, and Abba Libanos. Then you will continue your visit to the cruciform-shaped Bet Giorgis, the most beautiful church here. Its interior is dominated by depictions of Saint George killing the dragon. It is one of the newest and best-preserved churches.",
            "Overnight in Lalibela",
          ],
          image: images.lalibela6,
        },
        {
          title: "DAY 9: FLY TO AXUM & EXPLORE THE SIGHTSEEING",
          description: [
            "In the morning, you will fly to Axum, where you are met and transferred to your hotel. You will proceed to a full-day city tour of Axum – a UNESCO World Heritage Site. You will visit the stelae: granite monoliths dating from pre-Christian times and decorated with symbolic engravings. You also visit the Archaeological Museum, before heading to the Queen of Sheba’s Bath.",
            "This large reservoir is an excellent place to observe the local women collecting water for washing. Visit also historically important dedicatory stone dating to about 320 AD with an inscription written in three languages - Sabaean, Ge’ez (earliest written Ethiopian language), and Greek.",
            "After having a lunch break, continue on your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. It is guarded by “The Guardian” who is the only person allowed into the chapel and the only person who may set eyes on it. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. You then continue to the Queen of Sheba’s Palace. The palace area has been fully excavated and is definitely worth a look.",
            "Overnight in Axum",
          ],
          image: images.axum4,
        },
        {
          title: "DAY 10: DRIVE TO GHERALTA AREA",
          description: [
            "In the morning, continue on your visit to the church of Saint Mary of Zion. A chapel in the church is believed by many to contain The Ark of the Covenant. There is also a small museum here which contains the crowns of Ethiopian kings and other treasures. You then continue to the Queen of Sheba’s Palace. The palace area has been fully excavated and is definitely worth a look.",
            "After having lunch break, you drive across the dramatic mountainous landscapes to Gheralta. On your way, you visit the Monastery of Abba Garima which houses an impressive collection of ancient crosses, crowns, other artifacts, and the oldest illustrated Christian manuscripts dated to the fifth-sixth century. You arrive at the lodge in time to enjoy a beautiful Ethiopian sunset.",
            "Overnight in Gheralta",
          ],
          image: images.tigray7,
        },
        {
          title: "DAY 11: EXPLORE THE TIGRAY ROCK CHURCHES",
          description: [
            "After an early breakfast, head to explore the marvelous rock churches in the Gheralta cluster. A short drive takes you to closer to the foot of Korkur Mountain. It is from here you start your hiking up to the plateau. Here you will visit Mariam Korkur and Daniel Korkur rock-hewn churches.",
            "The latter one is the smallest church and has a really beautiful view of the surrounding areas. Drive back to your lodge for lunch. In the afternoon, drive to visit Mariam Papaseti church which is decorated with beautiful mural paintings.",
            "Overnight in Gheralta",
          ],
          image: images.yemata2,
        },
        {
          title: "DAY 12: DRIVE TO MEKELLE & FLY TO ADDIS",
          description: [
            "This morning you will drive to Mekele, passing by a number of interesting churches and towns on the way. Carrying on towards Wukro, you visit Abreha Atsbeha church, one of the most picturesque of the churches in the area with a beautifully decorated interior, depicting biblical scenes and saints. Then drive to Mekelle to catch your flight to Addis Ababa.",
            "Overnight in Addis Ababa",
          ],
          image: images.tigray6,
        },
        {
          title: "DAY 13: DEPARTURE",
          description: [
            "After breakfast, depending on your flight schedule, a transfer is arranged to Addis Ababa Bole international airport for the flight back home. Thanks for vacationing with Sawla Tours.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
  {
    id: 4,
    experience: 4,
    title: "Bale Mountain Trekking",
    index: false,
    image: images.bale1,
    description: "A Majestic Journey through Ethiopia's Alpine Wonderland",
    link: "/enquire",
    linkname: "Start Planning",
    intro: [
      {
        title: "Introducing Bale Mountain Trekking",
        subtitle: "A Majestic Journey through Ethiopia's Alpine Wonderland",
        description: [
          "Dive headfirst into an exploration on a mesmerizing expedition into the heart of Ethiopia's natural wonders with our exclusive itinerary, \"Bale Mountain Trekking: A Majestic Journey through Ethiopia's Alpine Wonderland.\" From the vibrant city of Addis Ababa to the serene shores of Lake Langano, and from the untamed beauty of Bale Mountains National Park to the captivating Harenna Forest, every step of this journey reveals the awe-inspiring landscapes and remarkable biodiversity of Ethiopia.",
          "Immerse yourself in the rich flora and fauna of the Bale Mountains as you trek through lush forests, encounter endemic wildlife like the Ethiopian Wolf and Mountain Nyala, and marvel at the dramatic volcanic formations that shape this extraordinary region.",
          "Let Sawla Tours be your guide to this unforgettable adventure, where nature's grandeur and Ethiopia's natural heritage converge in a symphony of breathtaking sights and unforgettable experiences.",
        ],
        lr: true,
        img1: images.bale3,
        img2: images.bale5,
        button: "Destination Highlights",
        link: "#destination-highlights",
      },
    ],
    tourdescription2: [
      {
        title: "Highlighted Destinations",
        description: "",
        destinations: [
          {
            title: "Addis Ababa",
            description:
              "Begin your adventure in Ethiopia's capital, a bustling city with vibrant markets, museums, and a unique multiethnic culture.",
          },
          {
            title: "Lake Langano",
            description:
              "Relax on the shores of this serene lake, surrounded by pristine nature and abundant wildlife.",
          },
          {
            title: "Dinsho",
            description:
              "Explore the headquarters of the Bale Mountains National Park and encounter endemic wildlife such as Menelik bushbucks and mountain nyala.",
          },
          {
            title: "Web Valley and Fincha Habera",
            description:
              "Trek through stunning landscapes, witness the meeting of rivers, and catch glimpses of the elusive Ethiopian wolf.",
          },
          {
            title: "Rafu and Sodota",
            description:
              "Discover the dramatic volcanic rock formations and enjoy panoramic views of the Bale Mountains.",
          },
          {
            title: "Gerba Guracha",
            description:
              "Take a leisurely walk around the enchanting Gerba Guracha, the largest lake in the Bale Mountains, teeming with water birds.",
          },
          {
            title: "Sanetti Plateau",
            description:
              "Trek across the high-altitude plateau, spot the Ethiopian wolf, and climb Mount Tullu Deemtu for breathtaking vistas.",
          },
          {
            title: "Harenna Forest",
            description:
              "Descend the majestic Harenna Escarpment and immerse yourself in the lush greenery of the largest rainforest in Ethiopia.",
          },
          {
            title: "Goba",
            description:
              "Visit the gateway town to the Bale Mountains, and experience the local culture and hospitality.",
          },
          {
            title: "Bale Mountains National Park",
            description:
              "Encounter diverse wildlife, including Ethiopian wolves, mountain nyala, colobus monkeys, and a plethora of bird species.",
          },
        ],
      },
      {
        title: "Itinerary at a Glance",
        description: "",
        destinations: [
          {
            title: "Day 1",
            description:
              "Arrive in Addis Ababa and experience the city's vibrant culture and history.",
          },
          {
            title: "Day 2",
            description:
              "Journey to Lake Langano, where you can unwind and enjoy various outdoor activities.",
          },
          {
            title: "Day 3",
            description:
              "Explore Dinsho and encounter endemic wildlife in the Bale Mountains National Park.",
          },
          {
            title: "Day 4",
            description:
              "Trek from Dinsho to Sodota, witnessing the beauty of the Web Valley and Fincha Habera waterfall.",
          },
          {
            title: "Day 5",
            description:
              "Trek to Keyrensa and enjoy panoramic views of the volcanic rock pillars.",
          },
          {
            title: "Day 6",
            description:
              "Continue the trek from Keyrensa to Rafu, encountering diverse wildlife and stunning landscapes.",
          },
          {
            title: "Day 7",
            description:
              'Trek from Rafu to Gerba Guracha and immerse yourself in the tranquility of the "Black Lake."',
          },
          {
            title: "Day 8",
            description:
              "Traverse the high-altitude Sanetti Plateau, spot the Ethiopian wolf, and climb Mount Tullu Deemtu.",
          },
          {
            title: "Day 9",
            description:
              "Descend to the Harenna Forest and explore its unique flora and fauna.",
          },
          {
            title: "Day 10",
            description:
              "Visit Goba and gain insight into the local culture before departing for Addis Ababa.",
          },
          {
            title: "Day 11",
            description:
              "Fly back to Addis Ababa and reflect on the remarkable adventure through the Bale Mountains.",
          },
        ],
      },
    ],
    itinerarydescription: {
      title: "Day by day Tour Itinerary",
      itineraries: [
        {
          title: "DAY 1: Arrive in Addis Ababa & City Tour",
          description: [
            "Fly to Addis Ababa; upon arrival at Bole international airport, our hospitality begins. We provide you with a meet-and-greet service at the airport and then transfer you to your hotel for overnight accommodation. The city enjoys an excellent climate all year round, with an average temperature of 25°C (77°F). With a multiethnic population of over 5 million, Addis Ababa is a pleasant city with wide avenues of jacaranda trees, interesting museums, and one of the largest open-air markets in Africa, known as the 'Mercato'. After your long flight and a welcome briefing, you can settle into your hotel for some rest.",
            "Overnight in Addis Ababa",
          ],
          image: images.addis1,
        },
        {
          title: "Day 2: Addis Ababa – Lake Langano (200km)",
          description: [
            "After Breakfast, we drive to Bishangari Lodge at the shores of Lake Langano (approx. 4 hours). Bishangari Lodge is an eco-lodge situated within genuinely preserved nature. You may relax on the beach (swimming is possible), take a walk through the lodge and encounter wild animals such as Warthogs or Olive Baboons in front of your bungalow.",
            "The lodges can arrange many activities such as trekking through the nearby forest, mountain biking, bird watching, fishing, hippo spotting or horse riding.",
            "Overnight: Lake Langanoo Bishangari Lodge",
          ],
          image: images.addis4,
        },
        {
          title: "Day 3: Lake Langano – Dinsho (250km)",
          description: [
            "After breakfast, we continue our journey through Shashemane to Dinsho, where the headquarters of the Bale Mountains National Park are located (approx. 5 hours). In the afternoon we undertake a gentle, very interesting walk around the headquarters in Dinsho and almost certainly encounter animals such as warthogs, the endemic Menelik bushbuck, or the Mountain Nyala as well as a variety of birds.",
            "Overnight: Dinsho Campsite",
          ],
          image: images.awash2,
        },
        {
          title:
            "Day 4 & 5: Trek from Dinsho to Habera and next day to Sodota (18km)",
          description: [
            "Today we trek from Dinsho through the Web Valley towards the Fincha Habera waterfall, where the Web and Wolla rivers meet. In this area, we have our first chances to see the endemic Ethiopian Wolf, as well as raptors, rock hyrax, and many more species. After refreshing us at the pleasant waterfall, we continue to Sodota.",
            "Overnight: Sodota campsite",
          ],
          image: images.lalibela8,
        },
        {
          title: "Day 6: Trek from Keyrensa to Rafu (20km)",
          description: [
            "Today the way will be steep climbing up to the Rafu campsite. We then will pass by the volcanic rock pillars near Rafu from where we enjoy spectacular panoramic views. On the way, we should see Rock Hyrax, birds of prey, cliffs springer, and other mammals.",
            "Overnight: Rafu campsite",
          ],
          image: images.chebera1,
        },
        {
          title: "Day 7: Trek from Rafu to Gerba Guracha (22km)",
          description: [
            "Today we have a long trek through the largest Afro alpine part of the African Continent, the Senneti plateau, ahead. After we reach our campsite, we will take a walk around the biggest lake in the Bale Mountains, called Gerba Guracha or 'Black Lake'. A variety of water birds usually stay around the lake.",
            "Overnight: Gerba Guracha campsite.",
          ],
          image: images.bale2,
        },
        {
          title: "Day 8: Trek from Garba Guracha to Senetti (17km)",
          description: [
            "Today it will take us approx. 5-6 hrs to explore the Senetti Plateau, usually the best place to see the Ethiopian wolf. We also will have a chance to visit the Crane Lakes and climb the 2nd highest point of Ethiopia “Mount Tullu Deemtu,” offering at an altitude 4377 m spectacular views of the surrounding areas.",
            "Highland birding includes the Abyssinian Catbird, Abyssinian Woodpecker, White-backed Black Tit, Abyssinian Ground Thrush, Yellow-crowned Canary, Somali Chestnut Winged Starling, Olive Pigeon and Mountain Buzzard.",
            "Overnight: Camp at Senetti Campsite",
          ],
          image: images.bale3,
        },
        {
          title: "Day 9 & 10: Senetti – Harenna – Goba (40km)",
          description: [
            "After breakfast, we will be met by our vehicles and we will drive from the Senetti plateau down to Harrena forest (the largest rain forest in Ethiopia), the southern part of the national park holding a unique vegetation and animals. ",
            "We explore parts of the pristine Harenna forest on foot and hopefully spot the endemic Bale monkeys as well as Colobus monkeys. In the late afternoon we will drive to Robe, where we will spend the night at the hotel.",
            "Overnight: at Robe",
          ],
          image: images.bale4,
        },
        {
          title: "Day 11: Fly to Addis Ababa",
          description: [
            "This morning you will transfer to Robe airport to your flight back to Addis Ababa. You will have the afternoon at leisure. Depending on your flight, you will be transferred to Bole airport.",
          ],
          image: images.addis4,
        },
      ],
    },
  },
];

ExperiencesPackageItineraryArray.push(...ItineraryArray);
