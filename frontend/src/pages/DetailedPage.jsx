/* eslint-disable react/prop-types */
import { Badge } from "@/components/ui/badge";
import { useParams } from "react-router-dom";

export function DetailPage() {
    const { id } = useParams();

    // Convert id to a number
    const itemId = id ? Number(id) : null;
    const data = [
        {
            id: 1,
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/b44c13199421009.Y3JvcCwxNDAwLDEwOTUsMCw0MjY.png",
            link: "https://www.behance.net/gallery/199421009/AGES?tracking_source=search_projects|fine+art&l=0",
            title: "AGES",
            views: "123",
            likes: "226",
            creators: "",
            platforms: "Behance",
        },
        {
            id: 2,
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/ab3241200386929.Y3JvcCwxMjAwLDkzOCwwLDIz.png",
            link: "https://www.behance.net/gallery/200386929/This-is-a-dream-state?tracking_source=search_projects|fine+art&l=1",
            title: "This is a dream state",
            views: "249",
            likes: "1.5k",
            creators: "Katarina Galić",
            platforms: "Behance",
        },
        {
            id: 3,
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/8525f7202735315.Y3JvcCw2MzM2LDQ5NTUsMCwzMjMw.jpg",
            link: "https://www.behance.net/gallery/202735315/Portrait-Fine-Art-Fashion-Retouch?tracking_source=search_projects|fine+art&l=2",
            title: "Portrait / Fine Art / Fashion / Retouch",
            views: "171",
            likes: "2k",
            creators: "Maryia Buhai",
            platforms: "Behance",
        },
        {
            id: 4,
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/a4fd7d201934491.Y3JvcCwyMjU5LDE3NjcsMTIzLDA.jpg",
            link: "https://www.behance.net/gallery/201934491/DOYLE?tracking_source=search_projects|fine+art&l=3",
            title: "DOYLE",
            views: "209",
            likes: "1.4k",
            creators: "",
            platforms: "Behance",
        },
        {
            id: 5,
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/80216d202083801.Y3JvcCwxMjc4LDEwMDAsMTEwLDA.jpg",
            link: "https://www.behance.net/gallery/202083801/Zurich-Traces-of-Light?tracking_source=search_projects|fine+art&l=4",
            title: "Zurich - Traces of Light",
            views: "198",
            likes: "1.4k",
            creators: "Lothar Groene",
            platforms: "Behance",
        },
        {
            id: 6,
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/00cc20196973551.Y3JvcCw3OTIsNjIwLDY0LDk.png",
            link: "https://www.behance.net/gallery/196973551/Fine-Liner-Brushes-Patterns-Procreate?tracking_source=search_projects|fine+art&l=5",
            title: "Fine Liner Brushes & Patterns - Procreate",
            views: "269",
            likes: "2.1k",
            creators: "Patricia Roberts",
            platforms: "Behance",
        },
        {
            id: 7,
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/bb6ceb202171987.Y3JvcCw0NzI5LDM2OTgsMCw5NzE.jpg",
            link: "https://www.behance.net/gallery/202171987/In-light-setting?tracking_source=search_projects|fine+art&l=6",
            title: "In light setting.",
            views: "52",
            likes: "108",
            creators: "Joachim Weitz",
            platforms: "Behance",
        },
        {
            id: 8,
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/0a81be201726307.Y3JvcCwzNjAwLDI4MTUsMCw0Mjc.jpg",
            link: "https://www.behance.net/gallery/201726307/Midsummer-crown?tracking_source=search_projects|fine+art&l=7",
            title: "Midsummer crown",
            views: "158",
            likes: "530",
            creators: "",
            platforms: "Behance",
        },
        {
            id: 9,
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/cc6b7f203302657.Y3JvcCwzMDA0LDIzNDksMCwzODY.png",
            link: "https://www.behance.net/gallery/203302657/Have-faith-in-myself?tracking_source=search_projects|fine+art&l=8",
            title: "Have faith in myself",
            views: "73",
            likes: "191",
            creators: "Katarina Galić",
            platforms: "Behance",
        },
        {
            id: 10,
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/a34716201440213.Y3JvcCwxMTgzLDkyNiwyMTMsMA.jpg",
            link: "https://www.behance.net/gallery/201440213/Merging-Worlds?tracking_source=search_projects|fine+art&l=9",
            title: "Merging Worlds",
            views: "254",
            likes: "5.6k",
            creators: "Navid Baraty",
            platforms: "Behance",
        },
        {
            id: 11,
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/17dad5203102321.Y3JvcCwzNzYwLDI5NDEsNzM1LDA.jpg",
            link: "https://www.behance.net/gallery/203102321/The-Noise-and-Solitude-of-the-City?tracking_source=search_projects|fine+art&l=10",
            title: "The Noise and Solitude of the City",
            views: "36",
            likes: "127",
            creators: "Taka Hiro",
            platforms: "Behance",
        },
        {
            id: 12,
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/fa593d154794757.Y3JvcCwyMzUxLDE4MzksMzE0LDk4.jpg",
            link: "https://www.behance.net/gallery/154794757/Jarrones?tracking_source=search_projects|fine+art&l=11",
            title: "Jarrones",
            views: "984",
            likes: "8.4k",
            creators: "",
            platforms: "Behance",
        },
        {
            id: 13,
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/81e1eb201564889.Y3JvcCwxNzQ2LDEzNjYsMTUxLDA.jpg",
            link: "https://www.behance.net/gallery/201564889/The-Tree?tracking_source=search_projects|fine+art&l=12",
            title: "The Tree.",
            views: "61",
            likes: "214",
            creators: "Renato Pozzoli",
            platforms: "Behance",
        },
        {
            id: 14,
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/2ac253202632423.Y3JvcCwxNDAwLDEwOTUsMCwyMA.jpg",
            link: "https://www.behance.net/gallery/202632423/Capital?tracking_source=search_projects|fine+art&l=13",
            title: "Capital",
            views: "14",
            likes: "50",
            creators: "Serdar Şencan",
            platforms: "Behance",
        },
        {
            id: 15,
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/f5c0a1202819919.Y3JvcCw5ODYsNzcxLDEwNywyNTM.jpg",
            link: "https://www.behance.net/gallery/202819919/My-Art?tracking_source=search_projects|fine+art&l=14",
            title: "My Art",
            views: "27",
            likes: "96",
            creators: "Liza Kara",
            platforms: "Behance",
        },
        {
            id: 16,
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/fd65fd200581745.Y3JvcCwzMzgxLDIwMTMsMTE0LDA.jpg",
            link: "https://www.behance.net/gallery/200581745/Reminisce?tracking_source=search_projects|fine+art&l=15",
            title: "Reminisce",
            views: "87",
            likes: "340",
            creators: "",
            platforms: "Behance",
        },
        {
            id: 17,
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/00bfe8203015945.Y3JvcCw1MDQxLDE2NzgsMTMyLDA.jpg",
            link: "https://www.behance.net/gallery/203015945/The-Lost-Worlds?tracking_source=search_projects|fine+art&l=16",
            title: "The Lost Worlds",
            views: "119",
            likes: "331",
            creators: "Tom Connolly",
            platforms: "Behance",
        },
        {
            id: 18,
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/1b69e6202961109.Y3JvcCw1MDAwLDI2NjksNjgsMzE.jpg",
            link: "https://www.behance.net/gallery/202961109/Transcendence?tracking_source=search_projects|fine+art&l=17",
            title: "Transcendence",
            views: "159",
            likes: "431",
            creators: "Brian Lee",
            platforms: "Behance",
        },
    ];

    const item = itemId ? data.find((item) => item.id === itemId) : null;

    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div className="p-6 pb-12">
            <div className="mb-6">
                <img
                    src={item.image}
                    alt={item.title || "Project Image"}
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
                {item.platforms && (
                    <Badge variant="outline">{item.platforms}</Badge>
                )}
            </div>
            <h1 className="text-3xl capitalize font-bold mb-4">{item.title}</h1>

            {item.description &&
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    {item.description}
                </p>
            }

            <div className="flex items-center justify-between text-gray-700 dark:text-gray-300">
                {item.creators && <div>Created by: {item.creators}</div>}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0.5 0.5 16 16"
                            className="Appreciations-icon-Z4i ProjectCover-icon-QsA ProjectCover-appreciations-hIS"
                        >
                            <path fill="none" d="M.5.5h16v16H.5z"></path>
                            <path d="M.5 7.5h3v8h-3zM7.207 15.207c.193.19.425.29.677.293H12c.256 0 .512-.098.707-.293l2.5-2.5c.19-.19.288-.457.293-.707V8.5c0-.553-.445-1-1-1h-5L11 5s.5-.792.5-1.5v-1c0-.553-.447-1-1-1l-1 2-4 4v6l1.707 1.707z"></path>
                        </svg>
                        <span>{item.likes || 0}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            className="ProjectCover-icon-QsA ProjectCover-views-Euf"
                        >
                            <path d="M8.5 3.5c-5 0-8 5-8 5s3 5 8 5 8-5 8-5-3-5-8-5zm0 7c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z"></path>
                        </svg>
                        <span>{item.views || 0}</span>
                    </div>
                </div>
            </div>
            <p className="mt-4 font-semibold">
                View more on <a href={item.link} target="_blank" rel="noopener noreferrer">{item.platforms}</a>
            </p>
            {item.videoUrl && (
                <div className="mt-6">
                    <a href={item.videoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                        Watch Demo
                    </a>
                </div>
            )}
        </div>
    );
}
