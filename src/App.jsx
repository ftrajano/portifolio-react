import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Github, Linkedin, Mail, Code, Server, Database } from 'lucide-react';

// Estilos globais para garantir que o conteúdo ocupe toda a viewport
const globalStyles = `
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    overflow-x: hidden;
  }

  .full-width-container {
    width: 100%;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
`;

const HomePage = () => {
  return (
    <>
      <style>{globalStyles}</style>
      <div className="bg-light w-100">
        {/* Hero Section */}
        <header className="bg-primary text-white text-center py-5 w-100">
          <div className="full-width-container">
            <h1 className="display-4 fw-bold">Seu Nome</h1>
            <p className="lead mb-0">Desenvolvedor Python / Django / React</p>
            <div className="mt-4">
              <a href="https://github.com/seu-usuario" className="text-white me-3">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/seu-perfil" className="text-white me-3">
                <Linkedin size={24} />
              </a>
              <a href="mailto:seu-email@exemplo.com" className="text-white">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="py-5 w-100">
          <div className="full-width-container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="mb-4">Sobre Mim</h2>
                <p className="lead mb-5">
                  Sou um desenvolvedor full-stack apaixonado por criar soluções web robustas e eficientes. 
                  Com experiência em Python, Django e React, estou sempre buscando novos desafios e oportunidades para inovar e aprender.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-white py-5 w-100">
          <div className="full-width-container">
            <h2 className="text-center mb-5">Minhas Habilidades</h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <Code size={48} className="text-primary mb-3" />
                    <h3 className="card-title h5">Frontend</h3>
                    <p className="card-text">React, JavaScript, HTML5, CSS3, Responsive Design</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <Server size={48} className="text-primary mb-3" />
                    <h3 className="card-title h5">Backend</h3>
                    <p className="card-text">Python, Django, RESTful APIs, Web Services</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <Database size={48} className="text-primary mb-3" />
                    <h3 className="card-title h5">Banco de Dados</h3>
                    <p className="card-text">PostgreSQL, MySQL, MongoDB, Redis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-5 w-100">
          <div className="full-width-container">
            <h2 className="text-center mb-5">Projetos em Destaque</h2>
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h3 className="card-title h5">Nome do Projeto 1</h3>
                    <p className="card-text">Uma breve descrição do projeto, destacando as principais tecnologias utilizadas e o impacto alcançado.</p>
                    <a href="#" className="btn btn-outline-primary">Ver Projeto</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h3 className="card-title h5">Nome do Projeto 2</h3>
                    <p className="card-text">Outra descrição de projeto, enfatizando os desafios superados e as soluções implementadas.</p>
                    <a href="#" className="btn btn-outline-primary">Ver Projeto</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-primary text-white py-5 w-100">
          <div className="full-width-container text-center">
            <h2 className="mb-4">Vamos Trabalhar Juntos</h2>
            <p className="lead mb-4">Estou sempre aberto a novos projetos e oportunidades de colaboração.</p>
            <a href="mailto:seu-email@exemplo.com" className="btn btn-light btn-lg">Entre em Contato</a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-3 w-100">
          <div className="full-width-container">
            <p className="mb-0">&copy; 2024 Seu Nome. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;