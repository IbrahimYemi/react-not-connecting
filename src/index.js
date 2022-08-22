import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import Index from './Redux/Reducers/Index';
import { Provider } from 'react-redux';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const store = createStore(
  Index,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
