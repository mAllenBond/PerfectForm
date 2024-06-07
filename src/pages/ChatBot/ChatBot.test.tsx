import ReactDOM from 'react-dom/client';
import { screen } from '@testing-library/react';
import { test } from 'vitest';
import { ChatBot } from './ChatBot';

global.HTMLElement.prototype.scrollIntoView = function () {};

test('ChatBot renders without crashing', async () => {
  const container = document.createElement('div');
  ReactDOM.createRoot(container).render(<ChatBot />);
  document.body.appendChild(container);

  const sendButton = await screen.findByText(/Send/i);
  expect(sendButton).toBeInTheDocument();
});
