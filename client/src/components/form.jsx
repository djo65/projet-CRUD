import { ContactContext } from "./_Context/ContactContext";
import { useContext, useState } from "react";
import "./styles/form.css";
import Fond from "./fond";

function Formulaire() {
    const { contacts, deleteContact, updateContact } = useContext(ContactContext);
    const [editContactId, setEditContactId] = useState(null); 
    const [editedContact, setEditedContact] = useState({ id: "", name: "", phone: "" }); 

    const startEditing = (contact) => {
        setEditContactId(contact.id);  
        setEditedContact({ ...contact }); 
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditedContact((prev) => ({ ...prev, [name]: value }));  
    };
 
    const saveEdit = () => {
        updateContact(editedContact.id, editedContact); 
        setEditContactId(null); 
    };

    const cancelEdit = () => {
        setEditContactId(null);
        setEditedContact({ id: "", name: "", phone: "" });
    };

    return (
        <div className="containerFormulaire">
            <Fond />
            <div className="titreFormulaire">
                <h2> My Contacts</h2>
            </div>

            <div className="table">
                <div className="row header">
                    <div className="colId">ID</div>
                    <div className="colName">Name</div>
                    <div className="colPhone">Phone</div>
                    <div className="colActions"></div>
                </div>

                {contacts.map((contact) => (
                    <div key={contact.id} className="row">
                        {editContactId === contact.id ? (
                            
                            <>
                                <div className="colId">{contact.id}</div>
                                <div className="colName">
                                    <input
                                        type="text"
                                        name="name"
                                        value={editedContact.name}
                                        onChange={handleEditChange}  
                                    />
                                </div>
                                <div className="colPhone">
                                    <input
                                        type="text"
                                        name="phone"
                                        value={editedContact.phone}
                                        onChange={handleEditChange}  
                                    />
                                </div>
                                <div className="colActions">
                                    <button type="button" onClick={saveEdit}>Enregistrer</button>
                                    <button type="button" onClick={cancelEdit}>Annuler</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="colId">{contact.id}</div>
                                <div className="colName">{contact.name}</div>
                                <div className="colPhone">{contact.phone}</div>
                                <div className="colActions">
                                    <button type="button" onClick={() => startEditing(contact)}>Modify</button>
                                    <button onClick={() => deleteContact(contact.id)} type="button">Delete</button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Formulaire;
