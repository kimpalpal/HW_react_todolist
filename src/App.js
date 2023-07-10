import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  //숙제1
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { id: uuidv4(), contents: "취업하기", like: 0, color: "검은색바지" },
    { id: uuidv4(), contents: "리액트공부하기", like: 0 },
    { id: uuidv4(), contents: "야구보기", like: 0 },
  ]);
  // like 추가 하기
  // const likeHandler = (index) => {
  //   const updatedTodos = [...todos];
  //   updatedTodos[index].like++;
  //   setTodos(updatedTodos);
  // };

  //숙제2
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  //숙제3
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <div
        style={{
          border: "1px solid green",
          margin: "20px",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <h2>숙제1</h2>
        <input
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            setTodos([...todos, { id: uuidv4(), contents: value, like: 0 }]);
            setValue("");
          }}
        >
          등록하기
        </button>

        {todos.map((todo) => (
          <div key={todo.id}>
            <h4>{todo.contents}</h4>
            <p>{todo.id}</p>
            <span>{todo.like}</span>
            <button
              onClick={() => {
                const likeAdd = todos.map((item) => {
                  return todo.id === item.id
                    ? { ...item, like: item.like + 1 }
                    : item;
                });
                setTodos(likeAdd);
              }}
            >
              좋아요👍🏼
            </button>
            <br></br>
            <button
              onClick={() => {
                const deletTodos = todos.filter((item) => {
                  return item.id !== todo.id;
                });
                setTodos(deletTodos);
              }}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
      <div
        style={{
          borderRadius: "20px",
          border: "1px solid green",
          margin: "20px",
          padding: "20px",
        }}
      >
        <h2 style={{ color: "green" }}>숙제2</h2>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">선택하세요</option>
          <option value="검은색바지">검은색바지</option>
          <option value="파란색바지">파란색바지</option>
          <option value="빨간색바지">빨간색바지</option>
        </select>
        <div> {selectedOption}</div>
      </div>
      <div
        style={{
          borderRadius: "20px",
          border: "1px solid green",
          margin: "20px",
          padding: "20px",
        }}
      >
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
    </div>
  );
}

export default App;
