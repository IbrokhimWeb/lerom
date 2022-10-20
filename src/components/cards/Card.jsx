import React from 'react';
import s from "./Card.module.css";

// Import React icons 
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Card(props) {
    // const { id, title, img, price, description, cost } = props.data;
    const { data } = props;

    return (
        <>
            {
                data?.length > 1 &&
                <>
                    <div className={s.card__item}>
                        <div className={s.card}>
                            <img className={s.img} src={data[0].img} alt="photo" />
                            <div className={s.content}>
                                <h1>{data[0].title}</h1>
                                <p>{data[0].description}</p>
                                <p>Товары под заказ в наличии: {data[0].price}</p>
                                <p>Цены от: {data[0].cost}</p>
                                <Link to="/new">
                                    <BsArrowLeftShort className={s.card_icons} />
                                </Link>
                            </div>
                        </div>
                        <div className={s.card}>
                            <div className={s.content2}>
                                <h1>{data[1].title}</h1>
                                <p>{data[1].description}</p>
                                <p>Товары под заказ в наличии: {data[1].price}</p>
                                <p>Цены от: {data[1].cost}</p>
                                <Link to="/new">
                                    <BsArrowRightShort className={s.card_icons} />
                                </Link>
                            </div>
                            <img src={data[1].img} alt="photo" />
                        </div>
                    </div>
                </>
            }
        </>
    );
}

export default Card;








// <> 
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
{/* </> */ }
{/* } */ }


    // <>
                //     <div className={s.card}>
                //         <img className={s.img} src={img} alt="photo" /> {/**`http://10.10.1.160:2005${img}`*/}
                //         <div className={s.content}>
                //             <h1>{title}</h1>
                //             <p>{description}</p>
                //             <p>Товары под заказ в наличии: {price}</p>
                //             <p>Цены от:{cost}</p>
                //             <BsArrowLeftShort className={s.card_icons} />
                //         </div>
                //     </div>
                // </> +
                // <>
                //     <div className={s.card}>
                //         <div className={s.content}>
                //             <h1>{title}</h1>
                //             <p>{description}</p>
                //             <p>Товары под заказ в наличии: {price}</p>
                //             <p>Цены от:{cost}</p>
                //             <BsArrowRightShort className={s.card_icons} />
                //         </div>
                //         <img className={s.img} src={img} alt="photo" /> {/**`http://10.10.1.160:2005${img}` */}
                //     </div>
                // </>