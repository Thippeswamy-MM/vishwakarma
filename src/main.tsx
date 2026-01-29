import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Demo from './Demo';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Demo />
  </StrictMode>
);
