import { render, screen } from '@testing-library/react';
import App from './App';

test('renders connect to Spotify button', () => {
  render(<App />);
  const spotifyButton = screen.getByText(/Connect to Spotify/i);
  expect(spotifyButton).toBeInTheDocument();
});

test('renders start pomodoro button', () => {
  render(<App />);
  const pomodoroButton = screen.getByText(/Start Pomodoro/i);
  expect(pomodoroButton).toBeInTheDocument();
});
