import { useDispatch, useSelector } from 'react-redux';

const App = () => {
	const isLightOn =  useSelector((state) => state.switch.value);
	const dispatch = useDispatch();
	return (
		<div className={`room ${isLightOn? "lit" : "dark"}`}>
			the room is {isLightOn? "lit" : "dark"}
			<br />
			<button onClick={() => {dispatch({
				type: 'switchChange',
			})}}>flip</button>
		</div>
	);
}

export default App;
