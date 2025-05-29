import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Gallery() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings}>
       
<div className="  justify-around  flex gap-6 p-4 bg-gray-100">

  <img
    src="https://drip-store.netlify.app/assets/images/hero-carousel/shoe-1.png"
    className="bg-amber-400 rounded w-full md:w-[400px] h-auto"
    alt="Shoe 1"
  />
</div>




      <div className="flex justify-center">
        <img
          src="https://drip-store.netlify.app/assets/images/hero-carousel/shoe-2.png"
          width={400}
          height={300}
          alt="Shoe 2"
          className="bg-amber-400"
        />
      </div>

      <div className="flex justify-center">
        <img
          src="https://drip-store.netlify.app/assets/images/hero-carousel/shoe-2.png"
          width={400}
          height={300}
          alt="Shoe 3"
          className="bg-amber-400"
        />
      </div>
       <div className="flex items-center justify-center gap-6 bg-gray-100 p-6 rounded">
          <div className="bg-amber-600 text-white text-xl text-center p-6 rounded w-64">
            <h1>Descontos exclusivos</h1>
          </div>
          <img
            src="https://drip-store.netlify.app/assets/images/hero-carousel/shoe-2.png"
            width={400}
            height={300}
            alt="Shoe 2"
            className="bg-amber-400 rounded"
          />
        </div>

        {/* Slide 3 */}
        <div className="flex items-center justify-center gap-6 bg-gray-100 p-6 rounded">
          <div className="bg-amber-600 text-white text-xl text-center p-6 rounded w-64">
            <h1>Confira agora</h1>
          </div>
          <img
            src="https://drip-store.netlify.app/assets/images/hero-carousel/shoe-3.png"
            width={400}
            height={300}
            alt="Shoe 3"
            className="bg-amber-400 rounded"
          />
        </div>
    </Slider>
  );
}
