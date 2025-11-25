"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import instagramPosts from "./instagram-data";
import { useEffect, useState } from "react";

export default function Instagram() {
    const [scrollX, setScrollX] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const itemWidth = 400;
    const totalWidth = instagramPosts.length * itemWidth;

    useEffect(() => {
        if (isHovering) return; // Pause on hover

        const scroll = () => {
            setScrollX((prev) => {
                const next = prev + 1;
                return next >= totalWidth ? 0 : next;
            });
        };

        const animationFrameId = setInterval(scroll, 20); // Smooth continuous scroll

        return () => clearInterval(animationFrameId);
    }, [totalWidth, isHovering]);

    return(
        <>
        <div className="relative flex flex-col gap-12 bg-background px-18 pt-12 pb-28">

            <div className="font-primary text-8xl text-neutral-200 ">
                On the Feed
            </div>

            <div className="overflow-hidden" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} style={{ maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)" }}>
                <motion.div
                    className="flex gap-6"
                    animate={{ x: -scrollX }}
                    transition={{ duration: 0, type: "tween" }}
                >
                    {/* Duplicate posts for infinite loop */}
                    {[...instagramPosts, ...instagramPosts].map((post, index) => (
                        <motion.div
                            key={`${post.id}-${index}`}
                            className="relative shrink-0 border border-neutral-100 w-96 h-160 overflow-hidden group cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            {/* Image */}
                            <motion.div
                                className="w-full h-full"
                                initial={{ filter: "blur(0px)" }}
                                whileHover={{ filter: "blur(4px)" }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src={post.image}
                                    alt={post.handle}
                                    width={1920}
                                    height={1080}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            {/* Dark overlay */}
                            <motion.div
                                className="absolute inset-0 bg-black/50"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Handle link */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link
                                    href={post.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-primary text-2xl text-neutral-100 hover:text-white transition-colors"
                                >
                                    {post.handle}
                                </Link>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
        </>
    )
}
