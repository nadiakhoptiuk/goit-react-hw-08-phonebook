import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filter/filterActions';
import { FaUserAlt } from 'react-icons/fa';
import s from './ContactItem.module.css';
import { useRemoveContactMutation } from 'redux/contacts';

export default function ContactItem({ contactData }) {
  const [updateContactsByRemove, { isLoading }] = useRemoveContactMutation();
  const dispatch = useDispatch();

  const onContactDelete = id => {
    updateContactsByRemove(id);
    dispatch(updateFilter(''));
  };

  return (
    <li className={s.contactItem}>
      <FaUserAlt className={s.icon} />
      <p className={s.contactName}>{contactData.name}:</p>
      <p className={s.contactNumber}>{contactData.number}</p>
      <button
        className={s.btnDelete}
        type="button"
        onClick={() => onContactDelete(contactData.id)}
      >
        {isLoading ? 'Deletion...' : 'Delete'}
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  contactData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
