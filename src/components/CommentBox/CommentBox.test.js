import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

describe('CommentBox UI', () => {
  let wrapper;
  
  beforeEach(() => {
    const initialState = { auth: true };
    wrapper = mount(<Root initialState={initialState}><CommentBox /></Root>);
  });
  
  afterEach(() => {
    wrapper.unmount();
  });

  it('has a text area and a button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('form button').length).toEqual(1);
  });
});

describe('CommentBox textarea state', () => {
  let wrapper;
  const newComment = 'foo';

  beforeEach(() => {
    const initialState = { auth: true };
    wrapper = mount(<Root initialState={initialState}><CommentBox /></Root>);
    // simulate change event on our textbox
    wrapper.find('textarea').simulate('change', { target: { value: newComment }});
    // force an update because setState() is async
    wrapper.update();
  });

  afterEach(() => {
    wrapper.unmount();
  });
  
  it('has a textarea that users can type in', () => {
    // assert that the state is updated
    expect(wrapper.find('textarea').prop('value')).toEqual(newComment);
  });

  it('has a textarea that empties on submit', () => {
    // assert that the state is updated
    expect(wrapper.find('textarea').prop('value')).toEqual(newComment);
    // simluate form submit
    wrapper.find('form').simulate('submit');
    // force an update because setState() is async
    wrapper.update();
    // assert that textarea is empty
    expect(wrapper.find('textarea').prop('value')).toEqual('');
  });
});
