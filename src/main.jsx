import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './CounterApp'
import './index.css'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <React.StrictMode>
    <CounterApp initialValue={0} />
  </React.StrictMode>
)
