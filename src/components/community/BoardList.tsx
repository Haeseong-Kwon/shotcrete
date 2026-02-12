import Link from "next/link";
import { Search, ChevronLeft, ChevronRight, User, Calendar, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Post {
    id: number;
    title: string;
    author: string;
    date: string;
    views: number;
    isNotice?: boolean;
}

interface BoardListProps {
    posts: Post[];
    writeHref?: string;
}

export function BoardList({ posts, writeHref }: BoardListProps) {
    return (
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            {/* Search Bar */}
            <div className="p-6 md:p-8 bg-slate-50 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="검색어를 입력하세요..."
                        className="w-full pl-11 pr-4 h-12 rounded-xl bg-white border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm font-medium"
                    />
                </div>
                {writeHref && (
                    <Link href={writeHref}>
                        <Button className="h-12 px-8 rounded-xl font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                            새 글 쓰기
                        </Button>
                    </Link>
                )}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-slate-100 bg-slate-50/50 text-slate-500 text-[11px] uppercase tracking-widest font-black">
                            <th className="px-8 py-5 w-20">NO.</th>
                            <th className="px-8 py-5">제목</th>
                            <th className="px-8 py-5 w-32">작성자</th>
                            <th className="px-8 py-5 w-32 text-center">작성일</th>
                            <th className="px-8 py-5 w-24 text-center">조회</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {posts.map((post) => (
                            <tr
                                key={post.id}
                                className={`group hover:bg-slate-50/80 transition-colors ${post.isNotice ? 'bg-primary/[0.02]' : ''}`}
                            >
                                <td className="px-8 py-6 text-sm font-bold text-slate-400">
                                    {post.isNotice ? (
                                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] rounded-md">NOTICE</span>
                                    ) : (
                                        post.id
                                    )}
                                </td>
                                <td className="px-8 py-6">
                                    <Link
                                        href={`#`}
                                        className="text-[15px] font-bold text-slate-800 hover:text-primary transition-colors block leading-snug"
                                    >
                                        {post.title}
                                    </Link>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                                            <User className="w-3 h-3 text-slate-400" />
                                        </div>
                                        {post.author}
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-center">
                                    <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-400">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-center">
                                    <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-400">
                                        <Eye className="w-3 h-3" />
                                        {post.views}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="p-8 bg-slate-50/30 border-t border-slate-100 flex items-center justify-center gap-2">
                <Button variant="ghost" size="icon" className="w-10 h-10 rounded-xl hover:bg-white hover:text-primary border border-transparent hover:border-slate-100 transition-all">
                    <ChevronLeft className="w-4 h-4" />
                </Button>
                <div className="flex items-center gap-1">
                    {[1, 2, 3].map((page) => (
                        <button
                            key={page}
                            className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${page === 1 ? 'bg-primary text-white shadow-md shadow-primary/30' : 'hover:bg-white hover:text-primary text-slate-400'}`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
                <Button variant="ghost" size="icon" className="w-10 h-10 rounded-xl hover:bg-white hover:text-primary border border-transparent hover:border-slate-100 transition-all">
                    <ChevronRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
}
