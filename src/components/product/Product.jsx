import React from 'react';
import { Link } from 'react-router-dom';
import s from "./Product.module.css";

// Import data
import { product } from "../../static/static";

function Product(props) {
    const { id, img, model, v, sh, svet, g, sena } = props.data;
    console.log(svet);
    return (
        <>
            <section className={s.section}>
                <img src={img} alt="Tovar" /> {/**`http://10.10.1.160:2005${img}` */}
                <div className={s.actions}>
                    <div>
                        <h1>{model}</h1>
                        <p>{`в ${v} ш ${sh} г ${g}`}</p>
                    </div>
                    <div>
                        <p>Цвет: дуб</p>
                        <div className={s.images}>
                            {
                                svet?.map((e, i) => <img className={s.img__item} key={i} src={e.img} />)
                            }
                        </div>
                    </div>
                    <h1>{sena} ₽</h1>
                    <div className={s.submit}>
                        <Link className={s.button} to={`/product/${id}`} >Купить</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Product;