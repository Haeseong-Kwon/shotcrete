import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function RockboltPage() {
    return (
        <div className="container mx-auto py-24 px-4">
            <h1 className="text-4xl font-bold mb-8 text-center text-primary">락볼트 (Rockbolt)</h1>

            <Tabs defaultValue="features" className="w-full max-w-4xl mx-auto">
                <TabsList className="grid w-full grid-cols-3 h-12">
                    <TabsTrigger value="features" className="text-base">공법 원리</TabsTrigger>
                    <TabsTrigger value="types" className="text-base">시공 방식</TabsTrigger>
                    <TabsTrigger value="purpose" className="text-base">주요 효과</TabsTrigger>
                </TabsList>
                <TabsContent value="features" className="mt-8">
                    <Card className="border-t-4 border-t-primary">
                        <CardHeader>
                            <CardTitle>암반 보강의 핵심</CardTitle>
                            <CardDescription>
                                암반의 불연속면을 관통하여 지반 자체의 지지력을 강화하는 공법입니다.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">
                                불안정한 암반 블록을 신선하고 안정한 고정 암반층에 체결하는 &apos;봉합 효과&apos;를 통해 암반의 자립 능력을 극대화합니다.
                            </p>
                            <div className="bg-muted p-4 rounded-lg">
                                <h3 className="font-bold mb-2">핵심 메커니즘</h3>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                    <li>현수작업 (Suspension): 이완된 암반을 견고한 암층에 매달기</li>
                                    <li>보 형성 (Beam building): 층상 구조의 암반을 결합하여 복합 보 형성</li>
                                    <li>아치 형성 (Arch forming): 주변 암반의 구속압력을 증대시켜 아치 효과 창출</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="types" className="mt-8">
                    <Card className="border-t-4 border-t-primary">
                        <CardHeader>
                            <CardTitle>주요 시공 유형</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4 md:grid-cols-2">
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-bold text-primary mb-2">전면 접착형 (Full-grouted)</h4>
                                <p className="text-sm text-muted-foreground">볼트 전체 길이에 그라우트를 채워 지반과 일체화시키는 방식. 영구적인 보강에 유리합니다.</p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-bold text-primary mb-2">선단 정착형 (Point-anchored)</h4>
                                <p className="text-sm text-muted-foreground">볼트 끝부분만 정착시킨 후 인장력을 가하는 방식. 초기 지반 거동 제어에 효과적입니다.</p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="purpose" className="mt-8">
                    <Card className="border-t-4 border-t-primary">
                        <CardHeader>
                            <CardTitle>기대 효과</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4 sm:grid-cols-2">
                            <div className="p-4 border rounded-lg bg-primary/5">
                                <h4 className="font-bold underline mb-2">안전성 확보</h4>
                                <p className="text-sm text-muted-foreground">터널 굴착 및 암반 사면에서의 낙석 방지 및 전체적인 지반 안정성 기여.</p>
                            </div>
                            <div className="p-4 border rounded-lg bg-primary/5">
                                <h4 className="font-bold underline mb-2">경제성</h4>
                                <p className="text-sm text-muted-foreground">암반 자체의 강도를 적극 활용하므로 강지보재 사용량을 줄여 경제적 시공 가능.</p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
