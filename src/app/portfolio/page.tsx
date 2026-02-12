import { PageHero } from "@/components/layout/PageHero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PhotoGallery } from "@/components/portfolio/PhotoGallery";
import { VideoGallery } from "@/components/portfolio/VideoGallery";
import { PORTFOLIO_PHOTOS, PORTFOLIO_VIDEOS } from "@/constants/portfolio";
import { ImageIcon, VideoIcon } from "lucide-react";

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-slate-50/50">
            <PageHero
                title="시공실적"
                subtitle="(Portfolio)"
                description="덕림기초개발이 걸어온 주요 시공 현장입니다. 축적된 기술력과 정교한 시공으로 최선을 다합니다."
                category="Our Works"
            />

            <div className="container mx-auto py-24 px-4">
                <Tabs defaultValue="photos" className="w-full">
                    <div className="flex flex-col items-center mb-16 space-y-8">
                        <div className="max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                                시공 현장 기록
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                현장의 생생한 사진과 영상을 통해 덕림기초개발의 전문성을 직접 확인하실 수 있습니다.
                            </p>
                        </div>

                        <TabsList className="grid w-full max-w-[400px] grid-cols-2 p-1 bg-white border border-slate-200 shadow-sm rounded-full h-14">
                            <TabsTrigger
                                value="photos"
                                className="rounded-full flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full transition-all duration-300"
                            >
                                <ImageIcon size={18} />
                                <span className="font-medium">현장 사진</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="videos"
                                className="rounded-full flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full transition-all duration-300"
                            >
                                <VideoIcon size={18} />
                                <span className="font-medium">시공 영상</span>
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="photos" className="mt-0 focus-visible:outline-none">
                        <PhotoGallery photos={PORTFOLIO_PHOTOS} />
                    </TabsContent>

                    <TabsContent value="videos" className="mt-0 focus-visible:outline-none">
                        <VideoGallery videos={PORTFOLIO_VIDEOS} />
                    </TabsContent>
                </Tabs>
            </div>

            {/* Bottom CTA or Info section can be added here later */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">덕림기초개발의 기술은 현장에서 증명됩니다.</h3>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-10">
                        모든 현장에서 정직과 신뢰를 바탕으로 최상의 품질을 보장합니다.
                        상세한 시공 상담이나 견적 문의는 언제든 환영합니다.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                        >
                            시공 문의하기
                        </a>
                        <a
                            href="/shotcrete"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-100 text-slate-900 font-semibold hover:bg-slate-200 transition-colors"
                        >
                            주요 공법 보기
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
