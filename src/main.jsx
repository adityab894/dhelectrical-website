import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Keep existing root-level CSS so the current design remains intact
import '../style.css';
import './responsive.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);


