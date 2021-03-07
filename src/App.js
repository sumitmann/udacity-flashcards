import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Store/store';
import FlashCard from './Components/FlashCard';

export default function App() {
  return (
    <Provider store={store}>
      <FlashCard />
    </Provider>
  );
}
