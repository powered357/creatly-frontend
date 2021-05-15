import { screen, render, cleanup } from '@testing-library/react';

import App from 'COMPONENTS/App';

describe('App component', () => {
  beforeAll(() => {
    render(<App />);
  });

  it('should have the right message in the dom', () => {
    const message = 'ZHASHKEVYCH WORKSHOP';

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  afterAll(cleanup);
});
