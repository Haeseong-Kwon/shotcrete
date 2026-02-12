import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SoilnailingPage() {
    return (
        <div className="container mx-auto py-24 px-4">
            <h1 className="text-4xl font-bold mb-8 text-center text-primary">소일네일링 (Soil Nail)</h1>

            <Tabs defaultValue="features" className="w-full max-w-4xl mx-auto">
                <TabsList className="grid w-full grid-cols-3 h-12">
                    <TabsTrigger value="features" className="text-base">공법 특징</TabsTrigger>
                    <TabsTrigger value="process" className="text-base">시공 순서</TabsTrigger>
                    <TabsTrigger value="advantages" className="text-base">장점 및 적용</TabsTrigger>
                </TabsList>
                <TabsContent value="features" className="mt-8">
                    <Card className="border-t-4 border-t-primary">
                        <CardHeader>
                            <CardTitle>지반 일체화 보강법</CardTitle>
                            <CardDescription>
                                토사 지반에 네일을 촘촘하게 삽입하여 지반 자체를 구조물화하는 공법입니다.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">
                                네일과 지반 사이의 마찰력을 통해 지반의 전단 강도를 증대시키는 수동적 보강법으로, 지반의 변형을 억제하고 안정성을 확보합니다.
                            </p>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="process" className="mt-8">
                    <Card className="border-t-4 border-t-primary">
                        <CardHeader>
                            <CardTitle>Top-down 시공 공정</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[
                                    { step: "01", title: "단계별 굴착", desc: "네일 설치가 가능한 높이(보통 1.5~2.0m)만큼 상부에서 아래로 굴착합니다." },
                                    { step: "02", title: "천공 및 네일 삽입", desc: "계획된 위치에 천공 후 철근 네일을 삽입합니다." },
                                    { step: "03", title: "그라우팅 및 숏크리트", desc: "네일 주위에 그라우트를 주입하고 표면에 1차 숏크리트를 타설합니다." },
                                    { step: "04", title: "지판 설치 및 반복", desc: "지판(Bearing Plate)을 고정하고 다음 단계 굴착을 진행합니다." },
                                ].map((item) => (
                                    <div key={item.step} className="flex gap-4 p-3 border-b last:border-0 hover:bg-muted/30 transition-colors">
                                        <span className="text-primary font-black text-xl italic">{item.step}</span>
                                        <div>
                                            <h4 className="font-bold text-sm">{item.title}</h4>
                                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="advantages" className="mt-8">
                    <Card className="border-t-4 border-t-primary">
                        <CardHeader>
                            <CardTitle>공법의 장점</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="grid gap-3 grid-cols-1 md:grid-cols-2">
                                <li className="flex items-center gap-2 p-3 border rounded shadow-sm">✅ <span className="text-sm text-muted-foreground">소형 장비로 협소 공간 시공 가능</span></li>
                                <li className="flex items-center gap-2 p-3 border rounded shadow-sm">✅ <span className="text-sm text-muted-foreground">단계별 즉각적인 사면 안정 확보</span></li>
                                <li className="flex items-center gap-2 p-3 border rounded shadow-sm">✅ <span className="text-sm text-muted-foreground">지반 변형에 유연하게 대응 가능</span></li>
                                <li className="flex items-center gap-2 p-3 border rounded shadow-sm">✅ <span className="text-sm text-muted-foreground">도심지 인접 굴착 시 안정성 우수</span></li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
