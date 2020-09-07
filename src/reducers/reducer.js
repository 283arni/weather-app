import { combineReducers } from 'redux';

import NameSpace from './name-space';
import { reducer as data } from './data/data';
import { reducer as site } from './site/site';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.SITE]: site
});
