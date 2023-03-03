import React from "react";

const MainSection = () => {
  return (
    <>
      <input className="mainInput" value={"input"} />
      <section className="main">
        <ul className="todo-list">
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Todo 1</label>
            </div>
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Todo 2</label>
            </div>
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Todo 3</label>
            </div>
          </li>
        </ul>
        <footer className="footer">
          <span className="todo-left">X items left</span>
          <ul className="filters">
            <li>All</li>
            <li>Active</li>
            <li>Completed</li>
          </ul>
        </footer>
      </section>
    </>
  );
};

export default MainSection;