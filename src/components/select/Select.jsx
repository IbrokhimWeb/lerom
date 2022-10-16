import React from 'react';
import s from "./Select.module.css";

function Select(props) {
    const { data } = props;
    return (
        <>
            <select className={s.select}>
                {data.map((e, i) => <option className={s.option} key={i}>{e}</option>)}
            </select>
        </>
    );
}

export default Select;