import { useMemo, useRef, useState, type ChangeEvent } from 'react';

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

function useDebounce<T extends (...args: unknown[]) => void>(
  func: T ,
  delay: number): T {

  const timeoutRef = useRef<number | undefined>(undefined)

  function debouncedFunction(...args: Parameters<T>) {
    window.clearTimeout(timeoutRef.current)

    timeoutRef.current = window.setTimeout(() => {
      func(...args)
    }, delay)
  }

  return debouncedFunction as T
}

function App() {
  const [filter, setFilter] = useState('');

  const debouncedFilter = useDebounce(updateFilter, 500)

  function handleFilter(event: ChangeEvent<HTMLInputElement>) {
    setFilter(event.currentTarget.value);
    debouncedFilter(event.currentTarget.value)
  }

  function updateFilter(value: string) {
    setFilter(value);
  }

  const productsFiltered = useMemo(() => {
    if (!filter.trim()) return products;

    return products.filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  function handleMoneyFormat(number: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(number);
  }

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilter}
        placeholder="Filtrar produtos..."
      />

      {productsFiltered.length > 0 ? (
        <ul>
          {productsFiltered.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> -
              {handleMoneyFormat(product.price)}-{product.category} -
              {product.inStock ? 'Em estoque' : 'Fora de estoque'}
            </li>
          ))}
        </ul>
      ) : (
        <span> Produto não encontrado! </span>
      )}
    </div>
  );
}

export default App;
