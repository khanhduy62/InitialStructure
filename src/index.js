import React from 'react';
import { Alert } from 'react-native';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import ContactForm from './components/ContactForm';

const { store, persistor } = configureStore();

export default () => (
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ContactForm onSubmit={(values) => Alert.alert('Submitted!', JSON.stringify(values))} />
      </PersistGate>
    </Provider>
);
