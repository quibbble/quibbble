import { Footer } from "@quibbble/boardgame";
import Navbar from "./Navbar";

export default function GameRequestsPage() {
    return (
        <div className="flex flex-col items-center m-8 md:m-12">
            <div className="w-full max-w-2xl">
                <Navbar />
                <div className="fade-in pt-12">
                    <iframe title="game request form" src="https://docs.google.com/forms/d/e/1FAIpQLSfvW9v2jC3KjOcdwhqLOF14vyrbqUp8EspU9MYFKldp6SbSFQ/viewform?embedded=true" className="w-full h-[32em] md:h-[38em]" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>
            <div className="absolute bottom-8 md:bottom-12 flex flex-col items-center">
                <Footer />
            </div>
        </div>
    )
}