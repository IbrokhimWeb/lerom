import React, { useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';
import { Link } from 'react-router-dom';
import s from "./Tovar.module.css";

// Import data
import { tovar } from "../../static/static";

function Tovar(props) {
    const api = useContext(ApiContext)
    const { id, img, model, v, sh, g, sena, svet } = props?.data;
    // console.log(api);
    return (
        <>
            <section className={s.section}>
                {
                    props.data
                        ?
                        <>
                            <img src={`${img}`} alt="Tovar" />
                            <div className={s.actions}>
                                <div>
                                    <h1>{model}</h1>
                                    <p>{`в ${v} ш ${sh} г ${g}`}</p>
                                </div>
                                <div>
                                    <p>Цвет: дуб</p>
                                    <div className={s.images}>
                                    {
                                            svet?.map((e, i) => <img name={id} key={i} src={e} />)
                                        }
                                    </div>
                                </div>
                                <h1>{sena} ₽</h1>
                                <div className={s.submit}>
                                    <Link className={s.button} to={`/product/${id}`} >Купить</Link>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className={s.wrapper}>
                                <div className={s.card_loader}></div>
                            </div>
                        </>
                }
            </section>
        </>
    );
}

export default Tovar;