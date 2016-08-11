import React from 'react';

import AddToDo from './components/AddToDo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';


const App = React.createClass({
  render() {
    return (
      <div>
        <AddToDo
          onAddClick={text =>
            console.log('add todo', text)
          } />
        <TodoList
          todos={[
            {
              text: 'Use Redux',
              completed: true
            },
            {
              text: 'Learn to connect it to React',
              completed: false
            }
          ]}
          onTodoClick={todo =>
            console.log('todo clicked', todo)
          } />
        <Footer
          filter='SHOW_ALL'
          onFilterChange={filter =>
            console.log('filter change', filter)
          } />
      </div>
    )
  }
})

export default App;
