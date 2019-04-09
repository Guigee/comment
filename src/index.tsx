import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import Hello from './components/Hello';
// import List from './components/list/List';
import CommentApp from './components/comment/CommentApp'


ReactDOM.render(
  
  <CommentApp />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
