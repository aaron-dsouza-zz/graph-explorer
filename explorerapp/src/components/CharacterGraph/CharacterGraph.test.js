import React from 'react';
import { shallow } from 'enzyme';
import CharacterGraph from './CharacterGraph';

describe('<CharacterGraph />', () => {
  test('renders', () => {
    const wrapper = shallow(<CharacterGraph />);
    expect(wrapper).toMatchSnapshot();
  });
});
