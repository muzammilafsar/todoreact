import * as actions from './todo.action';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
export const mockStore = configureMockStore([thunk]);

it('should create an action to add a todo', () => {
    const payload = 'Finish docs'
    const expectedAction = {
        type: actions.UPDATE_STATE,
        payload
    }
    expect(actions.updateState(payload)).toEqual(expectedAction)
});
it('should should call create to task ', async () => {
    const store = mockStore();
    await store.dispatch(actions.createTodoItem("payload"));
    const calls = store.getActions();
    expect(calls[0]).toEqual({type: actions.CREATE_TODO_ITEM, payload: "payload"});
    expect(calls[1]).toEqual({type: actions.UPDATE_LOCAL_STORAGE });
});
it('should should updateStatus', async () => {
    const store = mockStore();
    await store.dispatch(actions.updateStatus("payload"));
    const calls = store.getActions();
    expect(calls[0]).toEqual({type: actions.UPDATE_STATUS, payload: "payload"});
    expect(calls[1]).toEqual({type: actions.UPDATE_LOCAL_STORAGE });
});
it('should should updateTask', async () => {
    const store = mockStore();
    await store.dispatch(actions.updateTask("payload"));
    const calls = store.getActions();
    expect(calls[0]).toEqual({type: actions.UPDATE_TASK, payload: "payload"});
    expect(calls[1]).toEqual({type: actions.UPDATE_LOCAL_STORAGE });
});
it('should should deleteTask', async () => {
    const store = mockStore();
    await store.dispatch(actions.deleteTask("payload"));
    const calls = store.getActions();
    expect(calls[0]).toEqual({type: actions.DELETE_TASK, payload: "payload"});
    expect(calls[1]).toEqual({type: actions.UPDATE_LOCAL_STORAGE });
});
it('should should restoreTask', async () => {
    const store = mockStore();
    await store.dispatch(actions.restoreTask("payload"));
    const calls = store.getActions();
    expect(calls[0]).toEqual({type: actions.RESTORE_TASK, payload: "payload"});
    expect(calls[1]).toEqual({type: actions.UPDATE_LOCAL_STORAGE });
});

