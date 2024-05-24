import { Link } from "react-router-dom"
import style from './Historia.module.css'
import imagemHistoria from './image/Imagem-Historia.png'
import Footer from '../../Components/Footer'

function Historia() {
    return (
        <>
            <header>
                <div className={style.header_container}>
                    <h1>
                        <span style={{ color: '#F47A00' }}>CODI</span>
                        <span style={{ color: '#964B00' }}>BURGER</span>
                    </h1>
                    <Link to='/'> INICIO
                    </Link>
                </div>
                <hr style={{ border: 'none', borderBottom: '1px solid #F47A00' }} />
                <div className={style.text_header}>
                    <h2>NOSSA HISTÓRIA</h2>
                    <p>
                        Adentre o universo da <strong style={{ color: '#F47A00' }}>Codi</strong><strong style={{ color: '#964B00' }}>Burger </strong>e desvende os segredos por trás de cada sabor. <br /> Uma jornada única de gastronomia e inovação aguarda por você. <br /> Bem-vindo ao palco da nossa paixão pela culinária!
                    </p>
                </div>
            </header>
            <main>
                <div className={style.historia_container}>
                    <div className={style.historia_position}>
                        <div className={style.historia_img} id={style.img_none}>
                            <img src={imagemHistoria} alt="Historia CodiBurger " />
                        </div>
                        <div className={style.historia_text}>
                            <h2>NOSSA HISTÓRIA </h2>
                            <p>A CodiBurger surge como um empreendimento que vislumbrou uma oportunidade única no mercado de
                                alimentação rápida e personalizada. Nossa jornada começou com a percepção de uma crescente
                                demanda por uma experiência gastronômica que combinasse sabor, conveniência e inovação.</p>

                            <p>Comprometidos em oferecer algo verdadeiramente excepcional, reunimos uma equipe dedicada e
                                apaixonada, pronta para transformar essa visão em realidade. Nosso objetivo era ir além dos
                                tradicionais hambúrgueres de fast-food, criando um ambiente onde a personalização e a qualidade
                                dos ingredientes fossem prioridades.</p>

                            <p>Foi assim que nasceu a CodiBurger, um conceito revolucionário que combina o melhor da tecnologia
                                com o prazer da culinária artesanal. Desde o início, nos propusemos a oferecer uma experiência
                                única, onde cada cliente pudesse criar o seu próprio hambúrguer, escolhendo entre uma ampla
                                variedade de ingredientes frescos e de alta qualidade.</p>
                        </div>
                    </div>
                    <div className={style.position_historia_reverse}>
                        <div className={style.historia_img}>
                            <img src={imagemHistoria} alt="Historia CodiBurger" />
                        </div>
                        <div className={style.historia_text}>
                            <p>Para tornar essa experiência ainda mais acessível e conveniente, desenvolvemos um sistema inovador de pedidos personalizados. Através de tablets disponíveis em todas as mesas, os clientes podem criar e personalizar seus hambúrgueres de acordo com suas preferências, garantindo uma refeição verdadeiramente única e sob medida.</p>

                            <p>Além disso, nossa abordagem inovadora se estende ao mundo digital, com o desenvolvimento de um aplicativo móvel que permite aos clientes encomendar seus hambúrgueres com antecedência, agilizando o processo e garantindo uma experiência ainda mais satisfatória.</p>

                            <p>Desde nossa inauguração, a CodiBurger tem sido aclamada tanto pela crítica quanto pelos clientes. O reconhecimento vem não apenas da qualidade dos nossos hambúrgueres, mas também da nossa dedicação em proporcionar um atendimento excepcional e uma experiência gastronômica que vai além das expectativas.</p>

                            <p> À medida que continuamos a crescer e expandir, mantemos nosso compromisso inabalávexcelência. Cada nova conquista é uma homenagem à nossa missão original de proporciexperiência culinária única, impulsionada pela inovação, paixão e comprometimento com a sados nossos clientes.</p>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </>

    )
}

export default Historia