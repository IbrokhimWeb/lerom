import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import s from "./App.module.css";

// Import components
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Router>
                <Header/>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
