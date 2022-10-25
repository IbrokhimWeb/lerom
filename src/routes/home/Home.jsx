import React, { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
import s from "./Home.module.css";



// Import assets 
import Video from "../../components/video/Video";

//  Import components
import Carusel from '../../components/carusel/Carusel';
import Card from '../../components/cards/Card';
import EndCard from "../../components/endCard/EndCard";
import MiniCard from '../../components/miniCard/MiniCard'
import Footer from "../../components/footer/Footer";


function Home(props) {
    const api = useContext(ApiContext); // useContext orqali ApiContext dan malumotlar ulab olindi

    return (
        <>
            <div className={s.home}>
                <Carusel />
                <div className={s.cards}>
                    {
                        // harbir card larni Card componentiga map() metodi orqali alohida alohida yubordim
                        api?.card?.map((e, i) => i < 2 && <Card key={i} index={i} data={e} />)
                    }
                </div>
                {
                    // ohirgi yakkalik cardni EndCard componentiga map() metodi orqali alohida alohida yubordim
                    api?.card?.map((e, i) => !e[1] && <EndCard key={i} data={e} />)
                }
                <Video />
                <div className={s.cards}>
                    <MiniCard />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Home;   