import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="w-full flex justify-between items-center">
            <Link to="/" className="title text-4xl mb-2">
                quibbble
            </Link>
            <div className="flex items-center">
                <span className="flex items-center font-bold">
                    <Link to="/about">About</Link>
                </span>
                <p className="mx-2 md:mx-4">/</p>
                <span className="flex items-center font-bold">
                    <Link to="/games">Games</Link>
                </span>
            </div>
        </div>
    )
}
