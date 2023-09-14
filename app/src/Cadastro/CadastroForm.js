import './CadastroForm.css';

import React, { Component } from 'react';

class CadastroForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      cpf: '',
      email: '',
      dataNascimento: '',
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
              name="nome"
              value={this.state.nome}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>CPF:</label>
            <input
              type="text"
              name="cpf"
              value={this.state.cpf}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>E-mail:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Data de Nascimento:</label>
            <input
              type="date"
              name="dataNascimento"
              value={this.state.dataNascimento}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default CadastroForm;
