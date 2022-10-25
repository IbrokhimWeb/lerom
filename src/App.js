import { useEffect, useState } from "react";
import { Routes, Route, Link, } from "react-router-dom";
import axios from "axios";
import s from "./App.module.css";

// Import Static data
import { api } from "./static/static"

// Import React icons
import { FaCartPlus } from "react-icons/fa";
import { ApiContext } from "./context/ApiContext";

// Import components
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import SinglePage from "./routes/singlePage/SinglePage";
import NewProducts from "./routes/newProducts/NewProducts";
import Basket from "./routes/basket/Basket";
import Order from "./routes/order/Order";



function App() {
    const [ data, setData] = useState({});

    // console.log(data);

    useEffect(() => {
        setData(api);
        // axios.get(`http://10.10.1.160:2004/api/`)
        //     .then(res => setData(res?.data))
        //     .catch(err => console.log(`Nimadir xato ketdi\n ${err}`))
    }, []);

    return (
        <>
            <ApiContext.Provider value={data}>
                <Link className={s.korzinka} to="/basket">
                    <FaCartPlus />
                </Link>
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/news" element={<About />} />
                    <Route path="/new" element={<NewProducts />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/product/:id" element={<SinglePage />} />
                </Routes>
            </ApiContext.Provider>
        </>
    );
}

export default App;
