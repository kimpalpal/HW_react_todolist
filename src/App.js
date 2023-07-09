import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  //숙제1
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { id: uuidv4(), contents: "취업하기", like: 0 },
    { id: uuidv4(), contents: "리액트공부하기", like: 0 },
    { id: uuidv4(), contents: "야구보기", like: 0 },
  ]);
  // like 추가 하기
  const likeHandler = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].like++;
    setTodos(updatedTodos);
  };

  //숙제2
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  //숙제3
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <h2 style={{ color: "green" }}>숙제1</h2>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setTodos([...todos, { id: uuidv4, contents: value, like: 0 }]);
        }}
      >
        등록하기
      </button>

      {todos.map((todo, index) => (
        <div key={index}>
          <h4>{todo.contents}</h4>
          <span>{todo.like}</span>
          <button onClick={() => likeHandler(index)}> 좋아요👍🏼</button>
          <br></br>
          <button
            onClick={() => {
              const deletTodos = todos.filter((item) => {
                return item.id !== todo.id;
              });
              setTodos(deletTodos);
            }}
          >
            {" "}
            삭제{" "}
          </button>
        </div>
      ))}

      <h2 style={{ color: "green" }}>숙제2</h2>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">선택하세요</option>
        <option value="검은색바지 ">검은색바지</option>
        <option value="파란색바지">파란색바지</option>
        <option value="빨간색바지">빨간색바지</option>
      </select>
      <div> {selectedOption}</div>

      <h2 style={{ color: "green" }}>숙제3</h2>
      <div>
        <label>
          <input
            type="checkbox"
            value={value}
            checked={isChecked}
            onChange={() => {
              return setIsChecked(!isChecked);
            }}
          />
          {isChecked ? (
            <div style={{ color: "white", backgroundColor: "black" }}>
              ☠️ 블랙모드! ☠️
            </div>
          ) : (
            <div style={{ color: "black" }}> 화이트모드! </div>
          )}
        </label>
      </div>
    </div>
  );
}

export default App;
