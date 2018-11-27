import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

describe('CommentBox tests', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = mount(<CommentBox />);
  });
  
  afterEach(() => {
    wrapper.unmount();
  });

  it('has a text area and a button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('has a textarea that users can type in', () => {
    const newComment = 'foo';
    // simulate change event on our textbox
    wrapper.find('textarea').simulate('change', { target: { value: newComment }});
    // force an update because setState() is async
    wrapper.update();
    // assert that the state is updated
    expect(wrapper.state().comment).toEqual(newComment);
    expect(wrapper.find('textarea').prop('value')).toEqual(newComment);
  });
});
