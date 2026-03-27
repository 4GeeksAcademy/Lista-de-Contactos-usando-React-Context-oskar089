import React from "react";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, onDelete }) => {
    return (
        <li className="list-group-item d-flex align-items-center py-4">
            {/* Foto de perfil */}
            <img
                src="https://images.unsplash.com/photo-1773493017440-a173056a728f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
                alt="contact"
                className="rounded-circle me-4"
                style={{ width: "90px", height: "90px", objectFit: "cover" }}
            />

            {/* 2. Detalles del contacto */}
            <div className="flex-grow-1">
                <h5 className="mb-2">{contact.name}</h5>
                <p className="mb-1 text-muted">
                    <i className="fas fa-map-marker-alt me-3"></i>{contact.address}
                </p>
                <p className="mb-1 text-muted">
                    <i className="fas fa-phone me-3"></i>{contact.phone}
                </p>
                <p className="mb-0 text-muted">
                    <i className="fas fa-envelope me-3"></i>{contact.email}
                </p>
            </div>

            {/* 3. Botones de acción */}
            <div className="d-flex gap-4"> {/* Contenedor para alinear lápiz y basura */}
                <Link to={`/edit/${contact.id}`} className="btn btn-link text-dark p-0">
                    <i className="fas fa-pencil-alt"></i>
                </Link>
                <button className="btn btn-link text-dark p-0" onClick={onDelete}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </li>
    );
};

export default ContactCard;