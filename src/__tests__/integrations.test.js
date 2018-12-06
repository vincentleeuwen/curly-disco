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
    moxios.install()
  })

  afterEach(() => {
    // import and pass your custom axios instance to this method
    moxios.uninstall()
  })

  it('can fetch a list of comments and display them', () => {
    // Find the fetch comments button and click it
    wrapper.find('.fetch-comments').simulate('click');
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: [
          { id: 1, name: 'Fred' },
          { id: 2, name: 'Will' }
        ]
      }).then(() => {
        // Expect to find a list of comments
        expect(wrapper.find('li').length).toEqual(2);
      })
    })
  });
});