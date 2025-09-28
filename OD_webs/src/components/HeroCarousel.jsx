import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      image: "OD_webs/src/images/blog.cholula.png",
      title: "Nueva Colección Verano",
      subtitle: "Descubre las últimas tendencias",
      buttonText: "Comprar Ahora"
    },
    {
      id: 2,
      image: "OD_webs/src/images/catrin.jpg",
      title: "Hasta 50% de Descuento",
      subtitle: "En toda la tienda por tiempo limitado",
      buttonText: "Ver Ofertas"
    },
    {
      id: 3,
      image: "OD_webs/src/images/puebla_ciudad_entrada.jpg",
      title: "Envío Gratis",
      subtitle: "En compras mayores a $100",
      buttonText: "Descubrir"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div 
              className="h-96 md:h-[600px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative h-full flex items-center justify-center text-center">
                <div className="text-white max-w-4xl px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8">
                    {slide.subtitle}
                  </p>
                  <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300 text-lg">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;