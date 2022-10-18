import { useEffect, useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import axios from "axios"
import s from "./App.module.css";

// Import Data
// import { Api } from "./api/Axios";

// Import components
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Product from "./routes/product/Product";
import NewProducts from "./routes/newProducts/NewProducts";
import Footer from "./components/footer/Footer";
import Basket from "./routes/basket/Basket";
import Order from "./routes/order/Order";


// Import React icons
import { FaCartPlus } from "react-icons/fa";
import { ApiContex } from "./contex/ApiContext";

function App() {
    const [api, setApi] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get(`http://10.10.1.160:2005/api`)
            .then(res => setApi(res))
            .catch(err => console.log(`Nimadir xato ketdi\n ${err}`))
    }, []);

    // console.log(?.tovar);
    return (
        <>
            <ApiContex.Provider value={api?.data}>
                <Link className={s.korzinka} to="/basket">
                    <FaCartPlus />
                </Link>
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/new" element={<NewProducts />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/order" element={<Order />} />
                </Routes>
            </ApiContex.Provider>
        </>
    );
}

export default App;
