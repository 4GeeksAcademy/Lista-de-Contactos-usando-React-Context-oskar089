import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { contactActions } from "../store";

export const EditContact = () => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();
    const { id } = useParams(); // Obtenemos el ID de la URL
    const slug = "mi_agenda_personal_2026";

    const [contact, setContact] = useState({
        name: "", email: "", phone: "", address: ""
    });

    // Cuando carga el componente, buscamos los datos del contacto para rellenar el formulario
    useEffect(() => {
        const contactToEdit = store.contacts.find(c => c.id === parseInt(id));
        if (contactToEdit) {
            setContact(contactToEdit);
        }
    }, [id, store.contacts]);

    const handleSubmit = (e) => {
        e.preventDefault();
        contactActions.updateContact(slug, id, contact, dispatch, navigate);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Edit contact #{id}</h1>
            <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "800px" }}>
                <div className="mb-3">
                    <label className="form-label fw-bold">Nombre</label>
                    <input type="text" className="form-control" value={contact.name}
                        onChange={(e) => setContact({...contact, name: e.target.value})} required />
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bold">Correo  Electronico</label>
                    <input type="text" className="form-control" value={contact.email}
                        onChange={(e) => setContact({...contact, email: e.target.value})} required />
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bold">Telefono</label>
                    <input type="text" className="form-control" value={contact.phone}
                        onChange={(e) => setContact({...contact, phone: e.target.value})} required />
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bold">Direcccion</label>
                    <input type="text" className="form-control" value={contact.address}
                        onChange={(e) => setContact({...contact, address: e.target.value})} required />
                </div>
    
                <button type="submit" className="btn btn-primary w-100 mb-3 py-2">Actualizar Contacto</button>
                <Link to="/" className="d-block text-center">O Volver a Contactos</Link>
            </form>
        </div>
    );
};