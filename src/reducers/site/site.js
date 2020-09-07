import { extend } from '../../utils';
import { Heigth } from '../../const';

const initialState = {
  heightContainer: Heigth.MAX
};

const Action = {
  CHANGE_HEIGHT: 'CHANGE_HEIGHT'
};

const ActionCreator = {
  changeHeight: (height) => ({
    type: Action.CHANGE_HEIGHT,
    payload: height
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.CHANGE_HEIGHT:
      return extend(state, {
        heightContainer: action.payload
      });
    default:
      return state;
  }
};

export {
  ActionCreator,
  initialState,
  reducer
};
