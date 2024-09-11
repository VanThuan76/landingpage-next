"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/shared/lib/utils";

export const TextHoverEffect = ({
    text,
    duration,
    className,
    className2,
    strokeWidth2,
    strokeWidth = "0.6",
    height
}: {
    text: string;
    duration?: number;
    className?: string;
    className2?: string;
    strokeWidth2?: string;
    strokeWidth?: string;
    height?: string;
}) => {
    const svgRef = useRef<SVGSVGElement>(null);

    return (
        <svg
            ref={svgRef}
            width="100%"
            height={height}
            viewBox="0 0 300 50"
            xmlns="http://www.w3.org/2000/svg"
            className="flex items-center justify-center select-none"
        >
            <text
                x="50%"
                y="52%"
                textAnchor="middle"
                alignmentBaseline="central"
                strokeWidth={strokeWidth2}
                letterSpacing="-0.05em"
                style={{ transform: "scaleY(1.5)", transformOrigin: "center" }}
                className={cn("font-[roboto] font-bold stroke-rose-400 dark:stroke-rose-800 fill-white text-3xl", className2)}
            >
                {text}
            </text>
            <motion.text
                x="50%"
                y="50%"
                textAnchor="middle"
                alignmentBaseline="central"
                strokeWidth={strokeWidth}
                letterSpacing="-0.05em"
                style={{ transform: "scaleY(1.5)", transformOrigin: "center" }}
                className={cn("font-[roboto] font-bold fill-white text-3xl stroke-rose-400 dark:stroke-rose-800", className)}
                initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
                animate={{
                    strokeDashoffset: 0,
                    strokeDasharray: 1000,
                }}
                transition={{
                    duration: 4,
                    ease: "easeInOut",
                }}
            >
                {text}
            </motion.text>
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                alignmentBaseline="central"
                stroke="url(#textGradient)"
                strokeWidth={strokeWidth}
                letterSpacing="-0.05em"
                mask="url(#textMask)"
                style={{ transform: "scaleY(1.5)", transformOrigin: "center" }}
                className={cn("font-[roboto] font-bold fill-white text-3xl", className)}
            >
                {text}
            </text>
        </svg>
    );
};
