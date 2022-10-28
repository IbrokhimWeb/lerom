import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom"
import { ApiContext } from '../../context/ApiContext';
import s from "./Header.module.css";

//  Import React Icons
import { MdAccessTimeFilled } from "react-icons/md";
import { FaCompass, FaBars } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";

function Header(props) {
    const api = useContext(ApiContext);
    const [open, setOpen] = useState(true)

    return (
        <>
            <main className={s.main}>
                <header className={s.header}>
                    <div className={s.left__menu}>
                        <div className={s.working__time}>
                            <MdAccessTimeFilled className={s.header__icons} />
                            <div className={s.working__time__item}>
                                <p>Пн-Пт с {api?.info?.working_time?.mn_fr}</p>
                                <p>Сб-Вс с {api?.info?.working_time?.st_sn}</p>
                            </div>
                        </div>
                        <div className={s.our__salons}>
                            <FaCompass className={s.header__icons} />
                            <a href="#">Наши салоны</a>
                        </div>
                    </div>
                    <Link to="/" className={s.brand}>
                        <img className={s.header__logo} src={/**http://10.10.1.160:2004/ */`${api?.info?.logo}`} alt="Logo" />
                    </Link>
                    <div className={s.contacts}>
                        <div className={s.odel__prodaj}>
                            <p>Отдел продаж:</p>
                            <BsTelephoneFill className={s.headerPhone__icons} />
                            <div className={s.phone__number}>
                                <p>{api?.info?.sales[0]}</p>
                                <p>{api?.info?.sales[1]}</p>
                            </div>
                        </div>
                        <div className={s.russian__conversation}>
                            <p>Звонки по Росии:</p>
                            <BsTelephoneFill className={s.headerPhone__icons} style={{ marginRight: "6px" }} />
                            <div className={s.phone__number}>
                                <p>{api?.info?.across_Russia}</p>
                                <h4>Бесплатно</h4>
                            </div>
                        </div>
                    </div>
                    {
                        open
                            ?
                            <FaBars className={s.open__close} onClick={() => setOpen(false)} />
                            :
                            <RiCloseFill className={s.open__close} onClick={() => setOpen(true)} />
                    }
                </header>
                {
                    !open
                    &&
                    <main className={s.responsive__main}>
                        <div className={s.responsive__header}>
                            <div>
                                <div className={s.worcking___time}>
                                    <MdAccessTimeFilled className={s.header___icons} />
                                    <div>
                                        <p>Пн-Пт с {api?.info?.working_time?.mn_fr}</p>
                                        <p>Сб-Вс с {api?.info?.working_time?.st_sn}</p>
                                    </div>
                                </div>
                                <div className={s.our___salons}>
                                    <FaCompass className={s.header___icons} />
                                    <a href="#">Наши салоны</a>
                                </div>
                            </div>
                            <section className={s.responsive__pages}>
                                <ul>
                                    <li>
                                        <Link className={s.Link} to="/news">О нас</Link>
                                    </li>
                                    <li>
                                        <Link className={s.Link} to="/">3D-моделирование</Link>
                                    </li>
                                    <li>
                                        <Link className={s.Link} to="/">Покупателю</Link>
                                    </li>
                                    <li>
                                        <Link className={s.Link} to="/">Доставка и оплата</Link>
                                    </li>
                                </ul>
                            </section>
                            <div>
                                <p className={s.oddel}>Отдел продаж:</p>
                                <div className={s.call__centers}>
                                    <BsTelephoneFill className={s.headerPhone__icons} />
                                    <p>{api?.info?.sales[0]}</p>
                                </div>
                                <div className={s.call__centers}>
                                    <BsTelephoneFill className={s.headerPhone__icons} />
                                    <p>{api?.info?.sales[1]}</p>
                                </div>
                            </div>
                            <div className={s.ruscaya__call}>
                                <p>Звонки по Росии:</p>
                                <div className={s.call__centers}>
                                    <BsTelephoneFill className={s.headerPhone__icons} />
                                    <div>
                                        <p>{api?.info?.across_Russia}</p>
                                        <h4>Бесплатно</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                }
            </main>
        </>
    );
}

export default Header;