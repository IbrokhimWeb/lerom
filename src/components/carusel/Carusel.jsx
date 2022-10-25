import React, { useContext, useState } from 'react';
import s from "./Carusel.module.css";
import { ApiContext } from '../../context/ApiContext';

// Import assets
import color1 from "../../assets/color1.png";
import color2 from "../../assets/color2.png";
import color3 from "../../assets/color3.png";
import color5 from "../../assets/color5.png";
import steps from "../../assets/steps.png";
import puzle from "../../assets/puzle.png";


// Import React Icons
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { TbMaximize } from "react-icons/tb";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineStar } from "react-icons/ai";
import { GrSteps } from "react-icons/gr";
import { FaPuzzlePiece } from "react-icons/fa";

function Carusel(props) {
    const api = useContext(ApiContext);
    const [carusel, setCarusel] = useState(1)

    return (
        <>
            {carusel == 1
                ?
                <>
                    <div className={s.carusel}>
                        <BiChevronLeft className={s.carusel__icons} onClick={() => carusel != 1 ? setCarusel(carusel - 1) : setCarusel(4)} />
                        <>
                            <div className={s.shorts__about}>
                                <h1>Производим мебель <br />с 1997 года</h1>
                                <div className={s.p}>
                                    <p className={s.p1}>Мы готовы принять и передать ваш  заказ на мебель <br /> региональному представительству.</p>
                                    <p className={s.p2}> Для этого пришлите ваши пожелания и контактную <br /> информацию нам на почту zakaz@lerom.ru</p>
                                </div>
                                <div className={s.activate}>
                                    <div className={s.production}>
                                        <TbMaximize className={s.activate__icons} />
                                        <div>
                                            <h2>{'>' + api?.info?.square} <span></span></h2>
                                            <p>Производственная <br /> площадь.</p>
                                        </div>
                                    </div>
                                    <div className={s.production}>
                                        <HiOutlineUser className={s.activate__icons} />
                                        <div>
                                            <h2>{'>' + api?.info?.employee} <span>чел</span></h2>
                                            <p>Рабочий <br />коллектив.</p>
                                        </div>
                                    </div>
                                    <div className={s.production}>
                                        <AiOutlineStar className={s.activate__icons} />
                                        <div>
                                            <h2>Официально</h2>
                                            <p>Мы находимся в национальном <br />реестре промышленных предприятий.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        <BiChevronRight className={s.carusel__icons} onClick={() => carusel != 4 ? setCarusel(carusel + 1) : setCarusel(1)} />
                    </div>
                </>
                :
                carusel == 2
                    ?
                    <>
                        <div className={s.carusel1}>
                            <BiChevronLeft className={s.carusel__icons} onClick={() => carusel != 1 ? setCarusel(carusel - 1) : setCarusel(4)} />
                            <>
                            <div className={s.shorts__about}>
                                <h1>Бесплатно</h1>
                                <div className={s.activate}>
                                    <div className={s.production}>
                                        <img className={s.activate__icons} src={s.steps} alt="" />
                                        {/* <GrSteps className={s.activate__icons} /> */}
                                        <div>
                                            <h2>ПОДЪЕМ<span></span></h2>
                                            <p>Бесплатно произведём <br /> подъем на ваш этаж.</p>
                                        </div>
                                    </div>
                                    <div className={s.production}>
                                        <img className={s.activate__icons} src={s.puzle} alt="" />
                                        {/* <FaPuzzlePiece className={s.activate__icons} /> */}
                                        <div>
                                            <h2>СБОРКА</h2>
                                            <p>Бесплатно соберём <br /> мебель любой сложности и конфигурации.</p>
                                        </div>
                                    </div>
                                </div>
                                <button className={s.button}>Подробнее</button>
                            </div>
                            </>
                            <BiChevronRight className={s.carusel__icons} onClick={() => carusel != 4 ? setCarusel(carusel + 1) : setCarusel(1)} />
                        </div>
                    </>
                    :
                    carusel == 3
                        ?
                        <>
                            <div className={s.carusel2}>
                                <BiChevronLeft className={s.carusel__icons} onClick={() => carusel != 1 ? setCarusel(carusel - 1) : setCarusel(4)} />
                                <>
                                    <div className={s.shorts__about}>
                                        <h1>обновлёная <br /> <span>“мелисса” </span>  “камелия”</h1>
                                        <h2>с новыми декорами</h2>
                                        <div className={s.colors}>
                                            <div>
                                                <img src={color3} alt="" /> Снежный ясень
                                                <span className={s.marginR} />
                                                <img src={color2} alt="" /> Грикори джексон светлый
                                            </div>
                                            <div>
                                                <img src={color1} alt="" /> Акация молдау
                                                <span className={s.marginR} />
                                                <img src={color5} alt="" /> Ясень асахи
                                            </div>
                                        </div>
                                        <button className={s.button}>Подробнее</button>
                                    </div>
                                </>
                                <BiChevronRight className={s.carusel__icons} onClick={() => carusel != 4 ? setCarusel(carusel + 1) : setCarusel(1)} />
                            </div>
                        </>
                        :
                        <>
                            <div className={s.carusel3}>
                                <BiChevronLeft className={s.carusel__icons} onClick={() => carusel != 1 ? setCarusel(carusel - 1) : setCarusel(4)} />
                                <>
                                    <div className={s.shorts__about}>
                                        <h1>обновлёная <br /> <span>“мелисса” </span>  “камелия”</h1>
                                        <h2>с новыми декорами</h2>
                                        <div className={s.colors}>
                                            <div>
                                                <img src={color3} alt="" /> Снежный ясень
                                                <span className={s.marginR} />
                                                <img src={color2} alt="" /> Грикори джексон светлый
                                            </div>
                                            <div>
                                                <img src={color1} alt="" /> Акация молдау
                                                <span className={s.marginR} />
                                                <img src={color5} alt="" /> Ясень асахи
                                            </div>
                                        </div>
                                        <button className={s.button}>Подробнее</button>
                                    </div>
                                </>
                                <BiChevronRight className={s.carusel__icons} onClick={() => carusel != 4 ? setCarusel(carusel + 1) : setCarusel(1)} />
                            </div>
                        </>
            }
        </>
    );
}

export default Carusel;