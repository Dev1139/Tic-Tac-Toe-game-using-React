import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Board from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
    <h2 className='heading'>Tic Tac Toe</h2>
  <React.StrictMode> 
    <Board />
  </React.StrictMode>
  </>
);


