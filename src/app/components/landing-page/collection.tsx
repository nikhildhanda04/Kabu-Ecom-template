import collections from "./collection-data";
import { ArrowUpRight as Arrow  } from "lucide-react"

export default function Collection(){
    return(
        <>
        <div className="relative py-32 bg-background px-48 ">

            <div className="absolute -left-10 top-1/2 -translate-y-1/2 pointer-events-none">
                <div className="uppercase font-primary text-[180px] text-neutral-600/40 -rotate-90 leading-none">
                    Collections
                </div>
            </div>

            {/* titles */}

            <div className="max-w-7xl mx-auto flex flex-col mt-0 gap-9 pl-44">

                <div className="flex flex-row gap-10 justify-between w-full items-start">

                    <div className="font-primary uppercase text-7xl text-lime-100">
                        Explore our collections
                    </div>
                    
                    <div className="text-right font-secondary font-normal text-base text-neutral-400">
                        Choose from our -- wide range of <br /> japanese streetwear collections that suit your style.
                    </div>
                </div> 

                {/* collection maps: 4 stacked horizontal rows */}

                <div className="flex flex-col">
                    {collections.slice(0, 4).map((collection) => (
                        <div
                            key={collection.link ?? collection.title}
                            className="group relative border-b border-neutral-500 w-full h-32 overflow-hidden"
                        >
                            <div
                                className="absolute inset-0 bg-center  bg-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                style={{ backgroundImage: collection.image ? `url(${collection.image})` : "none" }}
                                aria-hidden
                            />
                            <div className="absolute inset-0 bg-black/35  pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            {/* content */}
                            <div className="relative z-10 flex items-center justify-between h-full px-6">
                                <div className="flex flex-row items-center gap-2">
                                    <div className="font-secondary text-3xl font-medium text-lime-100">{collection.title}</div>
                                    <div className="text-sm text-neutral-400 mt-1">{collection.desc1}</div>
                                </div>

                                <div className="text-right text-xs opacity-0 group-hover:opacity-100 text-neutral-300 max-w-md transiition-all duration-300 ease-in">
                                    {collection.desc2}
                                </div>
                                <a 
                                href={collection.link}
                                className="text-neutral-300 ml-4 rounded-full border border-neutral-200 p-3 transiition-all duration-300 ease-in">
                                    <Arrow />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        
        </div>
        </>
    )
}