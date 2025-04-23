import Slider from 'react-slick';
import { sliderData } from '../data/sliderData';

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="relative">
      <Slider {...settings}>
        {sliderData.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
                {slide.caption}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSlider;
