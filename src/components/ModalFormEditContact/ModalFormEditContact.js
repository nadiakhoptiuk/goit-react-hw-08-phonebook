import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import IconButton from '@mui/material/IconButton';
import Close from '@mui/icons-material/Close';
import { useEditContactMutation } from 'redux/contacts';
import useFormFields from '../../hooks/useFormFields';
import { updateModalState, resetOpenedContact } from 'redux/modal/modalActions';
import { isModalShownSelector } from 'redux/modal/modalSelectors';
import s from './ModalFormEditContact.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function ModalFormEditContact({ openedContact }) {
  const [editContact, { isLoading }] = useEditContactMutation();
  const {
    state: name,
    // eslint-disable-next-line no-unused-vars
    setState: setName,
    handleChange: handleNameChange,
  } = useFormFields(openedContact.name);
  const {
    state: number,
    // eslint-disable-next-line no-unused-vars
    setState: setNumber,
    handleChange: handleNumberChange,
  } = useFormFields(openedContact.number);
  const dispatch = useDispatch();
  const isModalShown = useSelector(isModalShownSelector);

  const handleEditSubmit = evt => {
    evt.preventDefault();
    const contactData = {
      name,
      number,
    };

    editContact({ id: openedContact.id, contact: contactData })
      .then(() => dispatch(updateModalState()))
      .then(() => dispatch(resetOpenedContact()));
  };

  const onBackdropClose = useCallback(
    evt => {
      if (evt.target === evt.currentTarget) {
        dispatch(updateModalState());
      }
    },
    [dispatch]
  );

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        dispatch(updateModalState());
      }
    };

    if (isModalShown) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.classList.add('modal-is-open');
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-is-open');
    };
  }, [dispatch, isModalShown]);

  return createPortal(
    <div className={s.overlay} onClick={onBackdropClose}>
      <div className={s.modal}>
        <IconButton
          aria-label="close modal button"
          color="inherit"
          className={s.closeBtn}
          onClick={() => dispatch(updateModalState())}
        >
          <Close />
        </IconButton>

        <h2 className={s.title}>Please edit your contact:</h2>
        <form className={s.form} onSubmit={handleEditSubmit}>
          <label className={s.labelText}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
              maxLength={15}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className={s.labelText}>
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
            <PersonAddIcon className={s.addContactIcon} />
            {isLoading ? 'Saving...' : 'Save contact'}
          </button>
        </form>
      </div>
    </div>,
    modalRoot
  );
}
ModalFormEditContact.propTypes = {
  openedContact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
