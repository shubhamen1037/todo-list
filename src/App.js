import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Router';


const App = (props) =>{
 
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);
    
  const createTaskList = (newData) => {
      setId(id + 1) ;
      newData.id = id;
      newData.markDone = false;
      let reverseData = [...data, newData].sort((a, b) => (a.id < b.id) ? 1 : -1)
      setData(reverseData);
  }

  const markedAsDone = (id)=>{
    let index = data.findIndex(data => data.id === id);
    const newData = data[index];
    data.splice(index, 1);
    newData.markDone = true;
    let reverseData = [...data, newData].sort((a, b) => (a.id < b.id) ? 1 : -1)
    setData(reverseData);
    console.log(index)
  }
  console.log(data, "AA")
  
  
  return (
    <Router createTaskList={createTaskList} data={data} markedAsDone={markedAsDone}/>
  )
}

export default App;


