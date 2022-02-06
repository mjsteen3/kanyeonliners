import useQuotes from "../useQuotes";

/* vastaa Delete all quotes napin toiminnasta */

function Delete (){

    const {deleteAll} = useQuotes ();

    const deleteAllClick = () => {
        deleteAll()

    }
    return (

        <div>
            <div className="w-48  border-2 border-black mx-16 pl-8 bg-red-500 text-white rounded" onClick={deleteAllClick}>Delete all quotes</div>
        </div>
    )
}


export default Delete;