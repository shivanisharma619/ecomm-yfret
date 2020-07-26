import React from 'react';
import { shallow, mount } from 'enzyme';
import { Header } from 'components/Header';

it('renders without crashing', () => {
  shallow(<Header />);
});

const wrapper = mount(<Header />);
expect(wrapper.find('#heading')).toHaveText('Yfret Assignment');