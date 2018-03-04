import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import io from 'socket.io-client'
const socket = io('http://localhost:3001')

socket.emit('message', { content: 'Hello World!'})

socket.on('message', data => {
  console.log('received message', data)
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();