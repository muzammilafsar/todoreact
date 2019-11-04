import React, {memo} from 'react';
import TodoCard from '../Molecules/TodoCard/TodoCard'
import { connect } from 'react-redux';

function Pending({ todoList, changeStatus, deleteTask }) {
    return (
        <div className="row">
            {
                todoList.filter(val => val.done === false).map((val, i) => (
                    <div className="col-md-4" key={i + 'todo-card'}>
                        <TodoCard {...val} onChange={changeStatus} deleteTask={deleteTask} />
                    </div>
                ))
            }
        </div>
    )
}
const mapState = (state) => {
    return {
        todoList: state.todo.todoList
    }
}
export default connect(mapState)(memo(Pending));