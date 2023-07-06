import PropTypes from 'prop-types';
import { Title } from './ContactsTitle.styled';

const ContactsTitle =({title}) => {
  return <Title>{title}</Title>;
}

ContactsTitle.propTypes = {
  title: PropTypes.string.isRequired,
};


export default ContactsTitle;
