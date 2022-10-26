import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from "./MiniCard.module.css";

// Import React icons 
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

// Import assets
import img1 from "../../assets/information1.png";
import img2 from "../../assets/information2.png";
import img3 from "../../assets/interesno1.png";
import img4 from "../../assets/interesno2.png";

// Import react icons
import { AiOutlineArrowDown } from "react-icons/ai";

function MiniCard() {

    //  O'zim uchun static data yaratib oldim 
    const [data, setData] = useState([
        [
            {
                id: 1,
                title: "Доставка по всей России",
                description: "Мини текст описания новости ее актуальности",
                img: img1,
            },
            {
                id: 2,
                title: "Бесплатная сборка",
                description: "Мини текст описания новости и ее актуальности",
                img: img2,
            }
        ],
        [
            {
                id: 3,
                title: "Как выбрать матрас",
                description: "Мини текст описания новости ее актуальности",
                img: img3,
            },
            {
                id: 4,
                title: "Какой шкаф выбрать в 2022 году",
                description: "Мини текст описания новости и ее актуальности",
                img: img4,
            }
        ],
    ]);

    return (
        <>
            <section className={s.section}>
                <div className={s.two__section}>
                    <h2>Информация</h2><h2>Интересное</h2>
                </div>
                <div className={s.cards}>

                    {// Yaratib olgan datamni map() metodi orqali birma bir codega uzatdim
                        data.map((e, i) =>
                            <div key={i}>
                                {
                                    i % 2 == 0 ? <h2 id={s.information}>Информация</h2> : <h2 id={s.interesno}>Интересное</h2>
                                }
                                <div className={s.card__item} >
                                    <div className={s.card}>
                                        <img className={s.img} src={e[0].img} alt="photo" /> { }
                                        <div className={s.content}>
                                            <span />
                                            <h1>{e[0].title}</h1>
                                            <p>{e[0].description}</p>
                                            <Link to="/new">
                                                <BsArrowLeftShort className={s.card_icons} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={s.card}>
                                        <div className={s.content2}>
                                            <span />
                                            <h1>{e[1].title}</h1>
                                            <p>{e[1].description}</p>
                                            <Link to="/new">
                                                <BsArrowRightShort className={s.card_icons} />
                                            </Link>
                                        </div>
                                        <img src={e[1].img} alt="photo" />
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
                <div className={s.two_section}>
                    <p>лером</p>
                    <h2>показать еще новости  <AiOutlineArrowDown /> </h2>
                    <h2>открыть раздел новости <AiOutlineArrowDown /> </h2>
                    <p>лером</p>
                </div>
            </section>
        </>
    );
}

export default MiniCard;