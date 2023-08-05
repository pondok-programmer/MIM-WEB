import { createContext, useContext, useState } from "react";


const Context = createContext()

export const SteteContext = ({children}) => {
    const [showModal, setShowModal] = useState(false)
    const [isShowPopup, setIsShowPopup] = useState(false)
    const [screenView, setScreenView] = useState(innerWidth <= 485 ? 'mobile' : innerWidth > 485 && innerWidth < 886 ? 'tablet' : innerWidth > 885 ? 'desktop' : null)
return (
    <Context.Provider value={{showModal,setShowModal,isShowPopup,setIsShowPopup,screenView,setScreenView}}>
        {children}
    </Context.Provider>
)
}

export const useSteteContext= () => useContext(Context)