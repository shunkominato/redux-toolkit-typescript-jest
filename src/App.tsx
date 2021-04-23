import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
// import Render from './Render';
import RenderInput from './RenderInput';
import List from './List';
// import costumCounter from './features/costumCounter/CostumCounter';
import CostumCounter from './features/costumCounter/CostumCounter';
import CostumCounterAsync from './features/costumCounter/CostumCounterAsync';
import CustomHooks from './CustomHooks';

function App() {
  const output = (text: string) => {
    console.log(text);
  };

  const data = [
    {
      id: '1',
      name: 'react',
    },
    {
      id: '2',
      name: 'vue',
    },
    {
      id: '3',
      name: 'node',
    },
  ];

  const noData: [] = [];

  console.log(data);
  console.log(noData);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <RenderInput aa="s" output={output} />
        <List frame={data} />
        {/* <List frame={noData} /> */}
        <CostumCounter />
        <CostumCounterAsync />
        <CustomHooks />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
