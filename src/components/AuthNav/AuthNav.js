import { Link } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <ul className={s.authList}>
      <li className={s.authItem}>
        <Link to="/registration">Registration</Link>
      </li>
      <li className={s.authItem}>
        <Link to="/authorization">Log In</Link>
      </li>
    </ul>
  );
}
