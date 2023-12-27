import React from "react";
import "./livro.css";
import PropTypes from "prop-types";
import { FaEdit, FaWindowClose } from "react-icons/fa";

export default function Livros({ livros, handleEdit, handleDelete }) {
  return (
    <ul className="livros">
      {livros.map((livro, index) => (
        <li key={livro}>
          <div className="livro">
            {livro}
            <div className="opcoesLivro">
              <FaEdit
                onClick={(e) => handleEdit(e, index)}
                className="editLivro"
              />
              <FaWindowClose
                onClick={(e) => handleDelete(e, index)}
                className="apagarLivro"
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
Livros.propTypes = {
  livros: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
