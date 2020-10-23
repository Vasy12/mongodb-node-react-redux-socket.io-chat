import { takeEvery, takeLatest } from 'redux-saga/effects';
import ACTION_TYPE from './../actions/types';
import * as ChatSagas from './chatSagas';

function* rootSaga() {
  yield takeEvery(ACTION_TYPE.GET_MESSAGES_ACTION, ChatSagas.getMessagesSaga);
  yield takeLatest(ACTION_TYPE.NEW_MESSAGE_ACTION, ChatSagas.newMessageSaga);
}

export default rootSaga;
