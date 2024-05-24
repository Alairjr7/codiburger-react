import style from '../Components/UnidadeConteudo.module.css'

function UnidadeConteudo({h4, p, p2}) {
    return (
        <div class={style.unidade_conteudo}>
            <h4><span style={{ color: '#F47A00' }}>Codi</span><span style={{ color: '#964B00' }}>Burguer</span> {h4} </h4>
            <p><strong>{p}</strong></p>
            <hr style={{ width: '80%' }} />
            <p>{p2} </p>
            <button>Contato</button>

        </div>
    )
}

export default UnidadeConteudo




