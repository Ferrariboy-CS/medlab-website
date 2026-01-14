import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, QuoteProvider } from './contexts';
import { initScrollReveal } from './utils/reveal';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <QuoteProvider>
        <App />
      </QuoteProvider>
    </ThemeProvider>
  </StrictMode>
);

initScrollReveal();
