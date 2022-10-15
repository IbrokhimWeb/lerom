import React, { useState } from 'react';
import s from "./Navbar.module.css";
import { Link } from "react-router-dom";


// Import React Icons
import { BiSearchAlt } from "react-icons/bi"


function Navbar(props) {
    const [ togle, setTogle] = useState(true);
    return (
        <>
            <nav className={s.navbar}>
                <section className={s.pages}>
                    <ul>
                        <select id="nav__select" className={s.nav__select}>
                            <option >Каталог</option>
                            <option >Каталог 2</option>
                        </select>
                        <li>
                            <Link className={s.Link} to="/">О нас</Link>
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
                <div className={s.nav__input}>
                    <input type="text" placeholder="Поиск по сайту..."/>
                    <BiSearchAlt className={s.imput__icons}/>
                </div>
            </nav>
        </>
    );
}

export default Navbar;