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
                <Route exact element={<Home />} path={'/'} />
                <Route element={<IntegrateChose />} path={'/integrar'} />
                <Route element={<IntegrateRepresentante />} path={'/integrar/representante'} />
                <Route element={<IntegrateCliente />} path={'/integrar/cliente'} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;