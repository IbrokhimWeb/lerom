import React, { useState } from 'react';
import s from "./BasketCard.module.css";

// Import React Icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

// Import data
import { color_selection } from "../../static/static";

// import components 
import Radio from "../radio/Radio";

function BasketCard(props) {
    const { id, img, model, v, sh, g, svet, sena } = props.data;
    const [value, setValue] = useState(1)
    return (
        <>
            <section className={s.section}>
                <div className={s.about}>
                    <img src={img} alt="tovar" />
                    <div className={s.model}>
                        <h1>{model}</h1>
                        <p>Pазмер: <span>{`в ${v} ш ${sh} г ${g} `}</span></p>
                        <button><MdDeleteForever/> Удалить</button>
                    </div>
                </div>
                <div className={s.colors}>
                    <p>Цвет: дуб</p>
                    <div className={s.radio}>
                        {color_selection?.map((e, i) => <Radio key={i} data={e} />)}
                    </div>
                </div>

                <div className={s.calc}>
                    <div className={s.sena}>
                        <h1>{sena} ₽</h1>
                        <p>цена за 1 шт</p>
                    </div>
                    <div className={s.inc__dec}>
                        <AiOutlineMinus className={s.inc__dec__icons} onClick={() => value > 1 ? setValue(value - 1) : setValue(value)} />
                        <p> {value} </p>
                        <AiOutlinePlus className={s.inc__dec__icons} onClick={() => setValue(value + 1)} />
                    </div>
                    <h1>{sena * value} ₽</h1>
                </div>
            </section>
            <hr />

        </>
    );
}

export default BasketCard;