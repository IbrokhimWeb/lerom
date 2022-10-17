import React from 'react';
import s from "./Product.module.css";

function Product(props) {
    const { id, img, model, v, sh, g, svet, sena } = props.data;
    return (
        <>
            <section className={s.section}>
                <img src={img} alt="Tovar" />
                <div className={s.actions}>
                    <div>
                        <h1>{model}</h1>
                        <p>{`в ${v} ш ${sh} г ${g}`}</p>
                    </div>
                    <div>
                        <p>Цвет: дуб</p>
                        <div className={s.images}>
                            {svet.map((e, i) => <img className={s.img__item} key={i} src={e} />)}
                        </div>
                    </div>
                    <h1>{sena} ₽</h1>
                    <div className={s.submit}>
                        <button className={s.button}>Купить</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Product;