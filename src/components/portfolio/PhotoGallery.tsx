"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { PortfolioPhoto } from "@/constants/portfolio";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface PhotoGalleryProps {
    photos: PortfolioPhoto[];
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
    const [selectedPhoto, setSelectedPhoto] = useState<PortfolioPhoto | null>(null);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo) => (
                <motion.div
                    key={photo.id}
                    layoutId={`photo-${photo.id}`}
                    className="group relative cursor-pointer overflow-hidden rounded-xl bg-muted"
                    onClick={() => setSelectedPhoto(photo)}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="aspect-[4/3] relative">
                        <Image
                            src={photo.imageUrl}
                            alt={photo.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <span className="text-xs font-medium text-white/80 mb-2">{photo.category}</span>
                            <h3 className="text-lg font-bold text-white mb-1">{photo.title}</h3>
                            <div className="flex items-center gap-4 text-white/70 text-sm">
                                <span className="flex items-center gap-1.5">
                                    <MapPin size={14} />
                                    {photo.location}
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}

            <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
                <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                    <DialogTitle className="sr-only">이미지 상세 보기</DialogTitle>
                    <AnimatePresence>
                        {selectedPhoto && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="relative aspect-[4/3] w-full"
                            >
                                <Image
                                    src={selectedPhoto.imageUrl}
                                    alt={selectedPhoto.title}
                                    fill
                                    className="object-contain rounded-lg"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white rounded-b-lg">
                                    <h2 className="text-xl font-bold mb-2">{selectedPhoto.title}</h2>
                                    <p className="text-white/80 text-sm mb-4">{selectedPhoto.description}</p>
                                    <div className="flex items-center gap-6 text-white/60 text-sm">
                                        <span className="flex items-center gap-1.5">
                                            <MapPin size={16} />
                                            {selectedPhoto.location}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={16} />
                                            {selectedPhoto.date}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </DialogContent>
            </Dialog>
        </div>
    );
}
