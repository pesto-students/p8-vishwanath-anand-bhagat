import { useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import DisplayTodo from './components/DisplayTodo/DisplayTodo';
import Header from './components/Header/Header';

const App = () => {
	const [todos, setTodos] = useState([
		{
			title: 'This is my first todo.',
			completed: false,
			id: 0
		},
		{
			title: 'This is my second todo.',
			completed: false,
			id: 1
		}
		,
		{
			title: 'This is my completed todo.',
			completed: true,
			id: 2
		}
	]);
	const [newTodo, setNewTodo] = useState("");
	const [error, setError] = useState("");

	const handleAddNewTodo = (e) => {
		e.preventDefault();
		setError('');
		if(newTodo){
			setTodos((prev) => {
				return [...prev, {
					title: newTodo,
					completed: false,
					id: prev.length
				}];
			});
			setNewTodo("");
		}else{
			setError('Please enter some text to add new todo');
		}
	}

	return (
		<div className="App">
			<Header />
			<AddTodo newTodo={newTodo} setNewTodo={setNewTodo} error={error} handleAddNewTodo={handleAddNewTodo} />
			<DisplayTodo todos={todos} setTodos={setTodos} />
		</div>
	);
}

export default App;
