import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import s from "./Basket.module.css";

// Import data
import { tovar } from "../../static/static";

//  Import component
import BasketCard from "../../components/basketCard/BasketCard";
import { ApiContex } from '../../contex/ApiContext';

function Basket(props) {
    const api = useContext(ApiContex);
    // console.log(api);
    return (
        <>
            <section className={s.section}>
                <h1>Корзина</h1>  <br />
                <hr />
                {api?.tovar?.map((e, i) => <BasketCard key={i} data={e} />)}
                {
                    api?.tovar?.length ?
                        <>
                            <div className={s.submit}>
                                <h1>Итого: <span>{"434 658 ₽ "}</span></h1>
                                <Link className={s.button} to="/order">Оформить заказ</Link>
                            </div>
                        </>
                        :
                        <>
                            <div className={s.pustoy}>
                                <Link to="/new"><h1>Siz Hali Maxsulot Tanlamadingiz !!!</h1></Link>
                            </div>
                        </>
                }
            </section>

        </>
    );
}

export default Basket;