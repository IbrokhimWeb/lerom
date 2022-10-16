import React, { useState } from 'react';
import s from "./Product.module.css";

// Import React Icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
 
// import assets
import product from "../../assets/card2.png";

// Import Data
import { color_selection, tovar } from "../../static/static";


// Import Components
import Payment from '../../components/payment/Payment';
import Radio from '../../components/radio/Radio';
import Characteristics from '../../components/characteristics/Characteristics';
import Tovar from "../../components/tovar/Tovar";

function Product(props) {
    const [value, setValue] = useState(1);



    return (
        <>
            <div className={s.container}>
                <header className={s.header}>
                    <div className={s.product__img}>
                        <img src={product} alt="photo" />
                    </div>
                    <div className={s.filter}>
                        <p>{"Главная >> Гостиные >>"}<span>{"Коллекции"}</span></p>
                        <div className={s.nazvania}>
                            <h1>{"название модели"}</h1>
                            <p>Артикул: {34235234523}</p>
                        </div>
                        <div className={s.size}>
                            <div className={s.razmer}>
                                <h2>Размеры</h2>
                                <p>{"В 2264  Ш 540  Г 352"}</p>
                            </div>
                            <div className={s.ves}>
                                <h2>Вес</h2>
                                <p>234234кг</p>
                            </div>
                        </div>
                        <hr className={s.hr} />
                        <div className={s.colors}>
                            <p>цвет</p>
                            <form className={s.form}>
                                {color_selection.map((e, i) => <Radio key={i} data={e} />)}
                            </form>
                        </div>
                        <hr className={s.hr} />
                        <div className={s.calc}>
                            <h2>Цена: <span>{62284 * value} ₽</span></h2>
                            <div className={s.inc__dec}>
                                <AiOutlineMinus className={s.inc__dec__icons} onClick={() => value > 1 ? setValue(value - 1) : setValue(value) } />
                                <p> {value} </p>
                                <AiOutlinePlus className={s.inc__dec__icons} onClick={() => setValue(value + 1)} />
                            </div>
                        </div>
                        <button className={s.button}>Купить</button>
                    </div>
                    <div className={s.axsia}>
                        <Payment />
                    </div>
                </header>
                <div className={s.characteristics}>
                    <Characteristics />
                </div>
                <div className={s.tovar}>
                    <h1>С ЭТИМ ТОВАРОМ МОЖНО КУПИТЬ</h1>
                    <div className={s.item}>
                        {tovar.map((e, i) => <Tovar key={i} data={e} />)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;