import {createContext, useContext, useRef, useState} from "react";

// @ts-ignore
export const ColorCubeContext = createContext();

export const CubeProvider = ({children}: any) => {
    const [color, setColor] = useState("red");
    const ref = useRef();
    return (
        <ColorCubeContext.Provider value={{color, setColor, ref}}>
            {children}
        </ColorCubeContext.Provider>
    )
}

export const useCube = () => {
    const context = useContext(ColorCubeContext);
    if(context === undefined){
        throw new Error("theme must be used within a provider")
    }
    return context;
}