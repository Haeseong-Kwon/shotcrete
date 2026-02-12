export const navigation = {
    company: [
        { title: "인사말", href: "/company/greeting" },
        { title: "경영이념", href: "/company/philosophy" },
        { title: "조직도", href: "/company/organization" },
        { title: "오시는길", href: "/company/location" },
    ],
    business: [
        { title: "숏크리트", href: "/business/shotcrete" },
        { title: "녹생토", href: "/business/greening" },
        { title: "락볼트", href: "/business/rockbolt" },
        { title: "소일네일", href: "/business/soilnail" },
        { title: "어스앵커/사면보강", href: "/business/slope" },
    ],
    portfolio: [
        { title: "전체 시공실적", href: "/portfolio" },
        { title: "숏크리트 공사", href: "/portfolio?category=shotcrete" },
        { title: "락볼트/사면보강", href: "/portfolio?category=rockbolt" },
        { title: "녹생토/조경", href: "/portfolio?category=greening" },
    ],
    community: [
        { title: "공지사항", href: "/community/notice" },
        { title: "자유게시판", href: "/community/free-board" },
    ],
    support: [
        { title: "견적문의/상담", href: "/support/contact" },
    ],
};

export const mainNavItems = [
    { title: "회사소개", href: "/company/greeting", items: navigation.company },
    { title: "사업영역", href: "/business/shotcrete", items: navigation.business },
    { title: "시공 포트폴리오", href: "/portfolio", items: navigation.portfolio },
    { title: "커뮤니티", href: "/community/notice", items: navigation.community },
    { title: "고객지원", href: "/support/contact", items: navigation.support },
];
