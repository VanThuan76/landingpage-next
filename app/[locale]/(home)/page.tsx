'use client'

import Image from "next/image";
import { motion } from "framer-motion"
import { useRef, useState } from "react";
import { PhoneCall } from "lucide-react";

import { BackgroundLines } from "@/shared/components/ui/background-lines";
import { TextHoverEffect } from "@/shared/components/ui/text-hover-effect";
import Confetti, { ConfettiRef } from "@/shared/components/ui/confetti";

import SparklesText from "@/shared/components/ui/sparkles-text";
import Pulsating from "@/shared/components/ui/pulsating";

export default function Home() {
    const [intervalDuration, setIntervalDuration] = useState(3000);
    const index = useRef(0);

    const confettiRef = useRef<ConfettiRef>(null);

    function handleLink() {
        window.open("https://god66.win/?f=61961", "_blank");
    }

    function handleJoinTele() {
        window.open("https://t.me/god9393", "_blank");
    }

    return (
        <BackgroundLines className="relative w-full h-screen">
            <div className="absolute top-10 left-0 -translate-y-[10%] z-[99999] flex flex-col items-center justify-center w-full h-screen gap-3">
                <TextHoverEffect text="THÀNH VIÊN MỚI" height="10%" className="stroke-rose-500 fill-white" className2="stroke-rose-900" strokeWidth="1" strokeWidth2="2" />

                <motion.button
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: "easeInOut"
                    }}
                    className="inline-flex w-[60%] h-16 animate-shimmer items-center justify-center rounded-full border-none bg-[linear-gradient(110deg,#f53d3d,45%,#ff9a9a,55%,#f53d3d)] bg-[length:200%_100%] px-2 font-medium text-slate-400 transition-colors shadow-[0_4px_8px_rgba(255,215,0,0.5)] focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:ring-offset-2 focus:ring-offset-slate-50"
                    onClick={() => handleLink()}
                >
                    <TextHoverEffect text="ĐĂNG KÝ NGAY" className="text-4xl stroke-amber-700 fill-yellow-300" className2="text-4xl stroke-amber-700" height="100%" />
                </motion.button>

                <TextHoverEffect text="+ 59K" className="text-8xl stroke-white fill-red-600" className2="text-8xl stroke-red-900" strokeWidth="4" strokeWidth2="5" height="30%" />

                <Pulsating className="px-2 border-2 border-blue-400" >
                    <SparklesText>
                        <TextHoverEffect text="THƯỞNG NẠP +1500k" className="stroke-violet-300 fill-white" className2="stroke-black" strokeWidth="1" strokeWidth2="2" height="100%" />
                    </SparklesText>
                </Pulsating>

                <div className="relative p-2 mt-10 bg-red-500 rounded-lg" onClick={() => handleJoinTele()}>
                    <PhoneCall className="absolute w-10 h-10 text-white top-3 left-2" />
                    <PhoneCall className="absolute w-10 h-10 text-white animate-ping top-3 left-2" />
                    <TextHoverEffect text="HỖ TRỢ 24 / 24" height="100%" />
                    <PhoneCall className="absolute w-10 h-10 text-white top-3 right-2" />
                    <PhoneCall className="absolute w-10 h-10 text-white animate-ping top-3 right-2" />
                </div>

            </div>

            <div className="absolute top-0 left-0 w-full h-full z-2">
                <Image
                    width={500}
                    height={1280}
                    alt="gift"
                    src="/bg-gift.jpg"
                    priority={true}
                    className="object-cover object-bottom w-full h-full"
                />
            </div>
            <div className="absolute top-[40%] -left-12 w-[250px] h-[250px] z-5">
                <Image
                    width={500}
                    height={500}
                    alt="gift"
                    src="/clouds-1.png"
                    className="object-contain w-[250px] h-[250px]"
                />
            </div>

            <div className="absolute top-[40%] left-12 w-[250px] h-[250px] z-5">
                <Image
                    width={500}
                    height={500}
                    alt="gift"
                    src="/clouds-4.png"
                    className="object-contain w-[250px] h-[250px]"
                />
            </div>

            <div className="absolute top-[40%] right-10 w-[250px] h-[250px] z-5">
                <Image
                    width={250}
                    height={250}
                    alt="gift"
                    src="/clouds-2.png"
                    className="object-contain w-[250px] h-[250px]"
                />
            </div>

            <div className="absolute top-[40%] -right-10 w-[250px] h-[250px] z-5">
                <Image
                    width={250}
                    height={250}
                    alt="gift"
                    src="/clouds-3.png"
                    className="object-contain w-[250px] h-[250px]"
                />
            </div>

            <div className="absolute bottom-0 left-0 flex items-start justify-start gap-2 z-5">
                {Array.from({ length: 5 }).map((_, index) => (
                    <motion.div
                        key={index}
                        className="w-[100px] h-[100px]"
                        animate={{
                            rotate: [-10, 10, -10],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}>
                        <Image
                            width={100}
                            height={100}
                            alt="gift"
                            src="/money.png"
                            className="object-contain w-[100px] h-[100px]"
                        />
                    </motion.div>
                ))}
            </div>

            <Confetti
                ref={confettiRef}
                className="absolute top-0 left-0 z-50 size-full"
                onMouseEnter={() => {
                    confettiRef.current?.fire({});
                }}
            />
        </BackgroundLines>
    );
}
