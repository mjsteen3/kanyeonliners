import useQuotes from "../useQuotes";


 

function Filter () {

    
    const {filterChange,wordCount} = useQuotes();


   
    return (

    <div className="font text-lg">
        <p>Word count filter: </p>
        <input type="number" min={1} name="filter" id="counter" value={wordCount}
        onChange={ (e) => { 
			if (e.target.value < 1) { 
			e.target.value = 1;
			return; 
			}
			filterChange(e.target.value);
		}}
        style={{border:"1px solid"}}></input>
      
    </div>
        )

}

export default Filter;