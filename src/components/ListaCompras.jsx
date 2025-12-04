function ListaCompras({items, formatCurrency}) {

    return(
        <ul>
            {items.map((item, id_item) => (
                    <li key={id_item}>
                    {item.name} - {formatCurrency(item.price)}
                    </li>
                    )
                )
            }
        </ul>
    )
}

export default ListaCompras;