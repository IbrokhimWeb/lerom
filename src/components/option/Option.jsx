import React from 'react';
import s from "./Option.module.css";

function Option(props) {
    return (
        <>
            <section className={s.section}>
                <select>
                    <option>Спальни</option>
                    <option>Мелисса 2021</option>
                    <option>Карина</option>
                    <option>Камелия 2021</option>
                </select>
            </section>
        </>
    );
}

export default Option;