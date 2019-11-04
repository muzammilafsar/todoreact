import React, {memo} from 'react';
import TodoCard from '../Molecules/TodoCard/TodoCard'
import { connect } from 'react-redux';

function Completed({todoList, changeStatus, completed, deleteTask}) {
    return (
        <div className="row">
            {
                todoList.filter(val => val.done === true).map((val, i) => (
                    <div className="col-md-4" key={i + 'todo-card'}>
                        <TodoCard {...val} onChange={changeStatus} completed={completed} deleteTask={deleteTask} />
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
export default connect(mapState)(memo(Completed));