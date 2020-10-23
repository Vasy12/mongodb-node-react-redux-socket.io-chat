import ACTION_TYPE from './types';

export const getMessagesAction = () => ({
  type: ACTION_TYPE.GET_MESSAGES_ACTION,
});

export const getMessagesRequest = () => ({
  type: ACTION_TYPE.GET_MESSAGES_REQUEST,
});

export const getMessagesRequestSuccess = data => ({
  type: ACTION_TYPE.GET_MESSAGES_REQUEST_SUCCESS,
  payload: {
    data,
  },
});

export const getMessagesRequestFail = err => ({
  type: ACTION_TYPE.GET_MESSAGES_REQUEST_FAIL,
  payload: {
    error: err,
  },
});

export const newMessageAction = data => ({
  type: ACTION_TYPE.NEW_MESSAGE_ACTION,
  payload: {
    data,
  },
});

export const newMessageResponseSuccess = data => ({
  type: ACTION_TYPE.NEW_MESSAGE_RESPONSE_SUCCESS,
  payload: {
    data,
  },
});

export const newMessageResponseFail = err => ({
  type: ACTION_TYPE.NEW_MESSAGE_RESPONSE_FAIL,
  payload: {
    error: err,
  },
});
