"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useRef, useState } from "react";

import { PORTFOLIO_PHOTOS } from "@/constants/portfolio";
import Image from "next/image";

export default function FeaturedProjects() {
    const [isPaused, setIsPaused] = useState(false);

    // Use real data from constants
    const projects = PORTFOLIO_PHOTOS;
    const duplicatedProjects = [...projects, ...projects];

    return (
        <section className="py-24 overflow-hidden">
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .scroll-container {
                    display: flex;
                    gap: 1.5rem;
                    width: max-content;
                    animation: scroll 40s linear infinite;
                    animation-play-state: ${isPaused ? 'paused' : 'running'};
                }
            `}</style>

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">PROJECTS</h2>
                        <p className="text-xl text-muted-foreground font-medium">현장에서 증명하는 덕림기초개발의 압도적 기술력.</p>
                    </div>
                    <Link href="/portfolio" className="group text-primary font-bold hover:underline flex items-center bg-primary/5 px-6 py-3 rounded-full transition-colors">
                        전체 실적 포트폴리오 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="scroll-container">
                        {duplicatedProjects.map((project, index) => (
                            <div
                                key={`${project.id}-${index}`}
                                className="relative shrink-0 w-[280px] md:w-[350px] group overflow-hidden rounded-2xl aspect-[4/5] bg-slate-900 shadow-xl"
                            >
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity" />

                                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                                    <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-black rounded-full mb-3 uppercase tracking-widest">
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl md:text-2xl text-white font-black mb-2 tracking-tight group-hover:text-primary transition-colors leading-tight">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center text-white/50 gap-2 mt-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <span className="w-4 h-px bg-white/30" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">{project.location}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
