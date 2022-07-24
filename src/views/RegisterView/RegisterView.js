import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import useFormFields from 'hooks/useFormFields';
import Section from 'components/Section';
import { register } from 'redux/auth/authOperations';
import { getError } from 'redux/auth/authSelectors';
import { resetError } from 'redux/auth/authActions';
import s from './RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const {
    state: userName,
    setState: setUserName,
    handleChange: handleUserNameChange,
  } = useFormFields('');
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
  const error = useSelector(getError);

  const handleRegisterSubmit = evt => {
    evt.preventDefault();
    dispatch(
      register({ name: userName, email: userEmail, password: userPassword })
    );
    formReset();
  };

  const formReset = () => {
    setUserName('');
    setUserEmail('');
    setUserPassword('');
  };

  return (
    <Section title="Please register" isHidden={false}>
      <form className={s.form} onSubmit={handleRegisterSubmit}>
        <TextField
          id="outlined-basic"
          label="Name:"
          variant="outlined"
          type="text"
          autoFocus={true}
          className={s.input}
          value={userName}
          onChange={handleUserNameChange}
        />
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
          disabled={
            !userName || !userEmail || userPassword.length < 7 ? true : false
          }
          className={s.registerBtn}
          endIcon={<SendIcon />}
        >
          Register now
        </Button>
      </form>
      {error && (
        <Stack sx={{ width: '400px', margin: '0 auto' }} spacing={2}>
          <Alert
            severity="error"
            variant="outlined"
            onClose={() => {
              dispatch(resetError());
            }}
          >
            {error}
          </Alert>
        </Stack>
      )}
    </Section>
  );
}
