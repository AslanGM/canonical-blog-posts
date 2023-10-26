import '@styles/_index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
