import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/SocialProjects.css';
import classroomImg from '../assets/images/classroom.jpg';
import kitchenImg from '../assets/images/kitchen.jpg';
import digitalClassroomImg from '../assets/images/digital-classroom.jpg';
import exampleAudio from '../assets/images/example-audio.mp3';

function SocialProjects() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);
  const projects = [
    {
      id: 'education',
      title: 'Projeto Semente do Amanhã (Educação)',
      description: 'Foco em reforço escolar para crianças e adolescentes, garantindo o acesso à tecnologia e a aulas de idiomas. Nosso objetivo é reduzir a evasão escolar na comunidade.',
      image: classroomImg,
      imageAlt: 'Crianças em um projeto educacional da ONG Mãos Unidas participando de aula com materiais escolares e tablets.',
      tags: [
        { name: 'Educação', class: 'tag-education' },
        { name: 'Inclusão', class: 'tag-inclusion' }
      ]
    },
    {
      id: 'food',
      title: 'Projeto Cozinha Solidária (Alimentação)',
      description: 'Distribuição semanal de marmitas para famílias carentes e população em situação de rua, combatendo a insegurança alimentar em nossa região.',
      image: kitchenImg,
      imageAlt: 'Voluntários da ONG Mãos Unidas servindo refeições para famílias em vulnerabilidade social em uma cozinha comunitária.',
      tags: [
        { name: 'Alimentação', class: 'tag-food' }
      ]
    },
    {
      id: 'inclusion',
      title: 'Projeto Apoio Digital (Inclusão)',
      description: 'Aulas de informática básica e orientação para uso de serviços digitais essenciais para a inclusão de adultos e idosos, promovendo confiança e facilidade no uso de tecnologias do dia a dia.',
      image: digitalClassroomImg,
      imageAlt: 'Instrutor da ONG Mãos Unidas auxiliando idosos a utilizarem tablets em uma oficina de inclusão digital.',
      tags: [
        { name: 'Inclusão', class: 'tag-inclusion' },
        { name: 'Digital', class: 'tag-education' }
      ]
    }
  ];

  return (
    <div className="social-projects">
      <a href="#projects-section" className="skip-link">Pular para o conteúdo principal</a>

      <main className="container" role="main" aria-label="Página com projetos sociais da ONG Mãos Unidas">
        <section id="projects-section" aria-labelledby="titulo-projetos">
          <h2 id="titulo-projetos">Projetos Sociais em Andamento</h2>

          <div className="projects-container">
            {projects.map(project => (
              <article key={project.id} className="project-card" id={project.id} aria-labelledby={`titulo-${project.id}`}>
                <div className="card-image">
                  <img src={project.image} alt={project.imageAlt} />
                </div>
                <div className="card-content">
                  <div>
                    {project.tags.map((tag, index) => (
                      <span key={index} className={`tag ${tag.class}`}>{tag.name}</span>
                    ))}
                  </div>
                  <h3 id={`titulo-${project.id}`}>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link to="/cadastro-voluntarios" className="button button-primary" aria-label={`Quero ajudar no ${project.title}`}>
                    Quero Ajudar!
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="media-section" aria-labelledby="titulo-midia">
          <h3 id="titulo-midia">Efeito Dos Nossos Projetos em Ação</h3>
          <div className="media-content">
            <audio controls aria-label="Depoimento de um voluntário sobre sua experiência na ONG Mãos Unidas">
              <source src={exampleAudio} type="audio/mpeg" />
              Seu navegador não suporta o áudio.
            </audio>
          </div>
        </section>

        <section id="volunteering" className="row" aria-labelledby="titulo-voluntariado">
          <div className="col-12 col-md-6">
            <h2 id="titulo-voluntariado">Como Se Tornar um Voluntário</h2>
            <p>Seja parte da mudança! Seu tempo e talento são o nosso maior recurso.</p>
            <ol>
              <li>Preencha o formulário completo em nossa página de <Link to="/cadastro-voluntarios">Cadastro de Voluntários</Link>.</li>
              <li>Aguarde o contato de nossa equipe para uma entrevista inicial.</li>
              <li>Participe de um treinamento de orientação e comece a atuar em um de nossos projetos!</li>
            </ol>
          </div>

          <div id="donation" className="col-12 col-md-6" aria-labelledby="titulo-doacao">
            <h2 id="titulo-doacao">Apoie Nossa Causa (Doações)</h2>
            <p>Sua contribuição financeira é vital para manter a infraestrutura e a compra de insumos básicos.</p>
            <p><strong>Formas de Doação:</strong></p>
            <ul>
              <li><strong>Pix:</strong> (CNPJ da ONG) 00.000.000/0001-00</li>
              <li><strong>Transferência Bancária:</strong> Banco X, Agência YYYY, Conta ZZZZZ-Z.</li>
            </ul>
          </div>
        </section>
      </main>

      <footer role="contentinfo" aria-label="Rodapé com informações de contato e direitos autorais da ONG Mãos Unidas">
        <div className="container">
          <div>
            <h3>Fale Conosco!</h3>
            <p><strong>Endereço:</strong> Rua da Cidadania, 123 - Bairro Esperança - São Paulo/SP</p>
          </div>
          <div className="contact-info">
            <p><strong>Telefone:</strong> <a href="tel:+5511999999999" aria-label="Ligar para a ONG Mãos Unidas">(11) 99999-9999</a></p>
            <p><strong>Email:</strong> <a href="mailto:contato@ongmaosunidas.org.br" aria-label="Enviar e-mail para a ONG Mãos Unidas">contato@ongmaosunidas.org.br</a></p>
          </div>
          <p className="copyright">&copy; 2025 ONG Mãos Unidas. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default SocialProjects;

