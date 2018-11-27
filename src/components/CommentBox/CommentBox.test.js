import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

describe('CommentBox tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<CommentBox />);
  })

  it('has a text area and a button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });

  afterEach(() => {
    wrapper.unmount();
  })
});
