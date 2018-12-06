import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentList from 'components/CommentList';


describe('CommentList tests', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {comments: ['first comment', 'second comment', 'third comment']};
    wrapper = mount(<Root initialState={initialState}><CommentList /></Root>);
  })

  it('Shows one "li" element per comment', () => {
    expect(wrapper.find('li').length).toEqual(3);
  });

  it('text from each comment is visible', () => {
    expect(wrapper.render().text()).toContain('first comment');
    expect(wrapper.render().text()).toContain('second comment');
    expect(wrapper.render().text()).toContain('third comment');
  });
});
