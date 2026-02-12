"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "성함 또는 업체명을 2글자 이상 입력해주세요.",
    }),
    phone: z.string().min(10, {
        message: "올바른 연락처를 입력해주세요.",
    }),
    email: z.string().email({
        message: "올바른 이메일 주소를 입력해주세요.",
    }).optional().or(z.literal("")),
    subject: z.string().min(1, {
        message: "문의 항목을 선택해주세요.",
    }),
    message: z.string().min(10, {
        message: "문의 내용을 10글자 이상 입력해주세요.",
    }),
    agreement: z.boolean().refine((val) => val === true, {
        message: "개인정보 수집 및 이용에 동의해야 합니다.",
    }),
});

export function InquiryForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
            agreement: false,
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(values);
        setIsSubmitting(false);
        setIsSuccess(true);
    }

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50 text-center space-y-6"
            >
                <div className="flex justify-center">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                </div>
                <div className="space-y-2">
                    <h3 className="text-2xl font-black text-slate-900">문의가 성공적으로 전달되었습니다</h3>
                    <p className="text-slate-500">
                        보내주신 소중한 문의 내용을 확인 후 <br />
                        빠른 시일 내에 연락드리겠습니다. 감사합니다.
                    </p>
                </div>
                <Button
                    variant="outline"
                    onClick={() => {
                        setIsSuccess(false);
                        form.reset();
                    }}
                    className="rounded-full px-8"
                >
                    새로운 문의 작성하기
                </Button>
            </motion.div>
        );
    }

    return (
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/60 relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />

            <div className="relative z-10 space-y-8">
                <div className="space-y-1">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">온라인 문의하기</h2>
                    <p className="text-slate-500 text-sm">궁금하신 사항을 남겨주시면 전문가가 상세히 답변드립니다.</p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-slate-700 font-bold">성함 / 업체명 *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="홍길동" className="h-12 border-slate-200 focus-visible:ring-primary rounded-xl px-4" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-slate-700 font-bold">연락처 *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="010-0000-0000" className="h-12 border-slate-200 focus-visible:ring-primary rounded-xl px-4" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-slate-700 font-bold">이메일</FormLabel>
                                        <FormControl>
                                            <Input placeholder="example@email.com" className="h-12 border-slate-200 focus-visible:ring-primary rounded-xl px-4" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-slate-700 font-bold">문의 항목 *</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="h-12 border-slate-200 focus:ring-primary rounded-xl px-4 text-left">
                                                    <SelectValue placeholder="항목 선택" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="rounded-xl">
                                                <SelectItem value="shotcrete">숏크리트 (Shotcrete)</SelectItem>
                                                <SelectItem value="rockbolt">락볼트 / 사면보강</SelectItem>
                                                <SelectItem value="greening">녹생토 / 조경</SelectItem>
                                                <SelectItem value="etc">기타 문의</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-700 font-bold">문의 내용 *</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="문의하실 내용을 상세히 적어주세요."
                                            className="min-h-[150px] border-slate-200 focus-visible:ring-primary rounded-xl p-4 resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="agreement"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 bg-slate-50 p-4 rounded-xl border border-slate-100 transition-colors hover:bg-slate-100/50">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            className="mt-1"
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel className="text-sm font-medium text-slate-600 cursor-pointer">
                                            개인정보 수집 및 이용에 동의합니다.
                                        </FormLabel>
                                        <p className="text-[10px] text-slate-400">
                                            수집된 정보는 본인 확인 및 문의 응대에만 사용됩니다.
                                        </p>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl shadow-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    전송 중...
                                </>
                            ) : (
                                <>
                                    문의 보내기 <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
