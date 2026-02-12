import { PageHero } from "@/components/layout/PageHero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GreeningPage() {
    return (
        <main>
            <PageHero
                title="녹생토"
                subtitle="(식생복원)"
                description="훼손된 사면에 자연을 입혀 생태계를 복원하고 경관을 개선하는 친환경 녹화 공법입니다."
                category="Business Area"
            />
            <div className="container mx-auto py-24 px-4">

                <Tabs defaultValue="features" className="w-full max-w-4xl mx-auto">
                    <TabsList className="grid w-full grid-cols-3 h-12">
                        <TabsTrigger value="features" className="text-base">공법 특징</TabsTrigger>
                        <TabsTrigger value="process" className="text-base">시공 순서</TabsTrigger>
                        <TabsTrigger value="spec" className="text-base">기술 사양</TabsTrigger>
                    </TabsList>
                    <TabsContent value="features" className="mt-8">
                        <Card className="border-t-4 border-t-primary">
                            <CardHeader>
                                <CardTitle>자연과 상생하는 복원 기술</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-muted-foreground">
                                <p>
                                    종자, 비료, 객토를 혼합 살포하여 훼손된 사면의 조기 녹화 및 생태 복원을 도모하는 환경 친화적 공법입니다.
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>식생 근계가 지표면을 고정하여 우수에 의한 사면 유실 방지</li>
                                    <li>단기간 내 사면 녹화를 통해 경관 개선 및 자연 생태계 보존</li>
                                    <li>식물의 뿌리를 통한 사면 결속력 강화</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="process" className="mt-8">
                        <Card className="border-t-4 border-t-primary">
                            <CardHeader>
                                <CardTitle>시공 공정</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold">철망설치</h4>
                                            <p className="text-sm text-muted-foreground">사면에 철망을 단단히 고정하여 인장력 확보 및 토양 부착 기반을 마련합니다.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold">특수녹생토 부착</h4>
                                            <p className="text-sm text-muted-foreground">전용 장비를 사용하여 혼합된 식생 기재를 계획된 두께로 균일하게 분사합니다.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold">보호 및 관리</h4>
                                            <p className="text-sm text-muted-foreground">파종 초기 발아 및 안착을 위한 양생 관리와 유지보수를 시행합니다.</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="spec" className="mt-8">
                        <Card className="border-t-4 border-t-primary">
                            <CardHeader>
                                <CardTitle>기술 사양 및 구성</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="p-4 border rounded-lg bg-muted/30">
                                        <h4 className="font-bold mb-2">장비 구성</h4>
                                        <p className="text-sm text-muted-foreground">Air Compressor, Delivery Hose, Gun System</p>
                                    </div>
                                    <div className="p-4 border rounded-lg bg-muted/30">
                                        <h4 className="font-bold mb-2">인원 구성</h4>
                                        <p className="text-sm text-muted-foreground">현장관리자, 노즐공, 건맨, 조력공</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    );
}
