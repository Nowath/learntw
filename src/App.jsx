import { useState, useEffect } from "react";
import Navbar from "./components/navber";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home.jsx";
import "./App.css";

function App() {
    const [card1, setCard1] = useState(false);
    const [card2, setCard2] = useState(false);
    const [card3, setCard3] = useState(false);
    const [card4, setCard4] = useState(false);

    function handleSubmit(e) {
        e.prova;
    }
    return (
        <div className="relative bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen">
            <Home />
            <Navbar />
            <section className="min-h-[30vh] mt-[3rem] p-10 flex justify-center">
                <div className="cards flex justify-around items-center flex-wrap gap-y-10 gap-x-20 max-w-[1600px] h-auto">
                    <div
                        className={`${
                            card1 ? "bg-red-300 " : "bg-red-600/40 text-white "
                        }card transition-all duration-300 w-80 h-96 rounded-lg hover:scale-110 overflow-auto`}
                        onMouseEnter={() => {
                            setCard1(!card1);
                        }}
                        onMouseLeave={() => {
                            setCard1(!card1);
                        }}
                    >
                        <img
                            className="h-1/2 rounded-lg object-cover"
                            src="https://i.pinimg.com/564x/f0/a2/71/f0a27102f90e371f5c092724c8eb2ef6.jpg"
                            alt=""
                        />
                        <div className="p-2">
                            <h1 className="text-2xl mb-2 underline">Nano</h1>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Reiciendis obcaecati dolorum
                                qui veniam. Vero blanditiis at sapiente itaque
                                harum cupiditate!
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${
                            card2 ? "bg-red-300 " : "bg-red-600/40 text-white "
                        }card transition-all duration-300 w-80 h-96 rounded-lg hover:scale-110 overflow-auto`}
                        onMouseEnter={() => {
                            setCard2(!card2);
                        }}
                        onMouseLeave={() => {
                            setCard2(!card2);
                        }}
                    >
                        <img
                            className="h-1/2 rounded-lg object-cover"
                            src="https://i.pinimg.com/564x/2a/d1/b8/2ad1b8d1cb537ac21d31e9285c9b3bd7.jpg"
                            alt=""
                        />
                        <div className="p-2">
                            <h1 className="text-2xl mb-2 underline">Nano</h1>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Reiciendis obcaecati dolorum
                                qui veniam. Vero blanditiis at sapiente itaque
                                harum cupiditate!
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${
                            card3 ? "bg-red-300 " : "bg-red-600/40 text-white "
                        }card transition-all duration-300 w-80 h-96 rounded-lg hover:scale-110 overflow-auto`}
                        onMouseEnter={() => {
                            setCard3(!card3);
                        }}
                        onMouseLeave={() => {
                            setCard3(!card3);
                        }}
                    >
                        <img
                            className="h-1/2 rounded-lg object-cover"
                            src="https://i.pinimg.com/564x/15/80/6c/15806c3f3d86ceb2256f7ba038455041.jpg"
                            alt=""
                        />
                        <div className="p-2">
                            <h1 className="text-2xl mb-2 underline">Nano</h1>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Reiciendis obcaecati dolorum
                                qui veniam. Vero blanditiis at sapiente itaque
                                harum cupiditate!
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${
                            card4 ? "bg-red-300 " : "bg-red-600/40 text-white "
                        }card transition-all duration-300 w-80 h-96 rounded-lg hover:scale-110 overflow-auto`}
                        onMouseEnter={() => {
                            setCard4(!card4);
                        }}
                        onMouseLeave={() => {
                            setCard4(!card4);
                        }}
                    >
                        <img
                            className="h-1/2 rounded-lg object-cover"
                            src="https://i.pinimg.com/564x/f8/e2/a5/f8e2a5eeb230eafaa1863e668a906027.jpg"
                            alt=""
                        />
                        <div className="p-2">
                            <h1 className="text-2xl mb-2 underline">Nano</h1>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Reiciendis obcaecati dolorum
                                qui veniam. Vero blanditiis at sapiente itaque
                                harum cupiditate!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
