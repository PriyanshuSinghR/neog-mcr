import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { BookContext, BookProvider } from './context/BookContext';
import './index.css';
import App from './App';
export { BookContext };

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <Router>
      <BookProvider>
        <App />
      </BookProvider>
    </Router>
  </StrictMode>,
);
