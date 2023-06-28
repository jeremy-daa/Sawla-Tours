// list of packages
import Lalibela from "../assets/lalibela_2.jpeg";
import SimienMountain from "../assets/simien_2.jpg";
import Danakil from "../assets/danakil_1.jpg";
import Omo from "../assets/omo_1.jpg";
import Tigray from "../assets/tigray_1.jpg";
import BahirDar from "../assets/bahir-dar_1.jpg";
import Gonder from "../assets/gonder_1.jpeg";
import Bale from "../assets/bale_1.jpg";
import Chebera from "../assets/chebera_1.jpg";
import Axum from "../assets/axum_1.jpg";
import Harar from "../assets/harar_1.webp";
import Gambella from "../assets/gambella_1.jpg";

interface Package {
  title: string;
  description: string;
  link: string;
  image: string;
}
const PackagesArray: Package[] = [
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
    image: Axum,
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
export default PackagesArray;
