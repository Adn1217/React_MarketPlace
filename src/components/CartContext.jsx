import React, {useState} from 'react';

export const CartContext = React.createContext();

const CartProvider = ({defaultValue = [], children}) =>{

    const [cartItems, setCartItems] = useState(defaultValue);

    function getFromCart (id) {
        return cartItems.find(item => item.id === id)
    }

    function isInCart (id) {
        let itemInCart = getFromCart(id);
        return itemInCart 
    }

    console.log("Items en carrito: ", cartItems)
    const addItem = (newItem, seleccionados) =>{

        if (cartItems.length == 0) {
            newItem = {...newItem, seleccionados} 
            setCartItems([...cartItems, newItem]);
            console.log('Se agregó el item al carrito');
        }else{
            newItem.id ?? console.log("Item no definido.");
            let itemInCart = newItem.id>=0 && (isInCart(newItem.id)); 
            itemInCart ?? console.log("No se encuentra en el carrito.")
            if (itemInCart) {
                itemInCart.seleccionados = itemInCart.seleccionados + seleccionados;
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
        let item = cartItems.filter(item => item.id === id)
        if (item !== []){
            console.log("Se eliminó", item.id)
            setCartItems(cartItems.splice(item,1))
        }else {
            console.log("El item no se encontraba en el carrito");
        }
    }

    function clear() {
        setCartItems([]);
    }
    

    return <CartContext.Provider value = {{cartItems, getFromCart, addItem, removeItem, clear, isInCart}}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;