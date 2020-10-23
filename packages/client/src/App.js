import React, { useCallback, useEffect, useLayoutEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import MessageForm from './components/MessageForm';

import {
  getMessagesAction,
  newMessageAction,
} from './actions/chatActionCreators';
import './App.css';

function App() {
  const { messages, isFetching } = useSelector(state => state.chat);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessagesAction());
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [messages.length]);

  const handlerSubmit = useCallback(
    values => {
      dispatch(newMessageAction(values));
    },
    [dispatch]
  );

  return (
    <>
      <ol>
        {isFetching && <li>Messages Loading...</li>}
        {messages.map(m => {
          return <li key={m._id}>{JSON.stringify(m)}</li>;
        })}
      </ol>
      <MessageForm onSubmit={handlerSubmit} />
    </>
  );
}

export default App;
