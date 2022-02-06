import useQuotes from "../useQuotes";

/* näyttää lainausten määrät */

function Counter () {

    const {filteredQuoteCount, totalCount} = useQuotes();
    return (

        <div className="text-xl">
            <p> Total quote count: {totalCount} </p>
            <p> Quotes in view:  {filteredQuoteCount} </p>
        </div>
    )
}

export default Counter;