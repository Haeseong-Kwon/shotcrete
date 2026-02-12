"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ChevronRight, Hammer, Mountain, Zap, Shield, HelpCircle, FileText, Phone, Bell, MessageSquareMore } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { mainNavItems } from "@/constants/navigation";
import { cn } from "@/lib/utils";

const businessIcons = {
    "숏크리트": Hammer,
    "어스앵커/사면보강": Mountain,
    "녹생토": Zap,
    "락볼트": Shield,
    "소일네일링": Shield,
    "공지사항": Bell,
    "자유게시판": MessageSquareMore,
};

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl transition-all duration-300">
            <div className="container mx-auto flex h-24 items-center justify-between px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <Mountain className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-end lg:gap-2 leading-none">
                            <span className="text-2xl font-black tracking-tighter text-slate-900 group-hover:text-slate-700 transition-colors">
                                DUCLIM
                            </span>
                            <span className="hidden sm:block text-xs font-bold text-slate-500 mb-1 group-hover:text-primary transition-colors">
                                고객의 꿈을 위한 파트너, 덕림기초개발
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:block">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-2">
                            {mainNavItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.items && item.title !== "시공실적" ? (
                                        <>
                                            <NavigationMenuTrigger className="bg-transparent text-sm font-bold text-slate-700 hover:text-primary data-[active]:text-primary data-[state=open]:text-primary transition-colors h-10 px-4">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-[400px] gap-2 p-6 md:w-[500px] md:grid-cols-2 lg:w-[650px] bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-slate-100">
                                                    {item.items.map((subItem) => {
                                                        const Icon = (businessIcons as any)[subItem.title] || ChevronRight;
                                                        return (
                                                            <ListItem
                                                                key={subItem.title}
                                                                title={subItem.title}
                                                                href={subItem.href}
                                                                className="group/item"
                                                            >
                                                                <div className="flex items-center gap-3">
                                                                    <div className="p-2 rounded-lg bg-slate-50 group-hover/item:bg-primary/10 transition-colors">
                                                                        <Icon className="w-4 h-4 text-slate-400 group-hover/item:text-primary" />
                                                                    </div>
                                                                    <span className="font-semibold text-slate-700 group-hover/item:text-primary transition-colors">
                                                                        {subItem.title}
                                                                    </span>
                                                                </div>
                                                            </ListItem>
                                                        );
                                                    })}
                                                </ul>
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <Link href={item.href} legacyBehavior passHref>
                                            <NavigationMenuLink className={cn(
                                                navigationMenuTriggerStyle(),
                                                "bg-transparent text-sm font-bold text-slate-700 hover:text-primary transition-colors h-10 px-4"
                                            )}>
                                                {item.title}
                                            </NavigationMenuLink>
                                        </Link>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="hidden lg:flex items-center gap-4">
                    <Link href="/support/contact">
                        <Button className="h-11 px-8 rounded-full font-bold bg-slate-900 hover:bg-primary text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-slate-900/10">
                            견적문의
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu */}
                <div className="lg:hidden text-black">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="hover:bg-slate-100">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
                            <SheetHeader className="mb-8 border-b pb-6">
                                <SheetTitle className="text-left flex items-center gap-2">
                                    <div className="bg-primary/10 p-2 rounded-lg">
                                        <Mountain className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xl font-black tracking-tighter text-slate-900 leading-none">
                                            DUCLIM
                                        </span>
                                        <span className="text-[10px] font-bold text-slate-500">
                                            고객의 꿈을 위한 파트너, 덕림기초개발
                                        </span>
                                    </div>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-2">
                                <Accordion type="single" collapsible className="w-full">
                                    {mainNavItems.map((item, index) => (
                                        <AccordionItem value={`item-${index}`} key={item.title} className="border-b-0">
                                            {item.items && item.title !== "시공실적" ? (
                                                <>
                                                    <AccordionTrigger className="text-lg font-bold text-slate-900 py-3 hover:no-underline hover:text-primary transition-colors">
                                                        {item.title}
                                                    </AccordionTrigger>
                                                    <AccordionContent className="flex flex-col gap-1 pl-4 pb-4">
                                                        {item.items.map((subItem) => (
                                                            <Link
                                                                key={subItem.title}
                                                                href={subItem.href}
                                                                className="text-md font-semibold text-slate-500 hover:text-primary transition-colors py-3 flex items-center justify-between group"
                                                                onClick={() => setIsOpen(false)}
                                                            >
                                                                {subItem.title}
                                                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                                            </Link>
                                                        ))}
                                                    </AccordionContent>
                                                </>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    className="flex flex-1 items-center justify-between py-4 text-lg font-bold text-slate-900 transition-all hover:text-primary"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {item.title}
                                                </Link>
                                            )}
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                                <div className="mt-8 pt-8 border-t space-y-4">
                                    <Link href="/support/contact" onClick={() => setIsOpen(false)}>
                                        <Button className="w-full h-12 rounded-xl font-bold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20">
                                            견적문의하기
                                        </Button>
                                    </Link>
                                    <div className="flex flex-col gap-3 pt-4 text-sm text-slate-500 font-medium">
                                        <div className="flex items-center gap-2">
                                            <Phone className="w-4 h-4" /> 010-0000-0000
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FileText className="w-4 h-4" /> info@deokrim.co.kr
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-all hover:bg-slate-50 focus:bg-slate-50",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-semibold leading-none">{children || title}</div>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
