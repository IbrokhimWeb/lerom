import React from 'react';
import s from "./Product.module.css";

// Import React Icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// import assets
import product from "../../assets/card2.png";

// Import Data
import { color_selection } from "../../static/static"


// Import Components
import Payment from '../../components/payment/Payment';
import Radio from '../../components/radio/Radio';

function Product(props) {
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
                        <div className={s.colors}>
                            <p>цвет</p>
                            {
                                color_selection.map(( e, i )=> <Radio nmae="radio" key={i} data={e}/>)
                            }
                        </div>
                        <div className={s.calc}>
                            <h2>Цена: <span>{"62 284"} ₽</span></h2>

                            <div className={s.inc__dec}>
                                <AiOutlineMinus className={s.inc__dec__icons} />
                                <p> {1} </p>
                                <AiOutlinePlus className={s.inc__dec__icons} />
                            </div>
                        </div>
                        <button className={s.button}>Купить</button>
                    </div>
                    <div className={s.axsia}>
                        <Payment className={s.axia__component} />
                    </div>
                </header>
            </div>
        </>
    );
}

export default Product;