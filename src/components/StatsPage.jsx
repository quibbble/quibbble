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
                <h1 className="text-2xl font-bold my-8">Statistics</h1>
                <div className="w-full md:w-[72%] flex flex-col md:flex-row justify-between items-center">
                    <div className="w-56 mb-8 md:mb-0 p-8 bg-zinc-900 rounded-md">
                        <h1 className="w-full font-bold mb-4 text-indigo-500">Games Created</h1>
                        <div className="w-full">
                            {
                                gamesCreated.map((it, i) => {
                                    return (
                                        <div key={ i } className="flex justify-between py-[0.15rem] px-2">
                                            <div>{it.name}</div>
                                            <div>{it.value}</div>
                                        </div>
                                    )
                                })
                            }
                            <div className="text-indigo-500 flex justify-between font-bold mt-4">
                                <div>Total</div>
                                <div>{totalCreated}</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-56 mb-8 md:mb-0 p-8 bg-zinc-900 rounded-md">
                        <h1 className="w-full font-bold mb-4 text-sky-500">Games Played</h1>
                        <div className="w-full">
                            {
                                gamesPlayed.map((it, i) => {
                                    return (
                                        <div key={ i } className="flex justify-between py-[0.15rem] px-2">
                                            <div>{it.name}</div>
                                            <div>{it.value}</div>
                                        </div>
                                    )
                                })
                            }
                            <div className="text-sky-500 flex justify-between font-bold mt-4">
                                <div>Total</div>
                                <div>{totalPlayed}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-[72%] flex flex-col md:flex-row justify-between items-center md:mt-8">
                    <div className="w-56 mb-8 md:mb-0 p-8 bg-zinc-900 rounded-md">
                        <h1 className="w-full font-bold mb-4 text-rose-500">Active Games</h1>
                        <div className="w-full">
                            {
                                activeGames.map((it, i) => {
                                    return (
                                        <div key={ i } className="flex justify-between py-[0.15rem] px-2">
                                            <div>{it.name}</div>
                                            <div className={ `${ it.value > 0 ? "text-rose-500" : "" }` }>{it.value}</div>
                                        </div>
                                    )
                                })
                            }
                            <div className="text-rose-500 flex justify-between font-bold mt-4">
                                <div>Total</div>
                                <div>{totalActiveGames}</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-56 mb-8 md:mb-0 p-8 bg-zinc-900 rounded-md">
                        <h1 className="w-full font-bold mb-4 text-amber-500">Active Players</h1>
                        <div className="w-full">
                            {
                                activePlayers.map((it, i) => {
                                    return (
                                        <div key={ i } className="flex justify-between py-[0.15rem] px-2">
                                            <div>{it.name}</div>
                                            <div className={ `${ it.value > 0 ? "text-amber-500" : "" }` }>{it.value}</div>
                                        </div>
                                    )
                                })
                            }
                            <div className="text-amber-500 flex justify-between font-bold mt-4">
                                <div>Total</div>
                                <div>{totalActivePlayers}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <Footer />
            </div>
        </div>
    )
}
