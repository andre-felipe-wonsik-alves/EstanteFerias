import React, { Component } from "react";
import "./main.css";

// FORM (importando icones com o comando "npm i react-icons")
import { FaPlus } from "react-icons/fa";
import { FaEdit, FaWindowClose } from "react-icons/fa";

export default class main extends Component {
  state = {
    novaTarefa: "",
    livros: [
      "Laranja mecânica",
      "Ensaio sobre a cegueira",
      "Crônica da casa assassinada",
    ],
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  handleInput = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa, livros } = this.state;
    return (
      <div className="main">
        <h1>Biblioteca</h1>

        <form onSubmit={this.handleSubmit} action="#" className="forms">
          <input
            onChange={this.handleInput}
            type="text"
            value={novaTarefa}
          ></input>
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="livros">
          {livros.map((livro) => (
            <li key={livro}>
              <div className="livro">
                {livro}
                <div className="opcoesLivro">
                  <FaEdit className="editLivro" />
                  <FaWindowClose className="apagarLivro" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
