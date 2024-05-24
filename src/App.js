
import './App.css';
import CaixaConteudo from './Components/CaixaConteudo';
import Footer from './Components/Footer';
import { Link } from 'react-router-dom';


import Imagem1 from './image/Hamburguer1.png'
import Imagem2 from './image/Hamburguer2.png'
import Imagem3 from './image/Hamburguer3.png'

function App() {
  return (
    <>

      <header>
        <div className="header_container">
          <h1>
            <span style={{ color: '#F47A00' }}>CODI</span>
            <span style={{ color: '#964B00' }}>BURGER</span>
          </h1>
          
        </div>
        <hr style={{ border: 'none', borderBottom: '1px solid #F47A00' }} />
        <div className="text_header">
          <h2>UMA EXPERIÊNCIA QUE VAI FAZER <br />
            O SEU PALADAR <span style={{ color: '#F47A00' }}>PROGRAMAR</span> NOVOS
            SABORES</h2>
          <p>PRONTO PARA <span style={{ color: '#834201' }}><strong>HACKEAR</strong></span> O SABOR? </p>
          <p style={{ color: '#F47A00' }} className="p_service_header">SERVICE-DELIVERY-EXPRESS</p>
        </div>
      </header>
      <main>
        <div className="conteudo_container">
          <div className="box_conteudo">
            <CaixaConteudo
              titulo='NOSSAS UNIDADES'
              paragrafo='Descubra nossas unidades espalhadas. Venha desfrutar de nossos hambúrgueres exclusivos e saboreie
              a diferença em cada mordida'/>
            <Link to='/unidades'> CLICK AQUI</Link>
          </div>

          <div className="box_conteudo">
            <CaixaConteudo
              titulo='NOSSA HISTÓRIA'
              paragrafo='Revelamos nossa história através de cada mordida. Explore o caminho de nossos sabores e mergulhe
              na jornada de paixão e tradição que nos trouxe até aqui.'/>
              <Link to='/Historia'> CLICK AQUI</Link>
          </div>

          <div className="box_conteudo">
            <CaixaConteudo
              titulo='NOSSO CARDÁPIO'
              paragrafo='Delicie-se com nossas obras-primas culinárias e embarque em uma jornada de prazer gastronômico.
              Sua próxima aventura está apenas a uma mordida de distância!'/>
              <Link to='/Cardapio'> CLICK AQUI</Link>
          </div>
        </div>
      </main>
      <article>
        <div class="img_container">
          <div class="conteudo_img">
            <img src={Imagem1} alt="Hamburguer1" />
          </div>
          <div class="conteudo_img">
            <img src={Imagem2} alt="Hamburguer2" />
          </div>
          <div class="conteudo_img">
            <img src={Imagem3} alt="Hamburguer3" />
          </div>
        </div>
        <h1> Sabor em cada byte! </h1>
      </article>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
