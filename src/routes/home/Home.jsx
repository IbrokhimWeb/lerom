import React from "react";
import s from "./Home.module.css";

// Import data
import { card_posts } from "../../static/static";

// import EndCard from "./endCard/EndCard";
import Video from "./video/Video";

//  Import components
import Carusel from './carusel/Carusel';
import Card from './cards/Card';




function Home(props) {
    return (
        <>
            <div className={s.home}>
                <Carusel />
                <div className={s.cards}>
                    {card_posts.map((e, i) =>  <Card index={i} data={e} /> )}
                </div>
                <Video />
                <div className={s.two__section}>
                    <h2>Информация</h2><h2>Интересное</h2>
                </div>
                <div className={s.cards}>
                    {card_posts.map((e, i) =>  <Card index={i} data={e} /> )}
                </div>
                <div className={s.two_section}>
                    <h2>показать еще новости</h2><h2>открыть раздел новости</h2>
                </div>
            </div>
        </>
    );
}

export default Home;   