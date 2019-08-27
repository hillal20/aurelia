const demoAction = (state, frameworkName) => {
  const newState = Object.assign({}, state);
  newState.frameworks = [...newState.frameworks, frameworkName];

  return newState;
};

const secondAction = (state, newUser) => {
  const newState = Object.assign({}, state);
  newState.users = [...newState.users, newUser];

  return newState;
};
module.exports = { demoAction, secondAction };
