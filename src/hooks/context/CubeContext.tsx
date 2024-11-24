import {createContext, useContext, useRef, useState} from "react";

// @ts-ignore
export const CubeContext = createContext();

export const CubeProvider = ({children}: any) => {
    const [color, setColor] = useState("white");
    const ref = useRef();
    return (
        <CubeContext.Provider value={{color, setColor, ref}}>
            {children}
        </CubeContext.Provider>
    )
}

export const useCube = () => {
    const context = useContext(CubeContext);
    if(context === undefined){
        throw new Error("theme must be used within a provider")
    }
    return context;
}