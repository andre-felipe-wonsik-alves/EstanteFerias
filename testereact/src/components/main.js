import React, { Component } from "react";
import "./main.css";
import Form from "./Form";
import Livros from "./Livros";

export default class main extends Component {
  state = {
    novoLivro: "",
    livros: [],
    index: -1,
  };

  componentDidMount() {
    //executa cada vez que o componente é criado
    const livros = JSON.parse(localStorage.getItem("livros"));
    if (!livros) return;

    this.setState({ livros });
  }
  componentDidUpdate(prevProps, prevState) {
    //executa a cada atualizacao do componente
    const { livros } = this.state;

    if (livros === prevState) return;

    localStorage.setItem("livros", JSON.stringify(livros));
  }

  handleInput = (e) => {
    this.setState({
      novoLivro: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    const { livros } = this.state;
    this.setState({
      index,
      novoLivro: livros[index],
    });
  };

  handleDelete = (e, index) => {
    const { livros } = this.state;
    const novosLivros = [...livros];
    novosLivros.splice(index, 1);

    this.setState({
      livros: [...novosLivros],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { livros, index } = this.state;
    let { novoLivro } = this.state;
    novoLivro = novoLivro.trim();

    if (livros.indexOf(novoLivro) !== -1) return;

    const novosLivros = [...livros];

    if (index === -1) {
      this.setState({
        livros: [...novosLivros, novoLivro],
        novoLivro: "",
      });
    } else {
      const novosLivros = [...livros];
      novosLivros[index] = novoLivro;

      this.setState({
        livros: [...novosLivros],
        index: -1,
      });
    }
  };

  render() {
    const { novoLivro, livros } = this.state;
    return (
      <div className="main">
        <h1>Biblioteca - React</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleInput={this.handleInput}
          novoLivro={novoLivro}
        />

        <Livros
          livros={livros}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
