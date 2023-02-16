import React, { useState } from 'react'

const ItemCount = ({stock}) => {
    const [items, setItems] = useState (1);
    const [itemStock, setItemStock] = useState(stock)

    const aumentoStock = () => {
        if (items < itemStock) {
        setItems (items + 1);
        }
    }

    const descensoStock = () =>{
        if (items > 1) {
        setItems (items - 1);
        }
    }

    const onAdd = () => {
        if (itemStock >= items) {
            setItemStock (itemStock - items);
            setItems (1);
            console.log ("Agregaste: " + items + " productos al carrito")
        }
    }



  return (
    <div className='container'>
        <div className="row my-1">
            <div className="col">
                <div className="btn-group">
                    <button className="btn btn-warning" onClick={descensoStock}>-</button>
                    <button className="btn btn-warning">{items}</button>
                    <button className="btn btn-warning"onClick={aumentoStock}>+</button>
                </div>
            </div>
        </div>
        <div className="row my-1">
            <div className="col">
                <button type="button" className="btn btn-warning" onClick={onAdd}>Agregar al Carrito</button>
            </div>
        </div>
    </div>
    )
}

export default ItemCount