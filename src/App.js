import Title from './components/Title.js';
import Filter from './components/Filter.js';
import Fetch from './components/Fetch.js';
import Delete from './components/Delete.js';
import Quotelist from './components/Quotelist.js';
import Counter from './components/Counter.js';


function App() {
 
 

  return (
    <div className="bg-gray-100 h-screen">
    
    <div >
      <Title />
      

<div className="flex flex-row items-center">
    <div className="basis-1/3 ">
      <Fetch/>
      <br></br>
      <Delete />
</div>
      <div className="basis-1/3">
        <Filter />
</div>
<div className="basis-1/3">
        <Counter /> </div>
      </div>
      <Quotelist />
      
      
    </div>
    </div>
  
  );
}

export default App;
