import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const path = window.location.pathname;

    const pretty = "bg-gradient-to-l from-amber-500 via-orange-500 to-rose-500 text-transparent bg-clip-text animate-gradient"
    const hoverPretty = "text-zinc-400 hover:bg-gradient-to-l hover:from-amber-500 hover:via-orange-500 hover:to-rose-500 hover:text-transparent bg-clip-text animate-gradient transition ease-in-out"
    return (
        <div className="w-full flex justify-between items-center">
            <Link to="/" className={`title text-4xl mb-2 ${ path == "/" ? pretty : hoverPretty }`}>
                quibbble
            </Link>
            <div className="flex items-center">
            <span className={`flex items-center font-bold ${ path == "/about" ? "text-zinc-100" : "text-zinc-400" } hover:text-zinc-100 transition ease-in-out`}>
                    <Link to="/about">About</Link>
                </span>
                <p className="mx-2 md:mx-4">/</p>
                <span className={`flex items-center font-bold ${ path == "/games" ? "text-zinc-100" : "text-zinc-400" } hover:text-zinc-100 transition ease-in-out`}>
                    <Link to="/games">Games</Link>
                </span>
            </div>
        </div>
    )
}
