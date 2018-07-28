import React from "react"



class App extends React.Component {
    state = {
        // state is an object
        todos: [
            // this is properties
            {
                description: 'buy apples',
                isDone: false
            },
            {
                description: 'buy oranges',
                isDone: true
            }
        ], 
        newTodoDescription: "",

    }
    
    handleOnChange = event => {
        const { name,value } = event.target;
    
        this.setState({
            newTodoDescription: value,
            [name]: value,
        })
    }


    handleTodoClick = (currentTodo) => {
        if (currentTodo.isDone) {
            currentTodo.isDone = false;
        } else {
            currentTodo.isDone = true;
        }
    
        const updatedState = {
            todos: this.state.todos
        }

        this.setState(updatedState)

    };

    handleAddTodo = () => {
        // step 1: get new todo description
        const newTodoDescription = this.state.newTodoDescription
        // step 2: create new todo object from the description
        const newTodo = {
            description: newTodoDescription,
            isDone: false,
        };
        // step 3: update react component state
        const newTodos = [
            ...this.state.todos,
            newTodo,
        ];

        this.setState({
            todos: newTodos,
        });

    }

    render() {
        
        return <div>
            <h1>To do list</h1>
            <label htmlFor ="newTodoDescription">Add Todo </label>

            <input 
            type="text" 
            value={this.state.newTodoDescription}
            name="newTodoDescription"
            id="newTodoDescription"
            onChange={this.handleOnChange}
            />
            <button onClick={this.handleAddTodo}>+</button>
            <ul>
                {this.state.todos.map((todo) => {
                    let completeClass = ""

                    if (todo.isDone) {
                        completeClass = "complete";
                    }
                    return <li className={completeClass}
                    onClick={() => this.handleTodoClick(todo)}>{todo.description}</li>
                // className is fixed name to use, completeClass can be changed
                })}
            </ul>
        </div>
    }
}

export default App 

// option shift F to auto format code in  VisualCode