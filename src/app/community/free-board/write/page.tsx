import { BoardHeader } from "@/components/community/BoardHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default function FreeBoardWritePage() {
    return (
        <main>
            <BoardHeader
                title="글쓰기"
                description="커뮤니티에 새로운 소식이나 문의사항을 남겨보세요."
                category="WRITE"
            />

            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 -mt-32 relative z-20">
                    <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12">
                        <div className="flex items-center justify-between mb-12">
                            <Link href="/community/free-board">
                                <Button variant="ghost" className="gap-2 font-bold text-slate-500 hover:text-primary transition-colors">
                                    <ArrowLeft className="w-4 h-4" /> 목록으로 돌아가기
                                </Button>
                            </Link>
                        </div>

                        <form className="space-y-8 max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-black text-slate-800 uppercase tracking-widest pl-1">작성자</label>
                                    <Input
                                        placeholder="이름을 입력하세요"
                                        className="h-14 rounded-xl border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-medium"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-black text-slate-800 uppercase tracking-widest pl-1">비밀번호</label>
                                    <Input
                                        type="password"
                                        placeholder="비밀번호를 입력하세요"
                                        className="h-14 rounded-xl border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-black text-slate-800 uppercase tracking-widest pl-1">제목</label>
                                <Input
                                    placeholder="제목을 입력하세요"
                                    className="h-14 rounded-xl border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-medium"
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-black text-slate-800 uppercase tracking-widest pl-1">내용</label>
                                <textarea
                                    placeholder="내용을 입력하세요"
                                    rows={12}
                                    className="w-full rounded-xl border border-slate-200 p-6 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-medium outline-none resize-none"
                                />
                            </div>

                            <div className="flex gap-4 pt-8">
                                <Button className="flex-1 h-16 rounded-xl font-bold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98] gap-2">
                                    <Save className="w-5 h-5" /> 작성완료
                                </Button>
                                <Link href="/community/free-board" className="flex-1">
                                    <Button variant="outline" className="w-full h-16 rounded-xl font-bold border-slate-200 text-slate-500 hover:bg-slate-50 transition-all">
                                        취소하기
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
