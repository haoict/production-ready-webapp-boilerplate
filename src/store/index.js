import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */
const makeStore = (initialState, options) => {
  const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== 'production') {
      const { composeWithDevTools } = require('redux-devtools-extension');
      return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
  };

  return createStore(rootReducer, initialState, bindMiddleware([thunkMiddleware]));
};

export { makeStore };
