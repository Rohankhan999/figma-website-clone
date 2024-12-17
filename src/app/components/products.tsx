import Image from "next/image";
import { FaRegEye, FaRegHeart, FaRegStar } from "react-icons/fa";

const products = [
    {
        title: "The North Coat",
        price: "$260",
        oldPrice: "$360",
        image: "/jacket.png",
        rating: "5",
        reviews: "65",
    },
    {
        title: "Gucci Duffle Bag",
        price: "$960",
        oldPrice: "$1160",
        image: "/bag.png",
        rating: "4",
        reviews: "65",
    },
    {
        title: "RGB Liquid CPU Cooler",
        price: "$160",
        oldPrice: "$170",
        image: "/speaker.png",
        rating: "4",
        reviews: "65",
    },
    {
        title: "Small Bookshelf",
        price: "$360",
        oldPrice: null,
        image: "/shelf.png",
        rating: "5",
        reviews: "65",
    },
];

const ProductBox = ({ product }: { product: any }) => (
    <div className="w-full max-w-xs mx-auto">
        <div className="group shadow-md bg-neutral-100 w-full h-[180px] flex justify-center items-center relative cursor-pointer">
            <Image src={product.image} width={150} height={100} alt={product.title} />
            <div className="absolute top-2 right-2 flex flex-col items-center space-y-2">
                <FaRegHeart className="text-lg sm:text-2xl text-black rounded-full p-1 bg-white" />
                <FaRegEye className="text-lg bg-white" />
            </div>
            <button className="w-full absolute bottom-0 bg-black text-white px-2 py-1 sm:px-4 sm:py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add to Cart
            </button>
        </div>
        <h1 className="font-bold font-sans text-sm sm:text-base pt-2">{product.title}</h1>
        <div className="flex items-center space-x-2">
            <span className="text-red-500 font-bold text-sm">{product.price}</span>
            {product.oldPrice && (
                <span className="text-gray-400 font-bold line-through text-xs">
                    {product.oldPrice}
                </span>
            )}
        </div>
        <div className="flex items-center space-x-1 text-yellow-400 text-sm pt-1">
            {[...Array(5)].map((_, index) =>
                index < product.rating ? (
                    <FaRegStar key={index} />
                ) : (
                    <FaRegStar key={index} />
                )
            )}
            <span className="text-gray-400 text-xs ml-1">{product.reviews}</span>
        </div>
    </div>
);

const Products = () => {
    return (
        <main>
            <div className="w-full flex justify-center items-center mt-5 mb-1">
                <div className="w-full px-4 sm:w-[80%]">
                    {/* Header */}
                    <div className="flex flex-col">
                        <h3 className="text-red-500 font-bold border-l-4 border-red-400 pl-2 text-sm">
                            This Month
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2">
                            <h1 className="text-gray-800 font-bold text-lg sm:text-2xl">
                                Best Selling Products
                            </h1>
                            <a
                                href="#products"
                                className="bg-red-500 hover:bg-red-600 text-white rounded-sm text-center mt-2 sm:mt-0 px-4 py-2 text-sm w-full sm:w-auto"
                            >
                                View All
                            </a>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                        {products.map((product, index) => (
                            <ProductBox key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Products;
