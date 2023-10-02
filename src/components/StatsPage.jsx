import React, { useState, useEffect } from "react";
import { Footer } from "@quibbble/boardgame";
import Navbar from "./Navbar";
import { GetStats } from "../api/API";

export default function StatsPage() {

    const [gamesCreated, setGamesCreated] = useState([]);
    const [totalCreated, setTotalCreated] = useState(0);
    const [gamesPlayed, setGamesPlayed] = useState([]);
    const [totalPlayed, setTotalPlayed] = useState(0);
    const [activeGames, setActiveGames] = useState([]);
    const [totalActiveGames, setTotalActiveGames] = useState(0);
    const [activePlayers, setActivePlayers] = useState([]);
    const [totalActivePlayers, setTotalActivePlayers] = useState(0);

    useEffect(() => {
        async function getStats() {
            let response = await GetStats();
            if (response && response.status === 200) {
                let created = response.data.GamesCreated
                setGamesCreated(Object.keys(created).map(game => {
                    return {name: game, value: created[game]}
                }))
                setTotalCreated(Object.keys(created).reduce((curr, accu) => created[accu] + curr, 0))
                
                let played = response.data.GamesPlayed 
                setGamesPlayed(Object.keys(played).map(game => {
                    return {name: game, value: played[game]}
                }))
                setTotalPlayed(Object.keys(played).reduce((curr, accu) => played[accu] + curr, 0))

                let activeGames = response.data.ActiveGames 
                setActiveGames(Object.keys(activeGames).map(game => {
                    return {name: game, value: activeGames[game]}
                }))
                setTotalActiveGames(Object.keys(activeGames).reduce((curr, accu) => activeGames[accu] + curr, 0))

                let activePlayers = response.data.ActivePlayers 
                setActivePlayers(Object.keys(activePlayers).map(game => {
                    return {name: game, value: activePlayers[game]}
                }))
                setTotalActivePlayers(Object.keys(activePlayers).reduce((curr, accu) => activePlayers[accu] + curr, 0))
            }
        }
        getStats()
    }, [setGamesCreated, setTotalCreated, setGamesPlayed, setTotalPlayed, setActiveGames, setTotalActiveGames, setActivePlayers, setTotalActivePlayers])

    return (
        <div className="flex flex-col items-center m-8 md:m-12">
            <div className="w-full max-w-2xl flex flex-col items-center">
                <Navbar />
                <div className="w-full md:w-[75%] flex flex-col md:flex-row justify-between items-center mt-12">
                    <div className="w-48 mb-12 md:mb-0">
                        <h1 className="w-full font-bold border-b">Games Completed</h1>
                        <div className="w-full">
                            {
                                gamesCreated.map(it => {
                                    return (
                                        <div className="flex justify-between py-[0.15rem] px-2">
                                            <div>{it.name}</div>
                                            <div>{it.value}</div>
                                        </div>
                                    )
                                })
                            }
                            <div className="flex justify-between font-bold border-t">
                                <div>Total</div>
                                <div>{totalCreated}</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-48 mb-12 md:mb-0">
                        <h1 className="w-full font-bold border-b">Games Played</h1>
                        <div className="w-full">
                            {
                                gamesPlayed.map(it => {
                                    return (
                                        <div className="flex justify-between py-[0.15rem] px-2">
                                            <div>{it.name}</div>
                                            <div>{it.value}</div>
                                        </div>
                                    )
                                })
                            }
                            <div className="flex justify-between font-bold border-t">
                                <div>Total</div>
                                <div>{totalPlayed}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-[75%] flex flex-col md:flex-row justify-between items-center md:mt-12">
                    <div className="w-48 mb-12 md:mb-0">
                        <h1 className="w-full font-bold border-b">Active Games</h1>
                        <div className="w-full">
                            {
                                activeGames.map(it => {
                                    return (
                                        <div className="flex justify-between py-[0.15rem] px-2">
                                            <div>{it.name}</div>
                                            <div>{it.value}</div>
                                        </div>
                                    )
                                })
                            }
                            <div className="flex justify-between font-bold border-t">
                                <div>Total</div>
                                <div>{totalActiveGames}</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-48 mb-12 md:mb-0">
                        <h1 className="w-full font-bold border-b">Active Players</h1>
                        <div className="w-full">
                            {
                                activePlayers.map(it => {
                                    return (
                                        <div className="flex justify-between py-[0.15rem] px-2">
                                            <div>{it.name}</div>
                                            <div>{it.value}</div>
                                        </div>
                                    )
                                })
                            }
                            <div className="flex justify-between font-bold border-t">
                                <div>Total</div>
                                <div>{totalActivePlayers}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 md:absolute md:bottom-12 md:flex md:flex-col md:items-center">
                <Footer />
            </div>
        </div>
    )
}
