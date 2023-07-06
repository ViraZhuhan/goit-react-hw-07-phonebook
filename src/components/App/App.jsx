import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operationsContacts';
import Title from '../Title';
import ContactForm from '../ContactForm';
import ContactsTitle from '../ContactsTitle';
import Filter from '../Filter/Filter';
import ContactsList from '../ContactList';
import { Container } from './App.styled';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title title="Phonebook" />
      <ContactForm />
      <ContactsTitle title="Contacts" />
      <Filter />
      <ContactsList />
    </Container>
  );
}
