const initialState = {
	value: true,
};

export const switchChange = (state) => {
	return {
		...state,
		value: !state.value,
	};
};

  
const switchReducer = (state = initialState, action) => {
	const actionHandlers = {
		switchChange: () => switchChange(state),
		default: () => state,
	};
	
	const actionHandler = actionHandlers[action.type] || actionHandlers.default;
	return actionHandler();
};
  
  export default switchReducer;