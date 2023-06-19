"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/usersSlice";
import { deleteItem } from "../features/usersSlice";
import AddUser from "../AddUser/page";

const ListUsers = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div className="bg-slate-300 text-zinc-800">
            <div className="w-3/5 mx-auto">
                <h1 className="py-5 text-xl font-bold text-center">
                    Number Of Users: {users.users.length}
                </h1>
                {users.loading && <div>Loading...</div>}
                {!users.loading && users.error ? (
                    <div>Error: {users.error} </div>
                ) : null}
                {!users.loading && users.users.length ? (
                    <div>
                        {users.users.map((user) => (
                            <div
                                key={user.id}
                                className="bg-zinc-800 text-slate-300 my-2 p-2 rounded-xl"
                            >
                                <ul className="sm:flex sm:justify-between sm:items-center">
                                    <div>
                                        <li>User ID: {user.id}</li>
                                        <li>Name: {user.name}</li>
                                        <li>Email: {user.email}</li>
                                        <li>Phone: {user.phone}</li>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <button
                                            onClick={() =>
                                                dispatch(deleteItem(user.id))
                                            }
                                            className="bg-slate-300 text-zinc-800 p-1 rounded-lg font-semibold"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </ul>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
            <div>
                <AddUser />
            </div>
        </div>
    );
};

export default ListUsers;
