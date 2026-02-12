import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BoardHeaderProps {
    title: string;
    description: string;
    category: string;
}

export function BoardHeader({ title, description, category }: BoardHeaderProps) {
    return (
        <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
            
            <div className="container relative z-10 mx-auto px-6">
                <div className="flex items-center gap-2 text-primary/60 text-sm font-medium mb-8">
                    <Link href="/" className="hover:text-primary transition-colors">
                        <Home className="w-4 h-4" />
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="hover:text-primary transition-colors cursor-pointer text-white/50">커뮤니티</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-primary font-bold">{title}</span>
                </div>

                <div className="max-w-3xl">
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-black rounded-full mb-6 uppercase tracking-widest border border-primary/30">
                        {category}
                    </span>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">
                        {title}
                    </h1>
                    <p className="text-xl text-slate-400 font-medium leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
}
