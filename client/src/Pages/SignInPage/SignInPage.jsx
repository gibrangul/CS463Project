import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logo from "../../Assets/logo.png";

import "./SignInPage.styles.scss";

import { startEmailLogin } from "../../Actions";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px",
  },
  main: {
    backgroundColor: "#fff",
    boxShadow: '0px 8px 25px 0px #EEE',
    borderRadius: "10px"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  subHeading: {
    fontSize: "17px",
    margin: "12px",
  },
  error: {
    color: 'red',
    fontSize: "12px",
  }
}));

const SignIn = (props) => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const auth_error = useSelector(state => state.auth.error)

  useEffect(() => {
    setError(auth_error);
  }, [auth_error]);

  const onLogin = async (e) => {
    e.preventDefault();
    await props.startEmailLogin(email, password);
  };

  return (
    <Container component="main" className={classes.main} maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img className="logo" src={logo} alt="retailify_logo" />
        <h3 className={classes.subHeading} color="textPrimary">
          Sign in with Admin Account
        </h3>
        <form className={classes.form} onSubmit={onLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(email) => setEmail(email.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(password) => setPassword(password.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            disableElevation
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
          </Button>
        </form>
        {error && <Typography className={classes.error} color="textPrimary">{error}</Typography>}
      </div>
    </Container>
  );
};

export default connect(null, {
  startEmailLogin,
})(SignIn);
