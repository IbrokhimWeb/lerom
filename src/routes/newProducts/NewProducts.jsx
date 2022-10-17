import React, { useState } from 'react';
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

    const [togle, setTogle] = useState(false);

    return (
        <>
            <section className={s.section}>
                <div className={s.left}>
                    <section className={s.section__left}>
                        {select.map((e, i) => <Select key={i} data={e} />)}
                    </section>
                    <button className={s.button}>Скачать каталог <IoMdCloudDownload /></button>
                    <div className={s.payment}>
                        <Payment />
                    </div>
                </div>

                <div className={s.right}>
                    <p>{"Главная >> Гостиные >>"}<span> Коллекции</span></p>
                    {
                        togle ?
                            <div className={s.shaddow}>
                                {card_posts.map((e, i) => <Card key={i} index={i} data={e} />)}
                            </div>
                            :
                            <div className={s.block}>
                                <Compositions />
                            </div>
                    }
                </div>
            </section>
        </>
    );
}

export default NewProducts;