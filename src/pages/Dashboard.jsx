/* eslint-disable react/no-unescaped-entities */
import { ComponentCard } from "@/components/ComponentCard";
import { Button } from "@/components/ui/button"
// import { useState } from "react";

export const Dashboard = () => {

    // const [content] = useState([]);

    const card = [{
        "image": "https://dummyimage.com/600x400/000/fff",
        "title": "Color Lush 'Revisit' (2024)",
        "link": "https://dribbble.com/pavlov",
        "creators": "Ashutosh Yadav",
        "likes": "131",
        "views": "27k",
        "platforms": "Design"
    },]

    return (
        <div className="py-4 px-5 min-h-screen">
            <Button className="text-md font-semibold float-end">
                Add new content
            </Button>
            <div className="mt-12">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                    <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
                <div className="flex items-center gap-4 mt-12">
                    {
                        card.map((i) => {
                            return (
                                <>
                                    <ComponentCard {...i} />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
