import React from 'react';
import s from "./Radio.module.css";

import { v4 as uuidv4 } from 'uuid';

function Radio({ data , name}) {
    const uuid = uuidv4()
    return (
        <>
            <li>
                <input className={s.input} type="radio" name={name ? name : ''} id={uuid} />
                <label className={s.label} htmlFor={uuid} ></label>
                <img className={s.checkbox__img} src={data} />
            </li>
        </>
    );
}

export default Radio;