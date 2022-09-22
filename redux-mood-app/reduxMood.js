const INITIAL_VALUE = { mood: "-_-" };

function rootMood(state = INITIAL_VALUE, action) {
  switch (action.type) {
    case "HAPPY":
      return { ...state, mood: action.payload };
    case "SAD":
      return { ...state, mood: action.payload };
    case "ANGRY":
      return { ...state, mood: action.payload };
    case "CONFUSED":
      return { ...state, mood: action.payload };
    default:
      return state;
  }
}
