import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "@quibbble/boardgame";
import Navbar from "./Navbar";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center m-8 md:m-12">
            <div className="w-full max-w-2xl">
                <Navbar />
                <div className="fade-in pt-12">
                    <p className="text-2xl font-bold">Board Games Online</p>
                    <p className="text-xl font-light max-w-2xl">Play on your phone, tablet, or computer with no signup and no cost.</p>
                    <Link to="/games">
                        <button className="bg-blue-600 text-zinc-100 italic px-4 py-2 mt-4 font-bold">Browse Games</button>
                    </Link>
                </div>
            </div>
            <div className="absolute bottom-8 md:bottom-12 flex flex-col items-center">
                <Footer />
            </div>
        </div>
    )
}