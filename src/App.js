import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1 className='mainTitle'>Todo</h1>
      <input className='mainInput' value={'input'}/>
      <section className='main'>
        <ul className='todo-list'>
          <li>
            <div className='view'>
              <input className='toggle' type='checkbox'/>
              <label>Todo 1</label>
            </div>
          </li>
          <li>
            <div className='view'>
              <input className='toggle' type='checkbox'/>
              <label>Todo 2</label>
            </div>
          </li>
          <li>
            <div className='view'>
              <input className='toggle' type='checkbox'/>
              <label>Todo 3</label>
            </div>
          </li>
        </ul>
        <footer className='footer'>
          footer
        </footer>
      </section>
    </div>
  );
}

export default App;
