"use client";

import { useDispatch } from "react-redux";
import { addUser } from "../features/usersSlice";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

const AddUser = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: uuidv4(),
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
        };
        dispatch(addUser(newUser));
        router.push("/ListUsers");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col w-3/5 mx-auto bg-zinc-800 py-5 rounded-xl"
        >
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-slate-300 p-1 rounded-lg my-1 w-10/12 mx-auto"
            />
            <input
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-slate-300 p-1 rounded-lg my-1 w-10/12 mx-auto"
            />
            <input
                type="text"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-slate-300 p-1 rounded-lg my-1 w-10/12 mx-auto"
            />
            <button
                type="submit"
                className="bg-slate-300 p-1 font-semibold my-2 rounded-lg w-10/12 mx-auto"
            >
                Submit
            </button>
        </form>
    );
};

export default AddUser;
