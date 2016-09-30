import {MAIN_SET_SETTINGS} from './actions';

const init = {
  type: '1',
  settings: {}
};


export default function main(_state_ = init, action) {
  let state = Object.assign({}, _state_),
      payload = action.payload;

  switch (action.type) {
    case MAIN_SET_SETTINGS:
      state[payload] = true;
      return state;

    default:
      return state;
  }
}
