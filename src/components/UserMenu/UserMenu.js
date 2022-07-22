import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/authSelectors';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { logOut } from 'redux/auth/authOperations';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  function stringAvatar(name) {
    return name.includes(' ')
      ? {
          children: `${name?.split(' ')[0][0]}${
            name ? name?.split(' ')[1][0] : ''
          }`,
        }
      : { children: `${name[0][0]}` };
  }

  return (
    <div className={s.userMenu}>
      <Avatar {...stringAvatar(userName)} className={s.avatar} />
      <p className={s.welcomeText}>Welcome, {userName}!</p>
      <Button
        variant="outlined"
        type="button"
        className={s.btnLogOut}
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </Button>
    </div>
  );
}
