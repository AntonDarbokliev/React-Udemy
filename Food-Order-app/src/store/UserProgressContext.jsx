import { Children, createContext, useState } from "react";

export const UserProgressContext = createContext({
    progress : '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},
})

export default function UserProgressContextProvider({children}) {
    const [progress,setProgress] = useState('')

    function showCart(){
        setProgress('cart')
    }

    function hideCart(){
        setProgress('')
    }

    function showCheckout() {
        setProgress('checkout')
    }

    function hideCheckout() {
        setProgress('')
    }

    const contextValue = {
        progress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }

    return (
        <UserProgressContext.Provider value={contextValue}>
            {children}
        </UserProgressContext.Provider>
    )

}

