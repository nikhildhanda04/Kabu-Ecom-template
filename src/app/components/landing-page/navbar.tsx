import { Handbag as Bag, Search } from "lucide-react";

export default function Navbar(){
    return(
        <>
        <div className="flex flex-row fixed bg-black/10 z-30 mask-b-from-40% w-full justify-between items-center px-8 py-6">

            {/* logo */}
            <div className="font-primary text-5xl uppercase font-medium text-neutral-100">
                Kabu<span className="text-xl">®</span>
            </div>

            {/* nav items */}
            <div className="flex flex-row gap-48 uppercase items-center font-secondary font-light text-neutral-300 text-sm">

                <div className="hover:text-neutral-100 cursor-pointer transition-all duration-200">
                    shop
                </div>
                <div className="hover:text-neutral-100 cursor-pointer transition-all duration-200">
                    about
                </div>
                <div className="hover:text-neutral-100 cursor-pointer transition-all duration-200">
                    contact
                </div>

            </div>


            <div className="flex flex-row gap-6">

                <div className="text-neutral-100">
                    <Search />
                </div>
                <div className="text-neutral-100">
                    <Bag />
                </div>

            </div>

        </div>
        </>
    )
}