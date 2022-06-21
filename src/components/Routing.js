import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import GamesPage from './GamesPage';
import HomePage from './HomePage';

export default function Routing() {
  return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/games" element={ <GamesPage /> } />
                <Route exact path="/" element={ <HomePage /> } />
                <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
        </BrowserRouter>
    )
}
