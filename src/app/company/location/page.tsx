import { PageHero } from "@/components/layout/PageHero";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function LocationPage() {
    return (
        <main className="min-h-screen bg-slate-50/50">
            <PageHero
                category="Contact"
                title="오시는 길"
                subtitle="Location"
                description="덕림기초개발은 언제나 여러분의 목소리에 귀를 기울입니다."
            />

            <section className="container mx-auto py-24 px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50"
                        >
                            <h2 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">본사 안내</h2>

                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Address</div>
                                        <div className="text-lg text-slate-900 font-bold leading-snug">
                                            서울특별시 송파구 풍납동<br />
                                            (Pungnap-dong, Songpa-gu, Seoul, Korea)
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Telephone</div>
                                        <div className="text-lg text-slate-900 font-bold">02-XXX-XXXX (준비 중)</div>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">E-mail</div>
                                        <div className="text-lg text-slate-900 font-bold">contact@deoklim.com</div>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Business Hours</div>
                                        <div className="text-lg text-slate-900 font-bold">평일 09:00 - 18:30</div>
                                        <div className="text-slate-500 text-sm">토요일, 일요일 및 공휴일 휴무</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="bg-primary p-10 rounded-[2.5rem] text-white overflow-hidden relative shadow-2xl shadow-primary/20">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-black mb-4 tracking-tight">온라인 문의</h3>
                                <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                                    시공 관련 견적이나 기술 상담이 필요하신가요? 온라인 문의를 통해 빠르고 정확한 답변을 받아보세요.
                                </p>
                                <button className="w-full bg-white text-primary font-black py-4 rounded-2xl hover:bg-slate-50 transition-colors shadow-lg shadow-black/10">
                                    상담 신청하기
                                </button>
                            </div>
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 h-[680px] bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-300/50 border border-white relative group"
                    >
                        {/* Map Placeholder */}
                        <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center text-slate-400 p-12 text-center">
                            <MapPin className="w-20 h-20 mb-6 opacity-20 group-hover:scale-110 transition-transform duration-500" />
                            <div className="text-2xl font-black tracking-tight text-slate-900 mb-4">MAP INTEGRATION</div>
                            <p className="max-w-xs leading-relaxed">
                                카카오맵 또는 네이버맵 API를 연동하여 실제 위치를 표시할 수 있습니다.
                            </p>
                            <div className="mt-12 flex gap-4">
                                <div className="w-16 h-1 rounded-full bg-slate-200" />
                                <div className="w-16 h-1 rounded-full bg-primary" />
                                <div className="w-16 h-1 rounded-full bg-slate-200" />
                            </div>
                        </div>

                        {/* Top-Right Tag */}
                        <div className="absolute top-8 right-8 bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl font-bold text-slate-900 text-sm shadow-xl border border-white/50 z-20">
                            송파구 풍납동 215-04
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
