import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'root';
import App from 'components/App';

describe('comments integration test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Root><App /></Root>);
    // import and pass your custom axios instance to this method
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [
        { id: 1, name: 'Fred' },
        { id: 2, name: 'Will' },
        { id: 3, name: 'Vin' }
      ]
    });
  })

  afterEach(() => {
    // import and pass your custom axios instance to this method
    moxios.uninstall();
    wrapper.unmount();
  })

  it('can fetch a list of comments and display them', (done) => {
    // Find the fetch comments button and click it
    wrapper.find('.fetch-comments').simulate('click');
    moxios.wait(() => { 
      wrapper.update();
      expect(wrapper.find('li').length).toEqual(3);
      done();
    });
    // => Also works:
    // ===============================================
    //
    // setTimeout(() => {
    //   wrapper.update();
    //   expect(wrapper.find('li').length).toEqual(3);
    //   done();
    // }, 100);
    //
  });
});