import { PageHero } from "@/components/layout/PageHero";
import { motion } from "framer-motion";

export default function GreetingPage() {
    return (
        <main className="min-h-screen bg-slate-50/50">
            <PageHero
                category="Company"
                title="인사말"
                subtitle="CEO Greeting"
                description="덕림기초개발은 정밀한 기술력과 신뢰를 바탕으로 대한민국의 안전한 기반을 건설합니다."
            />

            <section className="container mx-auto py-24 px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                >
                    <div className="lg:col-span-8 space-y-8">
                        <div className="prose prose-slate max-w-none">
                            <h2 className="text-3xl font-black text-slate-900 mb-8 leading-tight">
                                &quot;토목의 기초를 세우는 정밀함,<br />
                                <span className="text-primary italic">덕림기초개발</span>이 약속드립니다.&quot;
                            </h2>

                            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
                                <p>
                                    안녕하십니까? 덕림기초개발을 방문해 주신 고객 여러분께 진심으로 감사의 말씀을 드립니다.
                                </p>
                                <p>
                                    저희 덕림기초개발은 <span className="text-slate-900 font-bold underline decoration-primary/30 underline-offset-4">숏크리트, 녹생토, 어스앵커</span> 등 특수 토목 공법 분야에서 다년간 쌓아온 풍부한 경험과 독보적인 기술력을 보유한 전문 건설 기업입니다.
                                </p>
                                <p>
                                    단순한 시공을 넘어, 지반의 특성을 정밀하게 분석하고 최적화된 공법을 적용함으로써 어떤 험난한 지형에서도 완벽하고 안전한 결과물을 만들어내고 있습니다. 고객의 신뢰를 최우선 가치로 여기며, 모든 현장에서 내 집을 짓는다는 마음가짐으로 책임 시공을 실천하고 있습니다.
                                </p>
                                <p>
                                    급변하는 건설 환경 속에서도 지속적인 기술 혁신과 철저한 안전 관리를 통해 업계를 선도하는 최고의 파트너가 될 것을 약속드립니다. 여러분의 신뢰에 기술력으로 보답하겠습니다.
                                </p>
                            </div>
                        </div>

                        <div className="pt-12 border-t border-slate-200">
                            <div className="flex flex-col items-end">
                                <span className="text-slate-500 text-sm mb-2">덕림기초개발 대표이사</span>
                                <div className="flex items-center gap-4">
                                    <span className="text-3xl font-black text-slate-900 tracking-tighter">김 성 하</span>
                                    <div className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary italic font-serif">
                                        印
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 sticky top-32">
                        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Core Values</h3>
                            <ul className="space-y-4">
                                {[
                                    { title: "인간 중심", desc: "사람과 환경을 생각하는 시공" },
                                    { title: "기술 혁신", desc: "끊임없는 연구와 정밀한 공법" },
                                    { title: "절대 안전", desc: "무재해 현장을 최우선으로" }
                                ].map((item, index) => (
                                    <li key={index} className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                        <div>
                                            <div className="font-bold text-slate-900">{item.title}</div>
                                            <div className="text-sm text-slate-500">{item.desc}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
