import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const BgCarousel = () => {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    const imageUrls = [
        "https://mir-s3-cdn-cf.behance.net/projects/404/b44c13199421009.Y3JvcCwxNDAwLDEwOTUsMCw0MjY.png",
        "https://mir-s3-cdn-cf.behance.net/projects/404/ab3241200386929.Y3JvcCwxMjAwLDkzOCwwLDIz.png",
        "https://mir-s3-cdn-cf.behance.net/projects/404/8525f7202735315.Y3JvcCw2MzM2LDQ5NTUsMCwzMjMw.jpg",
        "https://mir-s3-cdn-cf.behance.net/projects/404/a4fd7d201934491.Y3JvcCwyMjU5LDE3NjcsMTIzLDA.jpg"
    ]

    return (
        <Carousel
            plugins={[plugin.current]}
            className="max-w-screen-lg"
            opts={{
                align: "start",
                loop: true,
            }}

        >
            <CarouselContent>
                {imageUrls.map((url, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden">
                                    <img
                                        src={url}
                                        alt={`Carousel image ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default BgCarousel