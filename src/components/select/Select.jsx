import React from 'react';
import s from "./Select.module.css";

function Select(props) {
    // console.log(props.data[0]);
    return (
        <>  
            <section className={s.select}>
                <select className={s.select__app}>
                    {props?.data.map((e, i) => <option key={i}> {e} </option>)}
                </select>
            </section>
        </>
    );
}

export default Select;