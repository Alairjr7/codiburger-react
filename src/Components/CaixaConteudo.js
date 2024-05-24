import style from './CaixaConteudo.module.css'
import { Link } from 'react-router-dom';

function CaixaConteudo({ titulo, paragrafo }) {
    return (
        <>

            <div className={style.conteudo}>
                <div className={style.caixa_conteudo}>
                    <h2>{titulo}</h2>
                    <p>{paragrafo}</p>
                </div>
            </div>

        </>
    )
}

export default CaixaConteudo