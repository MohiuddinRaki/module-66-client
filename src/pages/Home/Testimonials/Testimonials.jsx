import SectionTitle from "./../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import "./Testimonilas.css";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [reviews, setreviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setreviews(data));
  }, []);
  return (
    <section className="my-20">
      <SectionTitle
        subHeading={"What our client say"}
        heading={"Testimonilas"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center my-14 mx-24">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p className="py-6">{review.details}</p>
              <h3 className="font-medium text-2xl text-orange-400">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
