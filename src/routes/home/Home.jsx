import React from "react";
import s from "./Home.module.css";

// Import data
import { card_posts } from "../../static/static";

// Import react icons
import { AiOutlineArrowDown } from "react-icons/ai";

// Import assets 
import Video from "../../components/video/Video";

//  Import components
import Carusel from '../../components/carusel/Carusel';
import Card from '../../components/cards/Card';
import Footer from "../../components/footer/Footer";




function Home(props) {
    return (
        <>
            <div className={s.home}>
                <Carusel />
                <div className={s.cards}>
                    {card_posts.map((e, i) =>  <Card key={i} index={i} data={e} /> )}
                </div>
                <Video />
                <div className={s.two__section}>
                    <h2>Информация</h2><h2>Интересное</h2>
                </div>
                <div className={s.cards}>
                    {card_posts.map((e, i) =>  <Card key={i} index={i} data={e} /> )}
                </div>
                <div className={s.two_section}>
                    <p>лером</p>
                    <h2>показать еще новости  <AiOutlineArrowDown/> </h2>
                    <h2>открыть раздел новости <AiOutlineArrowDown/> </h2>
                    <p>лером</p>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Home;   