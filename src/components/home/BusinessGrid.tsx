"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer, Mountain, Zap, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
    {
        title: "숏크리트",
        desc: "고속 분사 공법을 이용한 지반 보강 및 구조물 보호",
        icon: Zap,
        href: "/business/shotcrete",
        color: "text-blue-500",
    },
    {
        title: "녹생토",
        desc: "훼손된 사면의 조기 녹화 및 자연 생태계 복원",
        icon: Mountain,
        href: "/business/greening",
        color: "text-green-500",
    },
    {
        title: "락볼트",
        desc: "암반의 불연속면을 결합하여 지반 지지력 강화",
        icon: Hammer,
        href: "/business/rockbolt",
        color: "text-orange-500",
    },
    {
        title: "사면보강",
        desc: "어스앵커 및 소일네일링을 이용한 대형 사면 안정화",
        icon: Shield,
        href: "/business/slope",
        color: "text-red-500",
    },
];

export default function BusinessGrid() {
    return (
        <section className="py-12 bg-muted/30 border-b">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {categories.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <Link href={item.href}>
                                <Card className="hover:shadow-md transition-all duration-300 border-none group bg-background py-4 px-2">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded shrink-0 bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors`}>
                                            <item.icon className={`w-4 h-4 ${item.color}`} />
                                        </div>
                                        <div>
                                            <CardTitle className="text-sm font-bold group-hover:text-primary transition-colors">{item.title}</CardTitle>
                                            <p className="text-[11px] text-muted-foreground line-clamp-1">{item.desc}</p>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
