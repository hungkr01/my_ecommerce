import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast'; //để tạo thông báo đẹp

const Context = createContext(); //hook

export const StateContext = ({children}) => {
    //tạo các state
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setqty] = useState(1);

    let foundProduct;
    let index;

    const onAdd = (product, quantity) => {
        //kiểm tra sản phẩm đã có trong giỏ hàng chưa
        const checkProductInCart = cartItems.find((item) => item._id === product._id);
        
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price*quantity); // tính tổng tiền
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity); // tính tổng số lượng
        
        if(checkProductInCart) {
            //cập nhật item có trong giỏ hàng
            const updatedCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })
            setCartItems(updatedCartItems);
            
        } else {
            product.quantity = quantity;
            //spread tất cả cartItems tồn tại và thêm 1 object ở nơi mà ta spread sản phẩm mới
            setCartItems([...cartItems,{...product}]);
            
        }
        toast.success(`Có ${qty} ${product.name} đã được thêm vào giỏ`); //thông báo
    }
    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);
    
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price*foundProduct.quantity);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
        setCartItems(newCartItems);
    }
    const toggleCartItemQuanitity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id === id)
        index = cartItems.findIndex((product) => product._id === id);
        const newCartItems = cartItems.filter((item) => item._id !== id)
    
        if(value === 'inc') {
          setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
          setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
          setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
        } else if(value === 'dec') {
          if (foundProduct.quantity > 1) {
            setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
          }
        }
    }
    const incQty = () => {    //tăng số lượng
        setqty((prevQty) => prevQty +1);
    }
    const decQty = () => {    //giảm số lượng
        setqty((prevQty) => {
            if(prevQty - 1 < 1) return 1;
            return prevQty -1;
        });
    }
    return (
        <Context.Provider value={{
            showCart, setShowCart, cartItems, totalPrice, totalQuantities, qty,
            incQty, decQty, onAdd, toggleCartItemQuanitity, onRemove,
            setCartItems, setTotalPrice, setTotalQuantities
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);