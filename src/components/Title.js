import useQuotes from "../useQuotes";

function Title() {

    /* Otsikko */ 

    const{apptitle} = useQuotes ();

return(
    <div className="pt-4 pb-16 ">   

<h1 className="text-3xl font-semibold ml-64 pl-64">{apptitle}</h1>
</div>
)
}

export default Title;