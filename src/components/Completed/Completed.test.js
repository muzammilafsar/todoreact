import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { store } from '../../store';
import {Provider} from 'react-redux';
import Completed from './Completed';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store} ><Completed /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
