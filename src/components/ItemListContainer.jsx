import React, { useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import arrayProductos from '/json/productos.json';

const ItemListContainer = () => {
  const [items, setItems] = useState ([]);
      
      useEffect (() => {
        const promesa = new Promise ((resolve) => {
          setTimeout (() => {
            resolve (arrayProductos);
          }, 2000)    
        });

        promesa.then ((respuesta) => {
            setItems (respuesta);
        })
      }, []);
      
  return (
    <div className='container my-5'>
      <ItemList items = {items}/>
      <ItemCount stock ={10}/>
    </div>
    
  )
}

export default ItemListContainer