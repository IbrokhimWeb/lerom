import React from "react";
import s from "./Home.module.css";

// Import data
import { card_posts } from "../../static/static";

//  Import components
import Carusel from './carusel/Carusel';
import Card from './cards/Card';
import EndCard from "./endCard/EndCard";



function Home(props) {
    return (
        <>
            <div className={s.home}>
                <Carusel />
                <div className={s.cards}>
                    {card_posts.map((e, i) =>
                        i == 4 ? ''
                            // <EndCard key={i} index={i} data={e} status={0} />
                            : <Card key={i} index={i} data={e} status={0} />)}
                </div>
            </div>
        </>
    );
}

export default Home;   