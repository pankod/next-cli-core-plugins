import { INCREMENT, DECREMENT } from "@redux/actionTypes";

const initialState = {
  count: 20,
};

export default function Counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}