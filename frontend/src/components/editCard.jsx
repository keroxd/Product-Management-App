import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import TextInput from "./input";
import axios from "axios";

const EditCard = ({ close, currentUser }) => {


    const [user, setUser] = useState(currentUser)

    useEffect(() => {
        console.log(currentUser._id)
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((user) => ({
            ...user, [name]: value,
        }))
    }

    const handleSave = async (e) => {
        if (e) e.preventDefault();

        try {
            const res = await axios.put(`http://localhost:5000/api/users/${user._id}`, user);

            if (res.data.success) {
                alert("Update Successful")
                window.location.reload()
                close();
            }
        } catch (error) {
            console.error("Axios Error:", error.response?.data || error.message);
            alert("Update failed: " + (error.response?.data?.message || "Check console"));
        }
    };

    const handleDelete = async (e) => {
        if (e) e.preventDefault();

        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                await axios.delete(`http://localhost:5000/api/users/${user._id}`);
                window.location.reload()
                close();
            } catch (error) {
                console.error("Delete Error:", error);
            }
        }
    };


    return (
        <>
            <form className="bg-white border-neutral-300 w-110 h-auto py-3 border-1 border-neutral-300 rounded-xl">
                <div className="bg-transparent w-full h-10 flex items-center justify-between">
                    <h1 className="text-lg font-semibold ml-5 w-auto">Edit User</h1>
                    <button type="button"
                        onClick={close}
                        className="bg-transparent flex items-center justify-center w-15 h-10 cursor-pointer "><IoCloseSharp size={24} /></button>
                </div>
                <div className="bg-transparent w-full h-30 my-3 flex justify-center">
                    <img className="w-30 h-30 rounded-full object-cover"
                        src={user.image} alt="" />
                </div>
                <div className="bg-transparent w-full h-auto px-5">
                    <TextInput name="name" onChange={handleChange}
                        value={user.name} title="Name" type="text"></TextInput>

                    <TextInput name="email" onChange={handleChange}
                        value={user.email} title="Email" type="text"></TextInput>

                    <TextInput name="image" onChange={handleChange}
                        value={user.image} title="Image URL" type="text"></TextInput>

                    <TextInput name="dob" onChange={handleChange}
                        value={user.dob ? user.dob.slice(0, 10) : ""} title="Date of Birth" type="date"></TextInput>

                </div>
                <div className="bg-transparent flex items-center gap-3 w-full h-20 px-5">
                    <button onClick={handleDelete}
                        type="button" className="bg-rose-200 text-rose-700 font-semibold rounded-md 
                w-full h-11 cursor-pointer hover:brightness-90 transition-all duration-200">
                        Delete User
                    </button>
                    <button onClick={handleSave}
                        type="submit"
                        className="bg-emerald-200 text-emerald-700 font-semibold rounded-md 
                w-full h-11 cursor-pointer hover:brightness-90 transition-all duration-200">
                        Save Changes
                    </button>

                </div>
            </form>
        </>
    )
}

export default EditCard;