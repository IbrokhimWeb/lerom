import React from 'react';
import s from "./Product.module.css";

// import assets
import product from "../../assets/card2.png";

// Import Components
import Payment from '../../components/payment/Payment';

function Product(props) {
    return (
        <>
            <div className={s.container}>
                <header className={s.header}>
                    <div className={s.product__img}>
                        <img src={product} alt="photo" />
                    </div>
                    <div className={s.filter}>

                    </div>
                    <div className={s.axsia}>
                        <Payment className={s.axia__component}/>
                    </div>
                </header>
            </div>
        </>
    );
}

export default Product;