const url ="https://playground.4geeks.com/contact/agendas"

export const initialStore = () => {
  return {
    message: null,
    contacts: [], // Almacén para los contactos de la API
    todos: [
      { id: 1, title: "Make the bed", background: null },
      { id: 2, title: "Do my homework", background: null }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':
      const { id, color } = action.payload;
      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'set_contacts':
      return {
        ...store,
        contacts: action.payload // Guardamos los contactos en el estado global
      };

    default:
      return store;
  }
}

export const contactActions = {
  // Función para crear un contacto nuevo (POST)
  addContact: async (slug, contactData, dispatch, navigate) => {
    try {
      const resp = await fetch(`${url}/${slug}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData),
      });
      if (resp.ok) {
       
        await contactActions.getContacts(slug, dispatch);
        
        navigate("/");
      }
    } catch (error) {
      console.error("Error al añadir contacto:", error);
    }
  },
  // Función para obtener contactos (GET)
  getContacts: async (slug, dispatch) => {
    try {
      const resp = await fetch(`${url}/${slug}/contacts`);
      if (resp.status === 404) {
        // Si la agenda no existe, la creamos (POST)
        await fetch(`${url}/${slug}`, { method: "POST" });
        return contactActions.getContacts(slug, dispatch);
      }
      const data = await resp.json();
      dispatch({ type: "set_contacts", payload: data.contacts });
    } catch (error) {
      console.error("Error cargando contactos:", error);
    }
  },

  updateContact: async (slug, id, contactData, dispatch, navigate) => {
    try {
        const resp = await fetch(`${url}/${slug}/contacts/${id}`, {
            method: "PUT", // Método para actualizar
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contactData),
        });

        if (resp.ok) {
            // Actualizamos la lista global para ver los cambios
            await contactActions.getContacts(slug, dispatch);
            // Volvemos a la home
            navigate("/");
        }
    } catch (error) {
        console.error("Error al actualizar contacto:", error);
    }
},

  // Función para borrar un contacto (DELETE)
  deleteContact: async (slug, id, dispatch) => {
    try {
        const response = await fetch(`${url}/${slug}/contacts/${id}`, {
            method: "DELETE",
        });
        if (response.ok) {
            contactActions.getContacts(slug, dispatch);
        }
    } catch (error) {
        console.error("Error eliminando contacto:", error);
    }
},
};
                                                                                                                                                                                                                                                                                                                                                                                    