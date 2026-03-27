import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { contactActions } from "../store";

export const AddContact = () => {
    const { dispatch } = useGlobalReducer();
    const navigate = useNavigate();
    const slug = "mi_agenda_personal_2026"; // Usar el mismo slug que en Home

    // Estado local para el formulario
    const [contact, setContact] = useState({
        name: "", email: "", phone: "", address: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Llamamos a la acción que ya creamos en el store
        contactActions.addContact(slug, contact, dispatch, navigate);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Agregar Nuevo Contacto</h1>
            <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "800px" }}>
                <div className="mb-3">
                    <label className="form-label fw-bold">Nombre Completo</label>
                    <input type="text" className="form-control" placeholder="Nombre y apellido" 
                        onChange={(e) => setContact({...contact, name: e.target.value})} required />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Correo Electronico</label>
                    <input type="email" className="form-control" placeholder="correo@correo.col" 
                        onChange={(e) => setContact({...contact, email: e.target.value})} required />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Telefono</label>
                    <input type="text" className="form-control" placeholder="numero de telefono" 
                        onChange={(e) => setContact({...contact, phone: e.target.value})} required />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Direccion</label>
                    <input type="text" className="form-control" placeholder="Direccion" 
                        onChange={(e) => setContact({...contact, address: e.target.value})} required />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-3 py-2">Guardar</button>
                <Link to="/" className="d-block text-center">O Volver a contactos</Link>
            </form>
        </div>
    );
};