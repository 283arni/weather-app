import extend from '../utils';
import keyApi from '../const';

const initialState = {
  city: null,
  cities: []
};

const Actions = {
  GET_CITY: 'GET_CITY',
  ADD_CITY: 'ADD_CITY'
};

const ActionCreator = {
  getCity: (city) => ({
    type: Actions.GET_CITY,
    payload: city
  }),
  addCity: (city, cities) => ({
    type: Actions.ADD_CITY,
    payload: [...cities, city]
  })
};

const Operation = {
  loadCity: (city, cities) => (dispatch, getState, api) => {
    return api.get(`/weather?q=${city}&appid=${keyApi}&units=metric`)
      .then((response) => {
        dispatch(ActionCreator.getCity(response.data));
        dispatch(ActionCreator.addCity(response.data, cities));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_CITY:
      return extend(state, {
        city: action.payload
      });
    case Actions.ADD_CITY:
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
