import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Store";
import { makeStyles } from "@material-ui/styles";

import {
  PostAddOutlined,
  LockOpenOutlined,
  AssignmentIndOutlined,
  ExitToAppOutlined,
  AccountCircleOutlined,
} from "@material-ui/icons";
import Logo from "../assets/logo.png";
import {
  Typography,
  Modal,
  AppBar,
  Toolbar,
  IconButton,
  Input,
  Button,
} from "@material-ui/core";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  logo: {
    objectFit: "contain",
    height: "8vh",
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    ...theme.typography.button,
    marginLeft: "0.5rem",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #88c140",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  loginImage: {
    objectFit: "contain",
    maxWidth: 300,
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputField: {
    width: "70%",
    margin: "1rem",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const appContext = useContext(Context);
  const { userState, authUtils } = appContext;
  const [user, setUser] = userState;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const login = (event) => {
    event.preventDefault();
    authUtils.login(email, password);
    setPassword("");
    setEmail("");
    setLoginOpen(false);
  };

  const signUp = (event) => {
    event.preventDefault();
    authUtils.signUp(email, password, username);
    setPassword("");
    setEmail("");
    setUsername("");
    setSignUpOpen(false);
  };

  const logout = () => {
    authUtils.logout();
    setUsername("");
    setEmail("");
  };

  return (
    <div className={classes.root}>
      {/* Login Modal */}
      <Modal
        open={loginOpen}
        onClose={() => {
          setLoginOpen(false);
          setPassword("");
          setEmail("");
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <form className={classes.loginForm}>
            <center>
              <img className={classes.loginImage} src={Logo} alt="" />
            </center>

            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={classes.inputField}
            />
            <Input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={classes.inputField}
            />
            <Button color="primary" variant="outlined" onClick={login}>
              Entrar
            </Button>
          </form>
        </div>
      </Modal>
      {/* Signup modal */}
      <Modal
        open={signUpOpen}
        onClose={() => {
          setSignUpOpen(false);
          setPassword("");
          setEmail("");
          setUsername("");
        }}
        aria-labelledby="signup"
        aria-describedby="signup-form"
      >
        <div style={modalStyle} className={classes.paper}>
          <form className={classes.loginForm}>
            <center>
              <img className={classes.loginImage} src={Logo} alt="" />
            </center>

            <Input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={classes.inputField}
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={classes.inputField}
            />
            <Input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={classes.inputField}
            />
            <Button color="primary" variant="outlined" onClick={signUp}>
              Registrarse
            </Button>
          </form>
        </div>
      </Modal>

      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link to="/">
            <img src={Logo} className={classes.logo} alt="website logo" />
          </Link>
          <div className={classes.buttonContainer}>
            {user.email !== "" ? (
              <>
                <IconButton color="inherit" aria-label="publicar un aviso">
                  <AccountCircleOutlined />
                  <Typography variant="h5" className={classes.title}>
                    {user.username}
                  </Typography>
                </IconButton>
                <IconButton color="inherit" aria-label="publicar un aviso">
                  <PostAddOutlined />
                  <Typography variant="h5" className={classes.title}>
                    Publicar
                  </Typography>
                </IconButton>
                <IconButton
                  onClick={logout}
                  color="inherit"
                  aria-label="logout"
                >
                  <ExitToAppOutlined />
                  <Typography variant="h5" className={classes.title}>
                    Salir
                  </Typography>
                </IconButton>
              </>
            ) : (
              <>
                <IconButton
                  onClick={() => setSignUpOpen(true)}
                  color="inherit"
                  aria-label="signup"
                >
                  <AssignmentIndOutlined />
                  <Typography variant="h5" className={classes.title}>
                    Registrarse
                  </Typography>
                </IconButton>

                <IconButton
                  onClick={() => setLoginOpen(true)}
                  color="inherit"
                  aria-label="login"
                >
                  <LockOpenOutlined />
                  <Typography variant="h5" className={classes.title}>
                    Ingresar
                  </Typography>
                </IconButton>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
