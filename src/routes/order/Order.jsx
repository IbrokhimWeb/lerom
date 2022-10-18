import React, { useContext, useState } from 'react';
import { ApiContex } from '../../contex/ApiContext';
import s from "./Order.module.css"

function Order(props) {
    const api = useContext(ApiContex);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");

    return (
        <>
            <section className={s.section}>
                <h1>оформление заказа</h1>
                <div className={s.information}>
                    <h1>Информация о покупателе</h1>
                    <form>
                        <div className={s.information__input}>
                            <input type="text" value={name} placeholder="Ф.И.О:" onChange={e => setName(e.target.value)} />
                            <input type="email" value={email} placeholder="E-mail:" onChange={e => setEmail(e.target.value)} />
                            <input type="text" value={tel} placeholder="Номер телефона:" onChange={e => setTel(e.target.value)} />
                        </div>
                        <textarea name="textarea" placeholder="Комментарий:"></textarea>
                    </form>
                </div>
                <div className={s.information__adres}>
                    <div className={s.information__adres__left}>
                        <h1>Информация о доставке:</h1>
                        <form>
                            <div>
                                <input type="radio" name="information" id={1} />
                                <label htmlFor={1}>Доставка по Москве и Московской области до подъезда</label>
                            </div>
                            <div>
                                <input type="radio" name="information" id={1} />
                                <label htmlFor={1}>Доставка транспортной компанией</label>
                            </div>
                            <div>
                                <input type="radio" name="information" id={1} />
                                <label htmlFor={1}>Самовывоз со склада в Москве</label>
                            </div>
                        </form>
                    </div>
                    <div className={s.information__adres__right}>
                        <h1>Адрес доставки:</h1>
                        <form>
                            <input type="text" placeholder="Регион:" />
                            <input type="text" placeholder="Город:" />
                            <input type="text" placeholder="Улица:" />
                            <input type="text" placeholder="Дом:" />
                            <input type="text" placeholder="Корпус:" />
                            <input type="text" placeholder="Подъезд:" />
                            <input type="text" placeholder="Этаж:" />
                            <input type="text" placeholder="Квартира:" />
                            <input type="text" placeholder="Код домофона:" />
                        </form>
                    </div>
                </div>
                <div className={s.information__oplata}>
                    <div className={s.information__oplata__left}>
                        <h1>Информация о доставке:</h1>
                        <form>
                            <div>
                                <input type="radio" name="information" id={1} />
                                <label htmlFor={1}>Наличными при получении</label>
                            </div>
                            <div>
                                <input type="radio" name="information" id={1} />
                                <label htmlFor={1}>Доставка транспортной компанией</label>
                            </div>
                            <div>
                                <input type="radio" name="information" id={1} />
                                <label htmlFor={1}>Самовывоз со склада в Москве</label>
                            </div>
                        </form>
                    </div>
                    <div className={s.information__oplata__right}>
                        <div className={s.lift}>
                            <h1>Лифт:</h1>
                            <form>
                                <div>
                                    <input type="radio" name="information" id={1} />
                                    <label htmlFor={1}>Малый</label>
                                </div>
                                <div>
                                    <input type="radio" name="information" id={1} />
                                    <label htmlFor={1}>Грузовой</label>
                                </div>
                                <div>
                                    <input type="radio" name="information" id={1} />
                                    <label htmlFor={1}>Нет лифта</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={s.total}>
                        <div className={s.climb__collection}>
                            <div className={s.climb__collection__left}>
                                <form>
                                    <div>
                                        <input type="radio" name="information" id={1} />
                                        <label htmlFor={1}>Малый</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="information" id={1} />
                                        <label htmlFor={1}>Грузовой</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="information" id={1} />
                                        <label htmlFor={1}>Нет лифта</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className={s}>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Order;