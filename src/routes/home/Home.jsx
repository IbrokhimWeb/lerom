import React from "react";
import s from "./Home.module.css";

//  Import components
import Carusel from './carusel/Carusel';
import Card from './cards/Card';

// Import data
import { card_posts } from "../../static/static";

function Home(props) {
    return (
        <>
            <div className={s.home}>
                <Carusel />
                <div className={s.cards}>
                    <div className={s.first}>
                        {
                            card_posts.map((e, i) =>
                                i > 3
                                    ?
                                    <Card key={i} data={e} status="left" />
                                    : i > 3
                                        ? <Card key={i} data={e} status="right" />
                                        : <Card key={i} data={e} status="center" />)
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;   