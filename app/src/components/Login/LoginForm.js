import React, { Component } from 'react';
import './LoginForm.css'; //
import { Link } from 'react-router-dom';
import CadastroForm from './CadastroForm';
<Route path="/cadastro" component={CadastroForm} />
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Adicionar lógica para enviar
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Nome de Usuário:</label>
            <input
              type="text"
              name="user"
              value={this.state.user}
              onChange={this.handleChange}
              className="form-input"
            />
          </div>
          <div>
            <label>Senha:</label>
            <input
              type="password"
              name="pwd"
              value={this.state.pwd}
              onChange={this.handleChange}
              className="form-input"
            />
          </div>
          <button type="submit" className="form-button">Entrar</button>
        </form>
        <Link to="/cadastro">
          <button>Cadastrar</button>
        </Link>
      </div>
    );
  }
}

export default LoginForm;
