import todoReducer from './todo.reducer';
import * as actions from '../actions/todo.action';

it('should return the initial state', () => {
    expect(todoReducer(undefined, {})).toEqual({
        trash: [],
        todoList: [],
        loading: false
    })
});
it('should updtae state', () => {
    expect(todoReducer({
        trash: [],
        todoList: [],
        loading: false
    }, {
        type: actions.UPDATE_STATE,
        payload: {
            todoList: [{id: 'adssd'}]
        }
    })).toEqual({
        trash: [],
        todoList: [{id: 'adssd'}],
        loading: false
    })
});

it('should updtae status', () => {
    expect(todoReducer({
        trash: [],
        todoList: [{id: 'adssd',done: false, dateOfCompletion: new Date() }],
        loading: false
    }, {
        type: actions.UPDATE_STATUS,
        payload: 'adssd'
    })).toEqual({
        trash: [],
        todoList: [{id: 'adssd', done: true , dateOfCompletion: new Date() }],
        loading: false
    })
});
it('should delete  task', () => {
    expect(todoReducer({
        trash: [],
        todoList: [{id: 'adssd',done: false, dateOfCompletion: 'date' }],
        loading: false
    }, {
        type: actions.DELETE_TASK,
        payload: 'adssd'
    })).toEqual({
        trash: [{id: 'adssd',done: false, dateOfCompletion: 'date' }],
        todoList: [],
        loading: false
    })
});
it('should delete  task', () => {
    expect(todoReducer({
        trash: [],
        todoList: [{id: 'adssd',done: false, dateOfCompletion: 'date' }],
        loading: false
    }, {
        type: actions.DELETE_TASK,
        payload: 'adssd'
    })).toEqual({
        trash: [{id: 'adssd',done: false, dateOfCompletion: 'date' }],
        todoList: [],
        loading: false
    })
});
it('should update  task', () => {
    expect(todoReducer({
        trash: [],
        todoList: [{id: 'adssd', task: 'asddsa',done: false, dateOfCompletion: 'date' }],
        loading: false
    }, {
        type: actions.UPDATE_TASK,
        payload: {id: 'adssd',done: false,task: 'myy', dateOfCompletion: 'y' }
    })).toEqual({
        trash: [],
        todoList: [{id: 'adssd',done: false,task: 'myy', dateOfCompletion: 'y' }],
        loading: false
    })
});