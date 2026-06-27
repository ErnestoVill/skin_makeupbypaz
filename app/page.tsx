import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";
export default function Home() {
  return (
    <main className="bg-[#FFF8F7] text-[#4B4453]">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="text-2xl font-bold">
            <div>
  <div className="text-3xl font-bold tracking-wider">
    SKIN
  </div>

  <div className="text-sm tracking-[0.3em] text-gray-500">
    MAKEUPBYPAZ
  </div>
</div>
          </div>

          <div className="hidden md:flex gap-8">
            <a href="#servicios">Servicios</a>
            <a href="#galeria">Galería</a>
            <a href="#testimonios">Testimonios</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white/85 backdrop-blur-xl p-12 rounded-[40px] shadow-2xl max-w-5xl border border-white">
  <div className="flex flex-col md:flex-row items-center gap-10">

    <div className="text-center md:text-left">
      <h1 className="text-6xl md:text-8xl font-bold mb-2 tracking-wide">
        PAZ VILLA
      </h1>

      <p className="text-xl md:text-2xl font-medium text-[#D8A7B1] mb-4">
        Cosmetóloga y Esteticista Integral
      </p>

      
      <p className="text-xl md:text-3xl mb-8 font-light">
        Realzando tu belleza natural
      </p>

      <a
        href="https://wa.me/56932950266"
        target="_blank"
        className="bg-[#D8A7B1] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
      >
        Reservar Hora
      </a>
    </div>

    <div>
      <img
        src="/paz-profile.png"
        alt="Paz Villa"
        className="w-64 h-64 object-cover rounded-full border-4 border-[#F4D6DB] shadow-2xl"
      />
    </div>

  </div>
</div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Bienvenida
        </h2>

        <p className="text-lg leading-relaxed">
          En SKIN_MAKEUPBYPAZ nos especializamos en realzar la belleza
          natural mediante servicios profesionales de maquillaje,
          skincare y manicure, entregando una experiencia personalizada
          para cada cliente.
        </p>
      </section>

      {/* SERVICIOS */}
      <section
        id="servicios"
        className="py-24 px-6 bg-[#F8D7DA]"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Servicios
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

          {[
            "Maquillaje Social",
            "Maquillaje Novias",
            "Maquillaje FX",
            "Limpieza Facial",
            "Hidratación Facial",
            "Lifting de Pestañas",
            "Laminado de Cejas",
            "Manicure",
          ].map((servicio) => (
            <div
              key={servicio}
              className="bg-white p-6 rounded-3xl shadow hover:-translate-y-2 transition"
            >
              <h3 className="font-semibold text-lg">
                {servicio}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* GALERIA */}
      <section
        id="galeria"
        className="py-24 px-6"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Nuestros Trabajos
          <p className="text-center text-lg text-gray-600 mb-12">
  Algunos resultados que reflejan nuestro compromiso con la belleza y el cuidado personal.
</p>
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

  {[
    "/manicure 1.jpeg",
    "/Maquillaje Noche 1.jpeg",
    "/Maquillaje Artistico.jpeg",
    "/Manicure 10.jpeg",
    "/FX brazo.jpeg",
    "/Manicure 14.jpeg",
  ].map((foto, index) => (
    <img
      key={index}
      src={foto}
      alt={`Trabajo ${index + 1}`}
      className="w-full h-[400px] object-cover rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300"
    />
  ))}
</div>
      </section>

      {/* TESTIMONIOS */}
      <section
        id="testimonios"
        className="py-24 px-6 bg-[#E9D5FF]"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Testimonios
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-3xl shadow">
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              Excelente atención y resultados maravillosos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow">
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              Muy profesional y dedicada.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow">
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              Totalmente recomendada para eventos importantes.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="py-24 px-6 text-center"
      >
        <h2 className="text-4xl font-bold mb-8">
          Reserva tu Hora
        </h2>

        <a
          href="https://wa.me/56932950266"
          target="_blank"
rel="noopener noreferrer"
          className="bg-green-500 text-white px-8 py-4 rounded-full font-bold"
        >
          WhatsApp
        </a>

        
          <div className="mt-10">
  <div className="flex justify-center gap-8 text-4xl mt-8">
  <a
    href="https://instagram.com/skin_makeupbypaz"
    target="_blank"
rel="noopener noreferrer"
    className="hover:scale-125 transition"
  >
    <FaInstagram />
  </a>

  <a
    href="#"
    className="hover:scale-125 transition"
  >
    <FaFacebook />
  </a>

  <a
    href="#"
    className="hover:scale-125 transition"
  >
    <FaTiktok />
  </a>
</div>
</div>
    
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-8 text-center border-t">
        <p>
          © 2026 SKIN_MAKEUPBYPAZ · Todos los derechos reservados
        </p>
      </footer>
      <a
  href="https://wa.me/56932950266"
  target="_blank"
  className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition"
>
  <FaWhatsapp size={30} />
</a>
    </main>
  );
}