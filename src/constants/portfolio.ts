export interface PortfolioPhoto {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    location: string;
    date: string;
}

export interface PortfolioVideo {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;
    isLocal?: boolean;
    location: string;
    date: string;
}

export const PORTFOLIO_PHOTOS: PortfolioPhoto[] = [
    {
        id: "p1",
        title: "시공 현장 사진 01",
        description: "덕림기초개발의 전문성이 반영된 시공 현장입니다.",
        imageUrl: "/images/portfolio/1.jpeg",
        category: "시공현장",
        location: "현장 미정",
        date: "2024.12",
    },
    {
        id: "p2",
        title: "시공 현장 사진 02",
        description: "정밀한 공법이 적용된 사면 보강 현장입니다.",
        imageUrl: "/images/portfolio/2.jpeg",
        category: "사면보강",
        location: "현장 미정",
        date: "2024.11",
    },
    {
        id: "p3",
        title: "시공 현장 사진 03",
        description: "안전하고 정확한 기초 공사 현장입니다.",
        imageUrl: "/images/portfolio/3.jpeg",
        category: "기초공사",
        location: "현장 미정",
        date: "2024.10",
    },
    {
        id: "p4",
        title: "시공 현장 사진 04",
        description: "대규모 토목 공사 현장의 모습입니다.",
        imageUrl: "/images/portfolio/4.jpeg",
        category: "토목공사",
        location: "현장 미정",
        date: "2024.09",
    },
];

export const PORTFOLIO_VIDEOS: PortfolioVideo[] = Array.from({ length: 13 }).map((_, i) => ({
    id: `v${i + 1}`,
    title: `시공 현장 영상 ${String(i + 1).padStart(2, "0")}`,
    description: "덕림기초개발의 실제 시공 과정을 담은 기록 영상입니다.",
    thumbnailUrl: "/images/portfolio/1.jpeg", // 실제 썸네일 대신 사진 01 활용
    videoUrl: `/images/portfolio/${i + 1}.mp4`,
    isLocal: true,
    location: "시공 현장",
    date: "2024.12",
}));
