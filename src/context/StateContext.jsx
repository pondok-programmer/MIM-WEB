import { createContext, useContext, useState } from "react";


const Context = createContext()

export const SteteContext = ({children}) => {
    const [showModal, setShowModal] = useState(false)
    const [isShowPopup, setIsShowPopup] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 885)
return (
    <Context.Provider value={{showModal,setShowModal,isShowPopup,setIsShowPopup,isMobile,setIsMobile}}>
        {children}
    </Context.Provider>
)
}

export const useSteteContext= () => useContext(Context)