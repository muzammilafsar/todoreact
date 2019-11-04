import { CREATE_TODO_ITEM, UPDATE_LOCAL_STORAGE, UPDATE_STATE, UPDATE_STATUS, DELETE_TASK, RESTORE_TASK, UPDATE_TASK } from "../actions/todo.action";

const initialState = {
    trash: [],
    todoList: [],
    loading: false
};

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_TODO_ITEM:
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            };
        case UPDATE_LOCAL_STORAGE:
            localStorage.setItem('todoList', JSON.stringify(state.todoList));
            localStorage.setItem('trash', JSON.stringify(state.trash));
            return state
        case UPDATE_STATE:
            return {
                ...state,
                ...action.payload
            }
        case UPDATE_STATUS: {
            let todoList = JSON.parse(JSON.stringify(state.todoList));
            let index = todoList.findIndex(val => val.id === action.payload);
            if (index > -1) {
                if(todoList[index].done === false ) {
                    todoList[index].dateOfCompletion = new Date();
                }
                todoList[index].done = !todoList[index].done;
            }
            return { ...state, todoList: todoList }
        }
        case DELETE_TASK: {
            let todoList = JSON.parse(JSON.stringify(state.todoList));
            let index = todoList.findIndex(val => val.id === action.payload);
            let deleted = [];
            if (index > -1) {
                deleted.push(...todoList.splice(index, 1));
            }
            return { ...state, todoList: todoList, trash: [...state.trash, ...deleted] }
        }
        case RESTORE_TASK: {
            let trash = JSON.parse(JSON.stringify(state.trash));
            let index = trash.findIndex(val => val.id === action.payload);
            let todoList = [];
            if (index > -1) {
                todoList.push(...trash.splice(index, 1));
            }
            return {
                ...state,
                trash,
                todoList: [...state.todoList, ...todoList]
            }
        }
        case UPDATE_TASK: {
            let todoList = JSON.parse(JSON.stringify(state.todoList));
            let index = todoList.findIndex(val => val.id === action.payload.id);
            if (index > -1) {
                todoList[index] = action.payload;
            }
            return {
                ...state,
                todoList
            }
        }
        default:
            return state;
    }
}
