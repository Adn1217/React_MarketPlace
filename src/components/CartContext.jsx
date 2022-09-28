import React, {useEffect, useState} from 'react';

export const CartContext = React.createContext();

const CartProvider = ({defaultValue = [], children}) =>{

    const [cartItems, setCartItems] = useState(defaultValue);
    const [selectedItemId, setSelectedItemId] = useState(defaultValue);

    useEffect (() => {
        console.log("Items en carrito: ", cartItems)
    }, [cartItems])

    function getFromCart (id) {
        return cartItems.find(item => item.id === id)
    }

    function isInCart (id) {
        let itemInCart = getFromCart(id);
        return itemInCart 
    }

    const addItem = (newItem, seleccionados) =>{

        if (cartItems.length === 0) {
            newItem = {...newItem, seleccionados} 
            setCartItems([...cartItems, newItem]);
            console.log('Se agregó el item al carrito');
        }else{
            newItem.id ?? console.log("Item no definido.");
            let itemInCart = isInCart(newItem.id); 
            itemInCart ?? console.log("No se encuentra en el carrito.")
            if (itemInCart) {
                itemInCart.seleccionados = itemInCart.seleccionados + seleccionados;
                setCartItems([...cartItems])
                console.log('Item ya se encuentra en carrito. Se suma cantidad. Total: ', itemInCart.seleccionados);
            }
            else {
                newItem = {...newItem, seleccionados} 
                setCartItems([...cartItems, {...newItem}]);
                console.log('Se agregó el item al carrito');
            }
        }
    }

    function removeItem (id) {
        let index = cartItems.findIndex(item => item.id === id)
        if (index >= 0){
            console.log("Se eliminó el item: ", cartItems[index])
            cartItems.splice(index,1)
            setCartItems([...cartItems])
        }else {
            console.log("El item no se encontraba en el carrito");
        }
    }

    function clear() {
        setCartItems([]);
    }
    

    return <CartContext.Provider value = {{selectedItemId, setSelectedItemId, cartItems, getFromCart, addItem, removeItem, clear, isInCart}}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;