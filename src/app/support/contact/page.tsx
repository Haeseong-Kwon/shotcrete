import { InquiryForm } from "@/components/support/InquiryForm";
import { siteConfig } from "@/constants/siteConfig";
import { Phone, Mail, MapPin, Printer, Smartphone, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            {/* Header Section */}
            <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent)]" />
                <div className="container mx-auto px-6 relative z-10 text-left">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">고객지원</h1>
                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                            덕림기초개발은 고객님의 목소리에 항상 귀 기울이고 있습니다. <br className="hidden md:inline" />
                            궁금하신 점이나 견적 문의를 남겨주시면 신속하게 답변해 드리겠습니다.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 -mt-12 relative z-20 text-left">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: Contact Info */}
                    <div className="lg:col-span-4 space-y-8">
                        <Card className="border-none shadow-2xl shadow-slate-200/50 bg-white overflow-hidden">
                            <CardContent className="p-8 space-y-8">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-black text-slate-900">연락처 정보</h3>
                                    <p className="text-slate-400 text-sm">궁금한 사항은 언제든지 문의해주세요.</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                            <Phone className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">대표 번호</p>
                                            <p className="text-lg font-bold text-slate-900">{siteConfig.contact.phone}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                                            <Smartphone className="w-5 h-5 text-slate-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">직통 번호</p>
                                            <p className="text-lg font-bold text-slate-900">{siteConfig.contact.hp}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                                            <Printer className="w-5 h-5 text-slate-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">팩스</p>
                                            <p className="text-lg font-bold text-slate-900">{siteConfig.contact.fax}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                                            <Mail className="w-5 h-5 text-slate-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">이메일</p>
                                            <p className="text-lg font-bold text-slate-900">{siteConfig.contact.email}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-slate-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">주소</p>
                                            <p className="text-sm font-bold text-slate-900 leading-relaxed">{siteConfig.contact.address}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-slate-100">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                                            <Clock className="w-5 h-5 text-blue-500" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">업무 시간</p>
                                            <p className="text-sm font-bold text-slate-900">평일 09:00 - 18:00</p>
                                            <p className="text-xs text-slate-500 mt-1">주말 및 공휴일 휴무</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Simple Map Placeholder */}
                        <div className="rounded-3xl bg-slate-200 aspect-video w-full flex items-center justify-center relative overflow-hidden shadow-inner font-bold text-slate-400 flex-col gap-2">
                            <MapPin className="w-8 h-8 opacity-20" />
                            <span>지형 정보 준비 중 (Kakao/Google Map)</span>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:col-span-8">
                        <InquiryForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
