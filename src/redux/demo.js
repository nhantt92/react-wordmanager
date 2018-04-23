import { createStore } from 'redux';
import {status, sort} from './actions/index';
import myReducer from './reducers/index';

const store = createStore(myReducer);
console.log('State Default: ', store.getState());

store.dispatch(status());
console.log('Toggle_status: ', store.getState());

store.dispatch(sort({
    by: 'status',
    value: -1
}));
console.log('Sort: ', store.getState());