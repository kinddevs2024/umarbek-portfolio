import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Loader from './Layout/Loader.jsx'
import { I18nextProvider } from 'react-i18next'
import i18n from './utils/Il18n/il18n.js'
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <I18nextProvider i18n={i18n}>
            <Loader />
            <App />
        </I18nextProvider>
    </BrowserRouter>
)
