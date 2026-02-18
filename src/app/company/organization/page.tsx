"use client";

import { PageHero } from "@/components/layout/PageHero";
import { motion } from "framer-motion";
import { Users, Code, Activity, ShieldCheck } from "lucide-react";

export default function OrganizationPage() {
    const departments = [
        {
            icon: <Activity className="w-10 h-10" />,
            title: "기술본부 (Engineering)",
            desc: "현장 분석, 설계 검토 및 숏크리트·어스앵커 시스템 정밀 설계를 담당합니다.",
            tags: ["공법 설계", "현장 진단", "기술 지원"]
        },
        {
            icon: <ShieldCheck className="w-10 h-10" />,
            title: "안전관리본부 (Safety)",
            desc: "전 현장 무재해 달성을 목표로 현장 안전 수칙 및 품질 관리를 철저히 감독합니다.",
            tags: ["안전 교육", "품질 검증", "현장 모니터링"]
        },
        {
            icon: <Users className="w-10 h-10" />,
            title: "현장운영팀 (Operations)",
            desc: "독보적인 숙련도를 갖춘 현장 인력들이 최신 장비를 활용해 책임 시공을 수행합니다.",
            tags: ["숏크리트 시공", "녹생토 작업", "유지 보수"]
        },
        {
            icon: <Code className="w-10 h-10" />,
            title: "경영지원팀 (Management)",
            desc: "안정적인 현장 운영을 위한 인프라, 인사, 재무 및 고객 상담 업무를 총괄합니다.",
            tags: ["인사 관리", "고객 서비스", "재무 회계"]
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50/50">
            <PageHero
                category="Company"
                title="조직도"
                subtitle="Organization"
                description="각 분야의 전문가들이 협력하여 완벽한 시공을 실현합니다."
            />

            <section className="container mx-auto py-24 px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                            유기적인 협력을 통한<br />
                            <span className="text-primary italic">품질 극대화</span>
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                            <p>
                                덕림기초개발은 수직적인 체계가 아닌, 각 본부 간의 <strong>수평적이고 유기적인 소통</strong>을 지향합니다.
                            </p>
                            <p>
                                설계 단계에서부터 현장 시공, 그리고 사후 관리에 이르기까지 모든 프로세스가 통합적으로 연결되어 있어, 발생 가능한 변수에 대해 신속하고 정확하게 대응할 수 있는 능력을 갖추고 있습니다.
                            </p>
                            <p>
                                특히, <span className="bg-primary/10 text-primary px-2 py-1 rounded font-bold">국내 최고 수준의 숏크리트 기술자</span> 그룹을 보유하고 있어 난이도 높은 현장에서도 완벽한 품질을 보장합니다.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square bg-white rounded-full border-[1.5rem] border-primary/5 flex items-center justify-center p-12 shadow-inner">
                            <div className="text-center">
                                <div className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Core Unity</div>
                                <div className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
                                    덕림기초<br />개발
                                </div>
                            </div>
                        </div>
                        {/* Orbiting circles effect could be added here if needed */}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {departments.map((dept, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col md:flex-row gap-8 items-start group"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-slate-900 text-white flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                                {dept.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{dept.title}</h3>
                                <p className="text-slate-500 mb-6 leading-relaxed lg:max-w-md">
                                    {dept.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {dept.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-slate-50 text-slate-400 text-xs font-bold rounded-full border border-slate-100 italic">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
