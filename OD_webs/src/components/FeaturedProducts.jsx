import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Camiseta Básica",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Mujer"
    },
    {
      id: 2,
      name: "Jeans Clásicos",
      price: "$59.99",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Hombre"
    },
    {
      id: 3,
      name: "Vestido Verano",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Mujer"
    },
    {
      id: 4,
      name: "Chaqueta Denim",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Hombre"
    },
    {
      id: 5,
      name: "Blusa Elegante",
      price: "$39.99",
      image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Mujer"
    },
    {
      id: 6,
      name: "Sudadera Casual",
      price: "$45.99",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Unisex"
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-4">Productos Destacados</h2>
        <p className="text-lg text-white-600 max-w-2xl mx-auto">
          Descubre nuestras prendas más populares seleccionadas especialmente para ti
        </p>
      </div>

      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <div className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="aspect-square overflow-hidden rounded-t-lg bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                  <p className="text-lg font-bold text-gray-900">{product.price}</p>
                </div>
                <button className="w-full bg-gray-900 text-white py-2 rounded-md font-medium hover:bg-gray-800 transition duration-300">
                  Añadir al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="text-center mt-12">
        <button className="bg-gray-900 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition duration-300">
          Ver Todos los Productos
        </button>
      </div>
    </section>
  )
}

export default FeaturedProducts