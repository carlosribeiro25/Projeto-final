// components/CustomSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Propaganda from '../Propaganda';

export default function Gallery() {
  const slides = [
    {
      imageUrl: "src/public/shoe-1.png",
    },
    {
      imageUrl: "https://drip-store.netlify.app/assets/images/hero-carousel/shoe-2.png",
    
    },
     {
      imageUrl: "src/public/shoe-4.png",
    },
     {
      imageUrl: "src/public/shoes3.png",
    },
  ];

  return (
    <Swiper pagination={{ clickable: true }}
            autoplay={{ delay:3000, disableOnInteraction:false}}
            navigation={true}
            modules={[Pagination, Autoplay,Navigation ]}
            className="custom-swiper"
               >
      {slides.map((slide, index) => (
   <SwiperSlide key={index}>
  <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-10 py-6">
    <div className="w-full md:w-1/3">
      <Propaganda />
    </div>

    <div className="flex  gap-4">
      <img
        src={slide.imageUrl}
        alt="Imagem do slide"
        className="w-full max-w-[500px] h-[300px] md:h-[500px] object-contain rounded bg-gray-200"
      />

      <div className="w-20 h-20 md:w-24 md:h-24">
        <img src="src/public/ornament.svg" alt="ornament" className="w-full h-full object-contain" />
      </div>
    </div>
  </div>
</SwiperSlide>

      ))}
    </Swiper>
  );
}
