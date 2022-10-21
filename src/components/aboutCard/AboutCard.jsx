import React from 'react';
import s from "./AboutCard.module.css";

// Import assets
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";

function AboutCard(props) {
    const { id, img, title, description, time } = props?.data;
    return (
        <>
            <section className={s.section}>
                <img src={`http://10.10.1.160:2004/media/${img}`} alt="about.png" />
                <h1>{title}</h1>
                <p>{description}</p>
                <p className={s.p}>Дата публикации:  {time}</p>
            </section>
        </>
    );
}

export default AboutCard;