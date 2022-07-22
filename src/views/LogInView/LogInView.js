import Section from 'components/Section';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import s from './LogInView.module.css';
import { useDispatch } from 'react-redux';
import useFormFields from 'hooks/useFormFields';
import { logIn } from 'redux/auth/authOperations';

export default function LogInView() {
  const dispatch = useDispatch();
  const {
    state: userEmail,
    setState: setUserEmail,
    handleChange: handleUserEmailChange,
  } = useFormFields('');
  const {
    state: userPassword,
    setState: setUserPassword,
    handleChange: handleUserPasswordChange,
  } = useFormFields('');

  const handleLogInSubmit = evt => {
    evt.preventDefault();
    dispatch(logIn({ email: userEmail, password: userPassword }));
    formReset();
    // TODO chande path for auth, redirect
  };

  const formReset = () => {
    setUserEmail('');
    setUserPassword('');
  };

  return (
    <Section title="Please sign in for more options" isHidden={false}>
      <form className={s.form} onSubmit={handleLogInSubmit}>
        <TextField
          id="outlined-basic"
          label="Email:"
          variant="outlined"
          type="email"
          className={s.input}
          value={userEmail}
          onChange={handleUserEmailChange}
        />
        <TextField
          id="outlined-basic"
          label="Password:"
          variant="outlined"
          type="password"
          required
          className={s.input}
          value={userPassword}
          onChange={handleUserPasswordChange}
        />
        <Button
          variant="contained"
          type="submit"
          disabled={!userEmail || userPassword.length < 7 ? true : false}
          className={s.registerBtn}
          endIcon={<SendIcon />}
        >
          Log In
        </Button>
      </form>
    </Section>
  );
}
