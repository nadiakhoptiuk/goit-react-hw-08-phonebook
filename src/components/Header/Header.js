import { useSelector } from 'react-redux';
import Container from '../Container';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import s from './Header.module.css';

export default function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerWrapper}>
          {isLoggedIn ? (
            <>
              <h1 className={s.phonebookLink}>Phonebook</h1>
              <UserMenu />
            </>
          ) : (
            <AuthNav />
          )}
        </div>
      </Container>
    </header>
  );
}
