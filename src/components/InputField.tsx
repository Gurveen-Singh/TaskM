import React, { useRef } from "react";
import "./Style.css";
interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input__field"
      onSubmit={(e: React.FormEvent<Element>) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        placeholder="Enter a Todo"
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
      />
      <button type="submit" className="input__submit">
        Add
      </button>
    </form>
  );
};

export default InputFeild;
