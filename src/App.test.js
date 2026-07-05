import React from 'react';
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import App from './App';

test('renders portfolio homepage content', () => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  const root = createRoot(container);

  act(() => {
    root.render(<App />);
  });

  expect(container.textContent).toMatch(/Siva Kumar Surasani/);
  expect(container.textContent).toMatch(/Projects/);
  expect(container.textContent).toMatch(/Send message/);

  act(() => {
    root.unmount();
  });

  document.body.removeChild(container);
});
