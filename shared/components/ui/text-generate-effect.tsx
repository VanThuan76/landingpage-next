"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/shared/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5,
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration: duration ? duration : 1,
                delay: stagger(0.2),
            }
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="leading-none opacity-0"
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                                background: "linear-gradient(to bottom, white, rgba(255, 255, 0, 0.7), rgba(255, 255, 0, 0.1))",
                                WebkitBackgroundClip: "text",
                                WebkitTextStroke: "0.2px black",
                                color: "transparent",
                                textShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            {word}{" "}
                        </motion.span>

                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="text-[40px] leading-snug tracking-wide">
                {renderWords()}
            </div>
        </div>
    );
};
