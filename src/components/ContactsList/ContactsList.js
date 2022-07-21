import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from 'components/ContactItem';
import { filterSelector } from 'redux/filter/filterSelector';
import { updateFilter } from 'redux/filter/filterActions';
import s from './ContactsList.module.css';
import { useGetContactsQuery } from 'redux/contacts';

export default function ContactsList() {
  const { data } = useGetContactsQuery('', {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);

  const filterContacts = () => {
    const normalizedString = filter?.toLowerCase();

    return filter
      ? data?.filter(contact =>
          contact.name.toLowerCase().includes(normalizedString)
        )
      : data;
  };

  const filteredContacts = filterContacts();

  useEffect(() => {
    if (data?.length === 0) {
      dispatch(updateFilter(''));
    }
  }, [data, dispatch]);

  return (
    <ul className={s.contactsList}>
      {filteredContacts?.map(filteredContact => (
        <ContactItem key={filteredContact.id} contactData={filteredContact} />
      ))}
    </ul>
  );
}
