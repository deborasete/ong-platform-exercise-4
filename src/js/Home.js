import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import volunteersImg from '../assets/images/volunteers.jpg';
import exampleVideo from '../assets/images/example-video.mp4';

function Home() {
  return (
    <div className="home">
      <main className="container" role="main" aria-label="Conteúdo principal da página inicial da ONG Mãos Unidas">
        <section id="who-we-are" aria-labelledby="titulo-quem-somos">
          <h2 id="titulo-quem-somos">Quem Somos e Nossa Missão</h2>
          <div className="row">
            <div className="col-12 col-md-6">
              <img 
                src={volunteersImg} 
                alt="Grupo de voluntários da ONG Mãos Unidas sorrindo e unindo as mãos em sinal de solidariedade e trabalho em equipe."
                width="600" 
                height="400"
              />
            </div>
            <div className="col-12 col-md-6">
              <article>
                <h3>Impacto no Terceiro Setor</h3>
                <p>Somos uma organização sem fins lucrativos dedicada a promover a inclusão social e o desenvolvimento comunitário. Nossa missão é ser uma ponte entre a solidariedade e as necessidades das famílias em situação de vulnerabilidade no Brasil.</p>
                <p>Com mais de 5 anos de atuação, fazemos parte dos mais de 820 mil organizações que movem a economia social do país, transformando vidas através da educação e apoio mútuo.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="our-values" aria-labelledby="titulo-valores">
          <h2 id="titulo-valores">Valores Fundamentais</h2>
          <div className="row">
            <div className="col-12 col-md-6">
              <ul>
                <li>Transparência e ética.</li>
                <li>Solidariedade e empatia.</li>
                <li>Foco na inclusão social e empoderamento.</li>
              </ul>
            </div>
            <div className="col-12 col-md-6" style={{ textAlign: 'center' }}>
              <Link to="/cadastro-voluntarios" className="button button-primary" aria-label="Ir para a página de cadastro de voluntários da ONG">
                Quero Ser Voluntário!
              </Link>
            </div>
          </div>
        </section>

        <section id="multimedia" aria-labelledby="titulo-midia">
          <h2 id="titulo-midia">Conheça Mais Sobre Nossas Ações</h2>
          <div className="media-content">
            <video controls width="100%" aria-label="Vídeo institucional da ONG Mãos Unidas mostrando ações sociais e depoimentos de voluntários">
              <source src={exampleVideo} type="video/mp4" />
              Seu navegador não suporta o vídeo.
            </video>
          </div>
        </section>
      </main>

      <footer role="contentinfo" aria-label="Rodapé com informações de contato e direitos autorais">
        <div className="container">
          <div>
            <h3>Fale Conosco!</h3>
            <p><strong>Endereço:</strong> Rua da Cidadania, 123 - Bairro Esperança - São Paulo/SP</p>
          </div>
          <div className="contact-info">
            <p><strong>Telefone:</strong> <a href="tel:+5511999999999" aria-label="Ligar para o telefone da ONG Mãos Unidas">(11) 99999-9999</a></p>
            <p><strong>Email:</strong> <a href="mailto:contato@ongmaosunidas.org.br" aria-label="Enviar email para contato da ONG Mãos Unidas">contato@ongmaosunidas.org.br</a></p>
          </div>
          <p className="copyright">&copy; 2025 ONG Mãos Unidas. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

