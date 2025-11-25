import { ArrowUpRight as Arrow} from "lucide-react"

export default function Cta() {
    return(
        <>
        <div className="relative bg-background flex flex-col gap-12 px-18 py-28">

            <div className="font-primary text-neutral-100 leading-40 text-[180px]">
                 We design pieces <br /> that breathe<span className="text-lime-200">.</span>
            </div>

            <div className="font-secondary flex gap-4 items-center font-light text-lg text-neutral-100 cursor-pointer">
              <div className="p-3 border border-neutral-100 rounded-full"> <Arrow className="inline "/></div> Learn more about us
            </div>

        </div>
        </>
    )
}