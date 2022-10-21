import React, { useState } from 'react';
import s from "./BasketCard.module.css";

// Import React Icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

// import components 
import Radio from "../radio/Radio";

function BasketCard(props) {
    const { id, image, model, v, sh, g, svet, sena, value } = props.data;
    const [val, setVal] = useState(value);
    // console.log(props.data);
    return (
        <>
            <section className={s.section}>
                <div className={s.about}>
                    <img src={`http://10.10.1.160:2004/media/${image}`} alt="tovar" /> {/**`http://10.10.1.160:2005${img}` */}
                    <div className={s.model}>
                        <h1>{model}</h1>
                        <p>Pазмер: <span>{`в ${v} ш ${sh} г ${g} `}</span></p>
                        <button onClick={() => { }} >
                            <MdDeleteForever /> Удалить
                        </button>
                    </div>
                </div>
                <div className={s.colors}>
                    <p>Цвет: <span>дуб</span></p>
                    <div className={s.radio}>
                        {
                            svet?.map((e, i) => <Radio name={id} key={i} data={e} />)
                        }
                    </div>
                </div>

                <div className={s.calc}>
                    <div className={s.sena}>
                        <h1>{sena} ₽</h1>
                        <p>цена за 1 шт</p>
                    </div>
                    <div className={s.inc__dec}>
                        <AiOutlineMinus className={s.inc__dec__icons} onClick={() => val > 1 ? setVal(val - 1) : setVal(val)} />
                        <p> {val} </p>
                        <AiOutlinePlus className={s.inc__dec__icons} onClick={() => setVal(val + 1)} />
                    </div>
                    <h1>{sena * val} ₽</h1>
                </div>
            </section>
            <hr />
        </>
    );
}

export default BasketCard;