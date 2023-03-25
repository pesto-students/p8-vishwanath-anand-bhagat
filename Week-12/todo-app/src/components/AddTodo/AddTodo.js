import React from 'react';
import styles from './AddTodo.module.css';

const AddTodo = ({ newTodo, setNewTodo, error, handleAddNewTodo }) => {
    const handleOnChange = (e) => {
        setNewTodo(e.target.value);
    }
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div>
                    <h4>New Todo</h4>
                </div>
                <div className={styles.inputContainer}>
                    <input className={styles.input} type="text" value={newTodo} onChange={handleOnChange} placeholder="Enter your task here"/>
                    <div className={styles.error}>{error}</div>
                </div>
                <div>
                    <button className={styles.button} onClick={handleAddNewTodo}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo;