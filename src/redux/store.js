import {createStore} from 'redux';
import reducer from './rootReducer';

export default function configureStore(initialState) {
    return createStore(reducer, initialState);
}
