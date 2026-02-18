"use client";

import { PageHero } from "@/components/layout/PageHero";
import { motion } from "framer-motion";
import { Shield, Lightbulb, Heart } from "lucide-react";

export default function PhilosophyPage() {
    const philosophies = [
        {
            icon: <Shield className="w-8 h-8 text-primary" />,
            title: "절대 안전 (Safety First)",
            description: "그 어떤 기술도 안전보다 우선될 수는 없습니다. 철저한 사전 점검과 안전 수칙 준수로 무재해 현장을 실현합니다.",
            detail: "전 직원의 안전 교육 정례화 및 현장 실시간 모니터링 시스템 구축"
        },
        {
            icon: <Lightbulb className="w-8 h-8 text-primary" />,
            title: "기술 혁신 (Innovation)",
            description: "전통적인 공법에 안주하지 않고, 최신 장비와 정밀한 시공 데이터를 바탕으로 토목 기술의 한계를 극복합니다.",
            detail: "숏크리트 투사 압력 최적화 및 스마트 지반 분석 기술 도입"
        },
        {
            icon: <Heart className="w-8 h-8 text-primary" />,
            title: "상생과 신뢰 (Trust)",
            description: "한 번 맺은 인연을 소중히 여기며, 고객사와 지역 사회 모두가 만족할 수 있는 정직한 시공을 추구합니다.",
            detail: "투명한 공정 관리와 철저한 사후 관리 서비스 제공"
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50/50">
            <PageHero
                category="Company"
                title="경영철학"
                subtitle="Management Philosophy"
                description="안전과 기술력을 최우선으로, 사람을 생각하는 시공을 이어갑니다."
            />

            <section className="container mx-auto py-24 px-6 max-w-6xl">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
                    >
                        지속 가능한 건설 생태계를 위한<br />
                        <span className="text-primary">세 가지 핵심 원칙</span>
                    </motion.h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        덕림기초개발의 모든 의사결정과 현장 활동은 다음의 철학을 바탕으로 이루어집니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {philosophies.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                {item.description}
                            </p>
                            <div className="pt-6 border-t border-slate-100 mt-auto">
                                <span className="text-sm font-bold text-primary">{item.detail}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Quote Section */}
            <section className="bg-slate-900 py-32 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary rounded-full blur-[120px]" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <blockquote className="text-center max-w-4xl mx-auto">
                        <p className="text-2xl md:text-4xl font-medium text-white leading-tight mb-8">
                            &quot;우리가 세우는 것은 단순한 옹벽이나 지반이 아닙니다. <br className="hidden md:block" />
                            그 위에 세워질 수많은 건축물과 사람들의 <span className="text-primary font-black italic underline underline-offset-8 decoration-primary/50">내일을 위한 안전</span>입니다.&quot;
                        </p>
                        <cite className="text-slate-400 not-italic font-bold text-lg">
                            — 덕림기초개발 임직원 일동
                        </cite>
                    </blockquote>
                </div>
            </section>
        </main>
    );
}
