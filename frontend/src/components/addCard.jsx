import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import TextInput from "./input.jsx";

const AddCard = ({ close, image }) => {

    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        dob: "",
        image: "",
    })
    const [loading, setLoading] = useState(false)
    

    const handleChange = (e) => {
        const {name, value} = e.target;

        setNewUser((prev) => ({
            ...prev, [name]: value,
        }))
    }

    const addUser = async(e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post("http://localhost:5000/api/users", newUser);
            window.location.reload()
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <>
            <form onSubmit={addUser} className="bg-white border-neutral-300 w-110 h-auto py-3 border-1 border-neutral-300 rounded-xl">
                <div className="bg-transparent w-full h-10 flex items-center justify-between">
                    <h1 className="text-lg font-semibold ml-5 w-auto">Add New User</h1>
                    <button type="button"
                        onClick={close}
                        className="bg-transparent flex items-center justify-center w-15 h-10 cursor-pointer "><IoCloseSharp size={24} /></button>
                </div>
                
                <div className="bg-transparent w-full h-auto px-5 mt-8">
                    <TextInput name={"name"} onChange={handleChange}
                     value={newUser.name} title={"Name"} placeholder={"Enter Username"} type={"text"} />
                    <TextInput name={"email"} onChange={handleChange}
                    value={newUser.email} title={"Email"} placeholder={"Enter Mail"} type={"text"} />
                    <TextInput name={"image"} onChange={handleChange}
                    value={newUser.image} title={"Image URL"} placeholder={"Enter Image URL"} type={"text"} />
                    <TextInput name={"dob"} onChange={handleChange}
                    value={newUser.dob} title={"Date of Birth"} placeholder={"Enter Mail"} type={"date"} />
                </div>

                <div className="bg-transparent flex items-center w-full h-20 px-5">
                    <button onClick={() => console.log(newUser)}
                     type="submit" className="bg-purple-200 text-purple-700 font-semibold rounded-md 
                w-full h-11 cursor-pointer hover:brightness-90 transition-all duration-200">
                        Continue
                    </button>
                </div>
            </form>
        </>
    )
}




export default AddCard;


