import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { ApiContext } from '../../context/ApiContext';
import s from "./Navbar.module.css";


// Import React Icons
import { BiSearchAlt } from "react-icons/bi"


function Navbar(props) {
    const api = useContext(ApiContext);
    
    // const [ togle, setTogle] = useState(true);
    return (
        <>
            <nav className={s.navbar}>
                <section className={s.pages}>
                    <ul>
                        <select className={s.nav__select}>
                            <option >Каталог</option>
                            <option >Каталог 2</option>
                        </select>
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
                <div className={s.nav__input}>
                    <input type="text" placeholder="Поиск по сайту..." />
                    <BiSearchAlt className={s.imput__icons} />
                </div>
            </nav>
        </>
    );
}

export default Navbar;