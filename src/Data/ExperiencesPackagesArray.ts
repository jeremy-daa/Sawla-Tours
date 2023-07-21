import Images from "./Images";
export interface ExperiencePackage {
  id: number;
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
  packageslist: {
    title: string;
    description: string;
    packages: {
      title: string;
      description: string;
      link: string;
      image: string;
      days?: number;
    }[];
  };
}
const images = Images;

export const ExperiencesPackagesArray: ExperiencePackage[] = [
  {
    id: 1,
    title: "Historic and Cultural Tours",
    description: "",
    image: images.gonder3,
    link: "/enquire",
    linkname: "Start Planning",
    index: false,
    intro: [
      {
        title: "The Extraordinary journey through Ethiopia's Historic Sites",
        description: [
          "Embark on an extraordinary journey through Ethiopia's Historic Tours, where ancient wonders and vibrant cultures intertwine harmoniously. Discover the storied treasures that define Ethiopia's identity, from the rock-hewn churches of Tigray to the awe-inspiring city of Axum.",
          "Traverse the famed Historic Route, immersing yourself in architectural marvels and breathtaking landscapes, while uncovering hidden gems that captivate the intrepid explorer. Ethiopia's Historic and Cultural Tours offer an unforgettable odyssey, celebrating a rich history and diverse cultures untouched by colonialism.",
        ],
        lr: true,
        img1: images.axum1,
        img2: images.tigray2,
        button: "Start Planning",
        link: "/enquire",
      },
    ],
    packageslist: {
      title: "Iteneraries included",
      description:
        "Below are some of our most popular itineraries in the historic and cultural category. We can also customize any of these itineraries or create a new one from scratch.",
      packages: [
        {
          title: "Footsteps of History: \nUnveiling Ethiopia's Ancient Legacy",
          description:
            "A captivating 8-day journey through Ethiopia, where the echoes of ancient civilizations and the grandeur of nature converge. This thoughtfully crafted tour invites history enthusiasts to delve into the rich cultural heritage of Ethiopia, from the vibrant streets of Addis Ababa to the architectural wonders of Gonder and the awe-inspiring rock-hewn churches of Lalibela. Traverse the majestic Simien Mountains, walking amidst breathtaking plateaus and gorges. Each destination on this itinerary reveals the storied past of Ethiopia, offering a profound understanding of its historical significance. Join us on this enchanting expedition as we unravel the ancient secrets and monumental legacies of this extraordinary land.",
          link: "/tours-by-experience/1/1",
          image: images.axum3,
          days: 8,
        },
        {
          title:
            "Ethiopian Odyssey: \nFrom Ancient Churches to Majestic Landscapes",
          description:
            "An expedition through Ethiopia's ancient wonders, tailored for the passionate historic enthusiast. This immersive tour unveils the country's rich cultural heritage, from the bustling city of Addis Ababa to the enchanting rock-hewn churches of Lalibela, the royal castles of Gonder, and the UNESCO World Heritage Sites of Axum and Harar. Along the way, we'll delve into the majestic Simien Mountains National Park, visit isolated churches on Lake Tana, and explore the fascinating Tigray rock churches. From remarkable architecture to mystical landscapes, this journey will transport you back in time and leave you in awe of Ethiopia's enduring historical legacy.",
          link: "/tours-by-experience/1/2",
          image: images.lalibela5,
          days: 12,
        },
        {
          title:
            "Ethiopian Odyssey: \nUnveiling Ancient Churches and Majestic Landscapes",
          description:
            "A captivating 11-day journey through Ethiopia, a land steeped in history and adorned with breathtaking landscapes that will leave you spellbound. This thoughtfully curated itinerary takes you on an immersive exploration of Ethiopia's cultural heritage and natural wonders. From the bustling streets of Addis Ababa to the tranquil shores of Lake Tana, discover the hidden gems of this enchanting country. Marvel at the medieval castles and ornate churches of Gondar, once the royal capital. Immerse yourself in the awe-inspiring beauty of the Simien Mountains, where panoramic vistas and abundant wildlife await your discovery. Experience the architectural marvels of Lalibela's rock-hewn churches, carved meticulously from solid volcanic rock. Explore the ancient treasures of Axum, where legends of the Queen of Sheba and the Ark of the Covenant come to life. Delve into the mystical allure of the Gheralta area, home to the enigmatic Tigray rock churches. As your journey draws to a close, you'll return to Addis Ababa, carrying with you the indelible memories of Ethiopia's timeless charm and spiritual grandeur.",
          link: "/tours-by-experience/1/3",
          image: images.yemata2,
          days: 11,
        },
        {
          title:
            "Ethiopian Splendors: \nUnveiling Ancient Wonders and Natural Beauty",
          description:
            "An unforgettable 11-day journey through Ethiopia, a land of ancient wonders and breathtaking landscapes. This meticulously crafted itinerary that promises an extraordinary adventure. From the vibrant capital of Addis Ababa to the serene shores of Lake Tana, prepare to immerse yourself in the rich cultural tapestry and awe-inspiring beauty of this remarkable country. Explore the medieval castles and ornate churches of Gondar, known as the \"Camelot of Africa.\" Marvel at the majestic Simien Mountains, where dramatic scenery and endemic wildlife captivate the senses. Experience the ethereal allure of Lalibela's rock-hewn churches, masterpieces carved into solid volcanic rock. Journey to Axum, the ancient capital of the Aksumite Empire, and trace the footsteps of legendary Queen of Sheba. Delve into the mystique of the Tigray region, where hidden rock-hewn treasures await discovery. As your journey draws to a close, you'll return to Addis Ababa, carrying cherished memories of Ethiopia's timeless wonders.",
          link: "/tours-by-experience/1/4",
          image: images.lalibela4,
          days: 11,
        },
        {
          title:
            "Ethiopian Odyssey: \nUnveiling Ancient Marvels and Majestic Landscapes",
          description:
            'Embark on a captivating journey through the heart of Ethiopia, where ancient wonders and awe-inspiring landscapes await your discovery. From the bustling streets of Addis Ababa to the tranquil shores of Lake Tana, prepare to immerse yourself in the captivating cultural heritage and breathtaking beauty of this extraordinary nation. Explore the medieval castles and magnificent churches of Gondar, often referred to as the "Camelot of Africa." Traverse the dramatic landscapes of the Simien Mountains National Park, a UNESCO World Heritage Site, where encounters with endemic wildlife and sweeping vistas will leave you spellbound. Discover the ancient wonders of Axum, the legendary capital of the Aksumite Empire, and be awestruck by the rock-hewn churches of Lalibela, a testament to human ingenuity and devotion. Your journey will also take you to the enigmatic Tigray region, where hidden rock-hewn treasures await, before culminating in Addis Ababa, where you\'ll bid farewell to this captivating land.',
          link: "/tours-by-experience/1/5",
          image: images.danakil3,
          days: 13,
        },
        {
          title:
            "Journey Through Time: \nUnveiling Ethiopia's Historic Treasures",
          description:
            "An extraordinary adventure through the captivating history of Ethiopia with our meticulously crafted itinerary. This trip is tailored for the avid historic enthusiast, offering a unique opportunity to explore the country's ancient sites, rock-hewn churches, and legendary landmarks. Immerse yourself in the rich cultural tapestry of Ethiopia as we take you on a journey through time, unveiling the secrets of centuries past. From Addis Ababa to Gonder, Lalibela to Axum, and Harar, each destination holds its own mesmerizing tales waiting to be discovered. Join us as we delve into Ethiopia's architectural wonders, religious artifacts, and majestic landscapes, creating memories that will last a lifetime.",
          link: "/tours-by-experience/1/6",
          image: images.axum4,
          days: 11,
        },
      ],
    },
  },
];
