import { useMemo, useState, type ChangeEvent } from "react";

const items = [
  { id: 1, name: "Maçã" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Laranja" },
  { id: 4, name: "Abacaxi" },
  { id: 5, name: "Morango" },
  { id: 6, name: "Manga" },
];

function App() {
  const [filter, setFilter] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFilter(event.currentTarget.value)
  }

  const filteredItems = useMemo(() => {
    if (!filter.trim()) return []

    return items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
  }, [filter])

  return (
    <>
      <input type="text" value={filter} onChange={handleChange} />

      <ul>
        {filteredItems.map(item => (<li key={item.id}>{item.name}</li>))}
      </ul>
    </>
  )
}

export default App
