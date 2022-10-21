import React from 'react';
import s from "./Endcard.module.css"

// Import React icons 
import { BsArrowLeftShort } from "react-icons/bs"


function EndCard({ data }) {
    const { id, title, description, cost, price, img } = data[0];
    return (
        <>
            <div className={s.card}>
                <img src={`http://10.10.1.160:2005/media/${img}`} alt="photo" />
                <div className={s.content}>
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