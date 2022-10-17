import React from 'react';
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
            </section>
        </>
    );
}

export default Basket;