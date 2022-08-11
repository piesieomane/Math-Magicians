import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';
import Quote from './Quote';

afterEach(() => {
  cleanup();
});

describe('test for user interaction', () => {
  it('should check if the Home component works when clicked on', () => {
    render(<Home />);
    const userElement = screen.getByTestId('home-link');
    expect(userElement).toBeInTheDocument();
    expect(userElement).toHaveTextContent(
      'Welcome to our page!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore veritatis animi excepturi explicabo reiciendis, quaerat vitae saepe quam impedit expedita suscipit ut, blanditiis neque voluptate voluptatibus. Veritatis excepturi dolor ut!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore veritatis animi excepturi explicabo reiciendis, quaerat vitae saepe quam impedit expedita suscipit ut, blanditiis neque voluptate voluptatibus. Veritatis excepturi dolor ut!',
    );
  });

  it('should check if the Quote component works when clicked on', () => {
    render(<Quote />);
    const userElement = screen.getByTestId('quote-link');
    expect(userElement).toBeInTheDocument();
    expect(userElement).toHaveTextContent(
      'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. –William Paul Thurston',
    );
  });
});
