import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiContext } from '../../context/ApiContext';
import s from "./NewProducts.module.css";

// Import react icons
import { IoMdCloudDownload } from "react-icons/io"

// Import data
import { select, card_posts } from "../../static/static";

// Import components
import Select from "../../components/select/Select";
import Payment from '../../components/payment/Payment';
import Card from "../../components/cards/Card";
import Compositions from "../../components/compositions/Compositions";

function NewProducts(props) {
    const api = useContext(ApiContext);
    // console.log(api?.product);

    const [togle, setTogle] = useState(true);

    return (
        <>
            <section className={s.section}>
                <div className={s.left}>
                    <section className={s.section__left}>
                        {
                            select.map((e, i) => <Select key={i} data={e} />)
                        }
                    </section>
                    <button className={s.button}>Скачать каталог <IoMdCloudDownload /></button>
                    <div className={s.payment}>
                        <Payment />
                    </div>
                </div>

                <div className={s.right}>
                    <p>{"Главная >> Гостиные >>"}<span> Коллекции</span></p>
                    {
                        !togle ?
                            <>
                                {/* <p className={s.router}>
                                    <Link to="/">{'Главная '}</Link> {' >> '}
                                    <Link to="/new">{' Гостиные '}</Link> {' >> '}
                                    <span>Коллекции</span>
                                </p> */}
                                <div className={s.shaddow}>
                                    {
                                        api?.card?.map((e, i) => i < 2 && <Card key={i} index={i} data={e} />)
                                    }
                                </div>
                            </>
                            :
                            <>
                                {/* <p className={s.router}>
                                    <Link to="/">{'Главная '}</Link> {' >> '}
                                    <Link to="/new">{' Гостиные '}</Link> {' >> '}
                                    <span>Коллекции</span>
                                </p> */}
                                <div className={s.block}>
                                    <Compositions />
                                </div>
                            </>
                    }
                </div>
            </section>
        </>
    );
}

export default NewProducts;