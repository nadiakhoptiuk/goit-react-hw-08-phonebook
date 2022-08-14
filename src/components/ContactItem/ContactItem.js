import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import LoadingButton from '@mui/lab/LoadingButton';
import EditIcon from '@mui/icons-material/Edit';
import { updateFilter } from 'redux/filter/filterActions';
import { useRemoveContactMutation } from 'redux/contacts';
import {
  setOpenedContact,
  updateModalState,
} from '../../redux/modal/modalActions';
import s from './ContactItem.module.css';

export default function ContactItem({ contactData }) {
  const [updateContactsByRemove, { isLoading }] = useRemoveContactMutation();
  const dispatch = useDispatch();

  const onContactEdit = contact => {
    dispatch(setOpenedContact(contact));
    dispatch(updateModalState());
  };

  const onContactDelete = id => {
    updateContactsByRemove(id);
    dispatch(updateFilter(''));
  };

  return (
    <li className={s.contactItem}>
      <PersonRoundedIcon className={s.icon} />
      <div className={s.infoWrapper}>
        <p className={s.contactName}>{contactData.name}:</p>
        <p className={s.contactNumber}>{contactData.number}</p>
      </div>

      <ul className={s.btnList}>
        <IconButton
          color="inherit"
          aria-label="edit"
          size="large"
          className={s.btnEdit}
          type="button"
          onClick={() => onContactEdit(contactData)}
        >
          <EditIcon />
        </IconButton>

        {isLoading ? (
          <LoadingButton loading variant="outlined" className={s.btnDelete}>
            Submit
          </LoadingButton>
        ) : (
          <IconButton
            color="inherit"
            aria-label="delete"
            size="large"
            className={s.btnDelete}
            type="button"
            onClick={() => onContactDelete(contactData.id)}
          >
            <DeleteIcon />
          </IconButton>
        )}
      </ul>
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
