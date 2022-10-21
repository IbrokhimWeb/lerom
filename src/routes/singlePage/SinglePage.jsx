import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ApiContext } from '../../context/ApiContext';
import { useParams } from 'react-router-dom';
import s from "./SinglePage.module.css";

// Import React Icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// Import Components
import Payment from '../../components/payment/Payment';
import Radio from '../../components/radio/Radio';
import Characteristics from '../../components/characteristics/Characteristics';
import Tovar from "../../components/tovar/Tovar";



function SinglePage(props) {
    const api = useContext(ApiContext);
    const [value, setValue] = useState(1);
    // const [addToBasket, setAddToBasket] = useState({});



    const { id } = useParams();
    // const 
    const allProducts = [...api.product];
    const singleProduct = allProducts.find(e => e.id === +id);
    const { image, type, model, voloume, sales_code, weight, v, sh, g, svet, sena } = singleProduct;

    function createPost() {
        axios.post(`http://10.10.1.160:2004/api/`, {
            id,
            type,
            model,
            voloume,
            sales_code,
            weight,
            v,
            sh,
            g,
            sena,
            value,
        })
            .then((response) => {
                console.log(response.data.basket);
            }).catch((e) => console.log(`Xatolik\n ${e}`));
    }
    console.log(image);
    // useEffect(() => {
    //     setAddToBasket({ ...singleProduct, sena: singleProduct.sena, value })
    // }, [singleProduct, value]);

    return (
        <>
            <div className={s.container}>
                <header className={s.header}>
                    <div className={s.product__img}>
                        <img src={`http://10.10.1.160:2004/media/${image}`} alt="photo" />
                    </div>
                    <div className={s.filter}>
                        <p>{"Главная >> Гостиные >>"}<span>{"Коллекции"}</span></p>
                        <div className={s.nazvania}>
                            <h1>{model}</h1>
                            <p>Артикул: {sales_code}</p>
                        </div>
                        <div className={s.size}>
                            <div className={s.razmer}>
                                <h2>Размеры</h2>
                                <p>{`В ${v}  Ш ${sh}  Г ${g}`}</p>
                            </div>
                            <div className={s.ves}>
                                <h2>Вес</h2>
                                <p>{weight} кг</p>
                            </div>
                        </div>
                        <hr className={s.hr} />
                        <div className={s.colors}>
                            <p>цвет</p>
                            <form className={s.form}>
                                {
                                    api?.svet?.map((e, i) => <img className={s.img__item} key={i} src={`http://10.10.1.160:2004/${e}`} />)
                                }
                            </form>
                        </div>
                        <hr className={s.hr} />
                        <div className={s.calc}>
                            <h2>Цена: <span>{sena * value} ₽</span></h2>
                            <div className={s.inc__dec}>
                                <AiOutlineMinus className={s.inc__dec__icons} onClick={() => value > 1 ? setValue(value - 1) : setValue(value)} />
                                <p> {value} </p>
                                <AiOutlinePlus className={s.inc__dec__icons} onClick={() => setValue(value + 1)} />
                            </div>
                        </div>
                        <button
                            className={s.button}
                            onClick={createPost}
                        >Купить</button>
                    </div>
                    <div className={s.axsia}>
                        <Payment />
                    </div>
                </header>
                <div className={s.characteristics}>
                    <Characteristics />
                </div>
                <div className={s.tovar}>
                    <h1>С ЭТИМ ТОВАРОМ МОЖНО КУПИТЬ</h1>
                    <div className={s.item}>
                        {
                            api?.product?.map((e, i) => i < 6 && e.type === "tovar" && <Tovar key={i} data={e} />)
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default SinglePage;