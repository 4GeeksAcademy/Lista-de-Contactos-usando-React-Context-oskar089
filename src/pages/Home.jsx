import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { contactActions } from "../store";
import ContactCard from "../components/ContactCard";

export const Home = () => {
    const { store, dispatch } = useGlobalReducer();
    const slug = "mi_agenda_personal_2026";

    useEffect(() => {
        contactActions.getContacts(slug, dispatch);
    }, []);

    return (
        <div className="container mt-4">
            {/* Botón verde de añadir */}
            <div className="d-flex justify-content-end mb-3">
                <Link to="/add" className="btn btn-success px-4 py-2">Agregar Nuevo contacto</Link>
            </div>

            {/* Contenedor principal de la lista */}
            <div className="card shadow-sm border">
                <ul className="list-group list-group-flush">
                    {store.contacts && store.contacts.length > 0 ? (
                        store.contacts.map((contact) => (
                            <ContactCard
                                key={contact.id}
                                contact={contact}
                                onDelete={() => contactActions.deleteContact(slug, contact.id, dispatch)}
                            />
                        ))
                    ) : (
                        <div className="p-5 text-center text-muted">
                            <h3>Todavía no hay contactos.</h3>
                            <p>¡Haz clic en "Añadir nuevo contacto" para empezar tu agenda!</p>
                        </div>
                    )}
                </ul>
            </div>
        </div>
    );
};