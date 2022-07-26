import { BrowserRouter, Routes, Route, } from "react-router-dom";
import React from "react";
import Home from "./screens/home";
import IntegrateChose from "./screens/integrar/integrateChose";
import IntegrateRepresentante from "./screens/integrar/integrateRepresentante";
import NavBar from "./components/navbar/navbar";
import IntegrateCliente from "./screens/integrar/integrateCliente";
import Footer from "./components/footer/footer";

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact element={<Home />} path={'/lunarteste'} />
                <Route exact element={<IntegrateChose />} path={'/lunarteste/integrar'} />
                <Route exact element={<IntegrateRepresentante />} path={'/lunarteste/integrar/representante'} />
                <Route exact element={<IntegrateCliente />} path={'/lunarteste/integrar/cliente'} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );

}

export default Router;