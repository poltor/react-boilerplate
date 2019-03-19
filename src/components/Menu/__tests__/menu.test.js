import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import Menu, { menuItems } from '../Menu';


describe('Menu (Component)', () => {
  const render = () => mount(
    <MemoryRouter initialEntries={[`/`]}>
      <Menu />
    </MemoryRouter>
  );

  it('should render correctly', () => {
    const wrapper = render();
    const li = wrapper.find('li');

    expect(li).toHaveLength(menuItems.length);
  });
});
