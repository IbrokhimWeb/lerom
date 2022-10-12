import React from 'react';
import s from "./Header.module.css";
import { Link } from "react-router-dom"

// Import assets
import header__logo from "../../assets/logo.png"

//  Import React Icons
import { MdAccessTimeFilled } from "react-icons/md";
import { FaCompass } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs"

function Header(props) {
    return (
        <>
            <header className={s.header}>
                <div className={s.left__menu}>
                    <div className={s.working__time}>
                        <MdAccessTimeFilled className={s.header__icons}  />
                        <div className={s.working__time__item}>
                            <p>Пн-Пт с 10:00 до 20:00</p>
                            <p>Сб-Вс с 10:00 до 19:00</p>
                        </div>
                    </div>
                    <div className={s.our__salons}>
                        <FaCompass className={s.header__icons} />
                        <a href="#">Наши салоны</a>
                    </div>
                </div>
                <Link to="/" className={s.brand}>
                    <img className={s.header__logo} src={header__logo} alt="Logo" />
                </Link>
                <div className={s.contacts}>
                    <div className={s.odel__prodaj}>
                        <p>Отдел продаж:</p>
                        <BsTelephoneFill className={s.headerPhone__icons}/>
                        <div className={s.phone__number}>
                            <p>8 (495) 664-54-57</p>
                            <p>8 (929) 928-86-35</p>
                        </div>
                    </div>
                    <div className={s.russian__conversation}>
                    <p>Звонки по Росии:</p>
                        <BsTelephoneFill className={s.headerPhone__icons} style={{marginRight: "6px"}}/>
                        <div className={s.phone__number}>
                            <p>8-800-000-00-00</p>
                            <h4>Бесплатно</h4>
                        </div>
                    </div>
                </div>



            </header>
        </>
    );
}

export default Header;