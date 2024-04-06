import { useState, useEffect } from "react";
import Navbar from "./components/navber";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home.jsx";
import "./App.css";
import Card from "./components/card.jsx";
import { motion } from "framer-motion";

function App() {
    return (
        <div className="relative bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen">
            <Home />
            <Navbar />
            <section className="min-h-[30vh] mt-[3rem] p-10 flex justify-center">
                <div className="cards max-w-[1600px] h-auto">
                    <Card />
                </div>
            </section>
        </div>
    );
}

export default App;
