import { useSelector } from 'react-redux';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import s from './Header.module.css';

export default function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        {isLoggedIn ? (
          <>
            <h1 className={s.phonebookLink}>Phonebook</h1>
            <UserMenu />
          </>
        ) : (
          <AuthNav />
        )}
      </div>
    </header>
  );
}
