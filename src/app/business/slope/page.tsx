import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SlopePage() {
    return (
        <div className="container mx-auto py-24 px-4">
            <h1 className="text-4xl font-bold mb-8 text-center text-primary">어스앵커/사면보강 (Earth Anchor)</h1>

            <Tabs defaultValue="features" className="w-full max-w-4xl mx-auto">
                <TabsList className="grid w-full grid-cols-3 h-12">
                    <TabsTrigger value="features" className="text-base">공법 특징</TabsTrigger>
                    <TabsTrigger value="process" className="text-base">시공 공정</TabsTrigger>
                    <TabsTrigger value="advantages" className="text-base">주요 효과</TabsTrigger>
                </TabsList>
                <TabsContent value="features" className="mt-8">
                    <Card className="border-t-4 border-t-primary">
                        <CardHeader>
                            <CardTitle>강력한 능동적 지지력</CardTitle>
                            <CardDescription>
                                인위적인 인장력을 통해 구조물의 안정을 도모하는 고도의 전문 공법입니다.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">
                                고강도 PC강선을 지반 깊숙이 정착시킨 후 인장(Prestressing)하여 발생하는 반력으로 구조물의 변위를 능동적으로 억제합니다.
                            </p>
                            <div className="p-4 border rounded bg-muted/50">
                                <h4 className="font-bold mb-2">핵심 특징</h4>
                                <ul className="list-disc pl-5 text-sm space-y-1">
                                    <li>넓은 작업 공간 확보 (중장비 이동 용이)</li>
                                    <li>지반 변위에 능동적이고 즉각적인 대응 가능</li>
                                    <li>깊은 굴착 및 높은 사면 보강에 최적화</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="process" className="mt-8">
                    <Card className="border-t-4 border-t-primary">
                        <CardHeader>
                            <CardTitle>표준 시공 순서</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[
                                    { step: "01", title: "기초 벽체 및 말뚝 설치", desc: "수직 보호공을 선행 설치하여 안전을 확보합니다." },
                                    { step: "02", title: "단계별 굴착 및 띠장 설치", desc: "앵커 설치 높이까지 굴착 후 띠장(Waler)을 체결합니다." },
                                    { step: "03", title: "천공 및 앵커 삽입", desc: "설계 각도와 깊이로 천공 후 PC강선을 삽입합니다." },
                                    { step: "04", title: "그라우팅", desc: "시멘트 밀크를 주입하여 지하에 견고한 앵커체를 형성합니다." },
                                    { step: "05", title: "긴장 및 정착", desc: "그라우트 양생 후 유압 잭으로 긴장하여 고정합니다." },
                                ].map((item) => (
                                    <div key={item.step} className="flex gap-4 p-3 border-b last:border-0">
                                        <span className="text-primary font-black text-xl">{item.step}</span>
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
                            <CardTitle>기대 효과 및 용도</CardTitle>
                        </CardHeader>
                        <CardContent className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-primary/5 rounded border">
                                <h4 className="font-bold mb-2">경제적 시공</h4>
                                <p className="text-sm">버팀대가 필요 없어 공기를 단축하고 시공비를 절감할 수 있습니다.</p>
                            </div>
                            <div className="p-4 bg-primary/5 rounded border">
                                <h4 className="font-bold mb-2">고난도 현장 대응</h4>
                                <p className="text-sm">높은 사면이나 대형 지하 굴착 등 위험도가 높은 현장에 적합합니다.</p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
