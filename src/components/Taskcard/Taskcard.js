import React from 'react'
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core';
import './Taskcard.css'

const Taskcard = ({taskItem, removeFromTaskList}) => {
    
    return (
        <div>
            {
                <div className='card-container' 
                categoryid={taskItem.category}
                style={{backgroundColor:(taskItem.category==='DW')?('red'):('white'), color:'black'}}>
                    <div className='card-content'>
                        <div className='card-title'>
                            <h3>{taskItem.task}</h3>
                        </div>
                        <div className='card-body'>
                            <p>In 1868, Jo March, a teacher in 
                            New York City, goes to Mr. Dashwood, an 
                            editor who agrees to publish a story she 
                            has written.</p>
                        </div>
                    </div>

                    <div className='btns'>
                        <div className='btn'>
                            <button>
                                <a> View More </a>
                            </button>
                        </div>

                        <div className='btn' taskid={taskItem.task}>
                            <button 
                            onClick={(e) => {
                            // console.log(e.target.parentElement)
                            removeFromTaskList(e.target.parentElement.getAttribute('taskid'))}}>
                                R
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Taskcard
