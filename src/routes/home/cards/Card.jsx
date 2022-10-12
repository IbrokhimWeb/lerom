import React from 'react';
import s from "./Card.module.css";

// Import React icons 
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"



function Card({ index, data }) {
    return (
        <>
            {
                data.length > 1
                    ? <>
                        <div className={s.card__item}>

                            <div className={s.top}>
                                <img className={s.img} src={data[0].img} alt="photo" />
                                <div className={s.content}>
                                    <h1>{data[0].title}</h1>
                                    <p>{data[0].description}</p>
                                    <p>Товары под заказ в наличии: {data[0].price}</p>
                                    <p>Цены от:{data[0].cost}</p>
                                    <BsArrowLeftShort className={s.card_icons} />
                                </div>
                            </div>

                            <div className={s.bottm}>
                                <div className={s.content}>
                                    <h1>{data[1].title}</h1>
                                    <p>{data[1].description}</p>
                                    <p>Товары под заказ в наличии: {data[1].price}</p>
                                    <p>Цены от:{data[1].cost}</p>
                                    <BsArrowRightShort className={s.card_icons} />
                                </div>
                                <img src={data[1].img} alt="photo" />
                            </div>

                        </div>
                    </> : <>
                        {/* <div className={s.one}>
                            <img className={s.img2} src={data[0].img} alt="photo" />
                            <div className={s.content2}>
                                <h1>{data[0].title}</h1>
                                <p>{data[0].description}</p>
                                <p>Товары под заказ в наличии: {data[0].price}</p>
                                <p>Цены от:{data[0].cost}</p>
                                <BsArrowLeftShort className={s.card_icons} />
                            </div>
                        </div> */}
                    </>
            }
        </>
    );
}

export default Card;