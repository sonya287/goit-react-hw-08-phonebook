import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth';

import { header, headerContainer } from './AppBar.module.scss';

const classes = `container ${headerContainer}`;
const AppBar = ({ isAuthenticated }) => (
  <header className={header}>
    <div className={classes}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </div>
  </header>
);
const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
