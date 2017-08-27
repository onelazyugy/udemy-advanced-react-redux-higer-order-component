import { BODY_TOP_CLICKED } from "../actions/types";

export default function(state = false, action) {
  switch (action.type) {
    case BODY_TOP_CLICKED:
      console.log('reducer: BODY_TOP_CLICKED');
      return action.payload;
  }

  return state;
}
