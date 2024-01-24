import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api';
import {Provider} from "react-redux";
import {setupStore} from "./domain/repositories/api/store/store";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <PrimeReactProvider>
                <App/>
            </PrimeReactProvider>
        </Provider>
    </BrowserRouter>
);

