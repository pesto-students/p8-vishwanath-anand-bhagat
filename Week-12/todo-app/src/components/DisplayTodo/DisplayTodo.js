import React from 'react';
import styles from './DisplayTodo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const DisplayTodo = ({ todos, setTodos }) => {

    const handleTodoCompletion = (e, id) => {
        setTodos((prev) => {
            return prev.map((todo) => {
                if(todo.id === id){
                    todo.completed = e.target.checked;
                }
                return todo;
            });
        })
    }

    const handleTodoDeletion = (id) => {
        let confirmation = window.confirm('Are you sure you want to delete the todo');
        if(!confirmation){
            return ;
        }
        setTodos((prev) => {
            return prev.filter((todo) => {
                if(todo.id === id){
                    return false;
                }
                return true;
            });
        })
    }

    return (
        <div className={styles.main}>
            <div className={styles.todosContainer}>
                {todos.map((todo) => {
                    return (
                        <div className={styles.todoContainer} key={todo.id}>
                            <div className={styles.textCenter}>
                                <input className={styles.checkbox} type="checkbox" checked={todo.completed} onChange={(e) => {handleTodoCompletion(e, todo.id)}}/>
                            </div>
                            <div className={todo.completed ? styles.checked : {}}>
                                {todo.title}
                            </div>
                            <div className={styles.textCenter}>
                                <FontAwesomeIcon icon={faTrash} className={styles.deleteIcon} onClick={(e) => {handleTodoDeletion(todo.id)}}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DisplayTodo