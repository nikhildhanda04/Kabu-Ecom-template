import Image from "next/image"
import { CornerDownRight as Corner} from "lucide-react";

export default function Vision(){
    return(
        <>
        <div className="relative flex flex-row gap-72 px-36 py-24 bg-background">

            <div className="flex flex-col gap-4">
            <div className="text-lime-100">
                <Corner size="50"/>
            </div>
            <div className="font-secondary font-medium tracking-tighter text-8xl text-neutral-100">
                Art of japanese streetwear
            </div>
            
            </div>
           

            <div className="flex flex-col gap-12">

                <div className="font-secondary text-xl text-neutral-500">
                    We believe that fashion is more than just clothing; it&aposs a form of self-expression and a way to connect with others. Our vision is to create a brand that embodies the spirit of Japanese streetwear, blending traditional craftsmanship with modern design to create unique and stylish pieces that resonate with our audience.
                </div>
                <div className="w-full h-auto">
                    <Image 
                    src=""
                    alt=""
                    width={1920}
                    height={1080}
                    className=""
                    />
                </div>

            </div>

        </div>
        </>
    )
}