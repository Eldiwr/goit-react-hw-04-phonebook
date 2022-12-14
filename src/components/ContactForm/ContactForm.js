import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Label, Button, Input } from './ContactForm.styled';

export const ContactForm = ({onSubmit}) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onHandleChange = (event) => {

    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;   
    } 
  };
   
  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(name, number);
    
    setName('');
    setNumber('');
  };
  
  return (
            <Form onSubmit={handleSubmit}>
        <Label>Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onHandleChange}
          />    
        </Label>
        
        <Label>Tel
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onHandleChange}
          />
        </Label>

            <Button type='submit'>Add contact</Button>

        </Form>
  )          
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};