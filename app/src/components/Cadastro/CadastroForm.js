import './CadastroForm.css';

import React, { Component } from 'react';

class CadastroForm extends Component {
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
    // enviar os dados do formulário
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h2>Cadastro</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Nome:</label>
            <input
              type="text"
              name="user"
              value={this.state.user}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Senha</label>
            <input
              type="password"
              name="pwd"
              value={this.state.pwd}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default CadastroForm;
