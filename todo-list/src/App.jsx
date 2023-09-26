import CreateButton from './CreateButton'
import TodoCounter from './TodoCounter'
import TodoList from './TodoList'
import TodoSearch from './TodoSearch'
import TodoItem from './TodoItem'

function App() {

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        
        <div className="text-center border-4 p-5 rounded-lg mb-4">
          <CreateButton />
        </div>

        <div className="text-center border-4 p-5 rounded-lg">
          <TodoCounter />
          <TodoSearch />

          <TodoList>
            <TodoItem />
          </TodoList>
        </div>
      </div>
    </>
  );
}

export default App
