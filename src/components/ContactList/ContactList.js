import PropTypes from 'prop-types';
import { List} from "./ContactList.styled";
import { ContactListItem } from './ContactListItem';

export const ContactList = ({ onFilter, onDelete }) => {
    return (
        <List>
            {onFilter.map(({ id, name, number }) => {
                return (
                    <ContactListItem key={id} contact={{ id, name, number }} onDelete={onDelete} />
                );   
            })}    
        </List>
    );
};

ContactList.prototype = {
    onFilter: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    ),
    onDelete: PropTypes.func.isRequired,
};