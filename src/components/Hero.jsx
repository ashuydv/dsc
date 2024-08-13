import { useState } from "react";
import { Button } from "@/components/ui/button";
import RetroGrid from "@/components/magicui/retro-grid";
import { Input } from "./ui/input";
import { toast } from "sonner";

const Hero = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError("");

        // Simple email validation
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email address.");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setEmail("");
            toast.success("You are successfully waitlisted!");
        } catch (e) {
            console.error("Error adding to waitlist:", e);
            setError("An error occurred. Please try again.");
            toast.error("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="text-black body-font min-h-[50vh]">
            <div className="container mx-auto flex px-5 sm:py-40 py-20 items-center justify-center flex-col">
                <RetroGrid />
                <div className="text-center sm:w-3/4 w-full">
                    <h1 className="title-font sm:text-[88px] text-[32px] sm:leading-[90px] leading-[40px] mb-4 font-bold text-black">
                        Digital Signage Centre
                        <br />
                        <span className="text-[#0057ff]">Where Innovation</span>
                        <br />
                        <span>Meets Creativity</span>
                    </h1>
                    <p className="sm:text-[22px] text-[20px] mt-[36px] mb-[54px] leading-relaxed">
                        A comprehensive platform to help hirers and creators navigate the creative world from discovering inspiration, to connecting with one another
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center">
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
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Hero;