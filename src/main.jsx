import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import MainPage from './pages/MainPage';
import store from './utils/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<Provider store={store}>
				<MainPage />
		</Provider>
  </React.StrictMode>,
)
