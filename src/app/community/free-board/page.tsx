import { PageHero } from "@/components/layout/PageHero";
import { BoardList } from "@/components/community/BoardList";

const freeBoardPosts = [
    { id: 4, title: "숏크리트 시공 단가 문의드립니다.", author: "김철수", date: "2024.02.12", views: 45 },
    { id: 3, title: "사면보강 공법 비교 자료가 있을까요?", author: "이영희", date: "2024.02.11", views: 72 },
    { id: 2, title: "덕림기초개발 시공 사례 보고 연락드렸습니다.", author: "박지성", date: "2024.02.08", views: 110 },
    { id: 1, title: "협력 업체 등록 절차가 궁금합니다.", author: "정수연", date: "2024.02.01", views: 154 },
];

export default function FreeBoardPage() {
    return (
        <main>
            <PageHero
                title="자유게시판"
                description="자유롭게 의견을 나누고 시공 관련 문의를 남겨주세요."
                category="FREE BOARD"
            />

            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 -mt-32 relative z-20">
                    <BoardList
                        posts={freeBoardPosts}
                        writeHref="/community/free-board/write"
                    />
                </div>
            </section>
        </main>
    );
}
