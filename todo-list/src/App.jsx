import CreateButton from './CreateButton'
import TodoCounter from './TodoCounter'
import TodoList from './TodoList'
import TodoSearch from './TodoSearch'
import TodoItem from './TodoItem'

function App() {

  return (
    <>
      <div className="flex items-center justify-center h-screen text-cen">
        <div className="text-center">
          <TodoCounter />
          <TodoSearch />

          <TodoList>
            <TodoItem />
          </TodoList>
          <CreateButton />
        </div>
      </div>
    </>
  );
}

export default App
