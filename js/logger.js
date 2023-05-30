export default function logger(reducer) {
  return (prevState, action, args) => {
    console.group(action);
    console.log("Prev State:", prevState);
    console.log("Acction Arguments:", args);
    const nextState = reducer(prevState, action, args);
    console.log("Next State:", nextState);
    console.groupEnd(action);
    return nextState;
  };
}
