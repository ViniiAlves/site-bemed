import React from 'react';

const SiteLayout = () => {
  return (
    <div>
      <header>
        <img src="arquivos/bemed_logotipo_branco.png"></img>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/produtos">Produtos</a></li>
            <li><a href="/contato">Contato</a></li>
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