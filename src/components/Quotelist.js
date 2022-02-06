import useQuotes from "../useQuotes";
import Quote from "./Quote";


/* Elementti, jonka sisään lainaukset haetaan */

const Quotelist = () => {

    

    const{filteredQuotes} = useQuotes();

    if (filteredQuotes.length !=0)
    {
    return (

        
        <div>
            
            <div className="text-2xl font-semibold mx-16 my-12"><h2>Quotes</h2></div>

           
            
            {
                
                filteredQuotes.map(({quote},index) => {
                        return (
                            
                            <Quote key={quote + "-" + index}
                             quote={quote}/>
                        )

                 })

                

            }
            
           
        </div>
    )
        }
        else{
            return(
                <div className="text-2xl font-semibold mx-16 my-12"> No quotes!</div>
            )
        }
}

export default Quotelist;