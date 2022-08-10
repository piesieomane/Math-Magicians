import React from 'react';
import { Router } from 'react-router-dom';

import Nav from './Nav';

it('renders correctly', () => {
  <Router>
    const tree = renderer.create(
    <Nav />
    ).toJSON(); expect(tree).toMatchSnapshot();
  </Router>;
});
