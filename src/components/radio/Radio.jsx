import React from 'react';
import s from "./Radio.module.css";

function Radio(props) {
    // console.log(props);
    const { id, name, img } = props?.data;
    return (
        <>
                <li>
                    <input type="radio" name={name} id={id} />
                    <label for={id}></label>
                    <img className={s.checkbox__img} src={img} />
                </li>
        </>
    );
}

export default Radio;