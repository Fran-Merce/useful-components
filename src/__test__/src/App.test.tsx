import App from '@/App';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('App', () => {
  it('Should render correctly ', () => {
    const component = render(<App />);
    expect(component).toBeTruthy();
  });
});
