import React from 'react';
import { Link } from 'react-router-dom';
import s from "./Payment.module.css";

function Payment(props) {
    return (
        <>
            <section className={s.payment}>
                <h1>Рассрочка <br />
                    <span>без %</span>
                </h1>
                <Link className={s.button} to="/skidka">Подробнее</Link>
            </section>
        </>
    );
}

export default Payment;