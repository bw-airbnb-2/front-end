import React, { useState, useEffect } from 'react';
import './SignUp.css'
import * as yup from 'yup'
import schema from './SignUp-Schema'
import axios from 'axios'
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

// Material UI
import { Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';


// Material UI
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function SignUp(props) {

    const classes = useStyles();
    const history = useHistory();

    // Info state
    const [info, setInfo] = useState({

        id: Date.now(),
        name: '',
        email: '',
        phone: '',
        password: '',
        termStatus: false,

    })

    // Error State
    const [error, setError] = useState({

        name: '',
        email: '',
        phone: '',
        password: '',
        termStatus: ''

    })

    // Submit button state
    const [disabled, setDisabled] = useState(true)

    // Validation using 'Yup Schema'
    const validation = (e, value) => {

        yup
            .reach(schema, e.target.name)
            .validate(value)
            .then(valid => {
                setError({
                    ...error,
                    [e.target.name]: ''
                })
            })
            .catch(err => {
                setError({
                    ...error,
                    [e.target.name]: err.errors[0]
                })
            })

    }
    
    // Change state
    const changeHandler = ( (e) => {

        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        e.persist()

        validation(e, value)

        setInfo({ ...info, [e.target.name]: value })

    })
    
    // Submit 
    const formSubmit = (e) => {

        e.preventDefault()

        const registerObj = {
            username: info.name,
            password: info.password,
            first_name: "firstPlaceholder",
            last_name: "lastPlaceholder",
            address: "1234 Main St, Somewhere, OH, 12345",
            age: 26,
            birthday: "10 - 14 - 1994",
            country: "USA"
          }
        // Send data of the object we like to send and get the data back from the server
        axiosWithAuth()
            .post('https://airbnb-bw-backend.herokuapp.com/api/auth/register', registerObj)
            .then( response => {
                //Function from App.js
                console.log(response.data)
                history.push('/log-in')
            })
            .catch( err => {
                console.log(err)
            })
        
        // Resets 'info' state when submited

        setInfo({

            id: Date.now(),
            name: '',
            email: '',
            phone: '',
            password: '',
            termStatus: false,
    
        })
        
    }

    useEffect(() => {

        schema
            .isValid(info)
            .then((valid) => {
                setDisabled(!valid)
            })

    }, [info])
    
    return(
        <div className='signUp'>
            <h1>Sign Up</h1>

            <form className={classes.root} onSubmit={ formSubmit }>

                {/* Name input */}
                <label htmlFor='name'>

                    <TextField
                        id='name'
                        type='text'
                        name='name'
                        label='Name'
                        onChange={changeHandler}
                        value={info.name}
                    />
                    { error.name.length > 0 && <p>{error.name}</p> }
                </label>

                {/* Email Input */}
                <label htmlFor='email'>

                    <TextField
                        id='email'
                        type='text'
                        name='email'
                        label='email'
                        onChange={changeHandler}
                        value={info.email}
                    />
                    { error.email.length > 0 && <p>{error.email}</p> }
                </label>

                {/* Phone Number input */}
                <label htmlFor='phone'>

                    <TextField
                        id='phone'
                        type='number'
                        name='phone'
                        label='Phone number'
                        onChange={changeHandler}
                        value={info.phone}
                    />
                    { error.phone.length > 0 && <p>{error.phone}</p> }
                </label>

                {/* Create password input */}
                <label htmlFor='password'>

                    <TextField
                        id='password'
                        type='password'
                        name='password'
                        label='Password'
                        onChange={changeHandler}
                        value={info.password}
                    />
                    { error.password.length > 0 && <p>{error.password}</p> }
                </label>

                {/* Term of service (checkbox) input */}
                <label className='labelCheckbox' htmlFor='termStatus'>
                    I agree to the terms of service
                    <Checkbox
                        id='termStatus'
                        type='checkbox'
                        name='termStatus'
                        checked={info.termStatus}
                        onChange={changeHandler}
                        size='small'
                        color='default'
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    { error.termStatus.length > 0 && <p>{error.termStatus}</p> }
                </label>

                {/* Submit Button */}
                <Button variant="contained" disabled={disabled} type='submit'>Get Started</Button>

            </form>

        </div>
    )
}

export default SignUp