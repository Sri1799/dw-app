import React, { useState } from 'react';
import './App.css';
import Tasklist from './components/Tasklist/Tasklist'
import Header from './components/Header/Header';
import { Container } from '@material-ui/core';

import firebase from 'firebase/app';


function App() {

  const [task, setTask] = useState('');
  const [category, setCategory] = useState();
  const [taskList, setTaskList] = useState([]);

  function addToTaskList() {
    var taskItem = {}
    taskItem.task = task
    taskItem.category = category 
    
    var prev_taskList = taskList
    prev_taskList.push(taskItem)
    setTaskList(prev_taskList)
    setTask('')
  }

  var removeFromTaskList = (taskId) => {
    const index = taskList.findIndex(taskItem => taskItem.task === taskId)
    var taskList_temp = [...taskList]
    if(index != -1){
      taskList_temp.splice(index, 1)
      setTaskList(taskList_temp)
    }
  }

  return (
    <div className="App" 
    style={{height:'100vh', 
    backgroundColor:"#404040",
    color: "white"}}>
      <Container maxWidth="md" style={{
        display: 'flex',
        flexDirection: "column",
        height: '100vh',
        justifyContent:'space-evenly',
      }}>
        <Header task={task} setTask={setTask} setCategory={setCategory} addToTaskList={addToTaskList} />
        <Tasklist taskList={taskList} removeFromTaskList={removeFromTaskList}/>
      </Container>
    </div>
  );
}

export default App;
