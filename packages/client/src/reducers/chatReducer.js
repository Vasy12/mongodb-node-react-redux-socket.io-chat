import produce from 'immer';
import ACTION_TYPE from '../actions/types';

const initialState = {
  limit: 100,
  messages: [],
  error: null,
  isFetching: false,
};

function chatReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ACTION_TYPE.GET_MESSAGES_REQUEST: {
      return produce(state, draftState => {
        draftState.isFetching = true;
      });
    }
    case ACTION_TYPE.GET_MESSAGES_REQUEST_SUCCESS: {
      const {
        payload: { data },
      } = action;
      return produce(state, draftState => {
        draftState.messages = [...data, ...draftState.messages];
        draftState.isFetching = false;
      });
    }
    case ACTION_TYPE.GET_MESSAGES_REQUEST_FAIL: {
      const {
        payload: { error },
      } = action;
      return produce(state, draftState => {
        draftState.error = error;
        draftState.isFetching = false;
      });
    }
    case ACTION_TYPE.NEW_MESSAGE_RESPONSE_SUCCESS: {
      const {
        payload: { data },
      } = action;
      return produce(state, draftState => {
        if (draftState.messages.length >= draftState.limit) {
          draftState.messages = [
            ...draftState.messages.slice(
              draftState.messages.length - draftState.limit
            ),
            data,
          ];
        } else {
          draftState.messages.push(data);
        }
      });
    }
    default:
      return state;
  }
}

export default chatReducer;
