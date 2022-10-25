import React from 'react';
import { Link } from 'react-router-dom';
import s from "./Card.module.css";

// Import React icons 
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

function Card({ data }) { //Props ichidan datani ajratib oldim (object distractring)

    return (
        <>
            {
                data?.length > 1 && // datani mavjut ekanini tekshirib oldim
                <>
                    <div className={s.card__item}>
                        <div className={s.card}>
                            <img className={s.img} src={/* `http://10.10.1.160:2004/media/ ` */ data[0].img} alt="photo" /> { }
                            <div className={s.content}>
                                <span />
                                <h1>{data[0].title}</h1>
                                <p>{data[0].description}</p>
                                <p className={s.blue}>Товары под заказ в наличии: {data[0].price}</p>
                                <p>Цены от: {data[0].cost}</p>
                                <Link to="/new">
                                    <BsArrowLeftShort className={s.card_icons} />
                                </Link>
                            </div>
                        </div>
                        <div className={s.card}>
                            <div className={s.content2}>
                                <span />
                                <h1>{data[1].title}</h1>
                                <p>{data[1].description}</p>
                                <p className={s.blue}>Товары под заказ в наличии: {data[1].price}</p>
                                <p>Цены от: {data[1].cost}</p>
                                <Link to="/new">
                                    <BsArrowRightShort className={s.card_icons} />
                                </Link>
                            </div>
                            <img src={/* `http://10.10.1.160:2004/media/ ` */ data[1].img} alt="photo" />
                        </div>
                    </div>
                </>
            }
        </>
    );
}

export default Card;