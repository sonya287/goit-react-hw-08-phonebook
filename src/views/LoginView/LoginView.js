import React, { Component } from 'react';
import {
  form,
  label,
  loginContainer,
  inputs,
  button,
  title,
} from './LoginView.module.scss';
import { connect } from 'react-redux';
import { logIn } from '../../redux/auth';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    const classes = `container ${loginContainer}`;
    return (
      <div className={classes}>
        <h1 className={title}>Страница логина</h1>

        <form onSubmit={this.handleSubmit} className={form} autoComplete="off">
          <label className={label}>
            Почта
            <input
              className={inputs}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className={label}>
            Пароль
            <input
              className={inputs}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button className={button} type="submit">
            Войти
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
