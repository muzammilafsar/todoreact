import React from 'react'
import TodoCard from '../Molecules/TodoCard/TodoCard'
import { connect} from 'react-redux';

class Trash extends React.Component {
    render() {
        return (
            <div className="row">
                {
                    this.props.trash.map((val, i) => (
                <div className="col-md-4" key={i+ 'todo-card'}>
                <TodoCard {...val} onChange={this.props.changeStatus} restore={this.props.restore} restoreTask={this.props.restoreTask}/>
            </div>
                    ))
                }
            </div>
        )
    }
}
const mapState = (state) =>  {
    return {
        trash: state.todo.trash
    }
}
export default connect(mapState)(Trash);