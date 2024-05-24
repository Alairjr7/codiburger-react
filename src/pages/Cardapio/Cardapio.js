import style from './Cardapio.module.css'
import { Link } from "react-router-dom"
import logoCodiBurguer from './image/Logo-Codiburger.png'
import ItemCardapio from '../../Components/ItemCardapio'

import ImagemRefrigerante from './image/Refrigerantes.png'
import ImagemPorcao from './image/Batata-frita-bacon.png'
import ImagemSobremessas from './image/Sobremesas.png'

import Hamburguer1 from './image/Hamburguer-item1.png'
function Cardapio() {
    return (
        <>
            <header>
                <div className={style.header_container}>
                    <div className={style.header_position}>
                        <img src={logoCodiBurguer} alt="Logo-Codiburger" />
                        <div className={style.online_position}>
                            <div className={style.online_ball}>
                            </div>
                            <div className={style.online_text}>
                                <p>Online Agora</p>
                            </div>
                        </div>
                        <Link to='/'> Pagina Inicial</Link>
                    </div>
                </div>
            </header>

            <main>
                <div className={style.cardapio_container}>
                    <div className={style.menu_container}>
                        <div className={style.menu}>
                            <a href="#hamburgueres">Hambúrgueres</a>
                            <a href="#refrigerantes">Refrigerantes</a>
                            <a href="#porcoes">Porções</a>
                            <a href="#sobremesas">Sobremesas</a>
                        </div>
                    </div>
                </div>

                <button data-quantity="0" className={style.btn_cart} id="openModalBtn">
                    <svg className={style.icon_cart} viewBox="0 0 24.38 30.52" height="30.52" width="24.38"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>icon-cart</title>
                        <path transform="translate(-3.62 -0.85)"
                            d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0">
                        </path>
                    </svg>
                    <span className={style.quantity}>0</span>
                </button>
            </main>
            <section>
                <div className={style.cardapio} id="hamburgueres">
                    <h2>Hambúrgueres</h2>
                    <ItemCardapio
                        img={Hamburguer1}
                        h3='simples'
                        price='10,00' />

                    <ItemCardapio
                        img={Hamburguer1}
                        h3='Duplo'
                        price='10,00' />

                    <ItemCardapio
                        img={Hamburguer1}
                        h3='Vegetariano'
                        price='10,00' />
                    <ItemCardapio
                        img={Hamburguer1}
                        h3='Vegano'
                        price='10,00' />
                    <ItemCardapio
                        img={Hamburguer1}
                        h3='Gourmet (com ingredientes especiais)'
                        price='10,00' />
                </div>

                <div className={style.cardapio} id="refrigerantes">
                    <h2>Refrigerantes</h2>
                    <ItemCardapio
                        img={ImagemRefrigerante}
                        h3='Coca-cola'
                        price='10,00' />

                    <ItemCardapio
                        img={ImagemRefrigerante}
                        h3='Pepsi'
                        price='10,00' />

                    <ItemCardapio
                        img={ImagemRefrigerante}
                        h3='Fanta'
                        price='10,00' />
                    <ItemCardapio
                        img={ImagemRefrigerante}
                        h3='Sprite'
                        price='10,00' />
                    <ItemCardapio
                        img={ImagemRefrigerante}
                        h3='Guaraná'
                        price='10,00' />
                </div>

                <div className={style.cardapio} id="porcoes">
                    <h2>Porções</h2>
                    <ItemCardapio
                        img={ImagemPorcao}
                        h3='Anéis de lula'
                        price='10,00' />

                    <ItemCardapio
                        img={ImagemPorcao}
                        h3='Batatas fritas simples'
                        price='10,00' />

                    <ItemCardapio
                        img={ImagemPorcao}
                        h3='Batatas fritas com queijo e bacon'
                        price='10,00' />
                    <ItemCardapio
                        img={ImagemPorcao}
                        h3='Onion rings'
                        price='10,00' />
                    <ItemCardapio
                        img={ImagemPorcao}
                        h3='Chicken fingers'
                        price='10,00' />
                </div>

                <div className={style.cardapio} id="sobremesas">
                    <h2>Sobremesas</h2>
                    <ItemCardapio
                        img={ImagemSobremessas}
                        h3='Cheesecake de nozes e caramelo'
                        price='10,00' />

                    <ItemCardapio
                        img={ImagemSobremessas}
                        h3='Panna cotta de limão-siciliano'
                        price='10,00' />

                    <ItemCardapio
                        img={ImagemSobremessas}
                        h3=' Mil-folhas de brigadeiro com crocante de chocolate belga'
                        price='10,00' />
                    <ItemCardapio
                        img={ImagemSobremessas}
                        h3='Trufa de cereja'
                        price='10,00' />
                    <ItemCardapio
                        img={ImagemSobremessas}
                        h3='Semifreddo de café com doce de leite'
                        price='10,00' />
                </div>

            </section>

        </>
    )
}

export default Cardapio