import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET handler to fetch all todos
export async function GET() {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(todos)
  } catch (error) {
    console.error('Failed to fetch todos:', error)
    return NextResponse.json({ error: 'Failed to fetch todos' }, { status: 500 })
  }
}

// POST handler to create a new todo
export async function POST(request) {
  try {
    const { title } = await request.json()
    const todo = await prisma.todo.create({
      data: { title },
    })
    return NextResponse.json(todo, { status: 201 })
  } catch (error) {
    console.error('Failed to create todo:', error)
    return NextResponse.json({ error: 'Failed to create todo' }, { status: 500 })
  }
}

// DELETE handler to remove a todo
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    await prisma.todo.delete({
      where: { id },
    })
    return NextResponse.json({ message: 'Todo deleted successfully' })
  } catch (error) {
    console.error('Failed to delete todo:', error)
    return NextResponse.json({ error: 'Failed to delete todo' }, { status: 500 })
  }
}