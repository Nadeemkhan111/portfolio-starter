import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      reveiw:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos aspernatur voluptates praesentium molestias eaque ipsam sint excepturi earum nam animi esse laboriosam iure eveniet mollitia, sunt, fugiat cum. Sapiente.",
    },
    {
      img: profilePic2,
      reveiw:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos aspernatur voluptates praesentium molestias eaque ipsam sint excepturi earum nam animi esse laboriosam iure eveniet mollitia, sunt, fugiat cum. Sapiente.",
    },
    {
      img: profilePic3,
      reveiw:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos aspernatur voluptates praesentium molestias eaque ipsam sint excepturi earum nam animi esse laboriosam iure eveniet mollitia, sunt, fugiat cum. Sapiente.",
    },
    {
      img: profilePic4,
      reveiw:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos aspernatur voluptates praesentium molestias eaque ipsam sint excepturi earum nam animi esse laboriosam iure eveniet mollitia, sunt, fugiat cum. Sapiente.",
    },
  ];
  return (
    <div className="t-wrapper" id="Testmonials">
      <div className="t-heading">
        <span>Clients Always Get</span>
        <span>Exceptional Work</span>
        <span>From Me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        grabCursor={1}
        slidesPerView={1}
        cssMode={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Pagination]}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testmonial">
                <img src={client.img} alt="" />
                <span>{client.reveiw}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
