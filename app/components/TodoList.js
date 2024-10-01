'use client'

import { useState, useEffect } from 'react'
import TodoItem from './TodoItem'

// Component for displaying the list of todos
export default function TodoList() {
  const [todos, setTodos] = useState([])

  // Fetch todos from the API
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('/api/todos')
        if (response.ok) {
          const data = await response.json()
          setTodos(data)
        }
      } catch (error) {
        console.error('Failed to fetch todos:', error)
      }
    }

    fetchTodos()
  }, [])

  // Function to remove a todo
  const removeTodo = async (id) => {
    try {
      const response = await fetch(`/api/todos?id=${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setTodos(todos.filter((todo) => todo.id !== id))
      }
    } catch (error) {
      console.error('Failed to remove todo:', error)
    }
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onRemove={removeTodo} />
      ))}
    </ul>
  )
}