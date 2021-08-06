import React from 'react'
import './Tasklist.css'
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core';
import Taskcard from '../Taskcard/Taskcard';

const Tasklist = ({taskList, removeFromTaskList}) => {

    console.log(taskList)

    const darkTheme = createTheme({
        palette: {
          primary:{
              main: "#fff"
          },
          type: 'dark',
        },
    });

    return (
        <div className='taskList'>
            {
                (taskList.length === 0) ?
                (
                    <span className='subTitle'>
                        No tasks!
                    </span>
                ) : (
                    <div className='tasks'>
                        {
                            taskList.map((task) => (
                                <Taskcard 
                                taskItem={task} 
                                removeFromTaskList={removeFromTaskList}
                                />
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Tasklist
