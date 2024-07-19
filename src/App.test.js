import { render, screen } from '@testing-library/react';
import App from './App';

test("renders welcome message", () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to My Simple UI React App/i);
  expect(welcomeElement).toBeInTheDocument();
});

test("renders CICD test message", () => {
  render(<App />);
  const cicdTestElement = screen.getByText(
    /This application is set up with automated testing and deployment through a CI\/CD pipeline using GitHub Actions\. Try fetching data\./i
  );
  expect(cicdTestElement).toBeInTheDocument();
});
