import React from 'react';
import { Watch } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Section from './Section';
import FormAddContact from './FormAddContact';
import ContactsList from './ContactsList';
import FilterInput from './FilterInput';
import { useGetContactsQuery } from 'redux/contacts';

export default function App() {
  const { isFetching } = useGetContactsQuery();

  return (
    <>
      <Section title="Phonebook">
        <FormAddContact />
      </Section>

      <Section title="Contacts">
        {isFetching ? (
          <Watch
            height={58}
            width={58}
            radius={45}
            color="#00BFFF"
            wrapperClass="loader"
            ariaLabel="loading-indicator"
          />
        ) : (
          <FilterInput />
        )}

        <ContactsList />
      </Section>
    </>
  );
}
