import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <AddTodo />
      <TodoList />
    </main>
  )
}