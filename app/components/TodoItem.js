import { Button } from '@/app/components/ui/button'

// Component for displaying a single todo item
export default function TodoItem({ todo, onRemove }) {
  return (
    <li className="flex items-center justify-between p-2 bg-white rounded shadow">
      <span>{todo.title}</span>
      <Button variant="destructive" onClick={() => onRemove(todo.id)}>
        Remove
      </Button>
    </li>
  )
}