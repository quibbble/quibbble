import Footer from "./Footer";
import Navbar from "./Navbar";

export default function GamesPage() {
    return (
        <div className="flex flex-col items-center m-8 md:m-12">
            <div className="w-full max-w-2xl flex flex-col items-center">
                <Navbar />
                <div className="mt-12 fade-in w-72 flex flex-col items-center">
                    <div className="flex gap-2 md:gap-4 self-center mb-6">
                        <a href={ `${ window.location.protocol }//tsuro.quibbble.com` } className="flex flex-col items-center" target="_blank" rel="noreferrer">
                            <div className="mb-1 w-20 h-20 p-3 overflow-hidden rounded-xl border-red-500 border-2 box-border">
                                <div className="w-18 h-18 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                        <path className="fill-red-500" d="M85.88,53.62c-1-.28-6.88-7.09-8.95-8.3S56.67,33.11,55.35,37.17C53.19,43.85,66.6,50.91,71.59,61.89c4.48,9.87,4.43,33.19-17.08,38C69,91.46,70.56,74.81,65.07,64.19,59.32,53.05,44.75,47.86,44.43,38.26c-3,12,26.54,20.71,20,43.14-5.84,20-34,25.28-56.64,8.88C56,103.37,58.66,75.49,53.44,67.94S30,57.47,26,82.75c-8.55-11.62,5-29.57.79-34.83S15.24,44.85,3.29,54.16C8,33.16,25.44,36,28.42,33s-5.7-7.8-18.41-7.2C23.74,15.1,40.58,24.3,44.1,24.3S45.7,16.38,34,13C49.14,10.36,54.3,20,58,20s-5.4-7.46-1.52-20c3,12.82,16.33,19.85,16.33,19.85l4.16,9S66,21.68,66.67,24.65s13.14,10.47,20,12.73c5.19,1.69,9,2.08,9.73,3.12,1.21,1.65-2.08,8.32-2.08,8.32L92.74,50l-.61-3.91S70.39,34.08,71,36.82c.3,1.35,7.88,4.82,9.87,6.1s6,6.54,6,6.54L89.72,48l-1.28,3.19V53A4.16,4.16,0,0,1,85.88,53.62Z"/>
                                        <rect fillOpacity={0} width="100" height="100"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="font-bold title text-red-300">Tsuro</div>
                        </a>
                        <a href={ `${ window.location.protocol }//carcassonne.quibbble.com` } className="flex flex-col items-center" target="_blank" rel="noreferrer">
                            <div className="mb-1 w-20 h-20 p-3 overflow-hidden rounded-xl border-orange-500 border-2 box-border">
                                <div className="w-18 h-18 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                        <polygon className="fill-orange-500" points="73.46 15.46 73.46 26.63 26.54 26.63 26.54 15.46 30.64 15.46 30.64 21.49 34.69 21.49 34.69 15.46 39.31 15.46 39.31 21.49 43.35 21.49 43.35 15.46 47.98 15.46 47.98 21.49 52.02 21.49 52.02 15.46 56.65 15.46 56.65 21.49 60.69 21.49 60.69 15.46 65.31 15.46 65.31 21.49 69.36 21.49 69.36 15.46 73.46 15.46"/>
                                        <polygon className="fill-orange-500" points="26.57 48.84 25.99 54.42 0 54.42 0 43.25 4.79 43.25 4.79 48.84 8.84 48.84 8.84 43.25 14.2 43.25 14.2 48.84 18.24 48.84 18.24 43.25 23.59 43.25 23.59 48.84 26.57 48.84"/>
                                        <polygon className="fill-orange-500" points="100 43.25 100 54.42 74.01 54.42 73.43 48.84 76.41 48.84 76.41 43.25 81.77 43.25 81.77 48.84 85.8 48.84 85.8 43.25 91.16 43.25 91.16 48.84 95.2 48.84 95.2 43.25 100 43.25"/>
                                        <polygon className="fill-orange-500" points="95.2 58.12 95.2 84.54 77.15 84.54 77.11 84.16 74.4 58.12 95.2 58.12"/>
                                        <polygon className="fill-orange-500" points="25.6 58.12 22.89 84.16 22.85 84.54 4.79 84.54 4.79 58.12 25.6 58.12"/>
                                        <path className="fill-orange-500" d="M57.44,84.54V58.63a7.44,7.44,0,1,0-14.88,0V84.54h-16l5.62-54.09H67.84l5.62,54.09Z"/>
                                        <rect fillOpacity={0} width="100" height="100"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="font-bold title text-orange-300">Carcassonne</div>
                        </a>
                        <a href={ `${ window.location.protocol }//connect4.quibbble.com` } className="flex flex-col items-center" target="_blank" rel="noreferrer">
                            <div className="mb-1 w-20 h-20 p-3 overflow-hidden rounded-xl border-yellow-300 border-2 box-border">
                                <div className="w-18 h-18 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                        <circle className="fill-yellow-300" cx="11.96" cy="11.96" r="11.96"/>
                                        <circle className="fill-yellow-300" cx="37.32" cy="37.32" r="11.96"/>
                                        <circle className="fill-yellow-300" cx="62.68" cy="62.69" r="11.96"/>
                                        <circle className="fill-yellow-300" cx="88.05" cy="88.05" r="11.96"/>                                   
                                    </svg>
                                </div>
                            </div>
                            <div className="font-bold title text-amber-200">Connect4</div>
                        </a>
                        <a href={ `${ window.location.protocol }//stratego.quibbble.com` } className="flex flex-col items-center" target="_blank" rel="noreferrer">
                            <div className="mb-1 w-20 h-20 p-3 overflow-hidden rounded-xl border-blue-500 border-2 box-border">
                                <div className="w-18 h-18 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                        <path className="fill-blue-500" d="m57.36,37.41c.39-.59.61-1.28.61-2.04v-.61c0-2.01-1.63-3.64-3.64-3.64h-2.03c.03-1.84.36-3.77,1.41-4.62.9-.73,1.33-.67,3.54.5,1.96,1.04,4.88,2.6,8.06.61,5.02-3.11,5.67-8.98,5.69-9.22.16-1.57-.97-2.95-2.53-3.13-1.57-.16-2.97.97-3.15,2.53,0,.03-.43,3.37-3.03,4.98-.3.19-.8.03-2.37-.81-2.2-1.16-5.87-3.11-9.82.1-2.83,2.3-3.51,6.07-3.54,9.06h-1.31c-2.01,0-3.64,1.63-3.64,3.64v.61c0,.5.1.98.29,1.43-14.52,3-25.42,15.86-25.42,31.27,0,17.63,14.3,31.93,31.93,31.93s31.94-14.3,31.94-31.93c0-14.54-9.72-26.8-23.01-30.66Zm8.83,10.19c4.14,3.48,5.25,8.89,5.38,9.55-.24-.6-2.04-5.12-6.15-8.58-4.4-3.71-9.78-4.81-9.78-4.81,0,0,6.15.13,10.55,3.84Zm-19.74-15.61c1.48,0,2.68.39,2.68.39,0,0-1.16-.07-2.68-.07-1.51.01-2.68.07-2.68.07,0,0,1.2-.39,2.68-.39Zm1.98,63.27c-15.03,0-27.2-12.17-27.2-27.19,0,0,6.95,15.39,18.33,15.39s15.69-12.97,24.04-15.23c6.92-1.88,11.68,4.92,9.73,10.76-4.2,9.58-13.76,16.27-24.89,16.27Z"/>
                                        <path className="fill-blue-500" d="m83.41,11.22l-4.84-2.6c-.1-.06-.11-.2-.03-.29l3.94-3.8c.14-.13.01-.34-.16-.3l-5.25,1.58c-.11.03-.23-.06-.23-.17l.1-5.48c0-.19-.23-.24-.31-.09l-2.61,4.82c-.06.1-.2.11-.27.03l-3.81-3.94c-.13-.13-.34,0-.29.17l1.57,5.25c.03.11-.06.21-.17.21l-5.48-.1c-.17,0-.24.24-.09.33l4.82,2.6c.11.06.13.2.04.27l-3.95,3.81c-.13.13,0,.34.17.29l5.25-1.57c.11-.03.23.06.23.17l-.1,5.48c-.01.19.23.24.31.09l2.61-4.82c.06-.1.19-.13.27-.04l3.81,3.95c.11.13.33,0,.29-.17l-1.57-5.25c-.04-.11.04-.23.16-.23l5.49.11c.17,0,.24-.24.09-.33Zm-5.95-1.9l-1.77.29s-.07.06-.04.09l.81,1.6c.03.06-.03.11-.09.07l-1.46-1.04s-.07-.01-.09.03l-.56,1.71c-.01.06-.1.04-.11-.01l-.29-1.77s-.04-.06-.09-.04l-1.6.83c-.06.01-.1-.04-.07-.09l1.04-1.47s.01-.07-.03-.09l-1.71-.54c-.06-.03-.04-.1.01-.11l1.77-.3s.06-.04.04-.07l-.81-1.61s.03-.1.07-.07l1.47,1.06s.07,0,.09-.03l.56-1.71c.01-.06.1-.06.1,0l.3,1.78s.04.06.09.04l1.6-.83c.06-.03.1.04.07.09l-1.04,1.46s-.01.09.03.09l1.7.56c.06.01.06.1,0,.11Z"/>
                                        <rect fillOpacity={0} width="100" height="100"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="font-bold title text-blue-300">Stratego</div>
                        </a>
                    </div>
                    <div className="flex gap-2 md:gap-4 self-center mb-6">
                        <a href={ `${ window.location.protocol }//indigo.quibbble.com` } className="flex flex-col items-center" target="_blank" rel="noreferrer">
                            <div className="mb-1 w-20 h-20 p-3 overflow-hidden rounded-xl border-indigo-500 border-2 box-border">
                                <div className="w-18 h-18 mb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"> 
                                    <polygon className="fill-indigo-500" points="0 59.7 0 85.61 23.39 98.56 46.77 85.61 46.77 59.7 23.39 46.74 0 59.7"/>
                                    <polygon className="fill-indigo-500" points="53.23 59.7 53.23 85.61 76.61 98.56 100 85.61 100 59.7 76.61 46.74 53.23 59.7"/>
                                    <polygon className="fill-indigo-500" points="26.61 14.39 26.61 40.3 50 53.26 73.39 40.3 73.39 14.39 50 1.44 26.61 14.39"/>
                                    <rect fillOpacity={0} width="100" height="100"/>
                                </svg>
                                </div>
                            </div>
                            <div className="font-bold title text-indigo-300">Indigo</div>
                        </a>
                        <a href={ `${ window.location.protocol }//tictactoe.quibbble.com` } className="flex flex-col items-center" target="_blank" rel="noreferrer">
                            <div className="mb-1 w-20 h-20 p-3 overflow-hidden rounded-xl border-green-600 border-2 box-border">
                                <div className="w-18 h-18 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                        <polygon className="fill-green-600" points="51.24 25.23 45.75 25.23 36.55 25.23 35.02 25.23 34.18 26.5 25.67 39.25 17.12 26.49 16.27 25.23 14.75 25.23 5.49 25.23 0 25.23 3.16 29.72 17.63 50.31 3.65 70.29 .51 74.77 5.98 74.77 15.25 74.77 16.77 74.77 17.62 73.5 25.67 61.39 33.68 73.49 34.52 74.77 36.05 74.77 45.26 74.77 50.73 74.77 47.59 70.29 33.61 50.31 48.08 29.72 51.24 25.23"/>
                                        <path className="fill-green-600" d="m98.27,40.95c-1.15-2.98-2.78-5.68-4.85-8.03-2.09-2.37-4.63-4.31-7.57-5.76-3-1.49-6.35-2.24-9.94-2.24s-6.78.7-9.78,2.08c-2.96,1.36-5.56,3.23-7.72,5.56-2.14,2.3-3.84,4.98-5.06,7.97-1.23,3-1.85,6.19-1.85,9.47s.58,6.25,1.73,9.24c1.15,2.99,2.8,5.69,4.9,8.02,2.11,2.35,4.68,4.25,7.61,5.66,2.99,1.44,6.34,2.16,9.97,2.16s6.78-.7,9.78-2.08c2.96-1.36,5.55-3.22,7.69-5.53,2.12-2.29,3.81-4.95,5-7.92,1.2-2.98,1.81-6.16,1.81-9.43,0-3.09-.58-6.18-1.73-9.17Zm-22.48-2.73c1.54,0,2.86.29,4.05.9,1.23.62,2.24,1.44,3.08,2.48.88,1.09,1.57,2.38,2.05,3.82.49,1.47.75,3.01.75,4.58s-.24,3.02-.7,4.48c-.45,1.42-1.12,2.71-2,3.84-.85,1.09-1.87,1.94-3.11,2.6-1.18.63-2.53.93-4.12.93s-2.91-.3-4.09-.91c-1.24-.64-2.26-1.47-3.1-2.53-.87-1.08-1.55-2.36-2.01-3.79-.48-1.47-.72-3.02-.72-4.61s.24-3.02.7-4.48c.45-1.42,1.11-2.7,1.97-3.8.83-1.06,1.84-1.9,3.09-2.56,1.2-.63,2.57-.94,4.17-.94Z"/>
                                        <rect fillOpacity={0} width="100" height="100"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="font-bold title text-green-300">TicTacToe</div>
                        </a>
                        <span href={ `${ window.location.protocol }//example.quibbble.com` } className="opacity-0 flex flex-col items-center" target="_blank" rel="noreferrer">
                            <div className="mb-1 w-20 h-20 p-3 overflow-hidden rounded-xl border-blue-500 border-2 box-border">
                                <div className="w-18 h-18 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                        <rect fillOpacity={0} width="100" height="100"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="font-bold title text-neutral-300">Example</div>
                        </span>
                        <span href={ `${ window.location.protocol }//example.quibbble.com` } className="opacity-0 flex flex-col items-center" target="_blank" rel="noreferrer">
                            <div className="mb-1 w-20 h-20 p-3 overflow-hidden rounded-xl border-blue-500 border-2 box-border">
                                <div className="w-18 h-18 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                        <rect fillOpacity={0} width="100" height="100"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="font-bold title text-neutral-300">Example</div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 md:bottom-12">
                <Footer />
            </div>
        </div>
    )
}
  