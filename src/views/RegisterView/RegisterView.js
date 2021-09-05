import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/auth';

import {
  form,
  label,
  registerContainer,
  title,
  button,
  inputs,
} from './RegisterView.module.scss';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const classes = `container ${registerContainer}`;
    const { name, email, password } = this.state;

    return (
      <div className={classes}>
        <h1 className={title}>Страница регистрации</h1>

        <form onSubmit={this.handleSubmit} className={form} autoComplete="off">
          <label className={label}>
            Имя
            <input
              className={inputs}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

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
            Зарегистрироваться
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
