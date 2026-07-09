'use client';

import { useState } from 'react';

const WHATSAPP = 'https://wa.me/56978646686?text=Hola%20Podolog%C3%ADa%20Orlan%2C%20quiero%20agendar%20una%20hora.';
const MAPS = 'https://www.google.com/maps/search/?api=1&query=Gilberto%20Fuenzalida%20185%20local%20118%20Las%20Condes';

const benefits = [
  { icon: 'fa-regular fa-star', title: 'Más de 25 años de experiencia', text: 'Trayectoria y compromiso en el cuidado de tus pies.' },
  { icon: 'fa-solid fa-shoe-prints', title: 'Especialistas en Pie Diabético', text: 'Prevención, control y orientación para evitar complicaciones.' },
  { icon: 'fa-regular fa-user', title: 'Atención cercana y personalizada', text: 'Cada paciente es único. Cada tratamiento también.' },
  { icon: 'fa-solid fa-location-dot', title: 'Ubicación en Las Condes', text: 'Fácil acceso, atención cómoda y reserva por WhatsApp.' }
];

const services = [
  { icon: 'fa-solid fa-shoe-prints', img: '/podologiaclinica.png', title: 'Podología Clínica', text: 'Atención integral para el cuidado, higiene y mantenimiento de la salud de tus pies.' },
  { icon: 'fa-solid fa-kit-medical', img: '/unaencarnada.png', title: 'Uña Encarnada', text: 'Tratamiento cuidadoso para aliviar el dolor y abordar el problema de raíz.' },
  { icon: 'fa-solid fa-foot', img: '/piediabetico.png', title: 'Pie Diabético', text: 'Prevención, evaluación y cuidado especializado para evitar lesiones y complicaciones.' },
  { icon: 'fa-solid fa-spa', img: '/reflexologia.jpg', title: 'Reflexología', text: 'Terapia orientada a relajación, equilibrio y bienestar general desde los pies.' },
  { icon: 'fa-solid fa-hands', img: '/masoterapia.png', title: 'Masoterapia', text: 'Técnicas manuales para promover descanso, alivio corporal y bienestar.' },
  { icon: 'fa-solid fa-house-medical', img: '/domicilio.png', title: 'Atención a Domicilio', text: 'Llevamos nuestros servicios a tu hogar con coordinación directa por WhatsApp.' }
];

const gallery = [
  { src: '/profesional-box.jpeg', title: 'Atención podológica profesional' },
  { src: '/box-atencion.jpeg', title: 'Box de atención' },
  { src: '/box-sala.jpeg', title: 'Sala de atención' },
  { src: '/esterilizador-mejorado.jpeg', title: 'Esterilización' },
  { src: '/equipo-centro.jpeg', title: 'Equipo y centro' }
];

const reviews = [
  { name: 'María Elena R.', text: 'Excelente atención. Se nota la experiencia, la paciencia y el cuidado con que trabajan. Salí caminando mucho más cómoda.' },
  { name: 'Patricia G.', text: 'Muy recomendable. Llevo años atendiéndome en Podología Orlan y siempre han sido responsables, amables y cuidadosas.' },
  { name: 'Carlos A.', text: 'Fui por una molestia que llevaba tiempo y me atendieron con mucho profesionalismo. El local es fácil de encontrar y la atención transmite confianza.' }
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Inicio Podología Orlan">
          <img src="/logo-orlan.jpeg" alt="Logo Podología Orlan" />
          <div>
            <strong>Podología Orlan</strong>
            <span>Más de 25 años cuidando tus pies</span>
          </div>
        </a>

        <nav className="nav">
          <a href="#servicios">Servicios</a>
          <a href="#confianza">Confianza</a>
          <a href="#centro">Centro</a>
          <a href="#ubicacion">Ubicación</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="whatsappBtn" href={WHATSAPP} target="_blank" rel="noreferrer">
          <i className="fa-brands fa-whatsapp" /> Reservar por WhatsApp
        </a>
      </header>

      <section id="inicio" className="heroCompact">
        <div className="heroShade" />
        <div className="heroInner">
          <p className="heroLabel">Podología en Las Condes</p>
          <h1>Cuidado profesional para tus pies, con atención cercana y segura</h1>
          <p className="heroText">Especialistas en pie diabético</p>
        </div>
      </section>

      <section id="confianza" className="why">
        <h2>¿Por qué elegir Podología Orlan?</h2>
        <div className="underline" />
        <div className="whyGrid">
          {benefits.map((item) => (
            <article className="whyCard" key={item.title}>
              <div className="roundIcon"><i className={item.icon} /></div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="servicios" className="servicesBlock">
        <h2>Nuestros servicios</h2>
        <div className="underline" />
        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.title}>
              <div className="serviceHead"><i className={service.icon} /><h3>{service.title}</h3></div>
              <img src={service.img} alt={service.title} />
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="centro" className="centerBlock">
        <h2>Conoce nuestro centro</h2>
        <div className="underline" />
        <div className="galleryRow">
          {gallery.map((item) => (
            <button type="button" className="galleryThumb" key={item.src} onClick={() => setSelectedImage(item)}>
              <img src={item.src} alt={item.title} />
            </button>
          ))}
        </div>
      </section>

      <section className="infoCards">
        <article className="whoCard">
          <img src="/equipo-hermanas.jpeg" alt="Equipo familiar de Podología Orlan" />
          <div>
            <h2>Quiénes somos</h2>
            <p>Podología Orlan nació en diciembre de 1999, fundada por Luis Orlando junto a su hija Ana Luisa. Con los años se incorporó Sandra Lorca, su hermana, y juntas formaron un equipo multidisciplinario en el área de la salud del pie.</p>
            <p>Hoy somos cinco profesionales al servicio de nuestros pacientes, manteniendo una atención cercana, responsable y comprometida.</p>
            <strong>Desde 1999 cuidando tus pasos.</strong>
          </div>
        </article>

        <article className="hygieneCard">
          <div>
            <h2><i className="fa-solid fa-shield-heart" /> Higiene y seguridad</h2>
            <p>Cumplimos protocolos de higiene y esterilización para entregar una atención segura y confiable en cada procedimiento.</p>
          </div>
          <img src="/esterilizador-mejorado.jpeg" alt="Esterilizador e instrumental preparado" />
        </article>

        <article className="reviewPanel">
          <h2>Opiniones de nuestros pacientes</h2>
          <div className="googleWord">Google</div>
          <div className="rating"><strong>5.0</strong> <span>★★★★★</span></div>
          <p>Basado en comentarios de pacientes que valoran nuestra atención cercana, cuidadosa y profesional.</p>
          <div className="miniReviews">
            {reviews.map((review) => (
              <blockquote key={review.name}>“{review.text}” <b>{review.name}</b></blockquote>
            ))}
          </div>
        </article>
      </section>

      <section className="ctaBlue">
        <div className="calendarIcon"><i className="fa-regular fa-calendar-check" /></div>
        <div>
          <h2>Tu salud comienza por tus pies</h2>
          <p>Agenda tu hora hoy mismo por WhatsApp.</p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp" /> Reservar por WhatsApp</a>
        </div>
        <div className="ctaFeatures">
          <span><i className="fa-regular fa-user" /> Atención personalizada</span>
          <span><i className="fa-regular fa-clock" /> Horarios flexibles</span>
          <span><i className="fa-regular fa-comment" /> Respuesta rápida</span>
        </div>
      </section>

      <footer id="contacto" className="footer">
        <div>
          <h2>Podología Orlan</h2>
          <p>Más de 25 años cuidando tus pies.</p>
          <p>Especialistas en Pie Diabético.</p>
        </div>
        <div id="ubicacion">
          <h3>Ubicación</h3>
          <p>Gilberto Fuenzalida 185<br />Local 118, segundo piso<br />Las Condes</p>
          <a href={MAPS} target="_blank" rel="noreferrer">Cómo llegar</a>
        </div>
        <div>
          <h3>Horarios</h3>
          <p>Lunes a viernes<br />09:40 a 19:00 hrs</p>
          <p>Sábado<br />10:00 a 16:00 hrs</p>
        </div>
        <div>
          <h3>Contacto</h3>
          <p><i className="fa-brands fa-whatsapp" /> +56 9 7864 6686</p>
          <p><i className="fa-solid fa-phone" /> +56 2 2342 0217</p>
          <a className="footerBtn" href={WHATSAPP} target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp" /> Reservar por WhatsApp</a>
        </div>
      </footer>

      <a className="floatWhatsApp" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Reservar por WhatsApp">
        <i className="fa-brands fa-whatsapp" />
      </a>

      {selectedImage && (
        <div className="imageModal" role="dialog" aria-modal="true" aria-label={selectedImage.title} onClick={() => setSelectedImage(null)}>
          <div className="imageModalBox" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="modalClose" onClick={() => setSelectedImage(null)} aria-label="Cerrar imagen">×</button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <p>{selectedImage.title}</p>
          </div>
        </div>
      )}

    </main>
  );
}
