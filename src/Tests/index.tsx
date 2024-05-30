import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

// Define the structure of a Todo item
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

;

// Helper function to simulate fetching data
const fetchTodos = (): Promise<Todo[]> => new Promise(resolve => {
  setTimeout(() => {
    resolve([
      { id: 1, text: 'Learn React', completed: true },
      { id: 2, text: 'Build a Todo App', completed: false },
      { id: 3, text: 'Profit!', completed: false }
    ])
  }, 1000)
})

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<string>('all')
  const [sortOrder, setSortOrder] = useState<string>('asc')
  const inputRef = useRef<React.HTMLInputElement>(null)

  // Fetch todos when the component mounts
  useEffect(() => {
    const loadTodos = async () => {
      const fetchedTodos = await fetchTodos()

      setTodos(fetchedTodos)
    }

    loadTodos()
  }, [])

  // Handle adding a new todo
  const addTodo = useCallback(() => {
    const text = inputRef.current?.value.trim()

    if (text) {
      setTodos(prevTodos => [
        ...prevTodos,
        { id: Date.now(), text, completed: false }
      ])

      if (inputRef.current) {
        inputRef.current.value = ''
      }
    }
  }, [])

  // Handle toggling the completion state of a todo
  const toggleTodo = useCallback((id: number) => {
    setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }, [])

  // Handle changing the filter state
  const handleFilterChange = useCallback((event: React.ChangeEvent<React.HTMLSelectElement>) => {
    setFilter(event.target.value)
  }, [])

  // Handle changing the sort order
  const handleSortChange = useCallback((event: React.ChangeEvent<React.HTMLSelectElement>) => {
    setSortOrder(event.target.value)
  }, [])

  // Filter and sort todos based on current state
  const filteredAndSortedTodos = useMemo(() => {
    const filteredTodos = todos.filter(todo => {
      if (filter === 'completed') return todo.completed

      if (filter === 'incomplete') return !todo.completed

      return true
    })

    return filteredTodos.sort((a, b) => {
      if (sortOrder === 'asc') return a.text.localeCompare(b.text)

      return b.text.localeCompare(a.text)
    })
  }, [todos, filter, sortOrder])

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input ref={inputRef} type="text" placeholder="New todo" />
        <button type="button" onClick={addTodo}>Add Todo</button>
      </div>
      <div>
        <label>
          Filter:
          <select value={filter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </label>
        <label>
          Sort:
          <select value={sortOrder} onChange={handleSortChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
      <ul>
        {filteredAndSortedTodos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button type="button" onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoApp
