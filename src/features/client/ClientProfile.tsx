import { UserIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline"; //iconos a utilizar 
import React, { useState, useEffect } from "react";
import type { Client } from "../../models/client.model";
import clientData from "../../data/client.json"; 

export default function ClientProfile() {
    const [client, setClient] = useState<Client>(() => {
    const storedClient = localStorage.getItem("client");
    return storedClient ? JSON.parse(storedClient) : clientData; // fix - using a service prop
});
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const { name, value } = e.target;
        setClient((prevClient) => ({
            ...prevClient,
            [name]: value,
        }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem("client", JSON.stringify(client));
        alert("Client information saved!");
    }

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen flex items-center justify-center p-4">
            <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-2xl">
                <div className="flex flex-col items-center mb-6">
                    <UserIcon className="h-12 w-12 text-zinc-900" />
                    <h2 className="text-xl font-semibold">
                        Profile
                    </h2>
                    <p className="text-sm text-gray-500 text-center">
                        Manage your personal information
                    </p>
                </div>

                {/* Formulario para editar la información del cliente (se aprovecharan sus propiedades para el local storage) */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm text-gray-600">Name</label>
                        <div className="flex items-center border rounded-md p-2">
                            <UserIcon className="h-5 w-5 text-gray-400 mr-2" />
                            <input className="w-full outline-none" type="text" name="name" value={client.name} onChange={handleChange} />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600">Last Name</label>
                        <div className="flex items-center border rounded-md p-2">
                            <UserIcon className="h-5 w-5 text-gray-400 mr-2" />
                            <input className="w-full outline-none" type="text" name="lastName" value={client.lastName} onChange={handleChange} />
                        </div>

                    </div>

                    <div>
                        <label className="block text-sm text-gray-600">Email</label>
                        <div className="flex items-center border rounded-md p-2">
                            <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-2" />
                            <input className="w-full outline-none" type="email" name="email" value={client.email} onChange={handleChange} />
                        </div>

                    </div>

                    <div>
                        <label className="block text-sm text-gray-600">Phone</label>
                        <div className="flex items-center border rounded-md p-2">
                            <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" />
                            <input className="w-full outline-none" type="text" name="phone" value={client.phone} onChange={handleChange} />
                        </div>

                    </div>

                    <button
                        type="submit"
                        className="md:col-span-2 flex items-center justify-center gap-2 bg-[#12182c] text-white py-2 rounded-md hover:opacity-80 transition"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}
