"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    description: string;
    category?: string;
    className?: string;
    videoSrc?: string;
}

export function PageHero({
    title,
    subtitle,
    description,
    category,
    className,
    videoSrc = "/videos/hero-bg.mp4",
}: PageHeroProps) {
    return (
        <section className={cn("relative flex h-[50vh] md:h-[60vh] w-full flex-col items-center justify-center overflow-hidden pt-20", className)}>
            {/* Video Background Layer */}
            <div className="absolute inset-0 z-0">
                {/* Layered Overlays for maximum readability */}
                <div className="absolute inset-0 bg-slate-900/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/20 to-slate-900/80 z-10" />

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
                {/* Fallback Background Layer */}
                <div className="absolute inset-0 bg-slate-900 -z-10" />
            </div>

            <div className="container relative z-20 mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mx-auto max-w-4xl"
                >
                    {category && (
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-block px-4 py-1.5 mb-6 text-[11px] font-black tracking-[0.2em] uppercase text-primary bg-primary/10 rounded-full border border-primary/20 backdrop-blur-md shadow-lg"
                        >
                            {category}
                        </motion.span>
                    )}

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter leading-tight drop-shadow-xl flex flex-col items-center gap-2">
                        {title}
                        {subtitle && (
                            <span className="text-primary/90 text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                                {subtitle}
                            </span>
                        )}
                    </h1>

                    <p className="text-lg text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                        {description}
                    </p>
                </motion.div>
            </div>

            {/* Bottom Fade Gradient */}
            <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />
        </section>
    );
}
