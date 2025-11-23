import Image from "next/image"
import { ArrowUpRight as Arrow } from "lucide-react"

export default function Hero(){
    return(
        <>
        <div className="sticky top-0">
        <div className="absolute w-full h-screen overflow-hidden z-0">
            <Image 
            src="/hero.png"
            alt=""
            width={1920}
            height={1080}
            className=""
            />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-74 
              bg-linear-to-t from-black/40 to-transparent 
              backdrop-blur-xs">
  </div>

        <div className="flex flex-row h-screen px-28 py-12 justify-between items-end z-30">

            <div className="flex flex-col gap-4 items-start text-neutral-100 text-2xl z-30">

                <div className="font-primary text-lime-50 text-6xl ">
                    ©18-25
                </div>
                <div className="font-primary  text-9xl">
                    where japanese <br /> fashion sits.
                </div>

            </div>

            <div className="flex flex-row gap-6 items-center z-99 text-right">

                <div className="font-secondary font-light text-neutral-50 text-xl">
                    We create morden apperal inspired <br /> by the  streets of Tokyo.
                </div>
                <div className="text-neutral-50 text-xs rounded-full border border-neutral-50 p-3 hover:bg-neutral-50 hover:text-neutral-800 transition-all duration-200 cursor-pointer">
                    <Arrow />
                </div>

            </div>
        </div>
        </div>
        </>
    )
}