import { ComponentCard } from "./ComponentCard";

const Galleries = () => {
  const arr = [
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

  return (
    <div className="gallery-container flex items-center justify-center gap-4 flex-wrap">
      {arr.map((item) => (
        <ComponentCard
          key={item.id}
          id={item.id}
          image={item.image}
          link={item.link}
          title={item.title}
          views={item.views}
          likes={item.likes}
          creators={item.creators}
          platforms={item.platforms}
        />
      ))}
    </div>
  );
};

export default Galleries;
