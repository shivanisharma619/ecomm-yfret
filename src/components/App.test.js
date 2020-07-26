import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { Header } from 'components/Header';
import { Products } from 'components/Products';

it('renders without crashing', () => {
  shallow(<App />);
});

const wrapper = mount(<App />);
expect(wrapper).toContainReact(<Header />);
expect(wrapper).toContainReact(<Products />);