'use client'

import Image from "next/image";
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";

import { BackgroundLines } from "@/shared/components/ui/background-lines";
import { TextHoverEffect } from "@/shared/components/ui/text-hover-effect";
import Confetti, { ConfettiRef } from "@/shared/components/ui/confetti";

import { BorderBeam } from "@/shared/components/ui/border-bem";
import { BackgroundBeamsWithCollision } from "@/shared/components/ui/background-beams-with-collision";
import { SparklesCore } from "@/shared/components/ui/sparkles";
import { TextGenerateEffect } from "@/shared/components/ui/text-generate-effect";
import { formattedFakeData } from "@/shared/constants/fake";

export default function Home() {
    const confettiRef = useRef<ConfettiRef>(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const showNotification = () => {
            setVisible(true);
            setTimeout(() => {
                setVisible(false);
                setCurrentIndex((prev) => (prev + 1) % formattedFakeData.length);
            }, 5000);
        };

        showNotification();

        const interval = setInterval(() => {
            showNotification();
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    function handleLink() {
        window.open("https://god66.club/?f=66450", "_blank");
    }

    function handleLinkTiktok() {
        window.open("https://www.tiktok.com/business-suite/messages?from=homepage&lang=vi-VN", "_blank");
    }

    function handleLinkTele() {
        window.open("https://t.me/thaihoangbro", "_blank");
    }

    const scaleAnimation = {
        initial: { scale: 1 },
        animate: {
            scale: [1, 1.1, 1],
            transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
            },
        },
    };
    return (
        <BackgroundBeamsWithCollision className="relative w-full h-screen">
            <BackgroundLines className="relative w-full h-screen">
                <div className="absolute top-10 left-0 -translate-y-[10%] z-[99999] flex flex-col items-center justify-center w-full h-screen gap-3">
                    {/* <TextHoverEffect text="THÀNH VIÊN MỚI" height="10%" className="stroke-rose-500 fill-white" className2="stroke-rose-900" strokeWidth="1" strokeWidth2="2" /> */}
                    <TextGenerateEffect words="THÀNH VIÊN MỚI" className="text-white" />

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
                        <TextHoverEffect text="ĐĂNG KÝ NHẬN NGAY" className="text-3xl stroke-amber-700 fill-yellow-300" className2="text-3xl stroke-amber-700" height="100%" />
                    </motion.button>

                    <div className="relative flex items-center justify-center w-full min-h-[300px]">
                        <TextHoverEffect text="+ 59K" className="text-8xl stroke-÷white fill-red-600" className2="text-8xl stroke-red-900" strokeWidth="4" strokeWidth2="5" height="100%" />

                        <div className="absolute inset-x-20 bottom-5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div className="absolute w-3/4 h-px bottom-5 inset-x-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                        <div className="absolute inset-x-60 bottom-5 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div className="absolute w-1/4 h-px bottom-5 inset-x-60 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={1200}
                            className="absolute top-0 w-full h-full"
                            particleColor="#FFFFFF"
                        />

                        <motion.div
                            className="absolute bottom-0 w-[800px] h-full z-5"
                            variants={scaleAnimation}
                            initial="initial"
                            animate="animate"
                        >
                            <Image
                                width={2000}
                                height={500}
                                alt="gift"
                                src="/oscar_reward.png"
                                className="object-cover object-center w-[800px] h-full"
                            />
                        </motion.div>

                        <div className="absolute bottom-0 flex items-start justify-start gap-1 -translate-x-1/2 left-1/2 z-5">
                            {Array.from({ length: 2 }).map((_, index) => (
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

                        <div className="absolute flex items-center justify-center w-full gap-5 p-2 rounded-lg -top-[15px]">
                            <motion.div
                                className="relative w-[75px] h-[75px] overflow-hidden rounded-full"
                                onClick={() => handleLinkTiktok()}
                                animate={{ rotate: 360 }}
                                transition={{
                                    repeat: Infinity,
                                    ease: "linear",
                                    duration: 5,
                                }}
                            >
                                <Image
                                    width={100}
                                    height={100}
                                    alt="tiktok"
                                    src="/tiktok.png"
                                    priority={true}
                                    className="object-contain object-center w-full h-full"
                                />
                                <BorderBeam size={250} duration={12} delay={9} />
                            </motion.div>

                            <motion.div
                                className="abs w-[65px] h-[65px] overflow-hidden rounded-full"
                                animate={{ rotate: -360 }}
                                transition={{
                                    repeat: Infinity,
                                    ease: "linear",
                                    duration: 5,
                                }}
                                onClick={() => handleLinkTele()}>
                                <Image
                                    width={100}
                                    height={100}
                                    alt="telegram"
                                    src="/telegram.png"
                                    priority={true}
                                    className="object-contain object-center w-full h-full"
                                />
                                <BorderBeam size={250} duration={12} delay={9} />
                            </motion.div>
                        </div>
                    </div>

                    <div className="w-full h-[100px]"></div>
                </div>

                <div className="absolute top-0 left-0 w-full h-full z-2">
                    <Image
                        width={500}
                        height={1280}
                        alt="gift"
                        src="/bg-gift-new.jpg"
                        priority={true}
                        className="object-cover object-bottom w-full h-full"
                    />
                </div>

                <div className="absolute top-[35%] -left-24 w-[250px] h-[250px] z-50">
                    <Image
                        width={500}
                        height={500}
                        alt="gift"
                        src="/wave-3.png"
                        className="object-contain w-[250px] h-[250px]"
                    />
                </div>
                <div className="absolute top-[40%] -left-12 w-[250px] h-[250px] z-50">
                    <Image
                        width={500}
                        height={500}
                        alt="gift"
                        src="/wave-1.png"
                        className="object-contain w-[250px] h-[250px]"
                    />
                </div>
                <div className="absolute top-[35%] left-12 w-[250px] h-[250px] z-5">
                    <Image
                        width={500}
                        height={500}
                        alt="gift"
                        src="/wave-4.png"
                        className="object-contain w-[250px] h-[250px]"
                    />
                </div>
                <div className="absolute top-[39%] right-12 w-[250px] h-[250px] z-5">
                    <Image
                        width={250}
                        height={250}
                        alt="gift"
                        src="/wave-6.png"
                        className="object-contain w-[250px] h-[250px]"
                    />
                </div>
                <div className="absolute top-[40%] -right-12 w-[250px] h-[250px] z-5">
                    <Image
                        width={250}
                        height={250}
                        alt="gift"
                        src="/wave-2.png"
                        className="object-contain w-[250px] h-[250px]"
                    />
                </div>
                <div className="absolute top-[42%] -right-24 w-[250px] h-[250px] z-5">
                    <Image
                        width={250}
                        height={250}
                        alt="gift"
                        src="/wave-5.png"
                        className="object-contain w-[250px] h-[250px]"
                    />
                </div>

                <motion.div
                    className="absolute bottom-0 -left-10 w-[300px] h-[300px] z-[10000000000]"
                    variants={scaleAnimation}
                    initial="initial"
                    animate="animate"
                >
                    <Image
                        width={2000}
                        height={1000}
                        alt="gift"
                        src="/woman.png"
                        className="object-cover object-center w-full h-full"
                    />
                </motion.div>

                <motion.div
                    className="absolute bottom-0 right-0 z-10 w-[200px] h-[200px]"
                    variants={scaleAnimation}
                    initial="initial"
                    animate="animate"
                >
                    <Image
                        width={2000}
                        height={1000}
                        alt="gift"
                        src="/gift-another.png"
                        className="object-cover object-center w-full h-full"
                    />
                </motion.div>

                <div className="absolute bottom-0 right-2 z-[10000000000000000000] w-[200px] min-h-[100px]">
                    {visible && (
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, translateY: 50 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            exit={{ opacity: 0, translateY: -50 }}
                            transition={{ duration: 2 }}
                            className="flex items-center justify-between w-full h-[50px] gap-3 overflow-hidden rounded-full shadow-md bg-white/90"
                        >
                            <Image
                                width={50}
                                height={50}
                                alt="avatar"
                                src={formattedFakeData[currentIndex].image}
                                className="rounded-full w-[50px] h-full"
                            />
                            <div className="flex flex-col items-start justify-start w-full gap-1 py-1">
                                <p className="text-[10px] font-bold">{formattedFakeData[currentIndex].name}</p>
                                <div className="flex flex-col justify-start items-start text-[9px] font-thin">
                                    <span>Chúc mừng bạn nhận được 59K</span>
                                    <span>{formattedFakeData[currentIndex].mins} phút trước</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>

                <Confetti
                    ref={confettiRef}
                    className="absolute top-0 left-0 z-50 size-full"
                    onMouseEnter={() => {
                        confettiRef.current?.fire({});
                    }}
                />
            </BackgroundLines>
        </BackgroundBeamsWithCollision>
    );
}
