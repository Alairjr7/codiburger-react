import style from './ItemCardapio.module.css'

function ItemCardapio({ img, h3, price }) {
    return (
        <>

            <div className={style.item}>
                <div className={style.info_item}>
                    <h3> {h3}</h3>
                    <div className={style.info_p}>
                        <p>R$</p>
                        <p id="price">{price}</p>
                    </div>
                </div>
                <div className={style.imagem_info}>
                    <img src={img} alt="Hamburguer-item1" />
                </div>
            </div>

        </>
    )
}

export default ItemCardapio