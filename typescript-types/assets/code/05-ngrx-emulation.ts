interface Action<T> {
  type: string;
  payload: T;
}

const createAction = <T>(type: string, payload: T): Action<T> => ({ type, payload })

const action1 = createAction('action1', true);
const action2 = createAction('action2', 10);
const action3 = createAction('action3', 'myString');



const getActionPayload = <T extends Action<unknown>>(action: T): T['payload'] => {
  return action.payload;
}

const payload1 = getActionPayload(action1);
const payload2 = getActionPayload(action2);
const payload3 = getActionPayload(action3);
