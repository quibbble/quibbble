import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import GamesPage from './GamesPage';
import HomePage from './HomePage';
import GameRequestsPage from './GameRequestsPage';
import StatsPage from './StatsPage';

export default function Routing() {
  return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/games" element={ <GamesPage /> } />
                <Route exact path="/game-requests" element={ <GameRequestsPage /> } />
                <Route exact path="/stats" element={ <StatsPage /> } />
                <Route exact path="/" element={ <HomePage /> } />
                <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
        </BrowserRouter>
    )
}
