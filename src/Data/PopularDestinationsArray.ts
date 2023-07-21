import Images from "./Images";

export interface Destination {
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
    subtitle?: string;
    lr: boolean;
    img1: string;
    img2: string;
    button: string;
    link: string;
  }[];
  destinationdescription: {
    destination: string;
    reasons: {
      title: string;
      description: string[];
      image: string;
    }[];
  };
}
const images = Images;
export const PopularDestinationsArray: Destination[] = [
  {
    id: 1,
    title: "Lalibela",
    description: "A Journey to Ethiopia's Spiritual Heart",
    image: images.lalibela4,
    link: "#description",
    linkname: "Read More",
    index: false,
    intro: [
      {
        img1: images.lalibela2,
        img2: images.lalibela3,
        title: "Lalibela",
        subtitle: "A Journey to Ethiopia's Spiritual Heart",
        description: [
          "Embark on a captivating journey to Lalibela, a destination that exudes faith, mystery, and rich legends. Nestled amidst expansive valleys and rugged escarpments, Lalibela stands as the vibrant heart of spiritual Ethiopia, captivating both the mind and the soul.",
        ],
        lr: true,
        button: "Why Lalibela?",
        link: "#why",
      },
      {
        img1: images.lalibela2,
        img2: images.lalibela3,
        title: "Why Lalibela?",
        subtitle: "A Journey to Ethiopia's Spiritual Heart",
        description: [
          "Lalibela and its surrounding highlands hold a profound significance in Ethiopian Christianity. Immerse yourself in the spiritual tapestry of this sacred land and let Sawla Tours guide you on a journey that will leave an indelible mark on your soul.",
        ],
        lr: false,
        button: "Start Planning",
        link: "/enquire",
      },
    ],
    destinationdescription: {
      destination: "Why Visit Lalibela?",
      reasons: [
        {
          title: "The Rock Churches of Lalibela",
          description: [
            "In the 12th century, King Lalibela sought to recreate Jerusalem in Ethiopia, leaving behind a legacy that defies architectural norms. Rather than building towering structures, Lalibela carved magnificent churches out of the volcanic rock beneath his feet. Today, you can explore 11 rock-hewn churches, including the iconic Bet Giyorgis standing gloriously on its own, beckoning visitors to marvel at its beauty.",
            "These churches are divided into two main clusters. The northern cluster exhibits remarkable cohesion and order, suggesting a master plan carefully executed by King Lalibela himself. In contrast, the southern cluster reveals a more organic and ancient feel, with its irregular layout and worn steps, igniting the imagination of visitors. These architectural wonders, whether carved monoliths or existing rock faces, transport you to a bygone era of devotion and artistic mastery.",
          ],
          image: images.lalibela6,
        },
        {
          title: "Highland Monasteries in Lalibela",
          description: [
            "Venture beyond the town center and ascend the rugged mountains surrounding Lalibela to discover ancient monasteries that predate their counterparts below. As you navigate the rocky terrain, breathtaking vistas unfold before your eyes, rewarding your efforts with unparalleled views stretching far and wide.",
            "The highland monasteries offer a tranquil retreat from the bustling town, allowing you to soak in the serene ambiance and appreciate the religious significance of these remote sanctuaries.",
          ],
          image: images.lalibela5,
        },
        {
          title: "Yemrehanna Krestos Monastery",
          description: [
            "A short distance from Lalibela lies the remarkable Yemrehanna Krestos, a cluster of churches built into the cliff-face near the town of Bilbilla. This architectural marvel blends layers of wood, granite, and gypsum in a stunning display of Axumite craftsmanship.",
            " As you step inside, you are enveloped in an atmosphere steeped in history and devotion. Silhouetted priests and the scent of burning incense add to the ethereal allure. Resting within the monastery are the remains of over 10,000 pilgrims, a poignant reminder of the deep spiritual connection that endures in this sacred place.",
          ],
          image: images.lalibela7,
        },
        {
          title: "Asheton Maryam Monastery",
          description: [
            "Carved into the western slopes of Mount Abuna Yoseph, the Asheton Maryam monastery stands as a testament to the enduring Ethiopian Christian heritage. While its architecture may seem simpler compared to the rock-hewn churches, the true allure lies in the breathtaking mountain vistas that accompany your ascent.",
            "The journey to Asheton Maryam takes you through rural villages and narrow paths, offering glimpses into local life. As you arrive, immerse yourself in the monastery's serenity, guided by a resident priest who welcomes visitors with open arms. Admire the sacred artifacts, intricate wall paintings, and the stunning Bible adorned with colorful illustrations, gifted by the priest for all to see.",
          ],
          image: images.lalibela8,
        },
        {
          title: "Na'akuto La'ab Monastery",
          description: [
            "Just 7km from Lalibela, the Na'akuto La'ab Monastery awaits, nestled within a cave complex that houses holy pools fed by natural springs. This humble church, attributed to King Lalibela's nephew, provides a tranquil setting to appreciate the surrounding Amhara countryside and witness the breathtaking sunset over Lalibela.",
            "Inside, ancient relics, crosses, and illuminated bibles offer glimpses into Ethiopia's rich history and spiritual legacy. Discover the stories that unfold as you explore the monastery, guided by the friendly resident priests who ensure that centuries-old traditions continue to thrive.",
          ],
          image: images.lalibela2,
        },
      ],
    },
  },
];
