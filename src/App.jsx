// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'

function App() {
  // Estado para nome do item
  const [itemName, setItemName] = useState('')
  // Estado para preço do item
  const [price, setPrice] = useState('')
  // Estado para lista de itens: array [name, price]
  const [items, setItems] = useState([])
  // Estado para mensagem de erro simples
  const [error, setError] = useState('')
  // Função para formatar  valor como moeda BRL
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL'
     }).format(value)
  }
  // Função chamada ao clicar no botão de adicionar item
  const handleAddItem = () => {
    // Emite erro se nome do item estiver vazio
    setError('')
    // Salvar o nome na variavel name, removendo espaços em branco no início e no fim
    const name = itemName.trim()
    // verifica se o nome está vazio
    if(!name){
      setError('Por favor, insira o nome do item.')
      return // Se houver um erro de validação, o return interrompe a execução da função imediatamente
    }
    if(!price.trim()){
      setError('Por favor, insira o valor do item.')
      return
    }
    // Aceita vírgula ou ponto como separador decimal
    const normalized = price.replace(',', '.')
    // Converte o valor para número de ponto flutuante
    const parsed = parseFloat(normalized)
    if(isNaN(parsed)){
      setError('Por favor, insira um valor numérico (ex: 12.50 ).')
      return
    }
    // Criar novo item e atualizar lista
    const newItem = { name, price: parsed}
    setItems(prev => [...prev, newItem ])
    // limpa campos
    setItemName('')
    setPrice('')
  }
  // Permitir enviar com Enter no campo do preço
  const handleKeyDown = (e) => {
    if(e.key ==='Enter') handleAddItem()
  }

  return (
    <>
      <header>
        <h1>Lista de compras</h1>
        <p>Gerencie seus itens de forma simples e organizada!</p>
      </header>
      <section>
        <div className="boxAddItems">
          <h2>Adicionar item</h2>
          <div className="addItems">
            <input
             type="text" 
             name="item" 
             placeholder='Nome do item'
             value={itemName}
             onChange={(e) => setItemName(e.target.value)}
             />
            <input 
            type="number" 
            name="valor" 
            placeholder='Valor (R$)'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            onKeyDown={handleKeyDown}
            step="0.01"
            />
            <button onClick={handleAddItem}>+ Adicionar</button>
          </div>
          {error && <p className="error">{error}</p>}
        </div>
        <div className="itemsList">
          <div className="items">
              {items.length === 0 ? (
                <>
                  <p>Nenhum item na lista</p>
                  <p>Adicione itens acima para começar</p>
                </>
              ) : (
                <ul>
                  {items.map((item, id_item) => (
                    <li key={id_item}>
                      {item.name} - {formatCurrency(item.price)}
                    </li>
                  ))}
                </ul>
              )}
          </div>
        </div>
      </section>
      
      
    </>
  )
}

export default App
