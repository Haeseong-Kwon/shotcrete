import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PortfolioPage() {
    return (
        <div className="container mx-auto py-24 px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">시공실적</h1>
            <p className="text-center text-muted-foreground mb-12">
                덕림기초개발이 걸어온 주요 시공 현장입니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Placeholder Items */}
                {Array.from({ length: 9 }).map((_, i) => (
                    <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-48 bg-muted animate-pulse" />
                        <CardHeader>
                            <CardTitle>주요 공사 현장 {i + 1}</CardTitle>
                            <CardDescription>202{i % 5}년 • 지역명</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                현장에 대한 간략한 설명이 들어갑니다. 어떤 공법이 적용되었는지 기술합니다.
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
