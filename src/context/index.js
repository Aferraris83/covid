import { contextFactory } from '../config/context';

// import { modalReducer } from './modal/reducer';
import { reducer } from './reducer'

export const globalState = {
  continent: '',
};

export const globalReducer = (state, action) => (reducer(state.modalState, action));

export const { useDispatch, useSelector, Context } = contextFactory(globalState);
