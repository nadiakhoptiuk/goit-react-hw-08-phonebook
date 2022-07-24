import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <ul className={s.authList}>
      <li className={s.authItem}>
        <NavLink
          to="/register"
          className={({ isActive }) => {
            return isActive ? 'activeNavLink' : 'navLink';
          }}
        >
          Registration
        </NavLink>
      </li>
      <li className={s.authItem}>
        <NavLink
          to="/login"
          className={({ isActive }) => {
            return isActive ? 'activeNavLink' : 'navLink';
          }}
        >
          Log In
        </NavLink>
      </li>
    </ul>
  );
}
