import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contacts/operationsContacts';
import { selectContacts } from 'redux/contacts/selectorsContacts';
import { Form, Label, Input, AddButton } from './ContactForm.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const dispatch = useDispatch();
  const { contacts } = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isFindName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isFindName) {
      alert(`${name} is already in contacts !`);
      return;
    } else {
      dispatch(
        addContact({
          id: nanoid(),
          name,
          phone,
        })
      );
      reset();
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}></Label>
      Name
      <Input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        id={nameInputId}
        pattern="^[A-z-А-я\s]+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor={numberInputId}></Label>
      Number
      <Input
        type="tel"
        name="phone"
        value={phone}
        onChange={handleChange}
        id={numberInputId}
        pattern="^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <AddButton type="submit">Add contact</AddButton>
    </Form>
  );
}
