import Images from "./Images";

export interface Guide {
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
  content: {
    destinationdescription: {
      destination: string;
      reasons: {
        title: string;
        description: string[];
        image: string;
      }[];
    };
    simpledescription: {
      title: string;
      description?: {
        title: string;
        description: string[];
      }[];
    };
  }[];
}
const images = Images;

export const EthiopiaGuideArray: Guide[] = [
  {
    id: 1,
    title: "Ethiopia Travel Circuits",
    description: "",
    image: images.lalibela4,
    link: "#description",
    linkname: "Read More",
    index: false,
    intro: [
      {
        title: "Ethiopia Travel Circuits",
        subtitle:
          "A land that will captivate your senses and leave you longing for more.",
        description: [
          "In this diverse and awe-inspiring nation, you'll uncover the secrets of four distinct travel circuits, each with its own highlight destinations and unique experiences. From the timeless tapestry of the Northern Circuit, where ancient wonders and natural marvels await, to the Southern Circuit's canvas of breathtaking landscapes and vibrant cultures, Ethiopia has something for every traveler.",
          "enture into the Eastern Circuit, where hidden gems and remarkable diversity abound, or unleash your adventurous spirit in the Western Circuit, where untamed beauty and rare encounters await. So, browse through the information on each circuit's highlight destinations and embark on a journey that will create memories to last a lifetime. Your Ethiopian journey begins in Addis Ababa, the gateway to this mesmerizing land.",
        ],
        lr: true,
        img1: images.lalibela5,
        img2: images.bale2,
        button: "Explore Packages",
        link: "/tours-by-experience",
      },
    ],
    content: [
      {
        destinationdescription: {
          destination: "The Northern Circuit",
          reasons: [
            {
              title: "A Timeless Tapestry",
              description: [
                "Prepare to be enchanted by the treasures of the north. This region is an unrivaled destination that will leave you spellbound day after day. Known as the Historical Circuit, it boasts a legacy of over two millennia, with ancient wonders waiting to be discovered at every turn. From the towering obelisks of Aksum and the majestic castles of Gonder to the astonishing rock-hewn churches of Lalibela and Tigray, the northern circuit is a testament to human ingenuity and spiritual devotion.",
                "Nature's artistry flourishes here as well, with the Simien Mountains National Park offering breathtaking vistas and the chance to encounter rare gelada baboons and Walia ibex. Mother Nature's creativity is boundless, with the otherworldly Danakil Depression beckoning adventurous souls with its lava lakes and sulphuric plains. Prepare to be captivated by canyons and peaks that adorn this magnificent land. Even with a few weeks, you'll only scratch the surface of what the north has to offer, leaving you longing for more.",
              ],
              image: images.axum2,
            },
          ],
        },
        simpledescription: {
          title: "Highlights of Northern Ethiopia",
          description: [
            {
              title: "Lalibela",
              description: [
                "Immerse yourself in the raw and powerful Christianity showcased in the mind-blowing rock-hewn churches.",
              ],
            },
            {
              title: "Simien Mountains",
              description: [
                "Trek alongside Abyssinian abysses, accompanied by curious gelada monkeys.",
              ],
            },
            {
              title: "Tigray rock churches and Gheralta Escarpment",
              description: [
                "Explore the oldest and most magnificent rock-hewn churches of Tigray.",
              ],
            },
            {
              title: "Danakil Depression",
              description: [
                "Witness the surreal landscapes, from sulphuric wonders to bubbling lava lakes.",
              ],
            },
            {
              title: "Gonder",
              description: [
                "Roam the hallowed halls of royal retreats and admire the intricate church paintings at Debre Birhan Silassie.",
              ],
            },
            {
              title: "Tesfa community trekking",
              description: [
                "Embark on a journey far from urban life and connect intimately with the locals in Lalibela or Tigray.",
              ],
            },
            {
              title: "Axum",
              description: [
                "Uncover hidden treasures in the ancient Aksumite tombs beneath glorious stelae.",
              ],
            },
            {
              title: "Lake Tana",
              description: [
                "Delight in the abundant birdlife of this UNESCO biosphere reserve, dotted with colorful monasteries.",
              ],
            },
            {
              title: "Menz-Guassa Community Conservation Area",
              description: [
                "Witness the Ethiopia wolf in its pristine habitat on a community trek.",
              ],
            },
            {
              title: "Kafta Shiraro National Park",
              description: [
                "Spot Africa's most northerly herd of elephants as they migrate between Ethiopia and Eritrea.",
              ],
            },
            {
              title: "The Danakil Depression",
              description: [
                "Encounter the volcanoes of Erta Ale and Dallol, along with the mesmerizing salt lakes. Mekele serves as the gateway to this extraordinary region.",
              ],
            },
          ],
        },
      },
      {
        destinationdescription: {
          destination: "The Southern Circuit",
          reasons: [
            {
              title: "Nature's Canvas Unleashed",
              description: [
                "Embark on a thrilling adventure through the canvas of southern Ethiopia, where the Great Rift Valley tears the land asunder, revealing a spectacle of lakes teeming with crocodiles, hippos, and an abundance of avian life. This region is a wildlife paradise, with national parks boasting unique ecosystems and endemic species. Marvel at the extraordinary birdlife, encounter rare wildlife, and indulge in the breathtaking scenery that makes the south an absolute paradise.",
                "Embark on a thrilling adventure through the canvas of southern Ethiopia, where the Great Rift Valley tears the land asunder, revealing a spectacle of lakes teeming with crocodiles, hippos, and an abundance of avian life. This region is a wildlife paradise, with national parks boasting unique ecosystems and endemic species. Marvel at the extraordinary birdlife, encounter rare wildlife, and indulge in the breathtaking scenery that makes the south an absolute paradise.",
              ],
              image: images.hawassa1,
            },
          ],
        },
        simpledescription: {
          title: "Highlights of the Southern Circuit",
          description: [
            {
              title: "The Rift Valley lakes",
              description: [
                "Explore the renowned lakes, renowned for their abundant birdlife and captivating avian species.",
              ],
            },
            {
              title: "Bale Mountain National Park",
              description: [
                "Trek through this sublime national park and encounter the world's rarest canid, the Ethiopian wolf.",
              ],
            },
            {
              title: "Key Afer market",
              description: [
                "Immerse yourself in the vibrant atmosphere of tribal markets in the Lower Omo Valley, where you can barter for unique treasures.",
              ],
            },
            {
              title: "Konso Villages",
              description: [
                "Lose yourself in the labyrinthine traditional villages that offer a glimpse into ancient ways of life.",
              ],
            },
            {
              title: "Harenna Forest",
              description: [
                "Step into a fairy-tale forest as you hike through the country's second-largest forest.",
              ],
            },
            {
              title: "Maze National Park",
              description: [
                "Marvel at the magnificent Swayne's heartbeest, ensuring your presence doesn't startle these majestic creatures.",
              ],
            },
            {
              title: "Mursi and Hammer villages",
              description: [
                "Experience the raw and wild essence of African tribal life in these captivating villages.",
              ],
            },
            {
              title: "Bull-jumping ceremony",
              description: [
                "Observe the elaborate rite of passage as young men transition into adulthood through this traditional ceremony.",
              ],
            },
          ],
        },
      },
      {
        destinationdescription: {
          destination: "The Eastern Circuit",
          reasons: [
            {
              title: "Unveiling Hidden Gems",
              description: [
                "Venture into the Eastern Circuit, where hidden gems await amidst a seemingly stark landscape of acacia scrub and unassuming towns. Amidst this backdrop, you'll discover genuine adventures that are truly unforgettable. The crown jewel of the east is the walled city of Harar, a place shrouded in myth and history. Delight in the enchanting maze of alleyways within the old town, and don't miss the mesmerizing experience of witnessing the famed hyena feeding after nightfall.",
                "The city of Dire Dawa, a delightful blend of colonial and rural influences, adds to the eccentricity of the region. Nature lovers will find solace in the Babille Elephant Sanctuary and Awash National Park, where volcanic landscapes take center stage alongside remarkable wildlife sightings. The Halledeghe Wildlife Reserve, often overlooked, is home to endangered species such as Grevy's zebra and striped hyenas, making it a hidden treasure for wildlife enthusiasts.",
                "The Eastern Circuit not only showcases captivating landscapes but also celebrates Ethiopia's cultural tapestry. It's a region where the Afar people tread the same lands as the earliest recorded hominids. Experience a place of remarkable remoteness and diversity that will leave an indelible mark on your soul.",
              ],
              image: images.harar1,
            },
          ],
        },
        simpledescription: {
          title: "Highlights of the Eastern Circuit",
          description: [
            {
              title: "Debre Zeyit/ Bishoftu",
              description: [
                "Unwind at a beautiful lakeside resort, immersing yourself in tranquility.",
              ],
            },
            {
              title: "Awash National Park",
              description: [
                "Take a tour of this popular park known for its outstanding birdlife and diverse landscapes.",
              ],
            },
            {
              title: "Halledeghe Wildlife Reserve",
              description: [
                "Embark on a thrilling game drive to spot the critically endangered Grevy's zebra and striped hyenas.",
              ],
            },
            {
              title: "Harar's Old Town",
              description: [
                "Explore the magical alleyways and witness the famous hyena feeding ritual after nightfall, an experience that blends history and mystique.",
              ],
            },
            {
              title: "Babille Elephant Sanctuary",
              description: [
                "Step out of the car and embark on a thrilling foot safari to track elephants in this underrated wildlife reserve.",
              ],
            },
            {
              title: "Harar's market",
              description: [
                "Immerse yourself in the vibrant colors and lively atmosphere of the daily market, a true feast for the senses.",
              ],
            },
            {
              title: "Babille Camel Market",
              description: [
                "Lose yourself in the lively livestock market, where dreams of owning a desert ship may take hold.",
              ],
            },
          ],
        },
      },
      {
        destinationdescription: {
          destination: "The Western Circuit",
          reasons: [
            {
              title: "Unleash Your Adventurous Spirit",
              description: [
                "Prepare to enter the 'Wild West' of Ethiopia, where untamed beauty and rare encounters await. Western Ethiopia is a hidden gem, seldom visited yet boasting some of the most breathtaking landscapes in the country. Dense rainforests, coffee plantations, and agricultural towns coexist with sprawling savannah grasslands, wildlife-filled swamps, and high plateaus adorned with fertile crop fields. The Kafa Biosphere Reserve, with its rich biodiversity and countless species, including over 300 types of trees, is a testament to the region's natural wonders.",
                "However, it is the ethnic diversity that truly captivates in the Western Circuit. Highlanders clad in white robes flock to churches, while the lowlands are home to Surmi women with their iconic lip plates and men adorned in white, resembling spirits of the night. On the border with South Sudan, the Nuer people proudly stride across the grasslands, their long-horned cattle by their side, bearing ritual scars. This region will make you feel as if you've reached the edge of the world, yet it's merely the beginning of an unforgettable journey.",
              ],
              image: images.surma1,
            },
          ],
        },
        simpledescription: {
          title: "Highlights of the Western Circuit",
          description: [
            {
              title: "Mt Wenchi",
              description: [
                "Embark on a scenic descent into the picturesque lake-filled crater, riding aboard a scrawny horse.",
              ],
            },
            {
              title: "Kafa Biosphere Reserve",
              description: [
                "Venture into Ethiopia's largest forest, dominated by the majestic coffee trees, and trek through wildlife-rich surroundings.",
              ],
            },
            {
              title: "Chebera Churchura National Park",
              description: [
                "Explore the last stronghold for African elephants in Ethiopia, a paradise for wildlife enthusiasts.",
              ],
            },
            {
              title: "Gambella National Park",
              description: [
                "Be among the privileged few to witness one of the most extraordinary migrations of large mammals on Earth—the white-eared kob migration.",
              ],
            },
            {
              title: "Suri Villages",
              description: [
                "Immerse yourself in the raw and wild essence of African tribal life in the endlessly fascinating southwest Omo Valley.",
              ],
            },
            {
              title: "Omo National Park",
              description: [
                "Discover a spectacular array of fauna and flora in this captivating national park.",
              ],
            },
          ],
        },
      },
    ],
  },
];
