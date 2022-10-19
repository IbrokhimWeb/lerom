import React from 'react';
import s from "./Tovar.module.css";

// Import data
import { tovar } from "../../static/static";

function Tovar(props) {
    // console.log(props);
    const { id, img, model, v, sh, g, svet, sena } = props.data;
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
                            {svet.map((e, i) => <img className={s.img__item} key={i} src={e.img} />)}
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

export default Tovar;