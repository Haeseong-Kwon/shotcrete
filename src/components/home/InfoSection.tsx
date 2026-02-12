import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Clock, Bell, MessageSquareMore, ChevronRight, Plus } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/constants/siteConfig";

const noticeItems = [
    { title: "덕림기초개발 홈페이지 리뉴얼 안내", date: "2024.02.12" },
    { title: "신규 현장(강원 고성) 착공 공지", date: "2024.02.10" },
    { title: "2024년 상반기 장비 안전 점검 안내", date: "2024.02.05" },
];

const freeBoardItems = [
    { title: "숏크리트 시공 단가 문의드립니다.", date: "2024.02.12" },
    { title: "사면보강 공법 비교 자료가 있을까요?", date: "2024.02.11" },
    { title: "덕림기초개발 시공 사례 보고 연락드렸습니다.", date: "2024.02.08" },
];

interface BoardPreviewProps {
    title: string;
    items: { title: string; date: string }[];
    href: string;
    icon: any;
}

function BoardPreview({ title, items, href, icon: Icon }: BoardPreviewProps) {
    return (
        <Card className="h-full border-slate-200 shadow-lg shadow-slate-200/40 hover:shadow-xl transition-shadow bg-white">
            <CardHeader className="pb-4 border-b border-slate-100 space-y-0">
                <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-black flex items-center gap-2 text-slate-900 tracking-tight">
                        <Icon className="w-5 h-5 text-primary" /> {title}
                    </CardTitle>
                    <Link
                        href={href}
                        className="group flex items-center gap-1 text-xs font-black text-slate-400 hover:text-primary transition-colors uppercase tracking-widest"
                    >
                        더보기 <Plus className="w-3 h-3 group-hover:rotate-90 transition-transform" />
                    </Link>
                </div>
            </CardHeader>
            <CardContent className="pt-6">
                <div className="space-y-1">
                    {items.map((item, idx) => (
                        <Link
                            key={idx}
                            href={`${href}`}
                            className="flex justify-between items-center p-3.5 rounded-xl hover:bg-slate-50 transition-all group"
                        >
                            <div className="flex items-center gap-3 overflow-hidden">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-primary shrink-0 transition-colors" />
                                <span className="font-bold text-slate-600 group-hover:text-slate-900 transition-colors truncate text-[15px]">
                                    {item.title}
                                </span>
                            </div>
                            <span className="text-[11px] font-black text-slate-400 font-mono whitespace-nowrap ml-4">
                                {item.date}
                            </span>
                        </Link>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export default function InfoSection() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 -skew-x-12 translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

                    {/* Notice Card */}
                    <div className="h-full">
                        <BoardPreview
                            title="공지사항"
                            items={noticeItems}
                            href="/community/notice"
                            icon={Bell}
                        />
                    </div>

                    {/* Community Card */}
                    <div className="h-full">
                        <BoardPreview
                            title="자유게시판"
                            items={freeBoardItems}
                            href="/community/free-board"
                            icon={MessageSquareMore}
                        />
                    </div>

                    {/* Contact Card */}
                    <div className="h-full">
                        <Card className="bg-slate-900 text-white border-none shadow-2xl shadow-slate-900/20 overflow-hidden relative group h-full flex flex-col">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                <Phone className="w-24 h-24" />
                            </div>

                            <CardHeader className="p-8 pb-4 shrink-0">
                                <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-3 block">Quick Contact</span>
                                <CardTitle className="text-3xl font-black tracking-tight leading-tight">
                                    신속하고 정확한 <br />견적 상담 서비스
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="p-8 pt-4 space-y-8 flex-1 flex flex-col justify-end">
                                <div className="space-y-1 group/item cursor-pointer">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">대표 전화 (Phone)</p>
                                    <p className="text-2xl font-black text-white group-hover:text-primary transition-colors flex items-center gap-2">
                                        {siteConfig.contact.phone}
                                        <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-6 pt-6 border-t border-white/10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                            <Mail className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">이메일 (Email)</p>
                                            <p className="text-sm font-bold text-slate-300">{siteConfig.contact.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                            <Clock className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">업무 시간 (Hours)</p>
                                            <p className="text-sm font-bold text-slate-300">평일 09:00 - 18:00</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </div>

                {/* Bottom Badges */}
                <div className="mt-20 pt-12 border-t border-slate-200/60 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40">
                    <span className="text-[11px] font-black tracking-[0.3em] uppercase text-slate-500">Excellence in Engineering</span>
                    <div className="flex gap-12">
                        <span className="text-xs font-black tracking-widest text-slate-600">CERTIFIED QUALITY</span>
                        <span className="text-xs font-black tracking-widest text-slate-600">SAFETY FIRST</span>
                        <span className="text-xs font-black tracking-widest text-slate-600">GLOBAL STANDARD</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
