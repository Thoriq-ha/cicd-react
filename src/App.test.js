import { render, screen } from '@testing-library/react';
import App from './App';

test("renders welcome message", () => {
  render(<App />);
  const welcomeElement = screen.getByText(
    /Welcome to My Simple UI React App bbb/i
  );
  expect(welcomeElement).toBeInTheDocument();
});

test("renders CICD test message", () => {
  render(<App />);
  const cicdTestElement = screen.getByText(/This is for CICD: try fetch data/i);
  expect(cicdTestElement).toBeInTheDocument();
});
