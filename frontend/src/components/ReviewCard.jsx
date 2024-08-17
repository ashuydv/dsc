/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
    {
        name: "Jack",
        position: "Lead Engineer",
        tags: ["Engineering", "Tech"],
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Jill",
        position: "Product Manager",
        tags: ["Product", "Management"],
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "John",
        position: "UI/UX Designer",
        tags: ["Design", "UI/UX"],
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Jane",
        position: "Marketing Head",
        tags: ["Marketing", "Strategy"],
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Jenny",
        position: "HR Manager",
        tags: ["Human Resources", "People"],
        img: "https://avatar.vercel.sh/jenny",
    },
    {
        name: "James",
        position: "Data Scientist",
        tags: ["Data", "AI/ML"],
        img: "https://avatar.vercel.sh/james",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

// eslint-disable-next-line react/prop-types
const ReviewCard = ({ img, name, position, tags }) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl",
                // light styles
                "bg-gray-200",
                // dark styles
                "dark:bg-gray-800",
            )}
        >
            <div className="relative">
                <img
                    alt="profile"
                    className="object-cover object-center w-full h-64 rounded-t-xl"
                    src={img}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent rounded-t-xl">
                    <div className="flex flex-col text-white">
                        <figcaption className="text-lg font-medium">
                            {name}
                        </figcaption>
                        <p className="text-sm">{position}</p>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-xs bg-white text-black rounded-full px-2 py-1"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </figure>
    );
};

const MarqueeDemo = () => {
    return (
        <div className="relative flex w-full flex-col py-24 items-center justify-center overflow-hidden rounded-lg bg-background">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
};

export default MarqueeDemo;
