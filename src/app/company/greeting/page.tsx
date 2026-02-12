export default function GreetingPage() {
    return (
        <div className="container mx-auto py-24 px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-center text-primary">인사말</h1>

            <div className="prose max-w-none text-lg leading-relaxed space-y-6">
                <p className="font-semibold text-2xl mb-8 border-l-4 border-primary pl-4">
                    &quot;덕림기초개발 홈페이지를 방문해 주신 여러분께 진심으로 감사합니다!&quot;
                </p>

                <p>
                    고객 여러분 안녕하세요? 저희 기업은 앞서가는 기술력과 노하우로 현재 업계 선두를 달리고 있는 대표적인 <strong>숏크리트(지하탑다운) 전문업체</strong>입니다.
                    지난 수년간의 노력과 시행착오를 통해 저희 기업은 고객님들과 더불어 성장하였습니다.
                </p>

                <p>
                    저희 업체는 숏크리트 전문업체로서 녹생토, 천공 등 사면보강공사 전문기업으로서 다년간의 노하우와 기술력을 보유한 기업입니다.
                    <strong>&apos;고객만족&apos;</strong>을 슬로건으로 하여 고객님께서 만족하실 수 있도록 저희 임직원 일동은 최선을 다하고 있습니다.
                </p>

                <p>
                    관련업계의 경쟁이 점점 더 격화되고 있는 상황에서도 고객님을 먼저 생각하는 기술을 바탕으로, 앞으로 저희 기업은 더 나아가 21세기에 적합한 세계적인 기업으로 성장해 나가 고객 여러분의 성원에 보답하도록 하겠습니다.
                </p>

                <p className="pt-8 text-right font-bold text-xl text-primary">
                    덕림기초개발 대표 김성하
                </p>
            </div>
        </div>
    );
}
