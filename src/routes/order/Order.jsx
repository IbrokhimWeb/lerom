import React, { useState } from 'react';
import s from "./Order.module.css"

function Order(props) {
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
            </section>
        </>
    );
}

export default Order;