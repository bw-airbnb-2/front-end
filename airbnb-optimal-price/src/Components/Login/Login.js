import React, { useState, useEffect } from 'react';
import './Login.css'
import * as Yup from "yup";
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));
export default function Login(props) {
    const classes = useStyles();
    //Setting State
    const [formState, setFormState] = useState({
        email: "",
        password: "",
      });

    const [buttonDisabled, setButtonDisabled]= useState(true)
    //Input change
    const changeHandler = (e) => {
        setFormState({
          ...formState,
          [e.target.id]: e.target.value
        })
      } 
    
    const submitForm = (e) => {
        e.preventDefault();
        console.log(e.target.value)
    }

    //SCHEMA
    const formSchema = Yup.object().shape({
        email: Yup
          .string()
          .email("Must be a valid email address.")
          .required("Must include email address."),
        password: Yup
          .string()
          .min(8, "Passwords must be at least 8 characters long.")
          .required("Password is Required"),
      });
      useEffect(() => {
        formSchema.isValid(formState).then(valid => {
          setButtonDisabled(!valid);
        });
      }, [formState]); 

    return(
        <div className='mainDiv'>
            <h1>Login</h1>
            <form className={classes.root}>
            <AccountBoxIcon />
                <TextField id="email" variant="outlined"type='text' placeholder='Email'onChange={changeHandler} value={formState.email}/>
                <TextField id="password" variant="outlined"type='password' placeholder='Password'onChange={changeHandler} value={formState.password}/>
                <Button variant='contained'color='primary'disabled={buttonDisabled}value='submit'onClick={submitForm}>Login!</Button>
            </form>
        </div>
    )
}