import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import TechCardList from './components/TechCardList/TechCardList';
import SocialMenu from './components/SocialMenu/SocialMenu';
import ProyectoList from './components/ProyectosList/ProyectoList';
import Contact from './components/Contact/Contact';


import ang from './assets/images/logo_ang.png';
import bd from './assets/images/logo_bd.png';
import flut from './assets/images/logo_flut.png';
import java from './assets/images/logo_java.png';
import js from './assets/images/logo_js.png';
import node from './assets/images/logo_node.png';
import py from './assets/images/logo_py.png';
import react from './assets/images/logo_react.png';
import spring from './assets/images/logo_spring.png';

import studyCard1 from './assets/images/study_cards_1.png';
import studyCard2 from './assets/images/study_cards_2.png';
import studyCard3 from './assets/images/study_cards_3.png';


const techs = [
  { logo: js, name: 'JavaScript', info: 'Domino JavaScript, uno de los lenguajes más usados, aplicándolo tanto en frontend (React, Angular) como en backend (Node.js). Manejo funcionalidades avanzadas como manipulación del DOM, promesas, asincronía, módulos ES6+ y llamadas API. Mi experiencia abarca desde el desarrollo de interfaces dinámicas hasta la creación de servicios eficientes del lado del servidor.' },
  { logo: py, name: 'Python', info: 'Trabajo con Python, uno de los lenguajes en auge, aprovechando su versatilidad y rica colección de librerías. He desarrollado interfaces gráficas con Tkinter y soluciones eficientes para análisis de datos, web scraping y automatización usando librerías como Matplotlib, BeautifulSoup y Selenium, adaptándome a diversos desafíos con creatividad y precisión.' },
  { logo: java, name: 'Java', info: 'Java, un estándar consolidado en el sector tecnológico, es clave en mi desarrollo profesional. Manejo su uso para crear aplicaciones robustas, tanto en el backend como en el desarrollo de aplicaciones de escritorio. Domino herramientas como Spring, Hibernate, JPA y Lombok, aplicando principios sólidos de programación orientada a objetos y diseño eficiente para soluciones escalables.' },
  { logo: flut, name: 'Flutter', info: 'Como desarrollador fullstack multiplataforma, también me especializo en desarrollo móvil con Flutter, un framework potente y versátil. Con Flutter, creo aplicaciones nativas de alto rendimiento para Android e iOS, aprovechando su arquitectura basada en widgets para diseños personalizados, animaciones fluidas y experiencias de usuario consistentes. Combino funcionalidad, estética y escalabilidad en cada proyecto.' },
  { logo: react, name: 'React', info: 'Como desarrollador fullstack, tengo experiencia en React, un framework esencial para crear interfaces de usuario dinámicas y eficientes. Utilizo React para desarrollar aplicaciones web interactivas, implementando componentes reutilizables, manejo del estado con hooks y optimización del rendimiento. Mi enfoque combina una arquitectura limpia con una experiencia de usuario fluida y altamente escalable.' },
  { logo: node, name: 'Node JS', info: 'Con Node.js, desarrollo aplicaciones backend rápidas y escalables utilizando JavaScript. Aprovecho su capacidad para manejar múltiples solicitudes al mismo tiempo, lo que permite crear APIs y aplicaciones en tiempo real. Mi enfoque está en construir soluciones eficientes y de alto rendimiento, adaptadas a las necesidades de cada proyecto.' },
  { logo: spring, name: 'Spring', info: 'Spring Boot me permite desarrollar aplicaciones backend de forma ágil y eficiente en Java. Aprovecho su enfoque basado en convenciones para reducir la configuración manual, lo que acelera el desarrollo. Utilizo sus herramientas para integrar bases de datos, gestionar seguridad y crear aplicaciones robustas, fáciles de mantener y preparadas para escalar.' },
  { logo: ang, name: 'Angular', info: 'Con Angular, desarrollo aplicaciones web dinámicas y bien estructuradas, aprovechando su enfoque basado en componentes. Utilizo este framework para crear interfaces de usuario interactivas, gestionar el estado de manera eficiente y facilitar la integración con servicios backend. Mi enfoque es ofrecer soluciones web escalables, de alto rendimiento y fáciles de mantener.' },
  { logo: bd, name: 'Bases de Datos', info: 'Conozco y trabajo con diversas bases de datos como MySQL, PostgreSQL, MongoDB y SQLite. Domino la creación y optimización de consultas SQL, así como la gestión de datos en bases de datos NoSQL. Mi enfoque se centra en asegurar la integridad, rendimiento y escalabilidad de las soluciones de almacenamiento de datos.' },
];




function App() {

  const proyectos = [
    { name: 'Study Cards', subtitle: 'Proyecto Front-end con React', img: studyCard3, linkGit: 'https://github.com/Danieldcn05/card_study', info: 'Aplicación web para crear mazos de cartas de estudio personalizables, con preguntas y respuestas en lados opuestos. Los usuarios pueden personalizar colores, tipografías y bordes, además de exportar e importar los mazos en formato JSON para facilitar su gestión y uso en distintos dispositivos. Desarrollada con React, ofrece una experiencia intuitiva para potenciar el aprendizaje.', images: [studyCard1, studyCard2, studyCard3] },
    { name: 'Time Tracker', subtitle: 'Proyecto Full Stack con Python', img: 'https://picsum.photos/800/600?image=1042', linkGit: 'https://github.com/Danieldcn05/time_tracker', info: 'Aplicación de rastreo de tiempo de uso de aplicaciones desarrollada en Python. Utiliza psutil para monitorear procesos en tiempo real, registrando cuándo se inician y cierran las aplicaciones seleccionadas. Los datos se almacenan en una base de datos SQLite para análisis posterior. La interfaz gráfica, creada con Tkinter, permite al usuario gestionar las aplicaciones a rastrear.', images: [] }
  ];

  return (
    <div>
      <Navbar />
      <SocialMenu />
      <Landing />
      <ProyectoList proyectos={proyectos} />
      <TechCardList techs={techs} />


      <Contact />
    </div>
  );
}

export default App;