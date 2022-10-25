import React from 'react';
import s from "./Video.module.css"

// Import React icons
import { BsPlayCircle } from "react-icons/bs";

function Video() {

    return (
        <>
            <section className={s.video}>
                <h1>Видеопрезентация <br /> «Лером»</h1>
                <div className={s.play}>
                    <BsPlayCircle className={s.play__icons}/>
                </div>
                <button className={s.button}>Читать о компании</button>
            </section>
        </>
    );
}

export default Video;