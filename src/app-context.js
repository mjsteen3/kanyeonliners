import { createContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";



const AppContext = createContext ([{}, () => {}])


const AppProvider = ({children}) => {


    let quotes = [
       
    ];



    const [state, setState] = useState({

        quotes: quotes,
        filteredQuotes: quotes,
        filterby: "quote",
        wordCount: '1',
    })

    


    return (


        <AppContext.Provider value={[state, setState]} >


            {children}
        </AppContext.Provider>
    )
}


export  {AppContext,AppProvider};