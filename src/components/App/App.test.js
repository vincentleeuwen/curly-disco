import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

describe('App test', () => {
  it('shows a Comment Box', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CommentBox).length).toEqual(1);
  });

  it('shows a Comment List', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CommentList).length).toEqual(1);
  });
});
