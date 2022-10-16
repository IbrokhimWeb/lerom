import React, { useState } from 'react';
import s from "./Characteristics.module.css";

// Import data
import { tovar } from "../../static/static"

// Import Components
import Tovar from '../tovar/Tovar';

function Characteristics(props) {
    const [page, setPage] = useState(true);
    return (
        <>
            <section className={s.section}>
                {
                    page
                        ? <>
                            <div className={s.pages}>
                                <span className={s.marginL} />
                                <button className={s.button1} onClick={() => setPage(true)}>Технические характеристики</button>
                                <span className={s.transform} onClick={() => setPage(false)} />
                                <button className={s.button2} onClick={() => setPage(false)}>Состав композиции</button>
                                <span className={s.transform} onClick={() => setPage(false)} />
                            </div>
                            <div className={s.block}>
                                <h1>ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</h1>
                                <p>- корпус Ясень Асахи, фасад Снежный ясень (АС-СЯ) -новый декор! </p>
                                <p>- Ясень Асахи (АС) </p>
                                <p>- Акация Молдау (АТ) </p>
                                <p>- Гикори Джексон светлый (ГС) </p>
                                <p>- Снежный Ясень (СЯ) </p>
                                <p>
                                    Фасады коллекции имитируют специальную технологию «браширования» с глубоким тиснением.
                                </p>
                                <p>
                                    «Мелисса» комплектуется высококачественной европейской фурнитурой, которая прослужит долгие годы:
                                </p><br />
                                <p>
                                    - во всех выдвижных ящиках используются направляющие Quadro фирмы Hettich (Германия). Особенностью направляющих являются встроенный <br />
                                    доводчик Silent System, который позволяет закрывать ящик плавно и бесшумно, и скрытый механизм выдвижения в нижней части ящика <br />
                                    невидимый глазу, что позволяет не нарушать элегантный дизайн. <br /> <br />
                                </p>
                                <p>
                                    - петли с доводчиками Glissando TL 2 компании Titus (Словения) обеспечивают бесшумное и мягкое закрытие створки.
                                </p>
                                <p>
                                    Мебель изготовлена из экологичных материалов. Применяемые в производстве ЛДСП и МДФ компании «Egger» (Австрия), имеют класс эмиссии <br /> Е1.
                                </p>
                                <p>Стекло фасадов Графит серый.</p>
                            </div>
                        </>
                        :
                        <>
                            <div className={s.pages}>
                                <span className={s.marginL} />
                                <span className={s.transform__revers} onClick={() => setPage(true)} />
                                <button className={s.button2} onClick={() => setPage(true)}>Технические характеристики</button>
                                <span className={s.transform__revers} onClick={() => setPage(true)} />
                                <button className={s.button1} onClick={() => setPage(false)}>Состав композиции</button>
                            </div>
                            <div className={s.block}>
                                <div className={s.items}>
                                    {tovar.map((e, i) => <Tovar key={i} data={e} />)}
                                </div>
                            </div>
                        </>
                }
            </section>
        </>
    );
}

export default Characteristics;