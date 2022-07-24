import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Watch } from 'react-loader-spinner';
import Section from 'components/Section';
import FormAddContact from 'components/FormAddContact';
import ContactsList from 'components/ContactsList';
import FilterInput from 'components/FilterInput';
import { useGetContactsQuery } from 'redux/contacts';

export default function PhonebookView() {
  const { isFetching } = useGetContactsQuery();

  return (
    <>
      <Section title="Add new contact:" isHidden={false}>
        <FormAddContact />
      </Section>

      <Section title="Contacts" isHidden={false}>
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
