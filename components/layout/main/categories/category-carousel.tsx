import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import CategoryCard from "./category-card";
import { Carrot } from "lucide-react";
export default function CategoryCarousel() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-[80vw]"
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <CategoryCard
                                icon={Carrot}
                                title="Vegetais"
                                description="Legumes, verduras e frutas frescas"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}