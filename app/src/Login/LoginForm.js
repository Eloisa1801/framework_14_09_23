import React, { Component } from 'react';
import './LoginForm.css'; //

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cpf: '',
      dataNascimento: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // adicionar autenticação com token.
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>CPF:</label>
            <input
              type="text"
              name="cpf"
              value={this.state.cpf}
              onChange={this.handleChange}
              className="form-input"
            />
          </div>
          <div>
            <label>Data de Nascimento:</label>
            <input
              type="date"
              name="dataNascimento"
              value={this.state.dataNascimento}
              onChange={this.handleChange}
              className="form-input"
            />
          </div>
          <button type="submit" className="form-button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
