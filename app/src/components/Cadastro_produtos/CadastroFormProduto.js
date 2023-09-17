import "./CadastroForm.css";

import React, { Component } from "react";

class CadastroForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      price: "",
      discountPercentage: "",
      rating: "",
      stock: "",
      brand: "",
      category: "",
      thumbnail: "",
      url: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // enviar os dados do formulário
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h2>Cadastro Produto</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Título:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Descrição</label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Preço</label>
            <input
              type="text"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Porcentagem de desconto</label>
            <input
              type="text"
              name="discountPercentage"
              value={this.state.discountPercentage}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Classificação</label>
            <input
              type="text"
              name="rating"
              value={this.state.rating}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Estoque</label>
            <input
              type="text"
              name="stock"
              value={this.state.stock}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Marca</label>
            <input
              type="text"
              name="brand"
              value={this.state.brand}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Miniatura</label>
            <input
              type="text"
              name="thumbnail"
              value={this.state.thumbnail}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>URL imagem</label>
            <input
              type="text"
              name="url"
              value={this.state.url}
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
