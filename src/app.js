import React from 'react';
import { createRoot }  from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const root = createRoot(document.getElementById('app'));
const jsx = (
<Provider store={store}>
    <AppRouter />
</Provider>
);

root.render(jsx);
