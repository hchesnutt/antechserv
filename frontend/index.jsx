import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");
  createRoot(container).render(<Root/>);
});
