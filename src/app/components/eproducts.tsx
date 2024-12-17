import Image from "next/image";
import { FaRegEye, FaRegHeart, FaRegStar } from "react-icons/fa";

const products = [
    {
        title: "HAVIT HV-G92 Gamepad",
        price: "$120",
        oldPrice: "$160",
        image: "/os.png",
        height: "10px",
        rating: 5,
        reviews: 88,
    },
    {
        title: "AK-900 Wired Keyboard",
        price: "$960",
        oldPrice: "$1160",
        image: "/ipad.png",
        rating: 4,
        reviews: 75,
        discount: 35,
    },
    {
        title: "IPS LCD Gaming Monitor",
        price: "$370",
        oldPrice: "$400",
        image: "/computer.png",
        rating: 5,
        reviews: 99,
        discount: 30,
    },
    {
        title: "S-Series Comfort Chair",
        price: "$375",
        oldPrice: "$400",
        image: "/chairr.png",
        rating: 4.5,
        reviews: 99,
        discount: 40,
    },
    {
        title: "IPS LCD Gaming Monitor",
        price: "$370",
        oldPrice: "$400",
        image: "/computer.png",
        rating: 5,
        reviews: 99,
        discount: 30,
    },
    {
        title: "IPS LCD Gaming Monitor",
        price: "$370",
        oldPrice: "$400",
        image: "/computer.png",
        rating: 5,
        reviews: 99,
        discount: 30,
    },
    {
        title: "IPS LCD Gaming Monitor",
        price: "$370",
        oldPrice: "$400",
        image: "/computer.png",
        rating: 5,
        reviews: 99,
        discount: 30,
    },
    {
        title: "IPS LCD Gaming Monitor",
        price: "$370",
        oldPrice: "$400",
        image: "/computer.png",
        rating: 5,
        reviews: 99,
        discount: 30,
    },
];

const ProductBox = ({ product }: { product: any }) => (
    <div className="relative">
        {product.discount && (
            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-sm z-10">
                -{product.discount}%
            </div>
        )}

        <div className="group shadow-md bg-neutral-100 w-full h-[200px] flex justify-center items-center relative cursor-pointer">
            <Image src={product.image} width={120} height={100} alt={product.title} className="object-contain" />
            <div className="absolute top-2 right-2 flex flex-col items-center space-y-2">
                <FaRegHeart className="text-xl text-black rounded-full p-1 bg-white" />
                <FaRegEye className="text-xl text-black rounded-full p-1 bg-white" />
            </div>
            <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 text-xs md:text-sm rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add to Cart
            </button>
        </div>
        <h1 className="font-bold font-sans pt-2 text-xs sm:text-sm md:text-base truncate">{product.title}</h1>
        <div className="flex items-center space-x-2 text-sm md:text-base">
            <span className="text-red-500 font-bold">{product.price}</span>
            {product.oldPrice && (
                <span className="text-gray-400 font-bold line-through">{product.oldPrice}</span>
            )}
        </div>
        <div className="flex items-center space-x-1 text-yellow-400 text-xs md:text-md pt-1">
            {[...Array(5)].map((_, index) => (
                index < product.rating ? (
                    <FaRegStar key={index} />
                ) : (
                    <FaRegStar key={index} className="text-gray-300" />
                )
            ))}
            <span className="text-gray-400 text-xs md:text-sm ml-1">{product.reviews} reviews</span>
        </div>
    </div>
);

const Eproducts = () => {
    return (
        <main className="px-4">
            <div className="w-full flex justify-center items-center mt-10 mb-1">
                <div className="w-full">
                    {/* Responsive grid layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
                        {products.map((product, index) => (
                            <ProductBox key={index} product={product} />
                        ))}
                    </div>

                    <div className="mt-5 flex justify-center pt-10">
                        <button className="bg-red-500 text-white px-6 py-2 font-bold text-sm sm:text-base hover:bg-red-600 transition-all duration-300">
                            View All Products
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Eproducts;
