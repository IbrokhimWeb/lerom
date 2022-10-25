import React from 'react';
import s from "./Endcard.module.css"

// Import React icons 
import { BsArrowLeftShort } from "react-icons/bs"


function EndCard({ data }) { //props orqali kelgan malumotni ajratib oldim (object distractring)

    // dataning faqatgina 1 ta indexsi borligi uchun 0 (nol) inchi indexsini keylarini ajratib oldim (object distractring)
    const { title, description, cost, price, img } = data[0];

    return (
        <>
            <div className={s.card}>
                <img src={/* `http://10.10.1.160:2004/media/` */ img} alt="photo" />
                <div className={s.content}>
                    <span className={s.triangle} />
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p className={s.blue}>Товары под заказ в наличии: {price}</p>
                    <p>Цены от: {cost}</p>
                    <BsArrowLeftShort className={s.card_icons} />
                </div>
            </div>
        </>
    );
}

export default EndCard;