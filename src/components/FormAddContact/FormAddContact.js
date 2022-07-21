import React from 'react';
import { FaUserPlus } from 'react-icons/fa';
import useFormFields from 'hooks/useFormFields';
import s from './FormAddContact.module.css';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contacts';

export default function FormAddContact() {
  const {
    state: name,
    setState: setName,
    handleChange: handleNameChange,
  } = useFormFields('');
  const {
    state: number,
    setState: setNumber,
    handleChange: handleNumberChange,
  } = useFormFields('');

  const [addContact, { isLoading }] = useAddContactMutation();
  const { data } = useGetContactsQuery('', {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const handleSubmit = evt => {
    evt.preventDefault();
    const contactData = { name, number };
    const nameToAdd = contactData.name;

    if (data?.some(contact => contact.name === nameToAdd)) {
      alert(`${nameToAdd} is already in your contacts`);
      return;
    }

    addContact(contactData);
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleNumberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.btn} type="submit">
        <FaUserPlus className={s.AddContactIcon} />
        {isLoading ? 'Addition...' : 'Add contact'}
      </button>
    </form>
  );
}
