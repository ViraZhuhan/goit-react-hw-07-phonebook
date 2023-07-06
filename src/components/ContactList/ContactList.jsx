import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operationsContacts';
import { List, Item, Button } from './ContactList.styled';
import {
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/selectorsContacts';
// import { selectVisibleContacts } from 'redux/filter/selectorFilter';

export default function ContactsList() {
  const dispatch = useDispatch();
  const { contacts } = useSelector(selectContacts);
  const { isLoading } = useSelector(selectIsLoading);
  const filter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  // const getVisibleContacts = useSelector(selectVisibleContacts);

  return (
    <div>
      {isLoading && <p>Loading contacts..</p>}
      {contacts.length > 0 && (
        <List>
          {getVisibleContacts().map(({ name, phone, id }) => (
            <Item key={id}>
              <p>
                {name}: {phone}
              </p>
              <Button onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Button>
            </Item>
          ))}
        </List>
      )}
    </div>
  );
}
