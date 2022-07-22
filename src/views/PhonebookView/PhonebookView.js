import Section from 'components/Section';
import FormAddContact from 'components/FormAddContact';
import ContactsList from 'components/ContactsList';
import FilterInput from 'components/FilterInput';
import { Watch } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useGetContactsQuery } from 'redux/contacts';
import { useSelector } from 'react-redux';

export default function PhonebookView() {
  const { isFetching } = useGetContactsQuery();
  const token = useSelector(state => state.token);

  console.log(token);

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
