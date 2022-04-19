import { useState } from "react";

const Form = ({ onLogHandler }) => {
  const [value, setValue] = useState("");
  const onClickHandler = (e) => {
    e.preventDefault();
    onLogHandler(value);
    setValue('')
   };
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <form>
      <input value={value} onChange={onChangeHandler} type="text" />
      <button onClick={onClickHandler}>send</button>
    </form>
  );
};

export default Form;
