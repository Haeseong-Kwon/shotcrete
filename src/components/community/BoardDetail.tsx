import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Calendar, Eye, Share2, Printer, MessageSquare } from "lucide-react";

interface BoardDetailProps {
    post: {
        id: number;
        title: string;
        author: string;
        date: string;
        views: number;
        content: string;
    };
    listHref: string;
}

export function BoardDetail({ post, listHref }: BoardDetailProps) {
    return (
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            {/* Post Header */}
            <div className="p-8 md:p-12 border-b border-slate-100 bg-slate-50/30">
                <div className="flex items-center gap-4 mb-8">
                    <Link href={listHref}>
                        <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full hover:bg-white hover:text-primary border border-transparent hover:border-slate-100 transition-all">
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                    </Link>
                    <div className="h-4 w-px bg-slate-200" />
                    <span className="text-sm font-black text-primary uppercase tracking-widest">Post View</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                    {post.title}
                </h2>

                <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-slate-500">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                            <User className="w-4 h-4 text-slate-400" />
                        </div>
                        {post.author}
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        {post.date}
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                    <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-slate-400" />
                        조회 {post.views}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 min-h-[400px]">
                <div className="prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-loose prose-p:text-lg prose-headings:font-black prose-headings:tracking-tight">
                    {post.content.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                    ))}
                </div>
            </div>

            {/* Post Footer / Actions */}
            <div className="p-8 md:p-10 border-t border-slate-100 bg-slate-50/50 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="gap-2 font-bold text-slate-500 hover:text-primary">
                        <Share2 className="w-4 h-4" /> 공유하기
                    </Button>
                    <Button variant="ghost" className="gap-2 font-bold text-slate-500 hover:text-primary">
                        <Printer className="w-4 h-4" /> 인쇄하기
                    </Button>
                </div>

                <div className="flex items-center gap-3">
                    <Link href={listHref}>
                        <Button variant="outline" className="h-12 px-8 rounded-xl font-bold border-slate-200 text-slate-600 hover:bg-white hover:text-primary transition-all">
                            목록보기
                        </Button>
                    </Link>
                    <Button className="h-12 px-8 rounded-xl font-bold bg-slate-900 hover:bg-primary text-white shadow-lg shadow-slate-900/10 transition-all hover:scale-105">
                        답변하기
                    </Button>
                </div>
            </div>

            {/* Mock Comments Section */}
            <div className="px-8 md:px-12 pb-12">
                <div className="pt-12 border-t border-slate-100">
                    <div className="flex items-center gap-3 mb-8">
                        <MessageSquare className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-black text-slate-900 tracking-tight">댓글 <span className="text-primary">0</span></h3>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                        <textarea
                            placeholder="따뜻한 댓글을 남겨주세요."
                            className="w-full bg-transparent border-none outline-none resize-none font-medium text-slate-600 mb-4"
                            rows={3}
                        />
                        <div className="flex justify-end">
                            <Button className="font-bold bg-white text-slate-600 hover:bg-primary hover:text-white border border-slate-200 hover:border-primary transition-all">
                                댓글 등록
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
