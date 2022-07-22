import { useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/authSelectors';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const userName = useSelector(getUserName);

  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <div className={s.userMenu}>
      <Avatar {...stringAvatar(userName)} className={s.avatar} />
      <p className={s.welcomeText}>Welcome, {userName}!</p>
      <Button variant="outlined">Log Out</Button>
    </div>
  );
}
