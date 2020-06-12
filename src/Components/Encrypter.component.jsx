import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid as G, Button, Typography } from "@material-ui/core";
import { encrypt, decrypt } from "@alimert/kripton";

const Item = (props) => <G item {...props} xs={12} />;

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  passwordText: {
    margin: theme.spacing(1),
  },
  textfield: {
    margin: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
    "& .MuiTextField-root": {
      [theme.breakpoints.up("md")]: {
        width: "100%",
      },
    },
  },
}));

function Encrypter() {
  const classes = useStyles();
  const [password, setPassword] = useState([1, 9, 2, 3]);
  return (
    <>
      <Item className={classes.textfield}>
        <TextField
          id="decyrpt-textfield"
          label="Encrypter"
          multiline
          rows={4}
          defaultValue="Text you want you to Encrypt"
          variant="outlined"
        />
      </Item>
      <Item className={classes.textfield}>
        <TextField
          id="decyrpt-textfield"
          label="Password"
          rows={1}
          type="number"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Typography className={classes.passwordText}>Only numbers</Typography>
      </Item>
    </>
  );
}

export default Encrypter;
