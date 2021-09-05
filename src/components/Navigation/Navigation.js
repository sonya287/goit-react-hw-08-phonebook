import { NavLink } from 'react-router-dom';
import { link, activeLink } from './Navigation.module.scss';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact className={link} activeClassName={activeLink}>
      Главная
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className={link}
        activeClassName={activeLink}
      >
        Контакты
      </NavLink>
    )}
  </nav>
);

const mapStateToPrips = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToPrips)(Navigation);
