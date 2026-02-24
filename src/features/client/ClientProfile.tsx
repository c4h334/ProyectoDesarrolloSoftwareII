import { UserIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import type { Client } from "../../models/client.model";
import clientData from "../../data/client";
import { ProfileField } from "./ProfileComponents/ProfileField";
import { ConfirmModal } from "./ProfileComponents/ConfirmModal";
// Vista de perfil en dos columnas
// Permite editar la información del cliente y guardarla en localStorage
export default function ClientProfileTwoColumns() {
  const [client, setClient] = useState<Client>(clientData);
  const [showConfirm, setShowConfirm] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const storedClient = localStorage.getItem("client");
    if (storedClient) {
      setClient(JSON.parse(storedClient));
    }
  }, []);

  // Actualiza el estado del cliente cuando cambia cualquier campo del formulario
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  // Evita el submit directo y muestra el modal de confirmación
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  const confirmSave = () => {
    localStorage.setItem("client", JSON.stringify(client));
    setShowConfirm(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-xl px-10 py-8 w-full max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Perfil</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="flex flex-col items-center md:items-start mb-4">
              <img
                src="https://images.unsplash.com/photo-1503691359803-8822fbbc9047?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile avatar"
                className="h-54 w-54 rounded-full border-2 border-emerald-600 object-cover"
              />
              <button className="text-xs text-emerald-600 hover:underline">
                Cambiar foto
              </button>
            </div>

            <p className="text-sm text-gray-500 mb-2">
              Administra tu información personal
            </p>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600"
              name="bio"
              value={client.bio || ""}
              onChange={handleChange}
              placeholder="Cuéntanos algo sobre ti..."
            />
          </div>
          {/* Formulario de datos personales */}
          <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
            <ProfileField
              label="Nombre"
              icon={<UserIcon className="h-5 w-5 text-gray-400" />}
              type="text"
              name="name"
              value={client.name}
              onChange={handleChange}
              placeholder="Ingresa tu nombre"
              required
            />

            <ProfileField
              label="Apellido"
              icon={<UserIcon className="h-5 w-5 text-gray-400" />}
              type="text"
              name="lastName"
              value={client.lastName}
              onChange={handleChange}
              placeholder="Ingresa tu apellido"
              required
            />

            <ProfileField
              label="Email"
              icon={<EnvelopeIcon className="h-5 w-5 text-gray-400" />}
              type="email"
              name="email"
              value={client.email}
              onChange={handleChange}
              placeholder="Ingresa tu correo"
              required
            />

            <ProfileField
              label="Teléfono"
              icon={<PhoneIcon className="h-5 w-5 text-gray-400" />}
              type="text"
              name="phone"
              value={client.phone}
              onChange={handleChange}
              placeholder="Ingresa tu número"
              required
            />

            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              >
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>

        {saved && (
          <div className="mt-6 p-2 bg-green-100 text-green-700 rounded-md text-sm">
            ¡Información guardada con éxito!
          </div>
        )}
      </div>

      {showConfirm && (
        <ConfirmModal
          message="¿Estás seguro de que deseas guardar la información del perfil?"
          onConfirm={confirmSave}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </div>
  );
}
