import React from 'react';
import s from "./Product.module.css";

// Import React Icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// import assets
import product from "../../assets/card2.png";

// Import Components
import Payment from '../../components/payment/Payment';

function Product(props) {
    return (
        <>
            <div className={s.container}>
                <header className={s.header}>
                    <div className={s.product__img}>
                        <img src={product} alt="photo" />
                    </div>
                    <div className={s.filter}>
                        <p>{"Главная >> Гостиные >> Коллекции"}</p>
                        <h1>{"название модели"}</h1>
                        <p>Артикул: {34235234523}</p>
                        <div className={s.size}>
                            <div className={s.razmer}>
                                <p>Размеры</p>
                                <p>{"В 2264  Ш 540  Г 352"}</p>
                            </div>
                            <div className={s.ves}>
                                <p>Вес</p>
                                <p>234234кг</p>
                            </div>
                        </div>
                        <div className={s.colors}>
                            <p>цвет</p>
                            <div>
                                <input type="checkbox" />
                                <input type="checkbox" />
                                <input type="checkbox" />
                                <input type="checkbox" />
                                <input type="checkbox" />
                                <input type="checkbox" />
                                <input type="checkbox" />
                                <input type="checkbox" />
                            </div>
                        </div>
                        <div className={s.calc}>
                            <p>Цена:</p>
                            <h1>{"62 284"} ₽</h1>
                            <div className={s.inc__dec}>
                                <AiOutlineMinus className={s.inc__dec__icons}/>
                                <p>{1}</p>
                                <AiOutlinePlus className={s.inc__dec__icons}/>
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