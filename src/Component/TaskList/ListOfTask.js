import React, {  } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListOfTask.css'
import Task from './Task';

const TaskList = ({data, markedAsDone, markDone}) => {
    return   <div className = "list-container">
          {
            data.map(task =>  <Task task = {task} key ={data.id} markedAsDone={markedAsDone} markDone={markDone}/>)
          }
      </div>
  }
export default TaskList;


