import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('shows a Comment Box', () => {
  // setup
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  // test
  // console.log(div.innerHTML);
  expect(div.innerHTML).toContain('<div>Comment Box</div>');

  // cleanup
  ReactDOM.unmountComponentAtNode(div);
});


it('shows a Comment List', () => {

});