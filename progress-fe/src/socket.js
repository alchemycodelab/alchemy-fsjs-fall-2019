import React, { createContext, useContext, useReducer, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('ws://localhost:7891');
const SocketContext = createContext(socket);

export const SocketProvider = ({ children }) => {
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const useEmitEvent = eventName => {
  const socket = useSocket();
  return data => {
    socket.emit(eventName, data);
  };
};

export const useOnEvent = (reducer, eventNames) => {
  const socket = useSocket();
  const [state, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    eventNames.forEach(eventName => {
      socket.on(eventName, payload => dispatch({
        type: eventName,
        payload
      }));
    });
  });

  return state;
};
