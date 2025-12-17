import { useState } from "react";

function ListaCompras({items, formatCurrency, handleEditItem}) {
    // Estado local para controlar qual item está sendo editado
    const [editandoItemId, setEditandoItemId] = useState(null)
    const [editName, setEditName] = useState('')
    const [editPrice, setEditPrice] = useState('')

    // const lidandoFeito = () => {

    // }

    const iniciarEditcao = (id_item, atualName, atualPrice) => {
        setEditandoItemId(id_item)
        setEditName(atualName)
    // Converta o preço para string para preencher o input type="number"
        setEditPrice(String(atualPrice))
    }

    // Salvar edição
    const saveEditing = (id_item) => {
        // Implementa a validação básica aqui (como no App.jsx/handleAddItem)
        if (!editName.trim() || isNaN(parseFloat(editPrice))) {
            alert('Dados inválidos. Por favor, preencha corretamente.')
            return
        }
        // Chama a função passada via props para atualizar o item
        handleEditItem(id_item, {
            name: editName.trim(),
            price: parseFloat(editPrice)
        })

        // Sai do modo de edição
        setEditandoItemId(null)
    }

    return(
        <ul>
            {items.map((item, id_item) => (
                <li key={id_item}>
                    {editandoItemId === id_item ? (
                        // modo de edição
                        <div className="edit-mode">
                            <div className="editingItem">
                                <input
                                    type="text"
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                />
                                <input
                                    type="number"
                                    value={editPrice}
                                    onChange={(e) => setEditPrice(e.target.value)}
                                    step="0.01"
                                />
                            </div>
                            <div className="edit-buttons">
                                <button onClick={() => saveEditing(id_item)}>Salvar</button>
                                <button onClick={() => setEditandoItemId(null)}>Cancelar</button>
                            </div>
                        </div>
                    ) : (
                        // modo visualização
                        <div className="view-mode">
                            <div className="view-items">
                                {item.name} - {formatCurrency(item.price)}
                            </div>
                            <div className="view-button">
                                <button onClick={() => iniciarEditcao(id_item, item.name, item.price)} >Editar</button>
                            </div>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default ListaCompras;