import React from 'react';
import { shallow } from 'enzyme';
import CharacterCards from './CharacterCards';

describe('<CharacterCards />', () => {
  test('renders', () => {
    const wrapper = shallow(<CharacterCards />);
    expect(wrapper).toMatchSnapshot();
  });
});
