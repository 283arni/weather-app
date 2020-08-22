import extend from '../utils';
import keyApi from '../const';

const initialState = {
  city: {},
  cities: []
};

const Actions = {
  GET_CITIES: 'GET_CITIES'
};

const ActionCreator = {
  getCities: (city) => ({
    type: Actions.GET_CITIES,
    payload: city
  })
};

const Operation = {
  loadCities: (city) => (dispatch, getState, api) => {
    return api.get(`/weather?q=${city}&appid=${keyApi}`)
      .then((response) => dispatch(ActionCreator.getCities(response)));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_CITIES:
      return extend(state, {
        cities: action.payload
      });
    default:
      return state;
  }
};

export {
  reducer,
  Operation,
  initialState,
  ActionCreator
};
