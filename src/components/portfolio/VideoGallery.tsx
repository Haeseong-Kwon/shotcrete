"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, MapPin, Calendar, Youtube } from "lucide-react";
import { PortfolioVideo } from "@/constants/portfolio";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface VideoGalleryProps {
    videos: PortfolioVideo[];
}

export function VideoGallery({ videos }: VideoGalleryProps) {
    const [selectedVideo, setSelectedVideo] = useState<PortfolioVideo | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
                <Card
                    key={video.id}
                    className="group overflow-hidden cursor-pointer border-none shadow-md hover:shadow-xl transition-all duration-300"
                    onClick={() => setSelectedVideo(video)}
                >
                    <div className="aspect-video relative overflow-hidden bg-slate-900">
                        {video.isLocal ? (
                            <video
                                src={`${video.thumbnailUrl}#t=0.1`}
                                preload="metadata"
                                muted
                                playsInline
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <Image
                                src={video.thumbnailUrl}
                                alt={video.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        )}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground shadow-lg"
                            >
                                <Play size={32} fill="currentColor" className="ml-1" />
                            </motion.div>
                        </div>
                    </div>
                    <CardHeader className="p-6">
                        <div className="flex items-center gap-2 mb-2 text-primary">
                            <Youtube size={16} />
                            <span className="text-xs font-semibold uppercase tracking-wider">Video Case Study</span>
                        </div>
                        <CardTitle className="text-xl leading-snug group-hover:text-primary transition-colors">
                            {video.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-6 mt-auto">
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                            {video.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                            <span className="flex items-center gap-1.5">
                                <MapPin size={14} />
                                {video.location}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Calendar size={14} />
                                {video.date}
                            </span>
                        </div>
                    </CardContent>
                </Card>
            ))}

            <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
                <DialogContent className="max-w-5xl w-[95dvw] p-0 bg-black border-none overflow-hidden sm:rounded-2xl">
                    <DialogTitle className="sr-only">{selectedVideo?.title}</DialogTitle>
                    {selectedVideo && (
                        <div className="relative w-full h-full min-h-[50vh] max-h-[85vh] flex items-center justify-center overflow-hidden">
                            {selectedVideo.isLocal ? (
                                <>
                                    {/* Blurred Background for PC - fills the empty space for portrait videos */}
                                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none hidden md:block">
                                        <video
                                            src={selectedVideo.videoUrl}
                                            muted
                                            loop
                                            autoPlay
                                            className="w-full h-full object-cover blur-2xl opacity-40 scale-110"
                                        />
                                    </div>

                                    {/* Main Video Layer */}
                                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                                        <video
                                            src={selectedVideo.videoUrl}
                                            controls
                                            autoPlay
                                            playsInline
                                            className="max-w-full max-h-[85vh] w-auto h-auto object-contain shadow-2xl"
                                        />
                                    </div>
                                </>
                            ) : (
                                <div className="w-full aspect-video">
                                    <iframe
                                        src={selectedVideo.videoUrl}
                                        title={selectedVideo.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="w-full h-full"
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
