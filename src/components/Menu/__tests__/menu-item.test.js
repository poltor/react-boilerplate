import React from 'react';
import { mount } from 'enzyme';
import faker from 'faker';
import { NavLink } from 'react-router-dom';
import { MemoryRouter } from 'react-router';

import MenuItem from '../MenuItem';


describe('MenuItem (Component)', () => {
  let props;

  const render = () => mount(
    <MemoryRouter initialEntries={[`/`]}>
      <MenuItem {...props} />
    </MemoryRouter>
  );

  beforeEach(() => {
    props = {
      to: faker.random.word(),
      label: faker.random.word(),
      exact: faker.random.boolean(),
    };
  });

  it('should render correctly', () => {
    const wrapper = render();

    const li = wrapper.find('li');
    const navLink = wrapper.find(NavLink);

    expect(li).toHaveLength(1);
    expect(navLink).toHaveLength(1);

    expect(navLink.text()).toBe(props.label);
  });
});
