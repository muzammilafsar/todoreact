import React from 'react';
import { connect} from 'react-redux';
import { createTodoItem, updateTask } from '../../actions/todo.action';
import uuid from 'uuid/v4';
import { withRouter } from 'react-router-dom';
class Create extends React.Component {
    state = {
        id: '',
        task: '',
        date: ''
    }
    static getDerivedStateFromProps(props, state) {
        if(props.edit && state.task === '' && state.date === '' && props.match.params.id) {
            let abc = props.todoList.find(val => val.id === props.match.params.id);
            return {
                ...abc
            }
        }
    }
    resetState = () => {
        this.setState({
            task: '',
            date: ''
        });
    }
    onTaskchange = (e) => {
        this.setState({task: e.target.value});
    }
    onDatechange = (e) => {
        this.setState({date: e.target.value});
    }
    createEdit = () => {
        if(this.state.task && this.state.date) {
            if(this.props.edit && this.state.id) {
                this.props.updateTask(this.state);

            } else {
                this.props.create({...this.state, done: false, id: uuid(), dateOfCompletion: ''});
            }
            this.resetState();
            this.props.history.push('/');
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col">
                    {
                        this.props.edit? 
                        <h3>Edit Your Task</h3>
                        :''
                    }
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Task</label>
                            <input type="text" value={this.state.task} className="form-control" id="task-input" placeholder="Enter Task" onChange={this.onTaskchange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Due Date</label>
                            <input type="date"  value={this.state.date} className="form-control" id="password-input" placeholder="Password"  onChange={this.onDatechange}  />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.createEdit}>{this.props.edit? 'Update': 'Create'}</button>
                    </form>
                </div>
            </div>
        )
    }
}
const mapState = (state) =>  {
    return {
        todoList: state.todo.todoList
    }
}
export default connect(mapState,{
    create: createTodoItem,
    updateTask: updateTask
})(withRouter(Create));