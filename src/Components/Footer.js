import style from './Footer.module.css'

function Footer() {
    return (
        <div className={style.footer_container}>
            <div className={style.footer_conteudo}>
                <div className={style.text_footer}>
                    <p><strong>Unidades:</strong></p>
                    <p>
                        <strong style={{ color: '#964B00' }}> Centro: </strong> 
                         Rua das Delícias, 123 Centro
                    </p>
                    <p>
                        <strong style={{ color: '#964B00' }}> Praia: </strong>
                        Avenida dos Sabores, 456 Praia do Hambúrguer
                    </p>
                    <p>
                        <strong style={{ color: '#964B00' }}> Parque: </strong>
                        Parque dos Sabores, 789

                    </p>
                    <p>
                        <strong style={{ color: '#964B00' }}>Shopping: </strong>
                        Shopping Gourmet, Piso 2, Loja 210
                    </p>
                    <p>
                        <strong style={{ color: '#964B00' }}>Praça: </strong>
                        Praça das Delícias, 456
                    </p>

                    <p>
                        <strong style={{ color: '#964B00' }}>Vila Gourmet: </strong>
                        Rua dos Sabores, 789
                    </p>
                </div>

                <div className={style.text_footer}>
                    <h1><span style={{ color: '#F47A00' }}>Codi</span><span style={{ color: '#964B00' }}>Burger</span></h1>

                    <p>Todos os direitos reservados <br />
                        Hamburgueria CodiBurger 2024
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer