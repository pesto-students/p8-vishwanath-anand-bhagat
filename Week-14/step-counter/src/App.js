import './App.css';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
	const steps =  useSelector((state) => state.stepCounter.value);
	const dispatch = useDispatch();
	return (
		<div className="App">
			<h3 className="heading">You've walked {steps} steps today!</h3>

			<div>
				<button className="add_step_btn" onClick={() => {dispatch({type: 'addStep'})}}>Add a Step</button>
			</div>
			<div>
				<button className="reset_steps_btn" onClick={() => {dispatch({type: 'resetSteps'})}}>Reset Steps</button>
			</div>
		</div>
	);
}

export default App;
