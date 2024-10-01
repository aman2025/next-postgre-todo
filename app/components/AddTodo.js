'use client'

import { useState } from 'react'
import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'

// Component for adding a new todo item
export default function AddTodo() {
  const [title, setTitle] = useState('')

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title) return

    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
      })

      if (response.ok) {
        setTitle('')
        // Trigger a re-fetch of the todo list
        // You might want to use a state management solution or SWR for better UX
        window.location.reload()
      }
    } catch (error) {
      console.error('Failed to add todo:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new todo"
        className="flex-grow"
      />
      <Button type="submit">Add Todo</Button>
    </form>
  )
}