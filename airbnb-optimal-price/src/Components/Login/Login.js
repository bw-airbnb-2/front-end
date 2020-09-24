import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

//redux
import { connect } from "react-redux";

//actions
import { loginUser } from "../../actions/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function Login(props) {
  const classes = useStyles();
  let history = useHistory();
  //Setting State
  const [formState, setFormState] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  //Input change
  const changeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    const loginInfo = {
      username: formState.username,
      password: formState.password,
    };
    console.log(loginInfo);

    props.loginUser(loginInfo, history)

  };

  //SCHEMA
  const formSchema = Yup.object().shape({
    // email: Yup
    //   .string()
    //   .email("Must be a valid email address.")
    //   .required("Must include email address."),
    password: Yup.string()
      .min(5, "Passwords must be at least 8 characters long.")
      .required("Password is Required"),
  });
  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  return (
    <div className="mainDiv">
      <h1>Login</h1>
      <form className={classes.root} onSubmit={submitForm}>
        <AccountBoxIcon />
        {/* <TextField id="email" variant="outlined" type='text' placeholder='Email' onChange={changeHandler} value={formState.email}/> */}
        <TextField
          id="username"
          variant="outlined"
          type="text"
          placeholder="Username"
          onChange={changeHandler}
          value={formState.username}
        />
        <TextField
          id="password"
          variant="outlined"
          type="password"
          placeholder="Password"
          onChange={changeHandler}
          value={formState.password}
        />
        <Button
          variant="contained"
          color="primary"
          disabled={buttonDisabled}
          value="submit"
          type="submit"
        >
          Login!
        </Button>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isLoggingIn: state.isRegistering,
    isLoggedIn: state.isLoggedIn
  };
}

export default connect(mapStateToProps, { loginUser })(Login);
