import React, { useState } from "react";
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Button, Paper, Typography } from '@material-ui/core';
import TextLogo from "../../images/textlogo.svg"
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#F6E0C9"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: "12px"
  },
  iconButton: {
    padding: 2,
    fontSize: "12px"
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
function Login(props) {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex h-screen w-1/3 items-center mx-auto ">
      <Container maxWidth="md" className="App">
        <Paper elevation={3} className="rounded-3xl pb-10 dark:bg-black">
          <div>
          <TextField
            type={showPassword ? 'text' : 'password'}
            label="Email"
            id="standard-start-adornment"
            className="mt-8 w-2/3 pb-1.5"
          />
          <TextField
            type={showPassword ? 'text' : 'password'}
            label="Password"
            id="standard-start-adornment"
            className="mt-8 w-2/3 pb-1.5"
            InputProps={{
              endAdornment: <InputAdornment position="end">
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Icon>visibility</Icon> : <Icon>visibility_off</Icon>}
                  </IconButton>
                </InputAdornment>
              </InputAdornment>,
            }}
          />
          </div>
          <Button variant="contained" component={Link} to="/admin/dashboard" color="primary" elevation={3} className="py-2 text-xl font-bold w-1/3 rounded-md mx-auto mt-8">
            LOG IN
          </Button>
          <Typography variant="subtitle1">Forgot Password?</Typography>
          <Typography variant="h6" className="uppercase mt-10">Or create an account</Typography>
        </Paper>
      </Container>
    </div>
  );
}

export default Login;
