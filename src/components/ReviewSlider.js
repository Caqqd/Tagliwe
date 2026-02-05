import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ReviewSlider = ({ reviews }) => (
  <Swiper spaceBetween={50} slidesPerView={1}>
    {reviews.map(review => (
      <SwiperSlide key={review._id}>
        <p>"{review.comment}" - {review.name} ({review.rating}/5)</p>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ReviewSlider;