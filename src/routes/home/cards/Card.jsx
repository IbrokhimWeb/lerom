import React from 'react';
import s from "./Card.module.css";

// Import React icons 
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"



function Card({ index, data }) {
    const { title, description, cost, price, img } = data;
    return (
        <>
            <section className={s.card} key={index}>
                {
                    index == 2 || index == 3 ? (
                        <>
                            <div className={s.card}>
                                <div className={s.card__item}>
                                    <h1>{title}</h1>
                                    <p>{description}</p>
                                    <p>Товары под заказ в наличии: {price}</p>
                                    <p>Цены от: {cost}</p>
                                    <BsArrowRightShort className={s.card_icons}/>
                                </div>
                                <img src={img} alt="photo" />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={s.card}>
                                <img src={img} alt="photo" />
                                <div className={s.card__item}>
                                    <h1>{title}</h1>
                                    <p>{description}</p>
                                    <p>Товары под заказ в наличии: {price}</p>
                                    <p>Цены от: {cost}</p>
                                    <BsArrowLeftShort className={s.card_icons}/>
                                </div>
                            </div>
                        </>
                    )
                }
            </section>
        </>
    );
}

export default Card;