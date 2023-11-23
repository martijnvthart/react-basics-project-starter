import "./TextInput.css";

export const TextInput = ({ changeFn }) => {
  return <input className="TextInput" onChange={changeFn}></input>;
};
