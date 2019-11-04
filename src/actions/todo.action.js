export const CREATE_TODO_ITEM = 'CREATE_TODO_ITEM';
export const SET_LOADER  = 'SET_LOADER';
export const UPDATE_LOCAL_STORAGE = 'UPDATE_LOCAL_STORAGE';
export const UPDATE_STATE = "UPDATE_STATE";
export const UPDATE_STATUS = "UPDATE_STATUS";
export const DELETE_TASK = "DELETE_TASK";
export const RESTORE_TASK = "RESTORE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

export const createTodoItem = (payload) => dispatch =>  {
    dispatch({
        type: CREATE_TODO_ITEM,
        payload
    });
    dispatch({ type: UPDATE_LOCAL_STORAGE});
}
export const updateState = (payload) => {
    return {
        type: UPDATE_STATE,
        payload
    }
}
export const updateStatus = (payload) => dispatch => {
    dispatch({
        type: UPDATE_STATUS,
        payload
    })
    dispatch({ type: UPDATE_LOCAL_STORAGE});
}
export const updateTask = (payload) => dispatch => {
    dispatch({
        type: UPDATE_TASK,
        payload
    })
    dispatch({ type: UPDATE_LOCAL_STORAGE});
}
export const deleteTask = (payload) => dispatch => {
    dispatch({
        type: DELETE_TASK,
        payload
    })
    dispatch({ type: UPDATE_LOCAL_STORAGE});
}
export const restoreTask = (payload) => dispatch => {
    dispatch({
        type: RESTORE_TASK,
        payload
    })
    dispatch({ type: UPDATE_LOCAL_STORAGE});
}