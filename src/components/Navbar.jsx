import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const path = window.location.pathname;

    return (
        <div className="w-full flex justify-between items-center">
            <Link to="/" className={`title text-4xl mb-2 ${ path == "/" ? "text-zinc-100" : "text-zinc-400" } hover:text-zinc-100 transition ease-in-out`}>
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
