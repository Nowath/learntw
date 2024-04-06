import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

function card() {
    const [content, setcontent] = useState([
        {
            image: "https://i.pinimg.com/564x/f0/a2/71/f0a27102f90e371f5c092724c8eb2ef6.jpg",
            header: "Nano",
            prop: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati dolorum qui veniam. Vero blanditiis at sapiente itaque harum cupiditate",
        },
        {
            image: "https://i.pinimg.com/564x/2a/d1/b8/2ad1b8d1cb537ac21d31e9285c9b3bd7.jpg",
            header: "Nano",
            prop: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati dolorum qui veniam. Vero blanditiis at sapiente itaque harum cupiditate",
        },
        {
            image: "https://i.pinimg.com/564x/15/80/6c/15806c3f3d86ceb2256f7ba038455041.jpg",
            header: "Nano",
            prop: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati dolorum qui veniam. Vero blanditiis at sapiente itaque harum cupiditate",
        },
        {
            image: "https://i.pinimg.com/564x/f8/e2/a5/f8e2a5eeb230eafaa1863e668a906027.jpg",
            header: "Nano",
            prop: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati dolorum qui veniam. Vero blanditiis at sapiente itaque harum cupiditate",
        },
    ]);
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-around items-center flex-wrap gap-y-10 gap-x-20"
        >
            {content.map((content) => (
                <div
                    className={`card bg-red-600/40 text-white transition-all duration-300 w-80 h-96 rounded-lg hover:scale-110 overflow-auto hover:bg-red-300 hover:text-black`}
                >
                    <img
                        className="h-1/2 rounded-lg object-cover"
                        src={content.image}
                        alt=""
                    />
                    <div className="p-2">
                        <h1 className="text-2xl mb-2 underline">
                            {content.header}
                        </h1>
                        <p>{content.prop}</p>
                    </div>
                </div>
            ))}
        </motion.div>
    );
}

export default card;
