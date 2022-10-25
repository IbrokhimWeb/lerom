import React, { useContext, useState } from 'react';
import s from "./Carusel.module.css";
import { ApiContext } from '../../context/ApiContext';

// Import assets
import color1 from "../../assets/color1.png";
import color2 from "../../assets/color2.png";
import color3 from "../../assets/color3.png";
import color5 from "../../assets/color5.png";


// Import React Icons
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { TbMaximize } from "react-icons/tb";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineStar } from "react-icons/ai";
import { TbStairsUp } from "react-icons/tb";
import { GiPuzzle } from "react-icons/gi";

function Carusel(props) {
    const api = useContext(ApiContext); // api malumotlarini useContext orqali ApiContext dan chaqirib oldim
    const [carusel, setCarusel] = useState(1); // Carusel hosil qilish uchun state yaratdim

    return (
        <>
            {
                carusel === 1 ? //carusel state qiymatini tekshirdim 
                    <>
                        <div className={s.carusel}>
                            {/* carusel state qiymati 1 ga teng bo'lmasa qiymatni 1 ga kamaytrish akis holda ko'paytrish buyrug'ini kiritdim */}
                            <BiChevronLeft className={s.carusel__icons} onClick={() => carusel !== 1 ? setCarusel(carusel - 1) : setCarusel(4)} />
                            <>
                                <div className={s.shorts__about}>
                                    <h1>Производим мебель <br />с 1997 года</h1>
                                    <div className={s.p}>
                                        <p className={s.p1}>Мы готовы принять и передать ваш  заказ на мебель <br /> региональному представительству.</p>
                                        <p className={s.p2}> Для этого пришлите ваши пожелания и контактную <br /> информацию нам на почту zakaz@lerom.ru</p>
                                    </div>
                                    <div className={s.activate}>
                                        <div className={s.production}>
                                            <div className={s.activate__item}>
                                                <TbMaximize className={s.activate__icons} />
                                            </div>
                                            <div>
                                                <h2>{'>' + api?.info?.square} <span></span></h2>
                                                <p>Производственная <br /> площадь.</p>
                                            </div>
                                        </div>
                                        <div className={s.production}>
                                            <div className={s.activate__item}>
                                                <HiOutlineUser className={s.activate__icons} />
                                            </div>
                                            <div>
                                                <h2>{'>' + api?.info?.employee} <span>чел</span></h2>
                                                <p>Рабочий <br />коллектив.</p>
                                            </div>
                                        </div>
                                        <div className={s.production}>
                                            <div className={s.activate__item}>
                                                <AiOutlineStar className={s.activate__icons} />
                                            </div>
                                            <div>
                                                <h2>Официально</h2>
                                                <p>Мы находимся в национальном <br />реестре промышленных предприятий.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            {/* carusel state qiymati 4 ga teng bo'lmasa qiymatni 1 ga oshirish akis holda kamayish buyrug'ini kiritdim */}
                            <BiChevronRight className={s.carusel__icons} onClick={() => carusel !== 4 ? setCarusel(carusel + 1) : setCarusel(1)} />
                        </div>
                    </>
                    : carusel === 2 ? //carusel state qiymatini tekshirdim 
                        <>
                            <div className={s.carusel1}>
                                {/* carusel state qiymati 1 ga teng bo'lmasa qiymatni 1 ga kamaytrish akis holda ko'paytrish buyrug'ini kiritdim */}
                                <BiChevronLeft className={s.carusel__icons} onClick={() => carusel !== 1 ? setCarusel(carusel - 1) : setCarusel(4)} />
                                <>
                                    <div className={s.shorts__about}>
                                        <h1>Бесплатно</h1>
                                        <div className={s.activate}>
                                            <div className={s.production}>
                                                <div className={s.activate__item}>
                                                    <TbStairsUp className={s.activate__icons} />
                                                </div>
                                                <div>
                                                    <h2>ПОДЪЕМ<span></span></h2>
                                                    <p>Бесплатно произведём <br /> подъем на ваш этаж.</p>
                                                </div>
                                            </div>
                                            <div className={s.production}>
                                                <div className={s.activate__item}>
                                                    <GiPuzzle className={s.activate__icons} />
                                                </div>
                                                <div>
                                                    <h2>СБОРКА</h2>
                                                    <p>Бесплатно соберём <br /> мебель любой сложности и конфигурации.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <button className={s.button}>Подробнее</button>
                                    </div>
                                </>
                                {/* carusel state qiymati 4 ga teng bo'lmasa qiymatni 1 ga oshirish akis holda kamayish buyrug'ini kiritdim */}
                                <BiChevronRight className={s.carusel__icons} onClick={() => carusel !== 4 ? setCarusel(carusel + 1) : setCarusel(1)} />
                            </div>
                        </>
                        : carusel === 3 ? //carusel state qiymatini tekshirdim 
                            <>
                                <div className={s.carusel2}>
                                    {/* carusel state qiymati 1 ga teng bo'lmasa qiymatni 1 ga kamaytrish akis holda ko'paytrish buyrug'ini kiritdim */}
                                    <BiChevronLeft className={s.carusel__icons} onClick={() => carusel !== 1 ? setCarusel(carusel - 1) : setCarusel(4)} />
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
                                    {/* carusel state qiymati 4 ga teng bo'lmasa qiymatni 1 ga oshirish akis holda kamayish buyrug'ini kiritdim */}
                                    <BiChevronRight className={s.carusel__icons} onClick={() => carusel !== 4 ? setCarusel(carusel + 1) : setCarusel(1)} />
                                </div>
                            </>
                            :
                            <>
                                <div className={s.carusel3}>
                                    {/* carusel state qiymati 1 ga teng bo'lmasa qiymatni 1 ga kamaytrish akis holda ko'paytrish buyrug'ini kiritdim */}
                                    <BiChevronLeft className={s.carusel__icons} onClick={() => carusel !== 1 ? setCarusel(carusel - 1) : setCarusel(4)} />
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
                                    {/* carusel state qiymati 4 ga teng bo'lmasa qiymatni 1 ga oshirish akis holda kamayish buyrug'ini kiritdim */}
                                    <BiChevronRight className={s.carusel__icons} onClick={() => carusel !== 4 ? setCarusel(carusel + 1) : setCarusel(1)} />
                                </div>
                            </>
            }
        </>
    );
}

export default Carusel;