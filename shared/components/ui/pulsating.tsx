"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";


interface PulsatingButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    pulseColor?: string;
    duration?: string;
}

export default function Pulsating({
    className,
    children,
    pulseColor = "#7EACB5",
    duration = "1.5s",
}: PulsatingButtonProps) {
    return (
        <div
            className={cn(
                "relative text-center cursor-pointer flex justify-center items-center rounded-lg text-white dark:text-black bg-blue-500 dark:bg-blue-500 px-4 py-2",
                className,
            )}
            style={
                {
                    "--pulse-color": pulseColor,
                    "--duration": duration,
                } as React.CSSProperties
            }
        >
            <div className="relative z-10">{children}</div>
            <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-lg top-1/2 left-1/2 size-full bg-inherit animate-pulse" />
        </div>
    );
}
