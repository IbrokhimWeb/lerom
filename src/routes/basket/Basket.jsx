import React from 'react';
import { Link } from 'react-router-dom';
import s from "./Basket.module.css";

// Import data
import { tovar } from "../../static/static";

//  Import component
import BasketCard from "../../components/basketCard/BasketCard";

function Basket(props) {
    return (
        <>
            <section className={s.section}>
                <h1>Корзина</h1>  <br />
                <hr />
                {tovar?.map((e, i) => <BasketCard key={i} data={e} />)}
                <div className={s.submit}>
                    <h1>Итого: <span>{"434 658 ₽ "}</span></h1>
                    <Link className={s.button} to="/order">Оформить заказ</Link>
                </div>
            </section>

        </>
    );
}

export default Basket;