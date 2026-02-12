import { BoardHeader } from "@/components/community/BoardHeader";
import { BoardDetail } from "@/components/community/BoardDetail";

const mockPost = {
    id: 4,
    title: "숏크리트 시공 단가 문의드립니다.",
    author: "김철수",
    date: "2024.02.12",
    views: 45,
    content: `안녕하세요. 덕림기초개발 담당자님.

강원도 지역에서 진행될 예정인 신규 토목 공사와 관련하여 숏크리트 시공 단가를 문의드리고자 합니다.

현재 설계된 면적은 약 2,500m² 정도이며, 지반 상태는 암반 노출 구간이 많습니다.
표준적인 시공 단가와 더불어, 현장 여건에 따른 할증 요인이 있는지 궁금합니다.

또한, 장비 투입 가능 시기와 대략적인 공기(工期)에 대해서도 답변 주시면 감사하겠습니다.

상세한 도면은 메일로 별도 송부드리겠습니다.
감사합니다.`
};

export default function FreeBoardDetailPage() {
    return (
        <main>
            <BoardHeader
                title="자유게시판"
                description="자유롭게 의견을 나누고 시공 관련 문의를 남겨주세요."
                category="FREE BOARD"
            />

            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 -mt-32 relative z-20">
                    <BoardDetail
                        post={mockPost}
                        listHref="/community/free-board"
                    />
                </div>
            </section>
        </main>
    );
}
