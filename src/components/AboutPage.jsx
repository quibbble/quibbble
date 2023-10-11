import React, { useLayoutEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Footer } from "@quibbble/boardgame";
import Navbar from "./Navbar";
import About from "./about.md"

export default function AboutPage() {

    const [about, setAbout] = useState("")

    useLayoutEffect(() => {
        fetch(About)
            .then(response => response.text())
            .then(text => setAbout(text))
    }, [])

    return (
        <div className="flex flex-col items-center m-8 md:m-12">
            <div className="w-full max-w-2xl mb-12">
                <Navbar />
                <div className="fade-in pt-12">
                    <div className="w-full max-w-3xl bg-zinc-900 p-8 md:p-12 rounded-md">
                        <article className="prose dark:prose-invert max-w-fit fade-in">
                            <ReactMarkdown children={ about } remarkPlugins={[remarkGfm]} />
                        </article>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}