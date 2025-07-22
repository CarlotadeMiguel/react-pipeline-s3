import React from 'react';

function Header() {
  return (
    <header className="App-header" aria-label="Bienvenida">
      <h1 className="App-title">¡Bienvenido a mi App en React!</h1>
      <p className="App-text">
        Esta aplicación está desplegada en <strong>AWS S3</strong>.
      </p>
      <a
        className="App-button"
        href="https://aws.amazon.com/s3/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Aprende más sobre AWS S3
      </a>
    </header>
  );
}

function AboutMe() {
  return (
    <section className="App-cv" aria-labelledby="about-me-title">
      <h2 id="about-me-title" className="App-cv-title">Sobre mí</h2>
      <p className="App-cv-text">
        Soy desarrolladora web junior con conocimientos en <strong>frontend (React, Angular)</strong> y <strong>backend (Flask, Python, MySQL)</strong>. He trabajado en proyectos en equipo usando metodologías ágiles como <strong>Scrum</strong>, incluyendo diseño de interfaces, lógica de negocio y conexión con bases de datos.
      </p>
      <p className="App-cv-text">
        Me destaco por ser organizada, constante y capaz de trabajar bajo presión y en entornos colaborativos. Estoy en búsqueda de una primera oportunidad laboral para seguir creciendo como desarrolladora, aportar mis conocimientos y seguir aprendiendo en un entorno profesional.
      </p>
      <ul className="App-cv-links">
        <li>
          <a
            href="https://www.linkedin.com/in/carmial/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de LinkedIn"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/carmial65?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Repositorio GitHub"
          >
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <Header />
        <AboutMe />
      </main>
    </div>
  );
}

export default App;
