import React, { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
import s from "./Home.module.css";

// Import react icons
import { AiOutlineArrowDown } from "react-icons/ai";

// Import assets 
import Video from "../../components/video/Video";

//  Import components
import Carusel from '../../components/carusel/Carusel';
import Card from '../../components/cards/Card';
import EndCard from "../../components/endCard/EndCard";
import Footer from "../../components/footer/Footer";


function Home(props) {
    const api = useContext(ApiContext);
    // console.log(api.card);
    return (
        <>
            <div className={s.home}>
                <Carusel />
                <div className={s.cards}>
                    {
                        api?.card?.map((e, i) => i < 2 && <Card key={i} index={i} data={e} /> )
                    }
                </div>
                {
                    api?.card?.map((e, i)=> i > 3 && <EndCard key={i} data={e}/> )   
                }
                <Video />
                <div className={s.two__section}>
                    <h2>Информация</h2><h2>Интересное</h2>
                </div>
                <div className={s.cards}>
                    {
                        api?.card?.map((e, i) => i > 1 && <Card key={i} index={i} data={e} /> )
                    }
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