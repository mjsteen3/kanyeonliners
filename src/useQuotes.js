import { useContext, useEffect} from "react";
import { AppContext } from "./app-context";


/* Tilanhallinta */


const apptitle= "Kanye Oneliners";

const useQuotes = () => {
  const [state,setState] = useContext(AppContext);


  useEffect (() => {

    filterQuotes();
  

},[state.wordCount,state.quotes]);




const filterQuotes = () => {
    let filtered = state.quotes.filter((quote) => {
        return (quote[state.filterby]
          .split(' ').length >= state.wordCount
        
   );
      });
     
      setState({...state,filteredQuotes:filtered})
  

}


  const addQuote = (quote) =>{


  

    let new_quotes = [...state.quotes,quote];
    setState({...state,quotes:new_quotes})

    
}

const filterChange = (filter) => {
    
    setState({...state,wordCount:filter})
 };


 const deleteQuote = (s) => {
    let new_quotes = state.quotes.filter(quote => {
        return !(s.quote === quote.quote)

        
    })
    setState({...state,quotes:new_quotes})
 }



 const loadKanye = async () => {
     const API_URL ="https://api.kanye.rest/";

     let response = await fetch(API_URL);

     console.log(response);
     let data = await response.json()
     addQuote(data)
 }
 const deleteAll = (quotes) => {

    let new_quotes2 = []
    setState({...state,quotes:new_quotes2})
 }



return {
    quoteAdd : addQuote,
    filteredQuotes: state.filteredQuotes,
    wordCount : state.wordCount,
    filterChange,
    deleteQuote,
    deleteAll,
    filteredQuoteCount: state.filteredQuotes.length, 
    totalCount: state.quotes.length,
    loadKanye,
    apptitle,
};

};

export default useQuotes;