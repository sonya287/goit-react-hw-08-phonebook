import { NavLink } from 'react-router-dom';
import { link, activeLink } from './AuthNav.module.scss';

const AuthNav = () => (
  <div>
    <NavLink to="/register" exact className={link} activeClassName={activeLink}>
      Регистрация
    </NavLink>
    <NavLink to="/login" exact className={link} activeClassName={activeLink}>
      Логин
    </NavLink>
  </div>
);

export default AuthNav;
