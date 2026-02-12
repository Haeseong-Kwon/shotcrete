import { BoardHeader } from "@/components/community/BoardHeader";
import { BoardList } from "@/components/community/BoardList";

const noticePosts = [
    { id: 4, title: "덕림기초개발 홈페이지 리뉴얼 안내", author: "관리자", date: "2024.02.12", views: 124, isNotice: true },
    { id: 3, title: "신규 현장(강원 고성) 착공 공지", author: "관리자", date: "2024.02.10", views: 89, isNotice: true },
    { id: 2, title: "2024년 상반기 장비 안전 점검 일제 시공 안내", author: "관리자", date: "2024.02.05", views: 256 },
    { id: 1, title: "구정 연휴 휴무 및 비상 연락망 안내", author: "관리자", date: "2024.01.25", views: 312 },
];

export default function NoticePage() {
    return (
        <main>
            <BoardHeader
                title="공지사항"
                description="덕림기초개발의 새로운 소식과 주요 공지사항을 전달해 드립니다."
                category="NOTICE"
            />

            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 -mt-32 relative z-20">
                    <BoardList posts={noticePosts} />
                </div>
            </section>
        </main>
    );
}
