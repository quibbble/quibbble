import React from "react";
import Tsuro from "../resources/tsuro.png";
import Carcassonne from "../resources/carcassonne.png";
import Connect4 from "../resources/connect4.png";

export default function App() {
    return (
        <div className="flex flex-col items-center h-full">
            <div className="flex flex-col items-center">
                <div className="title text-4xl mb-2">
                    quibbble
                </div>
                <div className="font-thin text-sm mb-2">
                    Play board games online with friends
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex gap-4 self-center mb-2">
                        <a href={ `${ window.location.protocol }//tsuro.quibbble.com` } className="flex flex-col items-center">
                            <div className="w-20 h-20 mb-1 overflow-hidden">
                                <img className="w-full h-full" src={Tsuro} alt="Tsuro"/>
                            </div>
                            <div className="font-bold text-xs">Tsuro</div>
                        </a>
                        <a href={ `${ window.location.protocol }//carcassonne.quibbble.com` } className="flex flex-col items-center">
                            <div className="w-20 h-20 mb-1 overflow-hidden">
                                <img className="w-full h-full" src={Carcassonne} alt="Carcassonne"/>
                            </div>
                            <div className="font-bold text-xs">Carcassonne</div>
                        </a>
                        <a href={ `${ window.location.protocol }//connect4.quibbble.com` } className="flex flex-col items-center">
                            <div className="w-20 h-20 mb-1 overflow-hidden">
                                <img className="w-full h-full" src={Connect4} alt="Connect4"/>
                            </div>
                            <div className="font-bold text-xs">Connect4</div>
                        </a>
                        {/* <a href={ `${ window.location.protocol }//carcassonne.quibbble.com` } className="flex flex-col items-center">
                            <div className="w-20 h-20 mb-1 overflow-hidden">
                                <img className="w-full h-full" src={Carcassonne} alt="Carcassonne"/>
                            </div>
                            <div className="font-bold text-xs">Example</div>
                        </a> */}
                    </div>
                    <div className="flex gap-4 self-start">
                        {/* <a href={ `${ window.location.protocol }//carcassonne.quibbble.com` } className="flex flex-col items-center">
                            <div className="w-20 h-20 mb-1 overflow-hidden">
                                <img className="w-full h-full" src={Carcassonne} alt="Carcassonne"/>
                            </div>
                            <div className="font-bold text-xs">Example</div>
                        </a> */}
                    </div>
                </div>
            </div>
            <div className="grow flex flex-col w-full h-full justify-end items-center">
                <div className="font-thin text-sm italic">
                    <a href="https://www.buymeacoffee.com/quibbble" target="_blank" rel="noreferrer">support the developer</a>
                </div>
            </div>
        </div>)
}