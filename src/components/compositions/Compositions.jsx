import React, { useContext, useState } from 'react';
import s from "./Compositions.module.css";


// Import data
import { tovar, product } from "../../static/static";

// Import Components
import Tovar from '../tovar/Tovar';
import Product from '../product/Product';
import { ApiContex } from '../../contex/ApiContext';

function Compositions(props) {
    const api = useContext(ApiContex);
    console.log(api?.tovar);
    
    const [page, setPage] = useState(true)
    return (
        <>
            {
                page
                    ?
                    <>
                        <div className={s.pages}>
                            <span className={s.marginL} />
                            <button className={s.button1} onClick={() => setPage(true)}>Технические характеристики</button>
                            <span className={s.transform} onClick={() => setPage(false)} />
                            <button className={s.button2} onClick={() => setPage(false)}>Состав композиции</button>
                            <span className={s.transform} onClick={() => setPage(false)} />
                        </div>
                        <div className={s.block}>
                            <div className={s.product__items}>
                                {api?.product?.map((e, i) => <Product key={i} data={e} />)}
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className={s.pages}>
                            <span className={s.marginL} />
                            <span className={s.transform__revers} onClick={() => setPage(true)} />
                            <button className={s.button2} onClick={() => setPage(true)}>Технические характеристики</button>
                            <span className={s.transform__revers} onClick={() => setPage(true)} />
                            <button className={s.button1} onClick={() => setPage(false)}>Состав композиции</button>
                        </div>
                        <div className={s.block}>
                            <div className={s.tovar__items}>
                                {api?.tovar.map((e, i) => <Tovar key={i} data={e} />)}
                            </div>
                        </div>
                    </>
            }
        </>
    );
}

export default Compositions;