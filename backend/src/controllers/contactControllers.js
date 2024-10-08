import { Contact } from "../models/contactModel.js";

export const createContact = async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(201).json(newContact);
  } catch (err) {
    res.status(500).json({ error: `Faild to create contact` });
  }
};

export const readAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.readAll();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: `Faild to load contacts` });
  }
};

export const updateContact = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    await Contact.update(id, data);
    res.status(202).send(`Contact with id ${id} was successfully updated`);
  } catch (err) {
    res.status(500).json({ error: `Faild to update contact` });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.delete(id);
    res.status(202).send(`Contact with idd ${id} was succssfully deleted`);
  } catch (err) {
    res.status(500).json({ error: `Failed to delete contact` });
  }
};
