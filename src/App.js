import { useEffect, useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
// import axios from "axios"
import s from "./App.module.css";

// Import Data
import { api } from "./api/axios";

// Import components
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Product from "./routes/product/Product";
import NewProducts from "./routes/newProducts/NewProducts";
import Footer from "./components/footer/Footer";
import Basket from "./routes/basket/Basket"

// Import React icons
import { FaCartPlus } from "react-icons/fa";

function App() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    // console.log(api());

    return (
        <>
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
            </Routes>
        </>
    );
}

export default App;
