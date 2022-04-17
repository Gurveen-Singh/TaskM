import React from "react";
import "./Style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
// const InputField = ({ todo, setTodo }: Props) => {
const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <form className="input__field">
      <input
        type="text"
        placeholder="Enter task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="input__submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
