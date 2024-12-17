import Image from "next/image";
import { FaRegEye, FaRegHeart, FaRegStar } from "react-icons/fa";

const products = [
    {
        title: "HAVIT HV-G92 Gamepad",
        price: "$120",
        oldPrice: "$160",
        image: "/game.png",
        rating: 5,
        reviews: 88,
        discount: -40,
    },
    {
        title: "AK-900 Wired Keyboard",
        price: "$960",
        oldPrice: "$1160",
        image: "/keyboard.png",
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
        title: "S-Series Comfort Chair ",
        price: "$375",
        oldPrice: "$400",
        image: "/chairr.png",
        rating: 4.5,
        reviews: 99,
        discount: 40,
    },
];

const ProductBox = ({ product }: { product: any }) => (
    <div className="relative w-full sm:w-[48%] md:w-[30%] lg:w-[22%]">
        {/* Discount Badge */}
        {product.discount && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-sm z-10">
                - {product.discount}%
            </div>
        )}

        {/* Product Image */}
        <div className="group shadow-md bg-neutral-100 w-full h-[250px] flex justify-center items-center relative cursor-pointer overflow-hidden">
            <Image
                src={product.image}
                width={200}
                height={150}
                alt={product.title}
                className="object-contain max-w-full max-h-full"
            />
            <div className="absolute top-2 right-2 flex flex-col items-center space-y-2">
                <FaRegHeart className="text-2xl text-black rounded-full p-1 bg-white" />
                <FaRegEye className="text-black bg-white rounded-full p-1" />
            </div>
            <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add to Cart
            </button>
        </div>

        {/* Product Info */}
        <h1 className="font-bold font-sans pt-2 text-sm sm:text-base">{product.title}</h1>
        <div className="flex items-center space-x-2">
            <span className="text-red-500 font-bold text-sm">{product.price}</span>
            {product.oldPrice && (
                <span className="text-gray-400 font-bold line-through text-xs">
                    {product.oldPrice}
                </span>
            )}
        </div>

        {/* Ratings */}
        <div className="flex items-center space-x-1 text-yellow-400 text-md pt-1">
            {[...Array(5)].map((_, index) =>
                index < product.rating ? (
                    <FaRegStar key={index} />
                ) : (
                    <FaRegStar key={index} className="text-gray-300" />
                )
            )}
            <span className="text-gray-400 text-xs ml-1">{product.reviews}</span>
        </div>
    </div>
);

const fproducts = () => {
    return (
        <main>
            <div className="w-full flex justify-center items-center mt-10 mb-1 px-4">
                <div className="w-full">
                    {/* Products Grid */}
                    <div className="flex flex-wrap justify-center sm:justify-between gap-5 mt-5">
                        {products.map((product, index) => (
                            <ProductBox key={index} product={product} />
                        ))}
                    </div>

                    {/* View All Button */}
                    <div className="mt-5 flex justify-center pt-10">
                        <button className="bg-red-500 text-white px-6 py-2 text-sm sm:text-base font-bold hover:bg-red-600 transition-all duration-300">
                            View All Products
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default fproducts;
