"use client"
import { useState, ReactNode,createContext, useContext } from "react"

interface EditorContextProps {
    currentDevice: string
    setCurrentDevice: React.Dispatch<React.SetStateAction<string>>
    zoom: number
    setZoom: React.Dispatch<React.SetStateAction<number>>
}

const Editor = createContext<EditorContextProps | undefined>(undefined)

export const EditorProvider = ({children}: {children: ReactNode}) => {
    const [currentDevice, setCurrentDevice] = useState<string>("desktop");
    const [zoom, setZoom] = useState(1);
    const values = {
        currentDevice,
        setCurrentDevice,
        zoom,
        setZoom
    }
    return (
        <Editor.Provider value={values}>
            {children}
        </Editor.Provider>
    )
}

export const useEditor = () => {
    const context = useContext(Editor)
    if (!context) throw new Error("useEditor must be used with Editor provider")
    return context
}