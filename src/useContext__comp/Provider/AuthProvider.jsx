import React,{createContext,useState} from 'react';

 export const Context=createContext()
const AuthProvider = ({children}) => {
    const[lang,setlang]=useState("uz")
    return (
        <Context.Provider value={{lang,setlang}}>
            <Context.Consumer>
                {
                    () => children
                }
            </Context.Consumer>
        </Context.Provider>
    );
}

export default AuthProvider;
