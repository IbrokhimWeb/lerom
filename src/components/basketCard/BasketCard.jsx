import React, { useContext, useState } from 'react';
import s from "./BasketCard.module.css";

// Import React Icons
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { MdDeleteForever } from "react-icons/md";

// import components 
import Radio from "../radio/Radio";

function BasketCard(props) {
    const { id, img, model, v, sh, g, svet, sena } = props.data;
    const [val, setVal] = useState(1);

    return (
        <>
            <section className={s.section}>
                <div className={s.about}>
                    <img src={img} alt="tovar" /> {/**`http://10.10.1.160:2005${img}` */}
                    <div className={s.model}>
                        <h1>{model}</h1>
                        <p>Pазмер: <span>{`в ${v} ш ${sh} г ${g} `}</span></p>
                        <button onClick={() => {}} >
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
                        <VscTriangleDown className={s.inc__dec__icons} onClick={() => val > 1 ? setVal(val - 1) : setVal(val)} />
                        <p> {val} </p>
                        <VscTriangleUp className={s.inc__dec__icons} onClick={() => setVal(val + 1)} />
                    </div>
                    <h1>{sena * val} ₽</h1>
                </div>
            </section>
            <hr />
        </>
    );
}

export default BasketCard;