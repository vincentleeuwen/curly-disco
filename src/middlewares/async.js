// crazy middleware syntax
export default ({ dispatch }) => next => action => {
  // check to see if the action has a promise on its 'payload' property
  // if it doesn't, send action onto next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // if it does, then wait for it to resolve (get the data), and then create
  // a new action with that data and dispatch it.
  action.payload.then(response => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
}


// boilerlate:
// export default function({ dispatch }) {
//   return function(next) {
//     return function(action) {

//     }
//   }
// }