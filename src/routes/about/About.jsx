import React, { useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';
import s from "./About.module.css";

// Import components
import AboutCard from "../../components/aboutCard/AboutCard";

function About(props) {
    const api = useContext(ApiContext);
    // console.log(api);
    return (
        <>
            <section className={s.section}>
                <p className={s.start}>{`Главная >> `}<span>Новости</span></p>
                {
                    api?.info?.about?.map((e, i) => <AboutCard key={i} data={e} />)
                }
                <h1 className={s.end}>показать еще новости</h1>
            </section>
        </>
    );
}

export default About;