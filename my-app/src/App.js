/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const SiteLayout = () => {
  return (
    <div>
      <header>
        <img src="../arquivos/bemedLogotipoBranco.png" alt=""></img>
        <nav>
          <ul>
            <li><a>Quem Somos</a></li>
            <li><a>Produtos</a></li>
            <li><a>Inscreva-se</a></li>
            <li><a>Trabalhe Conosco</a></li>
            <li><a>Cotação Digital</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section>
          <h2>Bem-vindo à nossa empresa!</h2>
          <p>
            Aqui você encontrará uma ampla variedade de equipamentos médicos de alta qualidade.
            Nossos produtos são ideais para hospitais, clínicas e profissionais da área de saúde.
          </p>
        </section>
        
        <section>
          <h2>Produtos em Destaque</h2>
          <ul>
            <li>Equipamento 1</li>
            <li>Equipamento 2</li>
            <li>Equipamento 3</li>
            {/* Adicione mais produtos conforme necessário */}
          </ul>
        </section>
        
        <section>
          <h2>Entre em Contato</h2>
          <p>
            Tem alguma dúvida ou precisa de mais informações? Entre em contato conosco pelos seguintes meios:
          </p>
          <ul>
            <li>E-mail: contato@empresa.com</li>
            <li>Telefone: (00) 1234-5678</li>
            {/* Adicione mais informações de contato conforme necessário */}
          </ul>
        </section>
      </main>
      
      <footer>
        <p>Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default SiteLayout;