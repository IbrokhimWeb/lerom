import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import { ApiContext } from '../../context/ApiContext';
import s from "./Header.module.css";

//  Import React Icons
import { MdAccessTimeFilled } from "react-icons/md";
import { FaCompass } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs"

function Header(props) {
    const api = useContext(ApiContext);
    // console.log(api?.info);
    return (
        <>
            <header className={s.header}>
                <div className={s.left__menu}>
                    <div className={s.working__time}>
                        <MdAccessTimeFilled className={s.header__icons}  />
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
                    <img className={s.header__logo} src={`http://10.10.1.160:2004/${api?.info?.logo}`} alt="Logo" />
                </Link>
                <div className={s.contacts}>
                    <div className={s.odel__prodaj}>
                        <p>Отдел продаж:</p>
                        <BsTelephoneFill className={s.headerPhone__icons}/>
                        <div className={s.phone__number}>
                            <p>{api?.info?.sales[0]}</p>
                            <p>{api?.info?.sales[1]}</p>
                        </div>
                    </div>
                    <div className={s.russian__conversation}>
                    <p>Звонки по Росии:</p>
                        <BsTelephoneFill className={s.headerPhone__icons} style={{marginRight: "6px"}}/>
                        <div className={s.phone__number}>
                            <p>{api?.info?.across_Russia}</p>
                            <h4>Бесплатно</h4>
                        </div>
                    </div>
                </div>



            </header>
        </>
    );
}

export default Header;