import React from 'react';
import s from "./Card.module.css";



function Card({ key, data, status }) {
    const { title, description, cost, price, img } = data;
    return (
        <>
            <section className={s.card} key={key}>
                {
                    <>
                        <img src={img} alt="photo" />
                        <div className={s.card__item}>
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <p>Товары под заказ в наличии: {price}</p>
                            <p>Цены от: {cost}</p>
                        </div>
                    </>
                }
            </section>
        </>
    );
}

export default Card;