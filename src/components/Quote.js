import useQuotes from "../useQuotes";

/* Yksittäinen lainaus ja sen delete-nappi */


function Quote ({quote}) {

   const {deleteQuote} = useQuotes();

   const deleteClick = () => {
      deleteQuote({quote});
   }
   return (
    
        <div className="border-2 mx-16 border-black w-1/2  flex flex-row inline-block mt-2 bg-white">
        <div className="w-3/4 my-4 mx-6 ">{quote}</div>
        <div className="w-1/4 my-4 "><input onClick={deleteClick} className="btn btn-red" type="button" value="Delete"></input></div>
    </div>

   )

}


export default Quote;