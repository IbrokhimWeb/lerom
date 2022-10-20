import React, { useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';
import { Link } from 'react-router-dom';
import s from "./Basket.module.css";

//  Import component
import BasketCard from "../../components/basketCard/BasketCard";

function Basket(props) {
    const api = useContext(ApiContext);
    // console.log(api);
    // console.log(api?.basket);
    return (
        <>
            <section className={s.section}>
                <h1>Корзина</h1>  <br />
                <hr />
                {
                    api?.basket?.map((e, i) => <BasketCard key={i} data={e} />)}
                {
                    api?.basket?.length ?
                        <>
                            <div className={s.submit}>
                                <h1>Итого: <span> {' 434 658'} ₽</span></h1>
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