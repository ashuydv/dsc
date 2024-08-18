/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import { Button } from "@/components/ui/button";

import MarqueeDemo from "./ReviewCard";
import confetti from "canvas-confetti";


const Hero = () => {
    const handleConfetti = () => {
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = window.setInterval(() => {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            });
        }, 250);
    }

    return (
        <div className="min-h-screen">
            <section className="text-black body-font relative z-10">
                <div className="container mx-auto flex px-5 sm:py-40 py-20 items-center justify-center flex-col">
                    {/* <RetroGrid /> */}
                    <div className="text-center w-full md::w-full lg:w-full">
                        <h1 className="title-font text-[24px] ubuntu-regular md:text-[40px] lg:text-[100px] leading-[40px] md:leading-[75px] lg:leading-[110px] mb-4 font-bold text-black">
                            Digital Signage Centre
                            <br />
                            <span className="text-[#0057ff]">Where Innovation</span>
                            <br />
                            <span className="relative inline-block">
                                <span className="relative z-20 text-black">Meets Creativity</span>
                                <span
                                    className="absolute inset-x-0 bottom-0 rounded-sm h-6 z-10"
                                    style={{ background: "linear-gradient(123deg, rgb(255, 129, 32), rgb(71, 202, 72))" }}
                                ></span>
                            </span>

                        </h1>
                        <p className="text-[18px] md:text-[22px] lg:text-[24px] max-w-screen-md mx-auto mt-[36px] mb-[54px] leading-normal">
                            Discover millions of stunning digital signage designs from top-rated designers worldwide. Show case your creativity, get inspired, and create your own masterpiece!"
                        </p>
                        {/* <form onSubmit={handleSubmit} className="flex flex-col items-center">
                            <div className="flex justify-center gap-4 mt-[20px] sm:w-[500px] mx-auto z-50">
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    className="z-50"
                                    placeholder="Email"
                                    disabled={isLoading}
                                />
                                <Button type="submit" className="z-50" disabled={isLoading}>
                                    {isLoading ? "Joining..." : "Join Waitlist"}
                                </Button>
                            </div>
                            {error && (
                                <p className="text-red-500 mt-4">{error}</p>
                            )}
                        </form> */}

                        <Button className="text-lg" onClick={handleConfetti}>Get Started</Button>
                    </div>

                    <MarqueeDemo />
                </div>
            </section>
        </div>
    );
};

export default Hero;