import { put } from 'redux-saga/effects';
import * as API from './../api';

import {
  getMessagesRequest,
  getMessagesRequestFail,
  getMessagesRequestSuccess,
} from './../actions/chatActionCreators';

export function* getMessagesSaga() {
  yield put(getMessagesRequest());
  try {
    const { data } = yield API.getMessages();
    yield put(getMessagesRequestSuccess(data));
  } catch (err) {
    yield put(getMessagesRequestFail(err));
  }
}

export function* newMessageSaga(action) {
  const {
    payload: { data },
  } = action;
  yield API.sendMessage(data);
}
