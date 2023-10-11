import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import GamesPage from './GamesPage';
import HomePage from './HomePage';
import StatsPage from './StatsPage';
import AboutPage from './AboutPage';

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/about" element={ <AboutPage /> } />
                <Route exact path="/games" element={ <GamesPage /> } />
                <Route exact path="/stats" element={ <StatsPage /> } />
                <Route exact path="/" element={ <HomePage /> } />
                <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
        </BrowserRouter>
    )
}
