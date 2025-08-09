import { useEffect, useMemo, useState, type ChangeEvent } from 'react';

const products = [
  {
    id: 1,
    name: 'Notebook Dell',
    price: 2599.99,
    category: 'Eletrônicos',
    inStock: true,
  },
  {
    id: 2,
    name: 'Mouse Logitech',
    price: 89.9,
    category: 'Periféricos',
    inStock: false,
  },
  {
    id: 3,
    name: 'Teclado Mecânico',
    price: 299.99,
    category: 'Periféricos',
    inStock: true,
  },
  {
    id: 4,
    name: 'Monitor 4K',
    price: 1299.0,
    category: 'Eletrônicos',
    inStock: true,
  },
  {
    id: 5,
    name: 'Webcam HD',
    price: 159.99,
    category: 'Periféricos',
    inStock: false,
  },
  {
    id: 6,
    name: 'Headset Gamer',
    price: 249.9,
    category: 'Periféricos',
    inStock: true,
  },
];

function useDebounce<T>(value: T, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timeout)
  }, [value, delay])

  return debouncedValue
}

function App() {
  const [filter, setFilter] = useState('');

  const debouncedFilter = useDebounce(filter)


  function handleFilter(event: ChangeEvent<HTMLInputElement>) {
    setFilter(event.currentTarget.value);
  }

  const productsFiltered = useMemo(() => {
    if (!debouncedFilter.trim()) return products;

    return products.filter((product) =>
      product.name.toLowerCase().includes(debouncedFilter.toLowerCase())
    );
  }, [debouncedFilter]);

  function handleMoneyFormat(number: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(number);
  }

  return (
    <div style={{display: "flex", flexDirection: "column", gap: "8px", width: "10%"}}>
      <input
        type="text"
        value={filter}
        onChange={handleFilter}
        placeholder="Filtrar produtos..."
      />

      {productsFiltered.length > 0 && (filter !== "" && debouncedFilter === "") ? (
        <span>Carregando...</span>
      ) : (productsFiltered.length > 0 ? (<ul>
        {productsFiltered.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> -
            {handleMoneyFormat(product.price)}-{product.category} -
            {product.inStock ? 'Em estoque' : 'Fora de estoque'}
          </li>
        ))}
      </ul>) :
        (<span> Produto não encontrado! </span>)
      )}
    </div>
  );
}

export default App;
