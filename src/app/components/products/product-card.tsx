import { Card, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import { ArrowUpRight as Arrow } from "lucide-react";

interface ProductCardProps {
    name: string;
    price: string;
    image: string;
    link: string;
}

export default function ProductCard({ name, price, image, link }: ProductCardProps){
    return(
        <>
        <Card className="bg-transparent  border-none">
            <CardHeader className="w-52 h-52">
                <Image 
                src={image}
                alt={name}
                width={1920}
                height={1080}
                className=""
                />
            </CardHeader>
            <CardFooter className="flex flex-row w-full justify-between">
                <div className="flex flex-col gap-2">
                    <div className="font-secondary text-white text-base">
                        {name}
                    </div>
                    <div className="font-secondary text-neutral-200 text-sm">
                        Starts at ${price}
                    </div>
                </div>
                <a 
                href={link}
                className="border text-neutral-500 hover:white border-neutral-300 rounded-full p-3 hover:border-white transition-all duration-300 cursor-pointer">
                    <Arrow className=""/>
                </a>
            </CardFooter>
        </Card>
        </>
    )
}