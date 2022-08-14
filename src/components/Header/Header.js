import { useSelector } from 'react-redux';
import Container from '../Container';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import logo from '../../images/Phonebook-icon-min.png';
import s from './Header.module.css';
import ThemeSwitch from 'components/ThemeSwitch/ThemeSwitch';

export default function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerWrapper}>
          {isLoggedIn ? (
            <>
              <img
                src={logo}
                alt="phonebook logo"
                width={35}
                height={35}
                className={s.logo}
              />
              <h1 className={s.phonebookTitle}>Phonebook</h1>
              <ThemeSwitch />
              <UserMenu />
            </>
          ) : (
            <>
              <ThemeSwitch />
              <AuthNav />
            </>
          )}
        </div>
      </Container>
    </header>
  );
}
