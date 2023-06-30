// list of packages
import Lalibela from "../assets/lalibela_2.jpeg";
import SimienMountain from "../assets/simien_2.jpg";
import Danakil from "../assets/danakil_1.jpg";
import Omo from "../assets/omo_1.jpg";
import Tigray from "../assets/tigray_1.jpg";
import BahirDar from "../assets/bahir_dar_1.jpg";
import Gonder from "../assets/gonder_1.jpeg";
import Gonder2 from "../assets/gonder_2.jpeg";
import Bale from "../assets/bale_1.jpg";
import Chebera from "../assets/chebera_1.jpg";
import Axum1 from "../assets/axum_1.jpg";
import Axum2 from "../assets/axum_2.jpg";
import Harar from "../assets/harar_1.webp";
import Gambella from "../assets/gambella_1.jpg";
import Benna1 from "../assets/benna_tribe_1.jpg";
import Abay1 from "../assets/abay_1.jpg";
import Zebra1 from "../assets/zebra_1.jpg";
import Yemata1 from "../assets/yemata_1.jpg";
import Bird1 from "../assets/bird_1.jpg";

interface Package {
  title: string;
  description: string;
  link: string;
  image: string;
  days?: number;
}
interface Package2 {
  title: string;
  description1: string;
  description2: string;
  link: string;
  img1: string;
  img2: string;
  lr: boolean;
}
export const DestinationPackagesArray: Package[] = [
  {
    title: "Lalibela: A Journey to Ethiopia's Spiritual Heart",
    description:
      "Embark on a captivating journey to Lalibela, a destination that exudes faith, mystery, and rich legends. Nestled amidst expansive valleys and rugged escarpments, Lalibela stands as the vibrant heart of spiritual Ethiopia, captivating both the mind and the soul.",
    link: "/popular/lalibela",
    image: Lalibela,
  },
  {
    title: "Discover the Majestic Simien Mountains: The roof top of Africa",
    description:
      "Welcome to the Simien Mountains, one of Ethiopia's most sought-after destinations. Nestled north of Gondar, this captivating region beckons adventurous travelers with its awe-inspiring landscapes, thrilling trekking routes, and unique wildlife encounters. Embark on a journey through 220 square kilometers of majestic peaks, plateaus, and valleys, and immerse yourself in the untouched beauty of Africa's finest mountain range.",
    link: "/popular/simien",
    image: SimienMountain,
  },
  {
    title: "Explore the Extraordinary Danakil Depression",
    description:
      "Welcome to the otherworldly Danakil Depression, an awe-inspiring geological wonder that stands as one of the most unique environments on Earth. This extraordinary destination, known as the 'hottest place on the planet,' is home to salt lakes, lava lakes, volcanoes, and vibrant acidic springs, offering a truly captivating and alien experience.",
    link: "/popular/danakil",
    image: Danakil,
  },
  {
    title: "Explore the Enchanting Omo Valley: Where Cultures Converge",
    description:
      "Journey to the captivating Omo Valley, where you'll be immersed in the traditions and diversity of the 88 cultural communities that call this remote corner of Ethiopia home. Known for its rich cultural heritage and tribal tapestry, the Omo Valley stands as a timeless crossroads of humanity, inviting you to experience a way of life steeped in history and authenticity.",
    link: "/popular/omo",
    image: Omo,
  },
  {
    title:
      "Explore the Enigmatic Tigray: Where History and Natural Beauty Unite",
    description:
      "Welcome to Tigray, a land steeped in history and blessed with awe-inspiring landscapes. This captivating region invites you to embark on a journey of discovery, where ancient rock churches, people with rich culture, stunning vistas, and luxurious lodges await. Immerse yourself in the rich heritage of Tigray, where every step unveils the secrets of a bygone era.",
    link: "/popular/tigray",
    image: Tigray,
  },
  {
    title: "Bahir Dar: Where Natural Beauty and History Unite",
    description:
      "Welcome to Bahir Dar, a picturesque city nestled on the shores of the magnificent Lake Tana in Ethiopia. This vibrant destination, known for its historic monasteries, charming lodges, exotic fish markets, beautiful lakes, and the renowned Blue Nile Falls, will leave you awe-inspired at every turn.",
    link: "/popular/bahir-dar",
    image: BahirDar,
  },
  {
    title: "Gonder: Unveiling the Camelot of Africa",
    description:
      "Welcome to Gonder, a captivating city in the Amhara region of northern Ethiopia. Known as the 'Camelot of Africa,' Gonder's rich history and magnificent architectural wonders will transport you to a bygone era.",
    link: "/popular/gonder",
    image: Gonder,
  },
  {
    title: "Discover the Enchanting Wilderness of Bale Mountains National Park",
    description:
      "Welcome to Bale Mountains National Park, one of Ethiopia's most captivating destinations. With its lush jungles, endemic wildlife, breathtaking vistas, boutique lodges, and exhilarating hiking routes, the Bale Mountains offer an unparalleled adventure in the heart of nature.",
    link: "/popular/bale",
    image: Bale,
  },
  {
    title:
      "Uncover the Untouched Wilderness of Chebera Churchura National Park",
    description:
      "Prepare to embark on an extraordinary journey into the untouched wilderness of Ethiopia at Chebera Churchura National Park. Immerse yourself in stunning landscapes, encounter unique wildlife, and embark on thrilling adventures that will leave an indelible mark on your soul. Get ready for an unforgettable experience that will awaken your sense of wonder.",
    link: "/popular/chebera-churchura",
    image: Chebera,
  },
  {
    title: "Axum: Discover the Ancient Capital of Ethiopia",
    description:
      "Welcome to Axum, the captivating ancient capital of Ethiopia. Steeped in history and cultural significance, this vibrant city will transport you back in time to the days of the legendary Axumite empire. Explore the relics that have stood the test of time and unravel the mysteries of this remarkable destination.",
    link: "/popular/axum",
    image: Axum1,
  },
  {
    title: "Harar: A Journey to Ancient Splendor",
    description:
      "Step into the enchanting city of Harar, one of Ethiopia's oldest and most revered destinations. This UNESCO World Heritage Site, nestled on the eastern border of the Somali region, offers a spiritual ambiance that transports you back to medieval times, immersing you in a unique atmosphere found nowhere else in Ethiopia.",
    link: "/popular/harar",
    image: Harar,
  },
  {
    title: "Discover the Untamed Wilderness of Gambella National Park",
    description:
      "Welcome to Gambella National Park, a captivating destination that beckons adventurous travelers with its untouched wilderness, unique wildlife, and thrilling adventures. Nestled in the heart of the Gambella region, this remote park offers a truly unforgettable experience that will awaken your sense of wonder.",
    link: "/popular/gambella",
    image: Gambella,
  },
];

export const EthiopiaTourPackagesArray: Package[] = [
  {
    title: "Historic Tours in Ethiopia",
    description:
      "Embark on an extraordinary journey through Ethiopia's Historic Tours, where ancient wonders and vibrant cultures intertwine harmoniously. Discover the storied treasures that define Ethiopia's identity, from the rock-hewn churches of Tigray to the awe-inspiring city of Axum. Traverse the famed Historic Route, immersing yourself in architectural marvels and breathtaking landscapes, while uncovering hidden gems that captivate the intrepid explorer. Ethiopia's Historic and Cultural Tours offer an unforgettable odyssey, celebrating a rich history and diverse cultures untouched by colonialism.",
    link: "ethiopia/historic",
    image: Axum2,
  },
  {
    title: "Tribal Ethiopia Tours",
    description:
      "Explore the richness of Ethiopia's Cultural Tours, where diverse cultures converge. Experience the vibrant tapestry of cultural diversity unlike anywhere else in Africa. From stunning landscapes to iconic monuments and fascinating wildlife, every part of your journey is infused with a vibrant cultural essence that brings it to life.",
    link: "ethiopia/tribal",
    image: Benna1,
  },
  {
    title: "Festivals and Special Events",
    description:
      "Experience the vibrant world of Ethiopian festivals, where ancient traditions come alive through colorful celebrations and powerful spiritual energy. Immerse yourself in the heart and soul of Ethiopian culture, creating unforgettable moments that will stay with you forever.",
    link: "ethiopia/festivals",
    image: Gonder2,
  },
  {
    title: "Adventure Tours in Ethiopia",
    description:
      "The Adventure Tours in Ethiopia offer a thrilling experience for those seeking an adrenaline-packed vacation. The tours include trekking through stunning landscapes, such as the Simien and Bale Mountains, where you will encounter unique flora and fauna, including the iconic Gelada baboons and the elusive Ethiopian wolf. For rock climbers, experienced guides will help navigate the challenging terrain, ensuring safety at all times. Paragliding tours offer a chance to soar above Ethiopia's stunning landscapes, while white water rafting tours provide a wild ride through thrilling rapids. Hot air ballooning tours offer a tranquil journey through Ethiopia's skies, providing breathtaking views of the country's majestic landscapes. Throughout your journey, experienced guides will ensure your safety and comfort. Come explore the wild side of Ethiopia and discover the adventure of a lifetime!",
    link: "ethiopia/adventure",
    image: Abay1,
  },
  {
    title: "Photography Tours in Ethiopia",
    description:
      "Photography tour in Ethiopia, a paradise for photographers. Capture stunning images of the fine church architecture of Lalibela, the breathtaking landscapes of the Ethiopian Highlands, vibrant festivals, bustling local markets, the unique lifestyles of the Omo Valley tribes, and the colorful birdlife of Ethiopia. The opportunities for capturing stunning photographs in Ethiopia are endless, and we at Sawla Tours are dedicated to providing exceptional tour itineraries that cater specifically to the needs of photographers.",
    link: "ethiopia/photography",
    image: Yemata1,
  },
  {
    title: "Wildlife Tours in Ethiopia",
    description:
      "Ethiopia is a country with diverse landscapes and abundant wildlife. If you are a wildlife enthusiast, you are in for a treat. Ethiopia offers some of the best wildlife tours in Africa, with its stunning national parks, game reserves, and sanctuaries that provide visitors with an opportunity to see a wide range of animals in their natural habitat.",
    link: "ethiopia/wildlife",
    image: Zebra1,
  },
  {
    title: "Bird Watching Tours in Ethiopia",
    description:
      "Ethiopia, a haven for bird enthusiasts, unveils a treasure trove of avian wonders. From the endemic Ethiopian Siskin to the elusive Blue-winged Goose, the country's diverse landscapes and abundant habitats make it a paradise for birding, offering a feast for both the eyes and the soul.",
    link: "ethiopia/bird-watching",
    image: Bird1,
  },
];
export const TopEthiopiaTourPackagesArray: Package[] = [
  {
    title: "Tribal Ethiopia Tours",
    description:
      "Explore the richness of Ethiopia's Cultural Tours, where diverse cultures converge. Experience the vibrant tapestry of cultural diversity unlike anywhere else in Africa. From stunning landscapes to iconic monuments and fascinating wildlife, every part of your journey is infused with a vibrant cultural essence that brings it to life.",
    link: "ethiopia/tribal",
    image: Benna1,
  },
  {
    title: "Festivals and Special Events",
    description:
      "Experience the vibrant world of Ethiopian festivals, where ancient traditions come alive through colorful celebrations and powerful spiritual energy. Immerse yourself in the heart and soul of Ethiopian culture, creating unforgettable moments that will stay with you forever.",
    link: "ethiopia/festivals",
    image: Gonder2,
  },
  {
    title: "Adventure Tours in Ethiopia",
    description:
      "The Adventure Tours in Ethiopia offer a thrilling experience for those seeking an adrenaline-packed vacation. The tours include trekking through stunning landscapes, such as the Simien and Bale Mountains, where you will encounter unique flora and fauna, including the iconic Gelada baboons and the elusive Ethiopian wolf. For rock climbers, experienced guides will help navigate the challenging terrain, ensuring safety at all times. Paragliding tours offer a chance to soar above Ethiopia's stunning landscapes, while white water rafting tours provide a wild ride through thrilling rapids. Hot air ballooning tours offer a tranquil journey through Ethiopia's skies, providing breathtaking views of the country's majestic landscapes. Throughout your journey, experienced guides will ensure your safety and comfort. Come explore the wild side of Ethiopia and discover the adventure of a lifetime!",
    link: "ethiopia/adventure",
    image: Abay1,
  },
  {
    title: "Photography Tours in Ethiopia",
    description:
      "Photography tour in Ethiopia, a paradise for photographers. Capture stunning images of the fine church architecture of Lalibela, the breathtaking landscapes of the Ethiopian Highlands, vibrant festivals, bustling local markets, the unique lifestyles of the Omo Valley tribes, and the colorful birdlife of Ethiopia. The opportunities for capturing stunning photographs in Ethiopia are endless, and we at Sawla Tours are dedicated to providing exceptional tour itineraries that cater specifically to the needs of photographers.",
    link: "ethiopia/photography",
    image: Yemata1,
  },
  {
    title: "Wildlife Tours in Ethiopia",
    description:
      "Ethiopia is a country with diverse landscapes and abundant wildlife. If you are a wildlife enthusiast, you are in for a treat. Ethiopia offers some of the best wildlife tours in Africa, with its stunning national parks, game reserves, and sanctuaries that provide visitors with an opportunity to see a wide range of animals in their natural habitat.",
    link: "ethiopia/wildlife",
    image: Zebra1,
  },
];

export const EthiopiaTourPackagesArray2: Package2[] = [];
