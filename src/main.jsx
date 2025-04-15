import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import Route from './routes/Route.jsx'
import { store } from './Components/Store/Store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Route />
    </Provider>
)
