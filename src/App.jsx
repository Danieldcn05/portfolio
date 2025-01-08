import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import TechCardList from './components/TechCardList/TechCardList';
import SocialMenu from './components/SocialMenu/SocialMenu';
import ProyectoList from './components/ProyectosList/ProyectoList';
import Contact from './components/Contact/Contact';

const techs = [
  { logo: 'src/assets/logos/logo_js.png' ,name: 'JavaScript', info:'Domino JavaScript, uno de los lenguajes más usados, aplicándolo tanto en frontend (React, Angular) como en backend (Node.js). Manejo funcionalidades avanzadas como manipulación del DOM, promesas, asincronía, módulos ES6+ y llamadas API. Mi experiencia abarca desde el desarrollo de interfaces dinámicas hasta la creación de servicios eficientes del lado del servidor.' },
  { logo: 'src/assets/logos/logo_py.png', name: 'Python', info:'Trabajo con Python, uno de los lenguajes en auge, aprovechando su versatilidad y rica colección de librerías. He desarrollado interfaces gráficas con Tkinter y soluciones eficientes para análisis de datos, web scraping y automatización usando librerías como Matplotlib, BeautifulSoup y Selenium, adaptándome a diversos desafíos con creatividad y precisión.' },
  { logo: 'src/assets/logos/logo_java.png', name: 'Java', info:'Java, un estándar consolidado en el sector tecnológico, es clave en mi desarrollo profesional. Manejo su uso para crear aplicaciones robustas, tanto en el backend como en el desarrollo de aplicaciones de escritorio. Domino herramientas como Spring, Hibernate, JPA y Lombok, aplicando principios sólidos de programación orientada a objetos y diseño eficiente para soluciones escalables.' },
  { logo: 'src/assets/logos/logo_flut.png', name: 'Flutter', info:'Como desarrollador fullstack multiplataforma, también me especializo en desarrollo móvil con Flutter, un framework potente y versátil. Con Flutter, creo aplicaciones nativas de alto rendimiento para Android e iOS, aprovechando su arquitectura basada en widgets para diseños personalizados, animaciones fluidas y experiencias de usuario consistentes. Combino funcionalidad, estética y escalabilidad en cada proyecto.' },
  { logo: 'src/assets/logos/logo_react.png', name: 'React', info:'Como desarrollador fullstack, tengo experiencia en React, un framework esencial para crear interfaces de usuario dinámicas y eficientes. Utilizo React para desarrollar aplicaciones web interactivas, implementando componentes reutilizables, manejo del estado con hooks y optimización del rendimiento. Mi enfoque combina una arquitectura limpia con una experiencia de usuario fluida y altamente escalable.' },
  { logo: 'src/assets/logos/logo_node.png', name: 'Node JS', info:'Con Node.js, desarrollo aplicaciones backend rápidas y escalables utilizando JavaScript. Aprovecho su capacidad para manejar múltiples solicitudes al mismo tiempo, lo que permite crear APIs y aplicaciones en tiempo real. Mi enfoque está en construir soluciones eficientes y de alto rendimiento, adaptadas a las necesidades de cada proyecto.' },
  { logo: 'src/assets/logos/logo_spring.png', name: 'Spring', info:'Spring Boot me permite desarrollar aplicaciones backend de forma ágil y eficiente en Java. Aprovecho su enfoque basado en convenciones para reducir la configuración manual, lo que acelera el desarrollo. Utilizo sus herramientas para integrar bases de datos, gestionar seguridad y crear aplicaciones robustas, fáciles de mantener y preparadas para escalar.' },
  { logo: 'src/assets/logos/logo_ang.png', name: 'Angular', info:'Con Angular, desarrollo aplicaciones web dinámicas y bien estructuradas, aprovechando su enfoque basado en componentes. Utilizo este framework para crear interfaces de usuario interactivas, gestionar el estado de manera eficiente y facilitar la integración con servicios backend. Mi enfoque es ofrecer soluciones web escalables, de alto rendimiento y fáciles de mantener.' },
  { logo: 'src/assets/logos/logo_bd.png', name: 'Bases de Datos', info:'Conozco y trabajo con diversas bases de datos como MySQL, PostgreSQL, MongoDB y SQLite. Domino la creación y optimización de consultas SQL, así como la gestión de datos en bases de datos NoSQL. Mi enfoque se centra en asegurar la integridad, rendimiento y escalabilidad de las soluciones de almacenamiento de datos.' },
  // Añadir más tecnologías aquí
];

const proyectos = [
  {name:'Study Cards', subtitle:'Subtitulo de ejemplo 1',info:'Info del proyecto 1', img:'https://picsum.photos/800/600?image=1041', linkGit:'https://github.com', linkDemo:'https://google.com', info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae augue porttitor, pulvinar arcu at, rutrum arcu. Praesent scelerisque rhoncus gravida. Aenean dictum accumsan est, non rhoncus sapien. Praesent sed porttitor eros, ut hendrerit augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam non vulputate diam, ut ultricies leo. Nunc fermentum enim elit, ac aliquam massa blandit ut. '},
  {name:'Proyecto 2', subtitle:'Subtitulo de ejemplo 2',info:'Info del proyecto 2', img:'https://picsum.photos/800/600?image=1042', linkGit:'https://github.com', linkDemo:'https://google.com', info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae augue porttitor, pulvinar arcu at, rutrum arcu. Praesent scelerisque rhoncus gravida. Aenean dictum accumsan est, non rhoncus sapien. Praesent sed porttitor eros, ut hendrerit augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam non vulputate diam, ut ultricies leo. Nunc fermentum enim elit, ac aliquam massa blandit ut. '},
  {name:'Proyecto 3', subtitle:'Subtitulo de ejemplo 3',info:'Info del proyecto 3', img:'https://picsum.photos/800/600?image=1043', linkGit:'https://github.com', linkDemo:'https://google.com', info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae augue porttitor, pulvinar arcu at, rutrum arcu. Praesent scelerisque rhoncus gravida. Aenean dictum accumsan est, non rhoncus sapien. Praesent sed porttitor eros, ut hendrerit augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam non vulputate diam, ut ultricies leo. Nunc fermentum enim elit, ac aliquam massa blandit ut. '}
]

function App() {
  return (
    <div>
      <Navbar />
      <SocialMenu />
      <Landing />
      <TechCardList techs={techs} />
      <ProyectoList proyectos={proyectos} />
      <Contact />
    </div>
  );
}

export default App;