

const userCard = ({name, profession, image}) => {
    
    return(<>
    <div className="bg-white w-auto h-80 border-1  border-neutral-300 rounded-lg text-start cursor-pointer hover:shadow-lg hover:scale-102 transition-all duration-200">
        <img src={image} className="w-auto h-60 mb-3 rounded-t-lg object-cover bg-pink-200"/>
        <p className="mx-5 mt-4 font-semibold">Name : {name}</p>
        <p className="text-neutral-500 mx-5 text-xs">{profession}</p>
    </div>
    </>
    )
}

export default userCard;