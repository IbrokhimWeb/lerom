import React from 'react';
import s from "./Carusel.module.css"

// Import React Icons
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { TbMaximize } from "react-icons/tb";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineStar } from "react-icons/ai";

function Carusel(props) {
    return ( 
        <>
            <div className={s.carusel}>
                    <BiChevronLeft className={s.carusel__icons} />
                    <div className={s.shorts__about}>
                        <h1>Производим мебель <br />с 1997 года</h1>
                        <p>Мы готовы принять и передать ваш  заказ на мебель <br /> региональному представительству.</p>
                        <p> Для этого пришлите ваши пожелания и контактную <br /> информацию нам на почту zakaz@lerom.ru</p>
                        <div className={s.activate}>
                            <div className={s.production}>
                                <TbMaximize className={s.activate__icons} />
                                <div>
                                    <h2>{'>100 000'} <span>м2</span></h2>
                                    <p>Производственная <br /> площадь.</p>
                                </div>
                            </div>
                            <div className={s.working}>
                                <HiOutlineUser className={s.activate__icons} />
                                <div>
                                    <h2>{'>>1 100'} <span>чел</span></h2>
                                    <p>Рабочий <br />коллектив.</p>
                                </div>
                            </div>
                            <div className={s.officially}>
                                <AiOutlineStar className={s.activate__icons} />
                                <div>
                                    <h2>Официально</h2>
                                    <p>Мы находимся в национальном <br />реестре промышленных предприятий.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BiChevronRight className={s.carusel__icons} />
                </div>
        </>
    );
}

export default Carusel;