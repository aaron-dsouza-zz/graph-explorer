import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('<Character />', () => {
  test('renders', () => {
    const wrapper = shallow(<Character />);
    expect(wrapper).toMatchSnapshot();
  });
});
