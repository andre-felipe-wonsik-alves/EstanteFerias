import React from "react";
// FORM (importando icones com o comando "npm i react-icons")
import { FaPlus } from "react-icons/fa";
import "./form.css";
import PropTypes from "prop-types";

//VALIDAÇÃO DO PROP: "npm i prop-types"
export default function Form({ handleSubmit, handleInput, novoLivro }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="forms">
      <input onChange={handleInput} type="text" value={novoLivro}></input>
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  novoLivro: PropTypes.string.isRequired,
};
