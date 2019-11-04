import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { store } from '../../../store';
import {Provider} from 'react-redux';
import TodoCard from './TodoCard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Provider store={store} ><TodoCard /></Provider></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
