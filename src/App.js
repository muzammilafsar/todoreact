import React from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pending from './components/Pending/Pending';
import Create from './components/Create/Create';
import Completed from './components/Completed/Completed';
import { connect } from 'react-redux';
import { updateState, updateStatus, deleteTask, restoreTask } from './actions/todo.action';
import Trash from './components/Trash/Trash';
class App extends React.Component {
  state = {
    errorOccured : true
  }
  
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
      errorOccured: true
    });
  }

  componentDidMount() {
    let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    let trash = JSON.parse(localStorage.getItem('trash')) || [];
    this.props.updateState({ todoList, trash });
  }
  changeStatus = (id) => {
    this.props.updateStatus(id);
  }
  moveToTrash = (id) => {
    this.props.updateStatus(id);
  }
  deleteTask = (id) => {
    this.props.deleteTask(id);
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Navigation />
          <Switch>
            <Route path="/create" exact>
              <Create />
            </Route>
            <Route path="/edit/:id" exact>
              <Create edit={true} />
            </Route>
            <Route path="/completed" exact>
              <Completed completed={true} changeStatus={this.changeStatus} deleteTask={this.deleteTask} />
            </Route>
            <Route path="/trash" exact>
              <Trash restore={true} restoreTask={this.props.restoreTask}/>
            </Route>
            <Route path="/" exact>
              <Pending  changeStatus={this.changeStatus} deleteTask={this.deleteTask} />
            </Route>
            Trash
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
const mapDispatch = dispatch => {
  return { 
    updateState: data =>  dispatch(updateState(data)),
    updateStatus: id => dispatch(updateStatus(id)),
    deleteTask: id => dispatch(deleteTask(id)),
    restoreTask: id => dispatch(restoreTask(id))
  }
}
export default connect(null, mapDispatch)(App);
