import { useContext, useState } from "react";
import { AppContext } from "../app-context";
import useQuotes from "../useQuotes";

/* hakee yhden lainauksen */

const Fetch = () => {

    const {quoteAdd} = useQuotes();

    const [state,setState] = useContext(AppContext)

    const [quote,setQuote] = useState("");
   

   const {loadKanye} = useQuotes ();



   
return (



<div>

<div className="w-48  border-2 border-black mx-16 pl-8 bg-green-200 rounded"
    onClick={loadKanye}>Fetch 1 quote</div>
    


</div>




)



}

export default Fetch;