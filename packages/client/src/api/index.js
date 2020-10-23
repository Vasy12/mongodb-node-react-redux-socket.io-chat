import io from 'socket.io-client';
import {
  newMessageResponseFail,
  newMessageResponseSuccess,
} from '../actions/chatActionCreators';
import store from './../store';

const httpBaseURL = 'http://192.168.1.148:5000/api';
const wsBaseURL = 'ws://192.168.1.148:5000';

const socket = io(wsBaseURL);

const CHAT_EVENT = {
  NEW_MESSAGE_EVENT: 'NEW_MESSAGE_EVENT',
  NEW_MESSAGE_ERROR_EVENT: 'NEW_MESSAGE_ERROR_EVENT',
};

socket.on(CHAT_EVENT.NEW_MESSAGE_EVENT, body => {
  const data = JSON.parse(body);
  store.dispatch(newMessageResponseSuccess(data));
});

socket.on(CHAT_EVENT.NEW_MESSAGE_ERROR_EVENT, body => {
  const data = JSON.stringify(body);
  store.dispatch(newMessageResponseFail(data));
});

export const sendMessage = data =>
  socket.emit(CHAT_EVENT.NEW_MESSAGE_EVENT, JSON.stringify(data));

export const getMessages = async () => {
  const response = await fetch(`${httpBaseURL}/messages`);
  return response.json();
};
