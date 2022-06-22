import Footer from "./Footer";
import Navbar from "./Navbar";

export default function GamesPage() {
    return (
        <div className="flex flex-col items-center m-8 md:m-12">
            <div className="w-full max-w-2xl flex flex-col items-center">
                <Navbar />
                <div className="mt-12 fade-in w-72 flex flex-col items-center">
                    <div className="flex gap-4 self-center mb-2">
                        <a href={ `${ window.location.protocol }//tsuro.quibbble.com` } className="flex flex-col items-center">
                            <div className="mb-1 w-20 h-20 p-3 overflow-hidden rounded-3xl border-red-600 border-2 box-border">
                                <div className="w-18 h-18 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                        <path className="fill-red-600" d="M85.88,53.62c-1-.28-6.88-7.09-8.95-8.3S56.67,33.11,55.35,37.17C53.19,43.85,66.6,50.91,71.59,61.89c4.48,9.87,4.43,33.19-17.08,38C69,91.46,70.56,74.81,65.07,64.19,59.32,53.05,44.75,47.86,44.43,38.26c-3,12,26.54,20.71,20,43.14-5.84,20-34,25.28-56.64,8.88C56,103.37,58.66,75.49,53.44,67.94S30,57.47,26,82.75c-8.55-11.62,5-29.57.79-34.83S15.24,44.85,3.29,54.16C8,33.16,25.44,36,28.42,33s-5.7-7.8-18.41-7.2C23.74,15.1,40.58,24.3,44.1,24.3S45.7,16.38,34,13C49.14,10.36,54.3,20,58,20s-5.4-7.46-1.52-20c3,12.82,16.33,19.85,16.33,19.85l4.16,9S66,21.68,66.67,24.65s13.14,10.47,20,12.73c5.19,1.69,9,2.08,9.73,3.12,1.21,1.65-2.08,8.32-2.08,8.32L92.74,50l-.61-3.91S70.39,34.08,71,36.82c.3,1.35,7.88,4.82,9.87,6.1s6,6.54,6,6.54L89.72,48l-1.28,3.19V53A4.16,4.16,0,0,1,85.88,53.62Z"/>
                                        <rect fillOpacity={0} width="100" height="100"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="font-bold text-xs">Tsuro</div>
                        </a>
                        <a href={ `${ window.location.protocol }//carcassonne.quibbble.com` } className="flex flex-col items-center">
                            <div className="mb-1 w-20 h-20 p-3 overflow-hidden rounded-3xl border-orange-600 border-2 box-border">
                                <div className="w-18 h-18 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                        <polygon className="fill-orange-600" points="73.46 15.46 73.46 26.63 26.54 26.63 26.54 15.46 30.64 15.46 30.64 21.49 34.69 21.49 34.69 15.46 39.31 15.46 39.31 21.49 43.35 21.49 43.35 15.46 47.98 15.46 47.98 21.49 52.02 21.49 52.02 15.46 56.65 15.46 56.65 21.49 60.69 21.49 60.69 15.46 65.31 15.46 65.31 21.49 69.36 21.49 69.36 15.46 73.46 15.46"/>
                                        <polygon className="fill-orange-600" points="26.57 48.84 25.99 54.42 0 54.42 0 43.25 4.79 43.25 4.79 48.84 8.84 48.84 8.84 43.25 14.2 43.25 14.2 48.84 18.24 48.84 18.24 43.25 23.59 43.25 23.59 48.84 26.57 48.84"/>
                                        <polygon className="fill-orange-600" points="100 43.25 100 54.42 74.01 54.42 73.43 48.84 76.41 48.84 76.41 43.25 81.77 43.25 81.77 48.84 85.8 48.84 85.8 43.25 91.16 43.25 91.16 48.84 95.2 48.84 95.2 43.25 100 43.25"/>
                                        <polygon className="fill-orange-600" points="95.2 58.12 95.2 84.54 77.15 84.54 77.11 84.16 74.4 58.12 95.2 58.12"/>
                                        <polygon className="fill-orange-600" points="25.6 58.12 22.89 84.16 22.85 84.54 4.79 84.54 4.79 58.12 25.6 58.12"/>
                                        <path className="fill-orange-600" d="M57.44,84.54V58.63a7.44,7.44,0,1,0-14.88,0V84.54h-16l5.62-54.09H67.84l5.62,54.09Z"/>
                                        <rect fillOpacity={0} width="100" height="100"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="font-bold text-xs">Carcassonne</div>
                        </a>
                        <a href={ `${ window.location.protocol }//connect4.quibbble.com` } className="flex flex-col items-center">
                            <div className="mb-1 w-20 h-20 p-3 overflow-hidden rounded-3xl border-yellow-500 border-2 box-border">
                                <div className="w-18 h-18 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                        <circle className="fill-yellow-500" cx="11.96" cy="11.96" r="11.96"/>
                                        <circle className="fill-yellow-500" cx="37.32" cy="37.32" r="11.96"/>
                                        <circle className="fill-yellow-500" cx="62.68" cy="62.69" r="11.96"/>
                                        <circle className="fill-yellow-500" cx="88.05" cy="88.05" r="11.96"/>                                   
                                    </svg>
                                </div>
                            </div>
                            <div className="font-bold text-xs">Connect4</div>
                        </a>
                        {/* <a href={ `${ window.location.protocol }//carcassonne.quibbble.com` } className="flex flex-col items-center">
                            <div className="mb-1 w-20 h-20 p-3 overflow-hidden rounded-3xl border-red-600 border-2 box-border">
                                <div className="w-18 h-18 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                        ...
                                    </svg>
                                </div>
                            </div>
                            <div className="font-bold text-xs">Example</div>
                        </a> */}
                    </div>
                    <div className="flex gap-4 self-start">
                        {/* <a href={ `${ window.location.protocol }//carcassonne.quibbble.com` } className="flex flex-col items-center">
                            <div className="mb-1 w-20 h-20 p-3 overflow-hidden rounded-3xl border-red-600 border-2 box-border">
                                <div className="w-18 h-18 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                        ...
                                    </svg>
                                </div>
                            </div>
                            <div className="font-bold text-xs">Example</div>
                        </a> */}
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 md:bottom-12">
                <Footer />
            </div>
        </div>
    )
}
  