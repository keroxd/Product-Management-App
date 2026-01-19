import { useState } from "react";
import { FaEdit } from "react-icons/fa";

const userCard = ({ name, email, image, onClick}) => {

    



    return (<>
        <div onClick={onClick} 
        className="bg-white flex items-center w-auto h-auto p-3 border-1  border-neutral-300 rounded-lg text-start cursor-pointer hover:shadow-md hover:scale-102 transition-all duration-200">
            <img src={image} className="w-20 h-20 object-cover rounded-full bg-pink-200" />
            <div className="bg-transparent min-w-45 pr-5 pl-5">
                <p className="font-semibold">{name}</p>
                <p className="text-neutral-500 text-xs">{email}</p>
            </div>
            <div className="bg-transparent h-20 w-12 flex justify-end items-baseline">
                <FaEdit size={20} className="text-neutral-500"/>
            </div>

        </div>
    </>
    )
}

export default userCard;