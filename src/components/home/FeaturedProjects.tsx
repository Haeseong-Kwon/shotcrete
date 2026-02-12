"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useRef, useState } from "react";

const projects = [
    { id: 1, title: "OO터널 숏크리트 타설", location: "강원도 평창", tag: "숏크리트" },
    { id: 2, title: "XX지구 배후단지 사면보강", location: "경기도 하남", tag: "어스앵커" },
    { id: 3, title: "△△신도시 공원 녹생토", location: "인천 연수구", tag: "녹생토" },
    { id: 4, title: "□□도로 확장 암반 락볼트", location: "충북 충주", tag: "락볼트" },
    { id: 5, title: "S건설 물류센터 사면안정", location: "경기도 과천", tag: "소일네일링" },
    { id: 6, title: "국도 7호선 낙석 방지 공사", location: "강원도 삼척", tag: "락볼트" },
    { id: 7, title: "테마파크 경관 사면 녹화", location: "제주도 서귀포", tag: "녹생토" },
    { id: 8, title: "지하철 연장 구간 지반보강", location: "서울 양천구", tag: "숏크리트" },
];

export default function FeaturedProjects() {
    const [isPaused, setIsPaused] = useState(false);

    // Duplicate projects to create a seamless infinite loop
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
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity" />
                                <div className="absolute inset-0 flex items-center justify-center text-white/5 text-2xl font-black italic uppercase">FIELD PHOTO</div>

                                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                                    <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-black rounded-full mb-3 uppercase tracking-widest">
                                        {project.tag}
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
