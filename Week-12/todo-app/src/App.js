import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Header from './components/Header/Header';

const App = () => {
	const [todos, setTodos] = useState([]);
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
		</div>
	);
}

export default App;
