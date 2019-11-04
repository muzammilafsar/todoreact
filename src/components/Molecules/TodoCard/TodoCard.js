import React from 'react';
import {Link} from 'react-router-dom';
import './TodoCard.scss';
function TodoCard({task, date, done, onChange, id, deleteTask, restore, restoreTask, completed, dateOfCompletion}) {
    return (
        <div className="to-do-card card">
            <div className="card-body">
                <h5 className="card-title">{task}</h5>
                <p className="card-text">Due Date: {new Date(date).toLocaleDateString()} </p>
                {
                    completed ? 
                    <p className="card-text">Date of Completion: {new Date(dateOfCompletion).toLocaleDateString()} </p>
                    : ''
                }
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" disabled={restore} checked={done} id="exampleCheck1" onChange={() => onChange(id)}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Done</label>
                </div>
                {
                    !restore ?
                <React.Fragment>
                <Link to={`/edit/${id}`} >edit</Link > <span style={{cursor: 'pointer'}} onClick={() => deleteTask(id)}>delete</span>
                </React.Fragment> : 
                <button type="button" className="btn btn-primary" onClick={() => restoreTask(id)}>Restore</button>
                }
            </div>
        </div>
    )
}
export default TodoCard;