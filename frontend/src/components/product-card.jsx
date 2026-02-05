import { FaEdit } from "react-icons/fa";



const ProductCard = ({name, price, image}) => {
    return (
        <>
            <div className='bg-white relative rounded-xl border border-neutral-300 w-70 h-90 cursor-pointer 
            hover:scale-102 hover:brightness-95 transition-all duration-200'>
                <button className="absolute top-3 right-3">
                    <FaEdit size={20}></FaEdit>
                </button>
                <img className='w-full h-70 rounded-t-xl object-top object-cover'
                src={image} alt="" />
                <div className='px-5 py-3'>
                    <h1 className='text-neutral-800 font-semibold text-sm capitalize'>{name}</h1>
                    <p className='font-medium mt-1'>{`${price.toLocaleString()} Ks`}</p>
                </div>
            </div>
        </>
    );
}; 

export default ProductCard