import bestSellers from "./best-seller-data"
import ProductCard from "../products/product-card"

export default function BestSeller(){
    return(
        <>
        <div className="flex sticky px-18 py-32 gap-32 overflow-hidden justify-between items-center bg-black">

            <div className="flex flex-col gap-8">

                <div>
                <div className="font-primary tracking-tight text-8xl text-neutral-50">
                    Pieces that speak softly.
                </div>
                <div className="font-secondary tracking-tight text-lg text-neutral-500">
                    Explore a curated selection of modern Italian furniture — designed to balance form, comfort, and emotion.
                </div>
                </div>

                <div className="font-secondary tracking-tight font-light text-lg text-neutral-500 hover:text-white tranistion-all duration-200 ease-in cursor-pointer border-b w-fit border-neutral-500 hover:border-lime-100">
                    Discover the Goodies
                </div>
                

            </div>

            <div className="flex gap-24">
                {bestSellers.map((item) => (
                    <ProductCard 
                    key={item.name}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    link={item.link}
                    />
                ))}
                
            </div>

        </div>
        </>
    )
}