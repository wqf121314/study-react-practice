import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {AppContextProvider} from "./AppContextProvider";
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        {/*路由*/}
        <BrowserRouter>
            {/*全局上下文*/}
            <AppContextProvider>
                <App/>
            </AppContextProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

