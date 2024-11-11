import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import LoadingWrapper from './components/common/Loading/LoadingWrapper';
import AppRoutes from './routes';
import './assets/styles/global.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LoadingWrapper>
          <div className="App">
            <AppRoutes />
          </div>
        </LoadingWrapper>
      </PersistGate>
    </Provider>
  );
}

export default App;
