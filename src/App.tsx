import { AllSpells } from "./pages/AllSpells";
import { FavouriteSpells } from "./pages/FavouriteSpells";
import { SpellInfo } from "./pages/SpellInfo";
import { Header } from "./components/common/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { Footer } from "./components/common/Footer";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Header
                color="dark"
                light={true}
                dark={true}
                full={true}
                expand="md"
                container="fluid"
                fixed="top"
            />
            <Routes>
                <Route path="/" element={<AllSpells />} />
                <Route path="/favourite" element={<FavouriteSpells />} />
                <Route path="/spell/:index" element={<SpellInfo />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
