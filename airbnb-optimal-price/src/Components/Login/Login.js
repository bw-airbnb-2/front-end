import React, { useState, useEffect } from 'react';
import './Login.css'
import * as Yup from "yup";
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));
//STYLES ^^^

export default function Login() {
  const classes = useStyles();
  let history = useHistory();

  const [formState, setFormState] = useState({
    email: "",
    username: "",
    password: "",
  });
  //SETTING STATE  ^^^

  const [buttonDisabled, setButtonDisabled] = useState(true)
  //BUTTON CHANGE ^^^

  const changeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    })
  }
  //CHANGE HANDLER ^^^

  const submitForm = (e) => {
    e.preventDefault();
    // SUBMIT FORM ^^^
    const post = {
      "username": formState.username,
      "password": formState.password
    }
    console.log(post)

    axiosWithAuth()
      .post('https://airbnb-bw-backend.herokuapp.com/api/auth/login', post)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        console.log(history)
        history.push('/dashboard')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  //SCHEMA
  const formSchema = Yup.object().shape({
    // email: Yup
    //   .string()
    //   .email("Must be a valid email address.")
    //   .required("Must include email address."),
    password: Yup
      .string()
      .min(5, "Passwords must be at least 5 characters long.")
      .required("Password is Required"),
  });
  
  //FORM STATE REFRESH
  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  return (
    <div className='mainerDiv'>
      <div className='mainDiv'>
        <AccountBoxIcon />
        <h1>Login</h1>
        <form className={classes.root}>
          <TextField id="username" variant="outlined" type='text' placeholder='Username' onChange={changeHandler} value={formState.username} />
          <TextField id="password" variant="outlined" type='password' placeholder='Password' onChange={changeHandler} value={formState.password} />
          <Button variant='contained' color='primary' disabled={buttonDisabled} value='submit' onClick={submitForm}>Login!</Button>
        </form>
      </div>
    </div>
  )
}