// react icon forwared arrow and back arrow
import Lalibela1 from "../assets/lalibela_1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper";
import Card from "./Card";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { useEffect, useState } from "react";

const Slider = () => {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newSize = 0;

      if (width >= 1024) {
        newSize = 3;
      } else if (width >= 650) {
        newSize = 2;
      } else {
        newSize = 1;
      }

      setScreenSize(newSize);
    };

    // Initial screen size check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="slider-wrapper">
      <h1 className="slider-title">Our Popular Ethiopian Tours</h1>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={screenSize}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation, EffectCoverflow]}
        effect="coverflow"
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="slider"
      >
        <SwiperSlide>
          <Card
            image={Lalibela1}
            title="1"
            description="An extraordinary journey to Ethiopia, immersing yourself in the joyous festivities of Genna, the Ethiopian Christmas. This meticulously crafted itinerary takes you on a captivating exploration of..."
            link="/experiences/genna-jubilation"
            days={9}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image={Lalibela1}
            title="2"
            description="An extraordinary journey to Ethiopia, immersing yourself in the joyous festivities of Genna, the Ethiopian Christmas. This meticulously crafted itinerary takes you on a captivating exploration of..."
            link="/experiences/genna-jubilation"
            days={9}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image={Lalibela1}
            title="3"
            description="An extraordinary journey to Ethiopia, immersing yourself in the joyous festivities of Genna, the Ethiopian Christmas. This meticulously crafted itinerary takes you on a captivating exploration of..."
            link="/experiences/genna-jubilation"
            days={9}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image={Lalibela1}
            title="4"
            description="An extraordinary journey to Ethiopia, immersing yourself in the joyous festivities of Genna, the Ethiopian Christmas. This meticulously crafted itinerary takes you on a captivating exploration of..."
            link="/experiences/genna-jubilation"
            days={9}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image={Lalibela1}
            title="5"
            description="An extraordinary journey to Ethiopia, immersing yourself in the joyous festivities of Genna, the Ethiopian Christmas. This meticulously crafted itinerary takes you on a captivating exploration of..."
            link="/experiences/genna-jubilation"
            days={9}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image={Lalibela1}
            title="6"
            description="An extraordinary journey to Ethiopia, immersing yourself in the joyous festivities of Genna, the Ethiopian Christmas. This meticulously crafted itinerary takes you on a captivating exploration of..."
            link="/experiences/genna-jubilation"
            days={9}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Slider;
