"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex h-[70vh] md:h-[85vh] w-full flex-col items-center justify-center overflow-hidden pt-20">
            {/* Video Background Layer */}
            <div className="absolute inset-0 z-0">
                {/* Layered Overlays for maximum readability */}
                <div className="absolute inset-0 bg-slate-900/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/80 z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-slate-900/60 z-10" />

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                    poster="/images/hero-fallback.jpg"
                >
                    <source src="/videos/hero-bg.mp4" type="video/mp4" />
                </video>
                {/* Fallback Background Layer */}
                <div className="absolute inset-0 bg-slate-900 -z-10" />
            </div>

            <div className="container relative z-20 mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mx-auto max-w-5xl"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-block px-4 py-1.5 mb-8 text-[11px] font-black tracking-[0.3em] uppercase text-primary bg-primary/10 rounded-full border border-primary/20 backdrop-blur-md shadow-lg"
                    >
                        Foundation Engineering Excellence
                    </motion.span>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                        토목의 기초를 세우는 <br />
                        <span className="text-cyan-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">정밀한 기술력</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="mt-6 text-base md:text-xl text-slate-200 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md"
                    >
                        숏크리트, 녹생토, 어스앵커 등 전문 공법으로 <br className="hidden md:inline" />
                        대한민국의 안전하고 완벽한 기반을 조성합니다.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-12 flex flex-wrap items-center justify-center gap-5"
                    >
                        <Link href="/support/contact">
                            <Button size="lg" className="h-14 px-10 text-md font-bold bg-primary hover:bg-primary/90 text-white shadow-[0_20px_40px_rgba(var(--primary),0.3)] transition-all hover:scale-105 active:scale-95 rounded-full">
                                무료 견적 상담 받기
                            </Button>
                        </Link>
                        <Link href="/portfolio">
                            <Button size="lg" variant="ghost" className="h-14 px-10 text-md font-bold text-white border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 backdrop-blur-md transition-all rounded-full gap-2 group shadow-xl">
                                시공 실적 보기 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Fade Gradient */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
        </section>
    );
}
