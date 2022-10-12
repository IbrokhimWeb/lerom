import React from 'react';
import s from "./Endcard.module.css"

// Import React icons 
import { BsArrowLeftShort } from "react-icons/bs"


function EndCard({ index, data}) {
    const { title, description, cost, price, img } = data;
    return (
        <>
            <div key={index} className={s.card2}>
                <img src={img} alt="photo" />
                <div className={s.card__item2}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p>Товары под заказ в наличии: {price}</p>
                    <p>Цены от: {cost}</p>
                    <BsArrowLeftShort className={s.card_icons} />
                </div>
            </div>
        </>
    );
}

export default EndCard;