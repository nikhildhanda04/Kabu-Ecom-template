export interface bestSellerData {
    name: string;
    price: string;
    image: string;
    link: string;
}

const bestSellers: bestSellerData[] = [
    {
        name: "Tokyo Classics Hoodie",
        price: "$75.00",
        image: "/bestseller1.png",
        link: "/"
    },
    {
        name: "Shelter Streetwear Jacket",
        price: "$120.00",
        image: "/bestseller2.png",
        link: "/"
    },
    {
        name: "Urban Kimonos Tee",
        price: "$40.00",
        image: "/bestseller3.png",
        link: "/"
    }

]

export default bestSellers;