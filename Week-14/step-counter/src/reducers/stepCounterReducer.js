const initialState = {
	value: 0,
};

const addStep = (state) => {
	return {
		...state,
		value: state.value + 1,
	};
};

const resetSteps = (state) => {
	return {
		...state,
		value: 0,
	};
};

  
const stepCounterReducer = (state = initialState, action) => {
	console.log(action);
	const actionHandlers = {
		addStep: () => addStep(state),
		resetSteps: () => resetSteps(state),
		default: () => state,
	};
	
	const actionHandler = actionHandlers[action.type] || actionHandlers.default;
	return actionHandler();
};
  
  export default stepCounterReducer;