import React from 'react'
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import './Header.css'

const Header = ({task, category, setTask, setCategory, addToTaskList}) => {

    const darkTheme = createTheme({
        palette: {
          primary:{
              main: "#fff"
          },
          type: 'dark',
        },
    });

    function handleSubmit(e) {
        e.preventDefault();
        addToTaskList();
    }

    return (
        <div className='header'>
            <span className='title'>DWork</span>
            
                <ThemeProvider theme={darkTheme}>
                    <div className='inputs'>
                        <TextField 
                            className="taskName" 
                            id="outlined-multiline-basic"
                            value = {task}
                            onChange = {(e)=>{setTask(e.target.value)}}
                        />

                        {task &&
                            <FormControl variant="outlined" className=''>
                                <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={category}
                                onChange={(e) => {setCategory(e.target.value)}}
                                label="Category"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        }

                        {task &&    
                            <button type='submit' onClick={handleSubmit}>
                                S    
                            </button>
                        }
                    </div>  
                </ThemeProvider>
            
        </div>
    )
}

export default Header
