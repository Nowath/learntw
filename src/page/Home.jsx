import React from "react";
import Reactimg from "../assets/react.svg";
import { motion } from "framer-motion";

function Home() {
    return (
        <div
            id="Home"
            className="h-[93vh] flex justify-center items-center flex-col"
        >
            <h1 className="text-white text-4xl mb-10 drop-shadow-[1px_1px_2px_yellow]">
                Junior Web developer
            </h1>
            <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="w-60 transition-all duration-500 hover:scale-110"
                src={Reactimg}
                alt=""
            />
            <h1 className="text-white text-4xl mt-10 mb-2 drop-shadow-[1px_1px_2px_lime] select-all">
                Natheepat Ugridsiri
            </h1>
            <h1 className="text-white text-4xl my-2 drop-shadow-[1px_1px_2px_lime]">
                Nowath
            </h1>
        </div>
    );
}

export default Home;
