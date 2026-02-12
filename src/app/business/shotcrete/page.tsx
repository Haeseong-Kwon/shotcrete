import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ShotcretePage() {
    return (
        <div className="container mx-auto py-24 px-4">
            <h1 className="text-4xl font-bold mb-8 text-center text-primary">숏크리트 (Shotcrete)</h1>

            <Tabs defaultValue="features" className="w-full max-w-4xl mx-auto">
                <TabsList className="grid w-full grid-cols-4 h-12">
                    <TabsTrigger value="features" className="text-sm md:text-base">공법 특징</TabsTrigger>
                    <TabsTrigger value="types" className="text-sm md:text-base">주요 분류</TabsTrigger>
                    <TabsTrigger value="quality" className="text-sm md:text-base">품질 관리</TabsTrigger>
                    <TabsTrigger value="application" className="text-sm md:text-base">주요 용도</TabsTrigger>
                </TabsList>

                <TabsContent value="features" className="mt-8">
                    <Card className="border-t-4 border-t-primary">
                        <CardHeader>
                            <CardTitle>고성능 시공법</CardTitle>
                            <CardDescription>
                                압축공기를 이용해 모르타르나 콘크리트를 면에 고속 분사하여 부착시키는 방식입니다.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 text-muted-foreground">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-l-primary">
                                    <h4 className="font-bold text-foreground mb-1">고속 분사 효과</h4>
                                    <p className="text-sm">고속 살포로 인하여 콘크리트의 밀도가 높아지고 강력한 지지력을 발휘합니다.</p>
                                </div>
                                <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-l-primary">
                                    <h4 className="font-bold text-foreground mb-1">유연한 수밀성</h4>
                                    <p className="text-sm">구조물 자체를 피복하여 방수 능력을 향상시키며 유연하게 지형에 적응합니다.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="types" className="mt-8">
                    <Card className="border-t-4 border-t-primary">
                        <CardHeader>
                            <CardTitle>시공 방식의 차이</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2 border p-6 rounded-lg">
                                <h3 className="font-bold text-lg text-primary">건식 (Dry-mix)</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    재료를 건조 상태로 호스로 운송 후 노즐에서 물을 주입. 장비가 간단하고 장거리 압송이 유리하지만 분진과 반발량이 발생할 수 있습니다.
                                </p>
                            </div>
                            <div className="space-y-2 border p-6 rounded-lg">
                                <h3 className="font-bold text-lg text-primary">습식 (Wet-mix)</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    미리 비벼진 콘크리트를 압송. 품질 관리가 용이하고 반발량이 적으며 작업 환경이 쾌적하여 정밀 시공에 적합합니다.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="quality" className="mt-8">
                    <Card className="border-t-4 border-t-primary">
                        <CardHeader>
                            <CardTitle>엄격한 품질 및 시공 관리</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 border rounded-lg bg-primary/5">
                                <h4 className="font-bold mb-3 flex items-center gap-2">✔️ 시공 표준 수치</h4>
                                <ul className="grid gap-3 text-sm">
                                    <li className="flex justify-between border-b pb-2">
                                        <span>노즐-시공면 거리</span>
                                        <span className="font-bold">약 1.0m 유지</span>
                                    </li>
                                    <li className="flex justify-between border-b pb-2">
                                        <span>노즐 살포 각도</span>
                                        <span className="font-bold">시공면과 90도(직각)</span>
                                    </li>
                                    <li className="flex justify-between border-b pb-2">
                                        <span>작업 중단 풍속</span>
                                        <span className="font-bold text-red-500">15m/s 이상 시 중단</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-bold">전문 기술 인력</h4>
                                <p className="text-sm text-muted-foreground">
                                    균일한 두께와 품질 확보를 위해 2년 이상의 풍부한 경험을 가진 숙련된 노즐공(Nozzleman)에 의한 정밀 시공을 원칙으로 합니다.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="application" className="mt-8">
                    <Card className="border-t-4 border-t-primary">
                        <CardHeader>
                            <CardTitle>적용 분야</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="grid gap-2 grid-cols-1 md:grid-cols-2">
                                <li className="p-3 bg-muted/40 rounded">터널 지보공 및 라이닝</li>
                                <li className="p-3 bg-muted/40 rounded">암반 사면의 긴급 보강</li>
                                <li className="p-3 bg-muted/40 rounded">토류벽 보강 및 구조물 수선</li>
                                <li className="p-3 bg-muted/40 rounded">상하수도 및 저수조 방수 시공</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
