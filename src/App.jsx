// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>Lista de compras</h1>
        <p>Gerencie seus itens de foma simples e organizada!</p>
      </header>
      <section>
        <div className="boxAddItems">
          <h2>Adicionar item</h2>
          <div className="addItems">
            <input type="text" name="item" placeholder='Nome do item'/>
            <input type="number" name="valor" placeholder='Valor (R$)'/>
            <button>+ Adicionar</button>
          </div>
        </div>
        <div className="itemsList">
          <div className="items">
              <p>Nenhum item na lista</p>
              <p>Adicione itens acima para começar</p>
          </div>
        </div>
      </section>
      
      
    </>
  )
}

export default App
