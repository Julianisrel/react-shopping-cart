import { createContext } from 'react';



// object here will be comprised of the object set on the value prop of the provider component.
const CartContext = createContext({
    cart: [],

    setCart: () => {}
    })











    export default CartContext;