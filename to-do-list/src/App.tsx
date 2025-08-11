import { useState, type FormEvent } from 'react'

interface Task {
  id: string
  title: string,
}

function App() {
  const [inputValue, setInputValue] = useState("")
  const [tasks, setTask] = useState<Task[]>([])

  function addTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setTask([
      ...tasks,
      {
        id: window.crypto.randomUUID(),
        title: inputValue
      }
    ])

    setInputValue("")
  }

  function deleteTask(taskWillBeRemoved: Task) {
    setTask(
      tasks.filter((task) => task.id !== taskWillBeRemoved.id)
    )
  }

  return (
    <>
      <form onSubmit={addTask}>
        <input type="text" value={inputValue} onChange={(e) => { setInputValue(e.currentTarget.value) }} />
      </form>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ marginBottom: "8px" }}
          >{task.title + " - " + task.id}
            <button
              onClick={() => deleteTask(task)}
              style={{ marginLeft: "8px" }}
            > X </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
