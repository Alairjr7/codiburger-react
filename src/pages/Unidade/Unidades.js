import React from 'react'
import { Link } from "react-router-dom"
import style from './Unidades.module.css'
import UnidadeConteudo from '../../Components/UnidadeConteudo'
import Footer from '../../Components/Footer'

function Unidades() {
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
                    <h2>NOSSAS UNIDADES </h2>
                    <p>VENHA CONHECER NOSSAS UNIDADES <br />
                        E DESVENDE O <strong style={{ color: '#F47A00' }}>'CODIGO SECRETO'</strong> DOS <br />
                        <strong style={{ color: '#964B00' }}>HAMBÚRGUES</strong> MAIS SABOROS DA CIDADE!
                    </p>
                </div>
            </header>
            <main>
                <div className={style.container_position_unidade}>
                    <div className={style.unidade_container}>
                        <UnidadeConteudo
                            h4='Centro'
                            p='Rua das Delícias, 123 Centro'
                            p2='# Salão # Produtos exclusivos # Cardápio completo'
                        />
                        <UnidadeConteudo
                            h4='Praia'
                            p='Avenida dos Sabores, 456 Praia do Hambúrguer '
                            p2='# Salão / Garçons # Produtos exclusivos # Cardápio completo # Delivery'
                        />
                        <UnidadeConteudo
                            h4='Parque'
                            p=' Parque dos Sabores, 789 '
                            p2='# Salão / Garçons  # Produtos exclusivos # Cardápio completo # Delivery'
                        />
                        <div className={style.unidade_container}>
                            <UnidadeConteudo
                                h4='Shopping'
                                p=' Shopping Gourmet, Piso 2, Loja 210  '
                                p2='# Salão / Garçons # Produtos exclusivos # Cardápio completo # Delivery'
                            />
                            <UnidadeConteudo
                                h4='Praça'
                                p=' Praça das Delícias, 456 '
                                p2='# Salão / Garçons # Produtos exclusivos # Cardápio completo  # Delivery'
                            />
                            <UnidadeConteudo
                                h4='Vila Gourmet'
                                p=' Rua dos Sabores, 789 '
                                p2='# Salão / Garçons  # Produtos exclusivos # Cardápio completo # Delivery'
                            />
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

export default Unidades