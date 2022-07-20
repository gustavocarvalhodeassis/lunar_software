import { BrowserRouter, Routes, Route, } from "react-router-dom";
import React from "react";
import Home from "./screens/home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path={'/'}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;