import React,{createContext,useState} from 'react';

 export const Context=createContext()
const AuthPriveder = ({children}) => {
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

export default AuthPriveder;
